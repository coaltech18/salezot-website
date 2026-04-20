import Link from "next/link";

export default function Partners() {
  const items = [
    { n: "01", t: "Shape the product", d: "Weekly 45-min calls. Your pain → our roadmap. We ship what you're actually blocked on." },
    { n: "02", t: "Founding pricing, forever", d: "Locked-in rate when we go GA. No 'enterprise tier' surprise pricing later." },
    { n: "03", t: "Your logo on the wall", d: "Cohort 01 credit on the site, case study, and co-authored launch post." },
    { n: "04", t: "Direct founder line", d: "Slack Connect with the 2 founders. Not a CSM. Not a ticket queue." },
  ];
  const asks = [
    "45 min / week for 12 weeks",
    "Share 3 real sales calls / week",
    "Brutal feedback in Slack",
    "Be a reference for cohort 02",
  ];
  return (
    <section id="partners" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <span className="section-label">/03 · design partner program</span>
          <span className="chip chart">COHORT 01 · 7 SEATS LEFT</span>
        </div>
        <h2 className="reveal" style={{ maxWidth: "16ch", marginBottom: 48 }}>
          We ship <span className="highlight-block">what you want.</span>
          <br />
          You help us{" "}
          <span className="highlight-block highlight-chart" style={{ transform: "rotate(1deg)" }}>
            not suck.
          </span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {items.map((it, i) => (
              <div
                key={i}
                className="reveal card"
                style={{
                  transform: `rotate(${i % 2 ? 1 : -1}deg)`,
                  background: i === 0 ? "var(--chart)" : i === 3 ? "var(--blue)" : "var(--paper)",
                  color: i === 3 ? "#fff" : "var(--ink)",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 0.9, marginBottom: 10 }}>{it.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, textTransform: "uppercase", marginBottom: 8 }}>{it.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.45 }}>{it.d}</div>
              </div>
            ))}
          </div>

          <div className="reveal card dark" style={{ alignSelf: "start", transform: "rotate(1deg)" }}>
            <div className="section-label" style={{ background: "var(--pink)", color: "var(--ink)", marginBottom: 18 }}>/ the ask</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", marginBottom: 18, color: "var(--chart)" }}>
              What we need from you
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: 14 }}>
              {asks.map((a, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    fontSize: 17,
                    borderBottom: "2px dashed rgba(245,241,232,0.2)",
                    paddingBottom: 12,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--chart)" }}>→</span>
                  {a}
                </li>
              ))}
            </ul>
            <Link href="/apply" className="btn primary" style={{ marginTop: 22, width: "100%", justifyContent: "center" }}>
              I&apos;m in. Let&apos;s talk →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
