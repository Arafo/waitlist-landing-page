import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-grayBackground flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <Hero />
      </div>
    </main>
  );
}
