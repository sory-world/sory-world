import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  type KeyboardEvent,
} from "react";
import { Link, useLocation } from "@remix-run/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { NAV } from "~/data/links";
import {
  useDesktopPanelVariants,
  useDesktopItemVariants,
  useMobilePanelVariants,
  useMobileListVariants,
  useMobileItemVariants,
} from "./animations";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { NavData } from "~/types";

export function Nav({
  data = NAV,
  mobileMaxWidth = 768,
  defaultIsMobile,
}: {
  data?: NavData;
  mobileMaxWidth?: number;
  defaultIsMobile?: boolean;
}) {
  const isMobile = useMediaQuery(`(max-width: ${mobileMaxWidth}px)`, {
    ssr: defaultIsMobile,
  });
  return isMobile ? <MobileNav data={data} /> : <DesktopNav data={data} />;
}

function DesktopNav({ data }: { data: NavData }) {
  const { groups, pages } = data;
  const groupKeys = useMemo(() => Object.keys(groups), [groups]);
  const [open, setOpen] = useState<string | null>(null);
  const [focusIndex, setFocusIndex] = useState(() =>
    groupKeys.length ? 0 : -1
  );
  const location = useLocation();

  useEffect(() => setOpen(null), [location.pathname]);
  useEffect(() => {
    if (!groupKeys.length) {
      setFocusIndex(-1);
      return;
    }
    setFocusIndex((current) => {
      if (current === -1) return 0;
      return Math.min(current, groupKeys.length - 1);
    });
  }, [groupKeys]);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      panelRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [open]);

  const focusTabAtIndex = useCallback(
    (index: number) => {
      if (!groupKeys.length) return;
      const nextIndex = (index + groupKeys.length) % groupKeys.length;
      const key = groupKeys[nextIndex];
      setFocusIndex(nextIndex);
      setOpen(key);
      tabRefs.current[key]?.focus();
    },
    [groupKeys]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (!groupKeys.length) return;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          focusTabAtIndex(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          focusTabAtIndex(index - 1);
          break;
        case "Home":
          event.preventDefault();
          focusTabAtIndex(0);
          break;
        case "End":
          event.preventDefault();
          focusTabAtIndex(groupKeys.length - 1);
          break;
        default:
          break;
      }
    },
    [focusTabAtIndex, groupKeys.length]
  );

  const panelVariants = useDesktopPanelVariants();
  const itemVariants = useDesktopItemVariants();
  const activeTabId = open ? `tab-${open}` : undefined;
  const activePanelId = open ? `tabpanel-${open}` : undefined;

  return (
    <nav aria-label="Main Navigation" className="nav">
      <div>
        <div
          role="tablist"
          aria-label="Main Navigation Groups"
          className="nav__tab-list"
        >
          {groupKeys.map((key, index) => {
            const selected = open === key;
            return (
              <button
                key={key}
                id={`tab-${key}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`tabpanel-${key}`}
                tabIndex={focusIndex === index ? 0 : -1}
                className={`nav__tab${selected ? " nav__tab--active" : ""}`}
                onClick={() => {
                  setFocusIndex(index);
                  setOpen(selected ? null : key);
                }}
                onKeyDown={(event) => onKeyDown(event, index)}
                ref={(node) => {
                  tabRefs.current[key] = node;
                }}
                type="button"
              >
                {key}
              </button>
            );
          })}
        </div>

        <ul className="nav__page-list" aria-label="Main Navigation Pages">
          {pages.map((p) => (
            <li key={p.to} className="nav__page-item">
              <Link to={p.to} prefetch="intent" className="nav__link">
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key={open}
            id={activePanelId}
            role="tabpanel"
            aria-labelledby={activeTabId}
            ref={panelRef}
            className="nav__submenu nav__submenu--desktop"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            tabIndex={-1}
          >
            {groups[open]?.map((link) => (
              <motion.div
                key={link.to}
                className="nav__submenu-item"
                variants={itemVariants}
                layout
              >
                <Link className="nav__link" to={link.to} prefetch="intent">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

export function MobileNav({ data }: { data: NavData }) {
  const { groups, pages } = data;
  const groupKeys = useMemo(() => Object.keys(groups), [groups]);
  const [open, setOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => setOpen(null), [location.pathname]);

  const dropdown = useMobilePanelVariants();
  const listVariants = useMobileListVariants();
  const itemVars = useMobileItemVariants();

  return (
    <nav aria-label="Primary" className="nav nav--mobile">
      <LayoutGroup>
        <motion.ul className="nav__group-list" layout="position">
          {groupKeys.map((key) => {
            const expanded = open === key;
            const panelId = `panel-${key}`;
            const btnId = `btn-${key}`;

            return (
              <motion.li
                key={key}
                className="nav__group-item"
                layout="position"
                transition={{
                  layout: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <button
                  id={btnId}
                  type="button"
                  className={`nav__tab nav__tab--mobile${
                    expanded ? " nav__tab--active" : ""
                  }`}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : key)}
                >
                  {key}
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="submenu"
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      variants={dropdown}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      style={{ overflow: "hidden" }}
                      layout
                    >
                      <motion.ul
                        className="nav__submenu nav__submenu--mobile"
                        variants={listVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                      >
                        {groups[key]?.map((link) => (
                          <motion.li
                            key={link.to}
                            className="nav__submenu-item"
                            variants={itemVars}
                          >
                            <Link
                              className="nav__link"
                              to={link.to}
                              prefetch="intent"
                            >
                              {link.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>
      </LayoutGroup>
      <ul className="nav__page-list" aria-label="Pages">
        {pages.map((p) => (
          <li key={p.to} className="nav__page-item">
            <Link to={p.to} prefetch="intent" className="nav__link">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
