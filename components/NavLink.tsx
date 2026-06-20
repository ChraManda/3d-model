import Link from 'next/link'

export default function NavLink({href, children}:{
  href:string,
  children:React.ReactNode
}){
  return (
    <li className="text-sm uppercase">
      <Link className="px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 text-gray-700"
        href={href}>{children}</Link>
    </li>
  )
}