import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-10 justify-between h-full bg-light-background dark:bg-dark-background">
      <ThemeToggle />

      <Footer />
    </div>
  );
}
