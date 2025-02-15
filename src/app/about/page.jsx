import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-22 mx-auto py-4 px-12">
        <AboutSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
