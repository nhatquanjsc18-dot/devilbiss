import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Liên Hệ",
  description:
    "Liên hệ Công ty CP Công nghiệp Nhất Quán - nhà phân phối chính hãng Devilbiss, Binks tại Việt Nam. Hotline tư vấn, email báo giá, văn phòng đại diện và form gửi yêu cầu tư vấn.",
};

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=52-54%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%208%2C%20C%C6%B0%20x%C3%A1%20Chu%20V%C4%83n%20An%2C%20Ph%C6%B0%E1%BB%9Dng%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.HCM";

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-page">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/50">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>{" "}
            &raquo; Liên hệ
          </p>
          <Reveal>
            <span className="section-label">
              Nhà phân phối chính hãng Devilbiss &amp; Binks tại Việt Nam
            </span>
            <h1 className="heading-lg mb-4">Liên Hệ Với Nhất Quán</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-white/65">
              Đội ngũ kỹ thuật của Nhất Quán sẵn sàng tư vấn lựa chọn súng phun sơn,
              phụ kiện phun sơn Devilbiss/Binks phù hợp, báo giá và hỗ trợ sau bán hàng
              cho khách hàng trên toàn quốc.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <Reveal>
              <InfoCard label="Hotline tư vấn kỹ thuật">
                <p className="text-xl font-bold text-ink">
                  <a href="tel:0908050415" className="hover:text-primary">
                    0908 050 415
                  </a>
                </p>
                <p className="text-base font-bold text-ink">
                  <a href="tel:0907811767" className="hover:text-primary">
                    0907 811 767
                  </a>
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  T2 - T6 08:00 - 17:00 · T7 08:00 - 16:00
                </p>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.06}>
              <InfoCard label="Email báo giá & hỗ trợ">
                <p className="text-lg font-bold text-ink">
                  <a
                    href="mailto:nhatquanjsc18@gmail.com"
                    className="hover:text-primary"
                  >
                    nhatquanjsc18@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  Phản hồi trong vòng 24 giờ làm việc
                </p>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.12}>
              <InfoCard label="Văn phòng đại diện">
                <p className="text-base font-bold text-ink">
                  52-54 Đường số 8, Cư xá Chu Văn An, Phường Bình Thạnh, TP.HCM
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  Liên hệ trước khi đến để được hỗ trợ tốt nhất
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-primary hover:text-primary-dark"
                >
                  Mở trong Google Maps &rarr;
                </a>
              </InfoCard>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border border-dashed border-black/15 bg-white p-6">
                <p className="text-sm leading-relaxed text-ink/70">
                  <strong className="text-ink">Đại lý &amp; phân phối:</strong> Nhất
                  Quán là nhà phân phối chính hãng Devilbiss, Binks tại Việt Nam. Nếu
                  bạn muốn trở thành đại lý hoặc cần báo giá số lượng lớn, hãy gửi
                  thông tin qua form hoặc gọi trực tiếp hotline.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({ label, children }) {
  return (
    <div className="border border-black/10 bg-white p-6">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-primary-dark">
        {label}
      </span>
      {children}
    </div>
  );
}
