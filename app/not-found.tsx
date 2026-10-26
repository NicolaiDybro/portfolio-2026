import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-ground px-4 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-muted">GET {"<this page>"} → 404</p>
        <h1 className="mt-3 text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          Nothing is routed here.
        </h1>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex h-12 items-center rounded-lg bg-fill px-6 text-[15px] font-bold text-white transition-colors hover:bg-fill-hover"
        >
          Back to the front page
        </Link>
      </div>
    </main>
  );
}
