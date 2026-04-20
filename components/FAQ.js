import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "Why only 12 design partners?", a: "Because 13 would be too many for us to actually talk to every week. We'd rather go deep with a dozen teams than run a waitlist theater." },
    { q: "Is this free during the partnership?", a: "Yes. For all 12 weeks. After that, founding pricing locks in — which is roughly 40% of our GA pricing, forever." },
    { q: "Do you support Salesforce / HubSpot / Zoho?", a: "Zoho shipped last week. HubSpot is live. Salesforce is in beta with 3 partners — if you're on SF Enterprise with complex OWD rules, we'd love to include you." },
    { q: "Where's the data hosted?", a: "Mumbai (AWS ap-south-1). Your transcripts never leave India. We're SOC-2 Type I in progress, Type II targeted for Q3." },
    { q: "Can I apply if I'm not a founder?", a: "Yes — if you can get weekly calls on the calendar and push feedback through your team, we don't care about your title." },
    { q: "What if you pivot or shut down?", a: "Fair question. We have 22 months of runway as of April. If we shut down, you get 90 days of exports and a refund of anything paid. In writing." },
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
                className="reveal"
                style={{
                  border: "var(--border-thick)",
                  background: isOpen ? "var(--chart)" : "var(--paper)",
                  boxShadow: isOpen ? "var(--shadow-lg)" : "4px 4px 0 0 var(--ink)",
                  transition: "all .2s",
                }}
              >
                <button
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
                {isOpen && <div style={{ padding: "0 24px 24px 24px", fontSize: 17, lineHeight: 1.5, maxWidth: 720 }}>{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
