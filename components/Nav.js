import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="top">
      <Link href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }} onClick={close}>
        <div className="logo-mark">S</div>
        <span>Salezot</span>
        <span className="status-pill" style={{ marginLeft: 10 }}>
          <span className="live"></span> Pre-beta · building in public
        </span>
      </Link>

      <div className="nav-links">
        <Link href="/product">Product</Link>
        <Link href="/partners#who">Who it&apos;s for</Link>
        <Link href="/partners#partners">Design Partners</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/apply" className="btn primary" style={{ padding: "10px 16px", fontSize: 13 }}>
          Apply &rarr;
        </Link>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="nav-mobile">
          <Link href="/product" onClick={close}>Product</Link>
          <Link href="/partners#who" onClick={close}>Who it&apos;s for</Link>
          <Link href="/partners#partners" onClick={close}>Design Partners</Link>
          <Link href="/faq" onClick={close}>FAQ</Link>
          <Link href="/apply" className="btn primary" onClick={close}>Apply &rarr;</Link>
        </div>
      )}
    </nav>
  );
}
