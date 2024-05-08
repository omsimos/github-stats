import { GhStatsForm } from "@/components/gh-stats-form";
import { Preview } from "@/components/preview";

export default function Home() {
  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-center">GH Stats Generator</h1>
        <div className="max-w-md mx-auto">
          <GhStatsForm />
          <Preview />
        </div>
      </div>
    </main>
  );
}
