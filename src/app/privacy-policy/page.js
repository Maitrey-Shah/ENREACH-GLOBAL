import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildBreadcrumbSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_PHONE } from "@/lib/site";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Enreach Global respects and protects visitors' personal information when they use the website, contact the company, or request metal trading services.";

const policySections = [
  {
    title: "Information We Collect",
    body: "We may collect information such as your name, company name, email address, phone number, business requirements, and any other information you voluntarily submit through our contact or enquiry forms. We may also collect basic technical information such as IP address, browser type, device information, and website usage data.",
  },
  {
    title: "How We Use Your Information",
    intro: "We use collected information to:",
    list: [
      "Respond to enquiries and requests.",
      "Provide quotations and trading-related services.",
      "Communicate with customers, suppliers, and business partners.",
      "Improve our website and services.",
      "Maintain website security and prevent misuse.",
      "Send business communications where permitted.",
    ],
  },
  {
    title: "Sharing of Information",
    body: "We do not sell or rent personal information. Information may be shared with trusted service providers or business partners when necessary to provide our services, operate the website, or comply with legal obligations.",
  },
  {
    title: "Cookies & Analytics",
    body: "Our website may use cookies and similar technologies to improve functionality, understand website usage, and measure performance.",
  },
  {
    title: "Data Security",
    body: "We use reasonable administrative, technical, and organizational safeguards to protect personal information against unauthorized access, loss, misuse, or disclosure.",
  },
  {
    title: "Data Retention",
    body: "Personal information is retained only for as long as reasonably necessary for the purposes for which it was collected, or as required by applicable law.",
  },
  {
    title: "Your Privacy Rights",
    body: "Depending on applicable law, you may request access to, correction of, or information about the personal information we hold about you. You may also withdraw consent where applicable.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites. Enreach Global is not responsible for the privacy practices or content of those external websites.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy when our practices, services, or legal requirements change. The updated version will be published on this page with a revised effective date.",
  },
];

export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: ["Enreach Global privacy policy", "privacy policy", "personal information"],
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const structuredData = [
    buildWebPageSchema({
      title: pageTitle,
      description: pageDescription,
      path: "/privacy-policy",
      keywords: ["Enreach Global privacy policy", "personal information"],
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ]),
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main id="main-content" className="min-h-screen bg-[#F2FBF5] text-[#063B24]">
        <Navbar activeSection="" />

        <section className="px-5 pb-12 pt-20 sm:px-6 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#456055]">
              Privacy Policy
            </p>
            <h1 className="mt-4 text-5xl leading-tight font-semibold text-[#063B24] md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#456055]">
              Enreach Global respects your privacy and is committed to
              protecting the personal information you provide.
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-4xl rounded-[32px] border border-[#C8CCC9]/80 bg-white/90 p-6 shadow-[0_30px_70px_-40px_rgba(4,48,30,0.32)] sm:p-9 lg:p-12">
            <header>
              <h2 className="text-3xl font-semibold text-[#063B24]">
                Privacy Policy - Enreach Global
              </h2>
              <p className="mt-4 text-base leading-7 text-[#456055]">
                <span className="font-semibold text-[#063B24]">Effective Date:</span>{" "}
                August 17, 2026
              </p>
              <p className="mt-6 text-base leading-8 text-[#456055]">
                Enreach Global respects your privacy and is committed to
                protecting the personal information you provide when using our
                website, contacting us, or requesting our metal trading services.
              </p>
            </header>

            <div className="mt-10 space-y-9">
              {policySections.map((section, index) => (
                <section key={section.title}>
                  <h3 className="text-2xl font-semibold text-[#063B24]">
                    {index + 1}. {section.title}
                  </h3>
                  {section.body ? (
                    <p className="mt-3 text-base leading-8 text-[#456055]">
                      {section.body}
                    </p>
                  ) : null}
                  {section.intro ? (
                    <p className="mt-3 text-base leading-8 text-[#456055]">
                      {section.intro}
                    </p>
                  ) : null}
                  {section.list ? (
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-8 text-[#456055]">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section>
                <h3 className="text-2xl font-semibold text-[#063B24]">
                  10. Contact Us
                </h3>
                <p className="mt-3 text-base leading-8 text-[#456055]">
                  For privacy questions, requests, or concerns, please contact:
                </p>
                <address className="mt-4 not-italic text-base leading-8 text-[#456055]">
                  <p className="font-semibold text-[#063B24]">Enreach Global Inc.</p>
                  <p>Calgary, Alberta, Canada</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="font-semibold text-[#063B24] underline decoration-[#C8CCC9] underline-offset-4 transition-colors duration-300 hover:text-[#0A5C36]"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:${COMPANY_PHONE.replace(/\s+/g, "")}`}
                      className="font-semibold text-[#063B24] underline decoration-[#C8CCC9] underline-offset-4 transition-colors duration-300 hover:text-[#0A5C36]"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </p>
                  <p className="sr-only">{COMPANY_LOCATION}</p>
                </address>
              </section>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
