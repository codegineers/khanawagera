import { NavLink } from "@remix-run/react";

export default function SideBar() {
  return (
    <aside className="basis-80 bg-emerald-400 min-h-screen">
      <div className="my-4">
        <ul>
          <li>
            <NavLink
              className={(isActive) =>
                `${isActive && 'bg-emerald-500'}
                  py-1 px-2 block text-slate-50
                `
              }
              to="restaurants"
              end
            >
              Restaurants
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}