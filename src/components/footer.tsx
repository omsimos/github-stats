import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full font-mono py-3">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className="w-full text-center text-muted-foreground sm:text-sm text-xs bg-transparent hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-muted-foreground/40 rounded-md py-1"
          >
            &copy; 2025 <span className="underline">OMSIMOS</span> · MIT License
          </button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={25} className="w-full max-w-96 mr-5">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/112312511?s=200&v=4" />
              <AvatarFallback>OMS</AvatarFallback>
            </Avatar>
            <div className="space-y-3">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@Omsimos</h4>
                <p className="text-sm text-muted-foreground">
                  A community-driven open source developer collective.
                </p>
              </div>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/omsimos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs"
                >
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </footer>
  );
}
