import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const markIfVisible = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh && r.bottom > 0) el.classList.add("in");
    };
    const all = () => document.querySelectorAll(".reveal");
    all().forEach(markIfVisible);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    all().forEach((el) => io.observe(el));
    const t = setTimeout(() => {
      all().forEach((el) => {
        if (!el.classList.contains("in")) markIfVisible(el);
      });
    }, 400);
    const t2 = setTimeout(() => {
      all().forEach((el) => el.classList.add("in"));
    }, 2000);
    return () => {
      io.disconnect();
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);
}
