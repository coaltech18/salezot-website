import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "Which call platforms do you support?", a: "Zoom and Google Meet via AI bot in Phase 1. Microsoft Teams and manual audio/video upload (MP4, MP3, WAV) are next. Phone/VOIP is Phase 2." },
    { q: "Is this free during the partnership?", a: "Yes — fully free for the 12-week partnership period. After that, founding partner pricing locks in at roughly 40% of our GA price, permanently." },
    { q: "Which CRMs do you integrate with?", a: "HubSpot is live. Zoho shipped last week. Salesforce is in beta with 3 partners. LeadSquared is on the Phase 1 roadmap." },
    { q: "Where is our data hosted?", a: "Mumbai (AWS ap-south-1). Your call recordings and transcripts never leave India. DPDPA-compliant from Day 1, SOC 2 Type II targeted by Month 9." },
    { q: "What languages do you transcribe?", a: "English with Indian-accented speech optimisation right now. Hindi, Kannada, and Tamil — plus full Hinglish code-switching — are in Phase 3." },
    { q: "Can I apply if I'm not the founder?", a: "Yes — if you can get weekly calls on the calendar and push real feedback through your team, we don't care about your title." },
  ];
  return (
    <section id="faq" style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span className="section-label">/06 · asked, answered</span>
        </div>
        <h2 className="reveal" style={{ marginBottom: 40 }}>
          The obvious
          <br />
          questions.
        </h2>
        <div style={{ display: "grid", gap: 14 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal faq-item"
                style={{
                  border: "var(--border-thick)",
                  background: isOpen ? "var(--chart)" : "var(--paper)",
                  boxShadow: isOpen ? "var(--shadow-lg)" : "4px 4px 0 0 var(--ink)",
                  transition: "all .2s",
                }}
              >
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "22px 24px",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.01em", textAlign: "left" }}>
                    {it.q}
                  </div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      border: "var(--border)",
                      background: isOpen ? "var(--ink)" : "var(--paper)",
                      color: isOpen ? "var(--chart)" : "var(--ink)",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </div>
                </button>
                {isOpen && <div className="faq-a" style={{ padding: "0 24px 24px 24px", fontSize: 17, lineHeight: 1.5, maxWidth: 720 }}>{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
