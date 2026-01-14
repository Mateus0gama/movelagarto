import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-amber-50 text-gray-900 ">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </main>
  );
}

