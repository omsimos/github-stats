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
          <p className="text-center text-muted-foreground sm:text-sm text-xs">
            &copy; 2025{" "}
            <a
              href="https://github.com/omsimos"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMSIMOS
            </a>{" "}
            · MIT License
          </p>
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
