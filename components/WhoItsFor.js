import React from "react";

export default function WhoItsFor() {
  const rows = [
    { you: "You're a VP Sales / RevOps / Founder running a B2B sales team in India.", not: "You run a 300-person US enterprise sales org looking for Gong." },
    { you: "Your team runs 20–100+ calls a week and most generate zero coaching feedback.", not: "You already have a mature call review process that works." },
    { you: "Procurement takes 6–14 weeks and you want to see deal risk before it's too late.", not: "You auto-close on credit card with no real sales motion." },
    { you: "Your CRM data is incomplete because reps don't update it after calls.", not: "Your reps love post-call admin and always update the CRM." },
  ];
  return (
    <section id="who" style={{ padding: "100px 0", background: "var(--ink)", color: "var(--paper)" }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span className="section-label" style={{ background: "var(--pink)" }}>/02 · who this is for</span>
        </div>
        <h2 className="reveal" style={{ marginBottom: 48 }}>
          Be honest —
          <br />
          <span style={{ color: "var(--chart)" }}>is this you?</span>
        </h2>
        <div className="who-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "4px solid var(--paper)" }}>
          <div className="who-head" style={{ padding: 20, background: "var(--chart)", color: "var(--ink)", borderRight: "4px solid var(--paper)", borderBottom: "4px solid var(--paper)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, textTransform: "uppercase" }}>✓ YOU</div>
          </div>
          <div className="who-head" style={{ padding: 20, background: "var(--pink)", color: "var(--paper)", borderBottom: "4px solid var(--paper)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, textTransform: "uppercase" }}>✗ NOT YOU</div>
          </div>
          {rows.map((r, i) => (
            <React.Fragment key={i}>
              <div className="reveal who-cell" style={{ padding: "26px 24px", borderRight: "4px solid var(--paper)", borderBottom: i < rows.length - 1 ? "4px solid var(--paper)" : "none", fontSize: 18 }}>
                {r.you}
              </div>
              <div className="reveal who-cell" style={{ padding: "26px 24px", borderBottom: i < rows.length - 1 ? "4px solid var(--paper)" : "none", fontSize: 18, opacity: 0.7, textDecoration: "line-through", textDecorationColor: "var(--pink)" }}>
                {r.not}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
