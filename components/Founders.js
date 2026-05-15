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
                Adithya S Reddy
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "var(--red)",
                }}
              >
                Co-founder &amp; CEO
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                Previously built and scaled B2B sales teams across multiple growth stages. Watched brilliant teams lose deals not from lack of effort, but from lack of a system. Leading product vision, GTM, and every enterprise customer conversation at Salezot.
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="reveal card" style={{ transform: "rotate(1deg)", display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* TODO: replace with founder photo */}
            <div className="founder-photo" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, textTransform: "uppercase", marginBottom: 4 }}>
                Hemanth Mahesh
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "var(--red)",
                }}
              >
                Co-founder &amp; CTO
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                Technical architect of everything Salezot does under the hood. Background in ML systems, applied AI, and product engineering — with a specific obsession: making AI insights surface fast enough to be useful during a live call, not three seconds after the moment has passed.
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
          We&apos;re building Salezot because we&apos;ve sat inside this problem with too many great sales teams. If you&apos;re a revenue leader who&apos;s tired of flying blind on your pipeline, we&apos;d like to hear from you directly.{" "}
          <a
            href="mailto:info@salezot.com"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              borderBottom: "3px solid var(--chart)",
            }}
          >
            info@salezot.com
          </a>
        </p>
      </div>
    </section>
  );
}
