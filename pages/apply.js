/*
 * CHANGE 2 — Qualified Design Partner application form
 * Submission logic: swap the handleSubmit body with your existing form backend call.
 */
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Star } from "@/components/Stickers";

const FREE_EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "yahoo.co.in", "outlook.com", "hotmail.com", "live.com", "icloud.com", "proton.me", "protonmail.com"];

export default function Apply() {
  const [data, setData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    callVolume: "",
    crm: "",
    currentTool: "",
    why: "",
  });
  const [errors, setErrors] = useState({});
  const [freeEmailWarning, setFreeEmailWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => {
    setData((d) => ({ ...d, [k]: v }));
    if (k === "workEmail") {
      const domain = v.split("@")[1]?.toLowerCase() || "";
      setFreeEmailWarning(FREE_EMAIL_DOMAINS.includes(domain));
    }
  };

  const validate = () => {
    const e = {};
    if (!data.fullName.trim()) e.fullName = "Required";
    if (!data.workEmail.trim() || !data.workEmail.includes("@")) e.workEmail = "Valid email required";
    if (!data.company.trim()) e.company = "Required";
    if (!data.role.trim()) e.role = "Required";
    if (!data.callVolume) e.callVolume = "Required";
    if (!data.crm) e.crm = "Required";
    if (!data.why.trim()) e.why = "Required";
    if (data.why.length > 500) e.why = "Max 500 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // TODO: wire to existing form backend — keep the same endpoint the old
    // /contact form used; just pass this richer payload.
    // Example:
    //   await fetch('/api/contact', { method:'POST', body: JSON.stringify(data) });
    setSubmitted(true);
  };

  const callVolumeOptions = ["Less than 20", "20–100", "100–300", "300+"];
  const crmOptions = ["HubSpot", "Salesforce", "Zoho", "LeadSquared", "Other", "None"];

  return (
    <Layout screenLabel="05 Apply">
      <section style={{ padding: "80px 0 60px", position: "relative" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="reveal" style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <span className="section-label" style={{ background: "var(--blue)", color: "#fff" }}>/ design partner application</span>
            <span className="chip">COHORT 01 · CLOSES MAY 15</span>
          </div>

          {/* CHANGE 2 — heading + subcopy */}
          <h1 className="reveal" style={{ fontSize: "clamp(44px,6vw,84px)", marginBottom: 16 }}>
            Apply to be a
            <br />
            <span className="highlight-block highlight-chart">founding design partner.</span>
          </h1>
          <p className="reveal" style={{ maxWidth: 620, fontSize: 18, marginBottom: 40 }}>
            We&apos;re working with a small number of B2B SaaS sales leaders to shape Salezot. Tell us about your team and we&apos;ll be in touch within 48 hours.
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="reveal card" style={{ padding: 40 }}>
              {/* 1. Full name */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  Full name {errors.fullName && <span style={{ color: "var(--red)" }}>· {errors.fullName}</span>}
                </label>
                <input
                  type="text"
                  className={`form-input ${errors.fullName ? "error" : ""}`}
                  value={data.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  placeholder="Priya Ramaswamy"
                  required
                />
              </div>

              {/* 2. Work email + free-email soft warning */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  Work email {errors.workEmail && <span style={{ color: "var(--red)" }}>· {errors.workEmail}</span>}
                </label>
                <input
                  type="email"
                  className={`form-input ${errors.workEmail ? "error" : ""}`}
                  value={data.workEmail}
                  onChange={(e) => set("workEmail", e.target.value)}
                  placeholder="priya@yourcompany.in"
                  required
                />
                {freeEmailWarning && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: "10px 14px",
                      background: "var(--pink)",
                      color: "var(--paper)",
                      border: "3px solid var(--ink)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    ⚠ Looks like a personal email. A work email helps us verify and reply faster — but you can still submit.
                  </div>
                )}
              </div>

              {/* 3. Company */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  Company name {errors.company && <span style={{ color: "var(--red)" }}>· {errors.company}</span>}
                </label>
                <input
                  type="text"
                  className={`form-input ${errors.company ? "error" : ""}`}
                  value={data.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Acme SaaS"
                  required
                />
              </div>

              {/* 4. Role */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  Your role {errors.role && <span style={{ color: "var(--red)" }}>· {errors.role}</span>}
                </label>
                <input
                  type="text"
                  className={`form-input ${errors.role ? "error" : ""}`}
                  value={data.role}
                  onChange={(e) => set("role", e.target.value)}
                  placeholder="VP Sales"
                  required
                />
              </div>

              {/* 5. Call volume */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  Sales calls per week {errors.callVolume && <span style={{ color: "var(--red)" }}>· {errors.callVolume}</span>}
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {callVolumeOptions.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => set("callVolume", o)}
                      style={{
                        padding: "10px 14px",
                        border: "3px solid var(--ink)",
                        background: data.callVolume === o ? "var(--chart)" : "var(--paper)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        boxShadow: data.callVolume === o ? "4px 4px 0 0 var(--ink)" : "none",
                        transform: data.callVolume === o ? "translate(-1px,-1px)" : "none",
                        cursor: "pointer",
                      }}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. CRM */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">
                  What CRM do you currently use? {errors.crm && <span style={{ color: "var(--red)" }}>· {errors.crm}</span>}
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {crmOptions.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => set("crm", o)}
                      style={{
                        padding: "10px 14px",
                        border: "3px solid var(--ink)",
                        background: data.crm === o ? "var(--blue)" : "var(--paper)",
                        color: data.crm === o ? "#fff" : "var(--ink)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        boxShadow: data.crm === o ? "4px 4px 0 0 var(--ink)" : "none",
                        transform: data.crm === o ? "translate(-1px,-1px)" : "none",
                        cursor: "pointer",
                      }}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* 7. Current tool (optional) */}
              <div style={{ marginBottom: 20 }}>
                <label className="form-label">What are you using today for call recording or review? (optional)</label>
                <input
                  type="text"
                  className="form-input"
                  value={data.currentTool}
                  onChange={(e) => set("currentTool", e.target.value)}
                  placeholder="e.g. Gong, Fireflies, nothing, etc."
                />
              </div>

              {/* 8. Why */}
              <div style={{ marginBottom: 28 }}>
                <label className="form-label">
                  Why do you want to be a design partner? {errors.why && <span style={{ color: "var(--red)" }}>· {errors.why}</span>}
                </label>
                <textarea
                  className={`form-input ${errors.why ? "error" : ""}`}
                  value={data.why}
                  onChange={(e) => set("why", e.target.value.slice(0, 500))}
                  rows={5}
                  maxLength={500}
                  placeholder="Be specific. Be honest. 500 chars max."
                  required
                  style={{ resize: "vertical" }}
                />
                <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12, marginTop: 4, opacity: 0.6 }}>
                  {data.why.length} / 500
                </div>
              </div>

              <button type="submit" className="btn primary" style={{ fontSize: 17, padding: "18px 26px" }}>
                Submit application →
              </button>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, marginTop: 16, opacity: 0.6 }}>
                We reply within 48 hours, even if it&apos;s a no.
              </p>
            </form>
          )}

          {submitted && (
            <div className="reveal card" style={{ padding: 60, textAlign: "center" }}>
              <div style={{ fontSize: 80, marginBottom: 10, lineHeight: 1 }}>✓</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 42, textTransform: "uppercase", marginBottom: 14, lineHeight: 1 }}>
                You&apos;re in the pile.
              </div>
              <p style={{ fontSize: 18, maxWidth: 480, margin: "0 auto 24px" }}>
                We read everything. You&apos;ll hear back within <b>48 hours</b>, even if it&apos;s a no.
              </p>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--chart)",
                  border: "var(--border-thick)",
                  padding: "14px 22px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(-1.5deg)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                REF: #CP1-{Math.floor(Math.random() * 9000 + 1000)} · {data.fullName.split(" ")[0] || "friend"}@{data.company || "company"}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/" className="btn ghost">← Back home</Link>
              </div>
            </div>
          )}

          <div className="sticker" style={{ position: "absolute", top: 80, right: 20, transform: "rotate(15deg)" }}>
            <Star size={80} color="var(--pink)" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
