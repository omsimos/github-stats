import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="z-10 fixed left-0 top-0 right-0 w-full mx-auto container mt-10 items-center justify-between font-mono text-sm flex">
      <Link href="/">gh-stats.omsimos</Link>
      <div className="space-x-1">
        <Button asChild variant="outline" size="icon">
          <a
            href="https://github.com/omsimos/github-stats/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-5" />
          </a>
        </Button>
        <ToggleTheme />
      </div>
    </div>
  );
}
