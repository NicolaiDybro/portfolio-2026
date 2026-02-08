import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import ScrollProgress from "../components/ScrollProgress";
import LoadingScreen from "../components/LoadingScreen";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <ScrollProgress />
        <Header />
        <main className="flex w-full flex-col">
          <Hero />
          <Skills />
          <Projects />
          <TechStack />
          <Contact />
        </main>
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Nicolai. Made with ❤️ and Next.js
        </div>
      </footer>
      <BackToTop />
      </div>
    </>
  );
}
