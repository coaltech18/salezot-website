export default function BuildLog() {
  const entries = [
    { date: "APR 18", t: "Shipped Hinglish transcript v2", d: "Accuracy jumped from 71% to 88% on our 400-call eval set. Thanks Priya @ Fintoso for the test corpus.", tag: "SHIP", color: "chart" },
    { date: "APR 12", t: "Killed the 'insights dashboard'", d: "Nobody opened it. We replaced it with an inbox view. Rohan @ Northforge called it 'finally not bullshit.'", tag: "KILL", color: "pink" },
    { date: "APR 05", t: "Added Zoho write-back", d: "6/12 partners use Zoho. Salesforce is 4. HubSpot is 2. We built Zoho first.", tag: "SHIP", color: "chart" },
    { date: "MAR 29", t: "Cohort 01 kickoff", d: "12 founders + sales leads. 4 cities. 2 hours of yelling about Gong.", tag: "NOTE", color: "blue" },
  ];
  return (
    <section id="buildlog" style={{ padding: "100px 0", background: "var(--paper-2)" }}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <span className="section-label">/04 · build log</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>updated weekly · no marketing filter</span>
        </div>
        <h2 className="reveal" style={{ marginBottom: 40 }}>Out in the open.</h2>

        <div style={{ display: "grid", gap: 16 }}>
          {entries.map((e, i) => (
            <div
              key={i}
              className="reveal card buildlog-row"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 90px 1fr",
                gap: 20,
                alignItems: "center",
                transform: `rotate(${i % 2 ? 0.3 : -0.3}deg)`,
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, textTransform: "uppercase" }}>{e.date}</div>
              <div className={`chip ${e.color}`} style={{ justifySelf: "start" }}>{e.tag}</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, textTransform: "uppercase", marginBottom: 4 }}>{e.t}</div>
                <div style={{ fontSize: 15, opacity: 0.75 }}>{e.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
