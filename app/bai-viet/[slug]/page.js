import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = products.find((p) => p.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default function ProductDetailPage({ params }) {
  const index = products.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const item = products[index];
  const prev = products[index - 1];
  const next = products[index + 1];

  return (
    <>
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo;{" "}
            <Link href="/bai-viet" className="hover:text-primary">
              Súng phun sơn
            </Link>{" "}
            &raquo; {item.title}
          </p>
          <h1 className="heading-lg max-w-3xl">{item.title}</h1>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <Reveal className="relative mx-auto mb-10 aspect-square w-full max-w-sm border border-black/10 bg-cream p-8">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="400px"
              className="object-contain p-8"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8 text-sm font-bold uppercase tracking-wide">
            {prev ? (
              <Link
                href={`/bai-viet/${prev.slug}/`}
                className="text-primary hover:text-primary-dark"
              >
                &laquo; {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/bai-viet/${next.slug}/`}
                className="text-right text-primary hover:text-primary-dark"
              >
                {next.title} &raquo;
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
