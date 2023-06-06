import Link from "next/link";

const Header = () => (
  <nav className="flex place-content-between px-8 py-4">
    <h2 className="uppercase">
      <Link href="/">kcalify</Link>
    </h2>
    <ul className="flex place-content-between gap-8 list-none uppercase">
      <li>
        <Link href="/today">Today</Link>
      </li>
      <li>
        <Link href="/foods">Foods</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
