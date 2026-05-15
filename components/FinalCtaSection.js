import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="sz-section" style={{ padding: "100px 0", background: "var(--ink)", color: "var(--paper)", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <h2 className="reveal" style={{ marginBottom: 24 }}>
          Ready to see what&apos;s actually
          <br />
          <span style={{ color: "var(--chart)" }}>happening in your pipeline?</span>
        </h2>
        <p className="reveal" style={{ fontSize: 19, opacity: 0.8, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
          Salezot works directly with enterprise revenue teams. No product tours — a real conversation with one of the founders about your team, your challenges, and fit.
        </p>
        <Link href="/apply" className="btn primary reveal" style={{ fontSize: 18, padding: "18px 26px" }}>
          Request Enterprise Demo →
        </Link>
      </div>
    </section>
  );
}
