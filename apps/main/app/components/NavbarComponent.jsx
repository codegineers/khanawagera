import { Link, Form, useSearchParams } from "@remix-run/react";

export default function NavbarComponent() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("q") || searchParams.get("cuisine") || "";

  return (
    <div className="px-4 py-2 bg-emerald-400 shadow">
      <div className="mt-4 text-center sm:text-left">
        <Link
          to="/"
          className="py-3 px-2 font-bold bg-white text-emerald-400 rounded-full"
        >
          KW
        </Link>
      </div>

      <div className="mt-5 mb-2 max-w-md mx-auto bg-emerald-400">
        <Form action="/search">
          <input
            id="search"
            type="text"
            name="q"
            className="w-full p-2 shadow-md rounded focus:outline-none"
            placeholder="Kya khaney ka mood hai?"
            defaultValue={params}
            required
          />
        </Form>
      </div>
    </div>
  );
}
