import type { Route } from "./+types/root";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import styles from "./styles.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta: Route.MetaFunction = () => [
  { title: "sory.world" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status.toString();
    details = error.statusText;
  } else if (error instanceof Error) {
    details = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="home">
          <h1>{message}</h1>
          <p>{details}</p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
