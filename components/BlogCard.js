import Image from "next/image";
import Link from "next/link";

import { formatBlogDate } from "@/data/blogPosts";

export default function BlogCard({ post, priority = false }) {
  return (
    <article className="group overflow-hidden rounded-sm border border-[#C8CCC9] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5C36]">
      <Link
        href={`/blog/${post.slug}`}
        className="block"
        aria-label={`Read ${post.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#456055]">
          <span className="rounded-sm bg-[#EAF8EF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0A5C36]">
            {post.category}
          </span>
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </div>

        <h2 className="mt-5 text-3xl font-semibold text-[#063B24]">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors duration-300 hover:text-[#0A5C36]"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 text-base leading-7 text-[#456055]">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center rounded-sm border border-[#0A5C36] bg-white px-5 py-3 text-sm font-semibold text-[#0A5C36] transition-all duration-300 hover:bg-[#25D366]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
