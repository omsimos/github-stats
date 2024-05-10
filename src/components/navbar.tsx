import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

export default function Navbar() {
  return (
    <div className="z-10 fixed left-0 top-0 right-0 w-full mx-auto container mt-10 items-center justify-between font-mono text-sm flex">
      <Link href="/">gh-stats.omsimos</Link>
      <ToggleTheme />
    </div>
  );
}
