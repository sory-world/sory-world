import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
  Scripts,
} from "@remix-run/react";
import styles from "./styles.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => [
  { title: "sory.world" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
