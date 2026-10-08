import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostNotFound() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-[#F2FBF5] text-[#063B24]">
        <Navbar activeSection="blog" />

        <section className="px-5 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[36px] border border-[#C8CCC9]/80 bg-white/90 p-8 text-center shadow-[0_30px_70px_-40px_rgba(4,48,30,0.25)] sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#456055]">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[#063B24] md:text-5xl">
              Blog not found
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#456055]">
              The article you are looking for is unavailable or the link may be
              incorrect. Explore the latest market insights from our blog
              archive instead.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center rounded-full border border-[#C8CCC9] bg-[#EAF8EF] px-6 py-3 text-sm font-semibold text-[#063B24] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8CCC9]"
            >
              Back to Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
