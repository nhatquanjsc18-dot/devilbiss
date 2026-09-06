import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { accessories } from "@/data/accessories";

export function generateStaticParams() {
  return accessories.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = accessories.find((p) => p.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default function AccessoryDetailPage({ params }) {
  const index = accessories.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const item = accessories[index];
  const prev = accessories[index - 1];
  const next = accessories[index + 1];

  return (
    <>
      <section className="bg-ink py-14 text-white md:py-16">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo;{" "}
            <Link href="/phu-kien" className="hover:text-primary">
              Phụ kiện
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
                href={`/phu-kien/${prev.slug}/`}
                className="text-primary hover:text-primary-dark"
              >
                &laquo; {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/phu-kien/${next.slug}/`}
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
