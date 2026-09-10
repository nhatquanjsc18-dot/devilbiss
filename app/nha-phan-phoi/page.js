import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nhà Phân Phối Devilbiss Chính Hãng",
  description:
    "Công ty CP Công nghiệp Nhất Quán là nhà phân phối chính hãng súng phun sơn Devilbiss (Hoa Kỳ) tại Việt Nam - hàng chính hãng 100%, tư vấn kỹ thuật, hàng có sẵn kho, bảo hành tận nơi.",
};

const REASONS = [
  {
    no: "01",
    title: "Nhà Phân Phối Chính Hãng",
    desc: "Nhất Quán là đơn vị phân phối chính thức súng phun sơn DeVilbiss (Hoa Kỳ, thành lập năm 1888) tại Việt Nam, đảm bảo nguồn hàng chính hãng 100%, có đầy đủ chứng từ CO/CQ.",
  },
  {
    no: "02",
    title: "Tư Vấn Kỹ Thuật Chuyên Sâu",
    desc: "Đội ngũ kỹ thuật khảo sát thực tế nhu cầu phun sơn để đề xuất đúng dòng súng phù hợp, tránh đầu tư thừa hoặc thiếu công năng cho khách hàng.",
  },
  {
    no: "03",
    title: "Hàng Có Sẵn Kho Tại Việt Nam",
    desc: "Các dòng súng bán chạy như Tekna Pro, GTi Pro Lite, SRi Pro được nhập sẵn, giao nhanh trong nước — không phải chờ đặt hàng trực tiếp từ Mỹ.",
  },
  {
    no: "04",
    title: "Bảo Hành & Hậu Mãi Tận Nơi",
    desc: "Hỗ trợ lắp đặt, bảo trì, cung ứng linh kiện thay thế chính hãng dài hạn theo đúng tiêu chuẩn bảo hành của DeVilbiss.",
  },
];

const INDUSTRIES = [
  "Sơn sửa ô tô",
  "Xưởng sản xuất công nghiệp",
  "Gia công kim loại",
  "Nội thất gỗ",
  "Đóng tàu & hàng hải",
  "Xưởng sơn tĩnh điện",
];

export default function NhaPhanPhoiPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo; Nhà phân phối
          </p>
          <Reveal>
            <span className="section-label">Đối tác phân phối chính thức</span>
            <h1 className="heading-lg mb-4">Nhà Phân Phối DeVilbiss Chính Hãng</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-white/65">
              Nhất Quán JSC là nhà phân phối chính hãng DeVilbiss tại Việt Nam, mang
              di sản hơn 130 năm chế tạo thiết bị phun sơn Hoa Kỳ đến với ngành công
              nghiệp sơn sửa ô tô và hoàn thiện bề mặt trong nước.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="section-label">Vì sao chọn Nhất Quán</span>
            <h2 className="heading-md mb-10 max-w-2xl">
              Đối tác kỹ thuật, không chỉ đơn thuần bán hàng
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.no} delay={(i % 2) * 0.08}>
                <div className="h-full border border-black/10 bg-white p-6 transition-all duration-300 hover:border-primary hover:-translate-y-1">
                  <span className="font-display text-3xl font-bold text-primary/40">
                    {r.no}
                  </span>
                  <h3 className="mt-2 mb-2 font-display text-lg font-bold uppercase tracking-wide text-ink">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="section-label">Ngành nghề phục vụ</span>
            <h2 className="heading-md mb-8 max-w-2xl">
              Giải pháp phun sơn cho nhiều lĩnh vực
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-page">
          <Reveal>
            <span className="section-label">Thông tin liên hệ</span>
            <h2 className="heading-md mb-10 max-w-2xl">Đăng Ký Làm Đại Lý / Đặt Hàng</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 gap-6 border border-white/10 p-6 sm:grid-cols-2 lg:grid-cols-5 lg:p-8">
              <InfoBlock label="Công ty">
                Công ty Cổ phần Công nghiệp Nhất Quán
              </InfoBlock>
              <InfoBlock label="Địa chỉ">
                52-54 Đường số 8, Cư xá Chu Văn An, Phường Bình Thạnh, TP.HCM
              </InfoBlock>
              <InfoBlock label="Hotline">0907 811 767</InfoBlock>
              <InfoBlock label="Email">nhatquanjsc18@gmail.com</InfoBlock>
              <InfoBlock label="Website">nhatquan.vn</InfoBlock>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8">
              <Link href="/lien-he" className="btn-solid">
                Liên hệ tư vấn ngay &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-primary">
        {label}
      </span>
      <p className="text-sm text-white/75">{children}</p>
    </div>
  );
}
