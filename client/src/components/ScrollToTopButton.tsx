import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      size="icon"
      className="fixed bottom-8 right-8 z-50 bg-purple-200 shadow-lg hover:bg-purple-300 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 text-purple-600" />
    </Button>
  );
}
