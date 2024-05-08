import { GhStatsForm } from "@/components/gh-stats-form";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">GitHub Stats Generator</h1>
        <GhStatsForm />
      </div>
    </main>
  );
}
