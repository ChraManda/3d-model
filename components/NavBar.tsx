import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer">
            <Image
              src="/img/printforge-logo.svg"
              alt="PrintForge Logo"
              width={500}
              height={500}
              className="w-[200px] h-auto hidden md:block"
            />

            <Image
              src="/img/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              width={500}
              height={500}
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink href="/3d-models">3D Models</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}

