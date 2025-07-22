"use client";

import {ToastContainer} from "react-toastify";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const isDark = localStorage.getItem("theme") === "dark";

  return (
    <div className="flex flex-col p-4 md:p-8 gap-10 justify-between h-full bg-light-background dark:bg-dark-background">
      <ToastContainer pauseOnHover theme={isDark ? "dark" : "light"} />
      <ThemeToggle />
      <HeroSection />
      <Footer />
    </div>
  );
}
