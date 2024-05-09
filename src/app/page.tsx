import { GhStatsForm } from "@/components/gh-stats-form";
import { Preview } from "@/components/preview";

export default function Home() {
  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tighter">
            GitHub Stats Generator
          </h1>
          <p className="text-muted-foreground">
            Generate your GitHub stats for your README with ease!
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <GhStatsForm />
          <Preview />
        </div>
      </div>
    </main>
  );
}
