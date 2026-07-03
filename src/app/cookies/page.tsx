import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Settings | Crab Catwalk Guide",
  description: "Manage your cookie preferences for Crab Catwalk (Passarela do Caranguejo) Travel Guide",
};

export default function CookiesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
          Cookie Settings
        </h1>
        <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
          Last updated: June 2026
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            What Are Cookies
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            Cookies are small files that are placed on your computer when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            How We Use Cookies
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            We use cookies to:
          </p>
          <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>
            <li>Understand and save user preferences for future visits</li>
            <li>Compile aggregate data about site traffic and site interactions</li>
            <li>Improve our website and user experience</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            Managing Cookies
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser&apos;s Help menu to learn the correct way to modify your cookies.
          </p>
        </section>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <Link href="/" style={{ color: "var(--color-teal)", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
