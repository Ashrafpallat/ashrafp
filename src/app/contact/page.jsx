import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-22 mx-auto py-4 px-12">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
