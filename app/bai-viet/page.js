import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Súng Phun Sơn Devilbiss Chính Hãng",
  description:
    "Tổng hợp 15 dòng súng phun sơn Devilbiss chính hãng đang phân phối bởi Nhất Quán - thông số kỹ thuật, tính năng nổi bật và ứng dụng phù hợp cho từng ngành nghề.",
};

export default function BlogListPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo; Súng phun sơn
          </p>
          <Reveal>
            <h1 className="heading-lg mb-4">Súng Phun Sơn Devilbiss Chính Hãng</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-white/65">
              Tổng hợp 15 dòng súng phun sơn Devilbiss chính hãng đang phân phối bởi
              Nhất Quán — thông số kỹ thuật, tính năng nổi bật và ứng dụng phù hợp cho
              từng ngành nghề.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.08}>
              <ProductCard item={item} basePath="/bai-viet" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
