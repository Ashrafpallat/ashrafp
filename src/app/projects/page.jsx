import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-22 mx-auto py-4 px-12">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
