import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
        <div>
          <span className="mb-1 block font-display text-lg font-bold uppercase tracking-wide text-white">
            Nhất Quán
          </span>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Công Ty Cổ Phần Công Nghiệp Nhất Quán
          </span>
          <p className="text-sm leading-relaxed">
            Nhà phân phối chính hãng thiết bị phun sơn (Devilbiss, Binks, Ransburg,
            Anest Iwata) và máy chà nhám công nghiệp (Mirka, Dynabrade) tại Việt Nam.
          </p>
        </div>
        <div>
          <span className="mb-4 block font-display text-sm font-bold uppercase tracking-widest text-primary">
            Liên kết
          </span>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/bai-viet" className="hover:text-primary">
                Súng phun sơn
              </Link>
            </li>
            <li>
              <Link href="/phu-kien" className="hover:text-primary">
                Phụ kiện
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="hover:text-primary">
                Liên hệ
              </Link>
            </li>
            <li>
              <a
                href="https://nhatquan.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Website chính nhatquan.vn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="mb-4 block font-display text-sm font-bold uppercase tracking-widest text-primary">
            Liên hệ
          </span>
          <ul className="space-y-2 text-sm">
            <li>
              📞{" "}
              <a href="tel:0908050415" className="hover:text-primary">
                0908 050 415
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:0907811767" className="hover:text-primary">
                0907 811 767
              </a>
            </li>
            <li>📍 52-54 Đường số 8, Cư xá Chu Văn An, P. Bình Thạnh, TP.HCM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Công ty CP Công nghiệp Nhất Quán. All rights
        reserved.
      </div>
    </footer>
  );
}
