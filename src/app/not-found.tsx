import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-40 container">
      <div className="flex flex-col justify-center gap-5 max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="sm:text-5xl text-4xl font-semibold tracking-tighter">
            Page Not Found!
          </h1>
          <p className="text-muted-foreground text-xl">Are you lost? 🥹</p>
        </div>
        <Button asChild className="mx-auto">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
