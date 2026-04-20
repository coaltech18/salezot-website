import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div data-screen-label="Privacy">
      <Nav />
      <section style={{ padding: "120px 0", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>/ legal</span>
          <h1 style={{ fontSize: "clamp(48px,6vw,88px)", marginBottom: 32 }}>Privacy Policy</h1>
          <div className="card" style={{ padding: 40, fontSize: 18, lineHeight: 1.6 }}>
            <p>
              Privacy policy coming soon. For questions, email{" "}
              <a
                href="mailto:founder@salezot.com"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 700, borderBottom: "3px solid var(--chart)" }}
              >
                founder@salezot.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
