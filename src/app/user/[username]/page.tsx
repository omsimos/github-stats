import Footer from "@/components/footer";
import { Preview } from "@/components/preview";

export default async function Home(props: { params: Promise<{ username: string }> }) {
  const params = await props.params;
  return (
    <main className="container flex flex-col justify-between min-h-screen pt-36">
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tighter">
            GitHub Stats for&nbsp;
            <a
              href={`https://github.com/${params.username}`}
              target="blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {params.username}
            </a>
          </h1>
          <p className="mt-1 text-muted-foreground">
            Generate your GitHub stats for your README with ease!
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Preview />
        </div>
      </div>

      <Footer />
    </main>
  );
}
