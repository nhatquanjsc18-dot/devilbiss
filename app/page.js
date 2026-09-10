import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import HeroVisual from "@/components/HeroVisual";
import AnimatedCounter from "@/components/AnimatedCounter";

const FEATURES = [
  {
    icon: "🛡️",
    title: "Hàng Chính Hãng",
    desc: "Phân phối trực tiếp từ Devilbiss, Binks, Ransburg, Anest Iwata, Mirka, Dynabrade.",
  },
  {
    icon: "🛠️",
    title: "Hỗ Trợ Kỹ Thuật",
    desc: "Tư vấn chọn thiết bị phù hợp ngành nghề, hỗ trợ bảo trì và sửa chữa tận nơi.",
  },
  {
    icon: "🚚",
    title: "Giao Hàng Toàn Quốc",
    desc: "Kho hàng và phụ kiện đầy đủ, giao nhanh đến TP.HCM và các tỉnh thành.",
  },
];

const CHECKLIST = [
  "Đại lý phân phối chính hãng, có đầy đủ CO, CQ",
  "Đội ngũ kỹ thuật hỗ trợ tận nơi tại TP.HCM và toàn quốc",
  "Kho phụ kiện, linh kiện thay thế đầy đủ, giao nhanh",
  "Demo thực tế sản phẩm trước khi quyết định mua",
];

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="section-label">Devilbiss &middot; Binks &middot; Mirka</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="heading-xl mb-6 text-white">
                Nâng Tầm <span className="text-primary">Xưởng Sơn</span> Của Bạn
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Nhà phân phối chính hãng thiết bị phun sơn Devilbiss, Binks, Ransburg,
                Anest Iwata và máy chà nhám Mirka, Dynabrade tại Việt Nam — hơn 10 năm
                đồng hành cùng garage ô tô, nhà máy sản xuất và xưởng nội thất.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <Link href="/bai-viet" className="btn-solid">
                  Xem sản phẩm
                </Link>
                <Link href="/lien-he" className="btn-outline-light">
                  Nhận báo giá
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <Stat value={10} suffix="+" label="Năm kinh nghiệm" />
                <Stat value={27} suffix="+" label="Dòng sản phẩm" />
                <Stat value={100} suffix="%" label="Hàng chính hãng" />
              </div>
            </Reveal>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-ink pb-24 text-white">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="card-outline h-full">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-3xl">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold uppercase text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="gioi-thieu" className="bg-white py-24">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image
                src="/images/products/tekna-pro.png"
                alt="Devilbiss TEKNA Pro"
                fill
                className="object-contain p-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 border-4 border-primary bg-ink px-8 py-6 text-center text-white shadow-card">
              <p className="font-display text-4xl font-bold text-primary">
                10<span className="align-top text-xl">+</span>
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Năm Kinh Nghiệm
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="section-label">Về Nhất Quán</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="heading-lg mb-6 text-ink">
                Đối Tác Tin Cậy Của Ngành Phun Sơn Việt Nam
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mb-8 leading-relaxed text-ink/70">
                Công ty CP Công nghiệp Nhất Quán là nhà phân phối thiết bị phun sơn và
                máy chà nhám công nghiệp uy tín tại Việt Nam, phục vụ garage sơn ô tô,
                nhà máy sản xuất ô tô, xưởng nội thất/gỗ và các đại lý trên toàn quốc.
              </p>
            </Reveal>
            <ul className="mb-9 space-y-3">
              {CHECKLIST.map((item, i) => (
                <Reveal key={item} delay={0.2 + i * 0.05}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 font-bold text-primary">&raquo;</span>
                    <span className="font-semibold text-ink/85">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4}>
              <Link href="/lien-he" className="btn-outline">
                Liên Hệ Ngay
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label">Sản phẩm nổi bật</span>
            <h2 className="heading-lg mb-4 text-ink">Súng Phun Sơn Devilbiss</h2>
            <p className="text-ink/60">
              Một số dòng súng phun sơn Devilbiss chính hãng đang được Nhất Quán phân
              phối. Xem đầy đủ 15 dòng sản phẩm tại trang Súng phun sơn.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.07}>
                <ProductCard item={item} basePath="/bai-viet" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link href="/bai-viet" className="btn-solid">
              Xem Tất Cả Sản Phẩm →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="heading-lg">Cần Tư Vấn Thiết Bị Phù Hợp?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-white/90">
              Gọi ngay hotline hoặc để lại thông tin — đội ngũ kỹ thuật Nhất Quán tư
              vấn miễn phí và báo giá nhanh trong ngày.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0907811767" className="btn-outline-light">
                📞 0907 811 767
              </a>
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black"
              >
                Gửi yêu cầu tư vấn
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ value, suffix, label }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-primary md:text-4xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
    </div>
  );
}
