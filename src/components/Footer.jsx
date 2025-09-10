import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-to-t from-card to-background border-t border-border mt-12 flex flex-col items-center text-center">
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-base md:text-lg font-medium text-muted-foreground tracking-wide">
          &copy; {new Date().getFullYear()} <span className="font-bold text-primary">Nikhil Sutar</span> &mdash; Professional Portfolio. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </a>
      </div>
    </footer>
  );
};
