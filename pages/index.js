import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Product from "@/components/Product";
import WhoItsFor from "@/components/WhoItsFor";
import Partners from "@/components/Partners";
import BuildLog from "@/components/BuildLog";
import FAQ from "@/components/FAQ";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <div data-screen-label="01 Landing">
      <Nav />

      <Marquee
        variant="ink"
        items={[
          "PRE-BETA · NO ENTERPRISE BS",
          "COHORT 01 OPEN",
          "APPLY TO BUILD WITH US",
          "INDIA-FIRST B2B SAAS",
          "BUILT IN PUBLIC",
        ]}
      />

      <Hero />

      <Marquee
        variant="pink"
        items={[
          "CONVERSATION INTELLIGENCE",
          "HINGLISH-AWARE",
          "NO GONG DON'T EVEN",
          "SHIP WEEKLY",
          "DESIGN PARTNERS WANTED",
        ]}
      />

      <Product />

      <Marquee
        variant="chart"
        outline
        items={[
          "NOT A REVENUE OS",
          "NOT AI-POWERED EVERYTHING",
          "NOT ENTERPRISE-READY",
          "JUST A TOOL WE'RE BUILDING",
        ]}
      />

      <WhoItsFor />
      <Partners />
      <BuildLog />
      <FAQ />

      {/* CHANGE 3 — Founders section, placed just above the final CTA */}
      <Founders />

      {/* existing final CTA section */}
      <section style={{ padding: "100px 0", background: "var(--ink)", color: "var(--paper)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="reveal" style={{ marginBottom: 24 }}>
            Ready to see what&apos;s actually
            <br />
            <span style={{ color: "var(--chart)" }}>happening in your pipeline?</span>
          </h2>
          <p className="reveal" style={{ fontSize: 19, opacity: 0.8, marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>
            Cohort 01 closes May 15. 7 of 12 seats left. 48-hour reply, promised.
          </p>
          <Link href="/apply" className="btn primary reveal" style={{ fontSize: 18, padding: "18px 26px" }}>
            Apply to be a Design Partner →
          </Link>
        </div>
      </section>

      <Marquee
        variant="blue"
        items={[
          "APPLY · COHORT 01 · 7 SEATS LEFT",
          "MAY 15 DEADLINE",
          "FOUNDERS@SALEZOT.COM",
          "BUILT IN PUBLIC",
        ]}
      />

      <Footer />
    </div>
  );
}
