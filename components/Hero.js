import Link from "next/link";
import { Spiral, Bolt } from "./Stickers";

export default function Hero() {
  return (
    <section id="hero" style={{ padding: "80px 0 40px", position: "relative" }}>
      <div className="container" style={{ position: "relative" }}>
        <div
          className="sticker"
          style={{ top: 20, right: 60, transform: "rotate(12deg)" }}
        >
          <div
            style={{
              background: "var(--chart)",
              border: "var(--border-thick)",
              padding: "8px 14px",
              boxShadow: "var(--shadow)",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            ⚡ 7 seats open
          </div>
        </div>
        <div className="sticker" style={{ top: 180, right: -20, transform: "rotate(-8deg)" }}>
          <Spiral size={90} />
        </div>
        <div className="sticker" style={{ bottom: -20, left: "42%", transform: "rotate(6deg)" }}>
          <Bolt size={80} />
        </div>
        <div className="sticker" style={{ top: 340, right: 120, transform: "rotate(-4deg)" }}>
          <div className="polaroid" style={{ width: 160 }}>
            <div
              className="frame"
              style={{ background: "linear-gradient(135deg,#2C6BFF,#0A0A0A)" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-mono)",
                  color: "#fff",
                  fontSize: 10,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                CALL #0142
                <br />
                &quot;stack rank
                <br />
                my pipeline&quot;
              </div>
            </div>
            <div className="label">DESIGN PARTNER / MAR &apos;26</div>
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: 20 }}>
          <span className="chip red">⬤ Pre-beta · v0.3</span>
          <span className="chip" style={{ marginLeft: 8, background: "var(--paper)" }}>
            India-first · B2B SaaS
          </span>
        </div>

        {/* CHANGE 1 — hero headline */}
        <h1 className="reveal" style={{ maxWidth: "16ch", marginBottom: 28 }}>
          Your entire revenue
          <br />
          organisation,
          <span className="highlight-block">{" coached"}</span>
          <br />
          by AI.
        </h1>

        {/* CHANGE 1 — subhead */}
        <p
          className="reveal"
          style={{ maxWidth: 620, fontSize: 20, lineHeight: 1.45, marginBottom: 32 }}
        >
          Salezot captures every sales conversation your team has, surfaces what&apos;s
          actually happening in your pipeline, and gives every rep and manager the
          intelligence to perform like your best.
        </p>

        <div
          className="reveal"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}
        >
          {/* CHANGE 1 — primary CTA */}
          <Link
            href="/apply"
            className="btn red"
            style={{ fontSize: 18, padding: "18px 26px" }}
          >
            Request Enterprise Demo →
          </Link>
          {/* Secondary kept */}
          <Link href="/product" className="btn ghost">
            Explore the Platform
          </Link>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, marginLeft: 6 }}>
            &lt;— Free for founding enterprise teams · cohort closes May 15
          </span>
        </div>
      </div>
    </section>
  );
}
