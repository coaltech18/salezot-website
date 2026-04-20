/*
 * CHANGE 3 — Founders section
 * Placeholders to replace:
 *   [Founder Name], [CTO Name], [2-line bio placeholder] x2, founder@salezot.com, founder photos
 */
export default function Founders() {
  return (
    <section id="founders" style={{ padding: "100px 0", background: "var(--paper-2)" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span className="section-label">/07 · who&apos;s building this</span>
        </div>
        <h2 className="reveal" style={{ marginBottom: 56, maxWidth: "20ch" }}>
          Built by founders who&apos;ve
          <br />
          <span className="highlight-block highlight-chart">lived this problem.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="founders-grid"
        >
          {/* Founder 1 */}
          <div className="reveal card" style={{ transform: "rotate(-1deg)", display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* TODO: replace with founder photo */}
            <div className="founder-photo" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", marginBottom: 4 }}>
                {/* TODO: replace [Founder Name] */}
                [Founder Name]
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "var(--blue)",
                }}
              >
                Co-founder &amp; CEO
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                {/* TODO: replace [2-line bio placeholder] */}
                [2-line bio placeholder]
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="reveal card" style={{ transform: "rotate(1deg)", display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* TODO: replace with founder photo */}
            <div className="founder-photo" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", marginBottom: 4 }}>
                {/* TODO: replace [CTO Name] */}
                [CTO Name]
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "var(--blue)",
                }}
              >
                Co-founder &amp; CTO
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                {/* TODO: replace [2-line bio placeholder] */}
                [2-line bio placeholder]
              </div>
            </div>
          </div>
        </div>

        <p
          className="reveal"
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto",
            fontSize: 18,
            lineHeight: 1.55,
          }}
        >
          We&apos;re building Salezot because we&apos;ve watched too many great sales
          teams lose deals they should have won — not from lack of effort, but
          from lack of a system. If that&apos;s a problem you live with, we&apos;d like
          to hear from you. Email me directly:{" "}
          <a
            href="mailto:founder@salezot.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              borderBottom: "3px solid var(--chart)",
            }}
          >
            {/* TODO: replace with real email */}
            founder@salezot.com
          </a>
        </p>
      </div>
    </section>
  );
}
