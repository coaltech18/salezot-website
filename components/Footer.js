import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "60px 0 28px",
        borderTop: "6px solid var(--red)",
      }}
    >
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <div className="logo" style={{ color: "var(--paper)", marginBottom: 14 }}>
              <div className="logo-mark">S</div>
              <span>Salezot</span>
            </div>
            <p style={{ fontSize: 15, opacity: 0.7, maxWidth: 320 }}>
              AI-powered revenue intelligence for Indian B2B sales teams. Call recording, real-time AI coaching, and CRM auto-sync — built for India.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", marginBottom: 12, opacity: 0.5 }}>
              Product
            </div>
            {["Features", "Integrations", "Changelog"].map((l) => (
              <div key={l} style={{ marginBottom: 8, fontSize: 15 }}>
                {l}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", marginBottom: 12, opacity: 0.5 }}>
              Company
            </div>
            {["About", "Careers (0)", "Contact"].map((l) => (
              <div key={l} style={{ marginBottom: 8, fontSize: 15 }}>
                {l}
              </div>
            ))}
          </div>
          {/* CHANGE 4 — Legal links */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", marginBottom: 12, opacity: 0.5 }}>
              Legal
            </div>
            <div style={{ marginBottom: 8, fontSize: 15 }}>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            <div style={{ marginBottom: 8, fontSize: 15 }}>
              <Link href="/terms">Terms of Service</Link>
            </div>
            {/* "Security" removed per spec */}
            <div style={{ marginBottom: 8, fontSize: 15, opacity: 0.7 }}>DPDPA aligned</div>
            <div style={{ marginBottom: 8, fontSize: 15, opacity: 0.7 }}>SOC 2 (roadmap)</div>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px dashed rgba(245,241,232,0.2)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            opacity: 0.6,
          }}
        >
          <div>© 2026 Salezot Labs Pvt Ltd · Bengaluru</div>
          <div>v0.3 · Adithya S Reddy &amp; Hemanth Mahesh</div>
        </div>
      </div>
    </footer>
  );
}
