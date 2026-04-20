import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top">
      <Link href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
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
          Apply →
        </Link>
      </div>
    </nav>
  );
}
