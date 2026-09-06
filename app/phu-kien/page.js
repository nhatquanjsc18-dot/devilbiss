import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { accessories } from "@/data/accessories";

export const metadata = {
  title: "Phụ Kiện Chính Hãng Devilbiss",
  description:
    "Tổng hợp phụ kiện chính hãng Devilbiss phục vụ phun sơn công nghiệp - bộ lọc/sấy khí, quần áo bảo hộ, cốc sơn dùng 1 lần, dây dẫn khí/sơn, mặt nạ phòng độc và máy rửa súng.",
};

export default function AccessoriesListPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo; Phụ kiện
          </p>
          <Reveal>
            <h1 className="heading-lg mb-4">Phụ Kiện Chính Hãng Devilbiss</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-white/65">
              Bộ lọc/sấy khí, quần áo bảo hộ, cốc sơn dùng 1 lần, dây dẫn khí/sơn, mặt
              nạ phòng độc và máy rửa súng — đầy đủ phụ kiện chính hãng cho xưởng sơn
              của bạn.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.08}>
              <ProductCard item={item} basePath="/phu-kien" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
