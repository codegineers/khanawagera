import { Link, Form, useSearchParams } from "@remix-run/react";

export default function NavbarComponent() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("q") || searchParams.get("cuisine");

  return (
    <div className="px-4 py-2 bg-emerald-400 shadow">
      <Link to="/" className="block font-bold bg-emerald-400 text-white">
        KW
      </Link>
      <div className="my-2 max-w-md mx-auto bg-emerald-400">
        <Form action="/search">
          <input
            id="search"
            type="text"
            name="q"
            className="w-full p-2 shadow-md rounded outline-0"
            placeholder="Kya khaney ka mood hai?"
            value={params}
            required
          />
        </Form>
      </div>
    </div>
  );
}