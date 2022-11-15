
export default function Modal ({ children }) {
  return (
    <div
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      className="fixed z-10 top-0 left-0 overflow-auto w-full h-full bg-black">
      <div className="my-36 mx-auto bg-white w-4/12 ring-white rounded">
        {children}
      </div>
    </div>
  )
}

export function Header ({ children }) {
  return (
    <h3 className="block text-lg font-semibold text-slate-700 p-4 border-b-2">
      {children}
    </h3>
  )
}

export function Body ({ children }) {
  return (
    <div className="block text-slate-700 my-4">
      {children}
    </div>
  )
}