import React from "react";

const Footer = () => {
  return (
    <footer className="footer z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col items-center text-center">
        <p className="text-slate-600 text-xs">© 2025 Built & Modified by Ashraf P</p>
        <p className="text-slate-500 text-xs mt-2">
          <span className="font-bold">About this website:</span> Built with React & Next.js (App Router & Server Actions), JavaScript, Tailwind CSS, Framer Motion, Resend and Vercel hosting.
        </p>
      </div>
    </footer>

  );
};

export default Footer;