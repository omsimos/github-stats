import { GhStatsForm } from "@/components/gh-stats-form";
import { Preview } from "@/components/preview";

export default function Home() {
  return (
    <main className="min-h-screen pt-36 container">
      <div className="space-y-10 max-w-lg mx-auto">
        <div className="text-center">
          <h1 className="sm:text-5xl text-4xl font-semibold tracking-tighter">
            GitHub Stats Generator
          </h1>
          <p className="text-muted-foreground md:text-base text-sm">
            Generate your GitHub stats for your README with ease!
          </p>
        </div>
        <div>
          <GhStatsForm />
          <Preview />
        </div>
      </div>
    </main>
  );
}
