import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item, basePath }) {
  return (
    <Link
      href={`${basePath}/${item.slug}/`}
      className="group flex flex-col overflow-hidden border border-black/10 bg-white transition-all duration-300 hover:shadow-card hover:-translate-y-1.5"
    >
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="tag-pill mb-3 w-fit">Devilbiss</span>
        <h3 className="mb-2 font-display text-base font-bold uppercase leading-snug text-ink">
          {item.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/60 line-clamp-3">
          {item.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-primary">
          Xem chi tiết
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
