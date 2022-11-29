import {
  Links,
  Link,
  Form,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "@remix-run/react";

import styles from "./styles/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Khanawagera",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("q") || searchParams.get("cuisine");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-100">
        <Link
          to="/"
          className="flex flex-1 font-bold bg-emerald-400 p-3 text-white"
        >
          KW
        </Link>
        <div className="grid grid-cols-12 p-3 bg-emerald-400">
          <Form className="col-span-12" action="/search">
            <input
              id="search"
              type="text"
              name="q"
              className="w-full p-2 bg-white border-2 rounded outline-0 hover:border-emerald-400 focus:border-emerald-400"
              placeholder="Kya khaney ka mood hai?"
              value={params}
              required
            />
          </Form>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
