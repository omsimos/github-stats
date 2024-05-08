import { Preview } from "@/components/preview";

export default function Home({ params }: { params: { username: string } }) {
  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-center">{params.username}</h1>
        <div className="max-w-md mx-auto">
          <Preview />
        </div>
      </div>
    </main>
  );
}
