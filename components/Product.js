import { Squiggle } from "./Stickers";

export default function Product() {
  return (
    <section id="product" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <span className="section-label">/01 · what we&apos;re building</span>
          <Squiggle w={120} color="var(--blue)" />
        </div>
        <h2 className="reveal" style={{ maxWidth: "18ch", marginBottom: 40 }}>
          A call intelligence layer,
          <br />
          <span className="highlight-block highlight-chart">not a &quot;revenue OS&quot;.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 20 }}>
          <div
            className="reveal card"
            style={{ gridColumn: "span 7", background: "var(--ink)", color: "var(--paper)", padding: 0, overflow: "hidden" }}
          >
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "3px solid var(--paper)",
                display: "flex",
                gap: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
              }}
            >
              <span style={{ width: 12, height: 12, background: "var(--pink)", borderRadius: "50%" }}></span>
              <span style={{ width: 12, height: 12, background: "var(--chart)", borderRadius: "50%" }}></span>
              <span style={{ width: 12, height: 12, background: "var(--blue)", borderRadius: "50%" }}></span>
              <span style={{ marginLeft: 12, opacity: 0.6 }}>salezot.app/calls/0142</span>
            </div>
            <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.5, marginBottom: 6 }}>
                  TRANSCRIPT — 00:14:32
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5 }}>
                  <p style={{ marginBottom: 10 }}>
                    <b style={{ color: "var(--chart)" }}>[Aarav / Founder]</b> &quot;Look, we&apos;ve piloted Gong before, but honestly the team stopped opening it after week 3...&quot;
                  </p>
                  <p style={{ marginBottom: 10, opacity: 0.7 }}>
                    <b>[Customer]</b> &quot;Same. We tried Chorus. Felt like it was built for a 200-person US sales org.&quot;
                  </p>
                  <p>
                    <b style={{ color: "var(--chart)" }}>[Aarav]</b> &quot;Right. So we&apos;re fixing exactly that.&quot;
                  </p>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.5, marginBottom: 6 }}>SALEZOT SEES</div>
                <div style={{ background: "var(--chart)", color: "var(--ink)", padding: 14, border: "3px solid var(--paper)", marginBottom: 10 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, textTransform: "uppercase" }}>Competitor objection</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>Gong, Chorus mentioned · &quot;stopped using&quot;</div>
                </div>
                <div style={{ background: "var(--pink)", color: "var(--ink)", padding: 14, border: "3px solid var(--paper)", marginBottom: 10 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, textTransform: "uppercase" }}>Playbook trigger</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>→ Share &quot;Why we&apos;re different for India&quot; deck</div>
                </div>
                <div style={{ background: "var(--paper)", color: "var(--ink)", padding: 14, border: "3px solid var(--paper)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, textTransform: "uppercase" }}>Next step</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>Procurement intro · 72h SLA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal card" style={{ gridColumn: "span 5", transform: "rotate(1deg)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>/ shipping this month</div>
            <ul style={{ listStyle: "none", display: "grid", gap: 14 }}>
              {[
                ["Hinglish transcripts", "code-switch aware, not a lazy translate layer", "chart"],
                ["Procurement radar", "flags InfoSec, legal, SOC-2 requests in real time", "blue"],
                ["Playbook triggers", "your SDR's playbook, surfaced mid-call", "pink"],
                ["CRM write-back", "HubSpot, Zoho, Salesforce · 1-click", "ink"],
              ].map(([t, s, c], i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: `var(--${c === "ink" ? "paper-2" : c})`,
                      border: "var(--border)",
                      flex: "0 0 28px",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, textTransform: "uppercase" }}>{t}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, opacity: 0.7 }}>{s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal card"
            style={{ gridColumn: "span 4", background: "var(--chart)", transform: "rotate(-1.5deg)" }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 0.9 }}>v0.3</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 8 }}>current build · updated 4 days ago</div>
          </div>
          <div className="reveal card dark" style={{ gridColumn: "span 4" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 0.9, color: "var(--chart)" }}>12</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 8, opacity: 0.7 }}>design partners in cohort 01</div>
          </div>
          <div className="reveal card" style={{ gridColumn: "span 4", background: "var(--pink)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 0.9 }}>0</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 8 }}>
              enterprise sales reps on payroll*
              <br />
              <span style={{ opacity: 0.7 }}>*and that&apos;s the whole point</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
