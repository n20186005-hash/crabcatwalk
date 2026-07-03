import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Crab Catwalk Guide",
  description: "Privacy policy for Crab Catwalk (Passarela do Caranguejo) Travel Guide",
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
          Last updated: June 2026
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            Information We Collect
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            We only collect the minimum data necessary to provide our services. This information may include:
          </p>
          <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>
            <li>Browsing data (IP address, browser type, pages visited)</li>
            <li>Cookies and similar technologies</li>
            <li>Any information you voluntarily provide through contact forms or email</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            How We Use Your Information
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            We use the collected information for:
          </p>
          <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>
            <li>Improving website content and user experience</li>
            <li>Analyzing traffic and usage patterns</li>
            <li>Responding to inquiries</li>
            <li>Complying with our legal obligations</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            Third-Party Services
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            Our website may use third-party services such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis), and image providers. These services have their own privacy policies.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            Your Rights
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1rem" }}>
            Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights:
          </p>
          <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to processing</li>
            <li>File a complaint with a regulatory authority</li>
          </ul>
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
