import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top">
      <div className="logo">
        <div className="logo-mark">S</div>
        <span>Salezot</span>
        <span className="status-pill" style={{ marginLeft: 10 }}>
          <span className="live"></span> Pre-beta · building in public
        </span>
      </div>
      <div className="nav-links">
        <Link href="/#product">Product</Link>
        <Link href="/#who">Who it's for</Link>
        <Link href="/#partners">Design Partners</Link>
        <Link href="/#buildlog">Build log</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/apply" className="btn primary" style={{ padding: "10px 16px", fontSize: 13 }}>
          Apply →
        </Link>
      </div>
    </nav>
  );
}
