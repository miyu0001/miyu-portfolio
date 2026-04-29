import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </>
  );
}
