import { GhStatsForm } from "@/components/gh-stats-form";

export default function Home() {
  return (
    <main className="min-h-screen pt-40">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-center">GH Stats Generator</h1>
        <GhStatsForm />
      </div>
    </main>
  );
}
