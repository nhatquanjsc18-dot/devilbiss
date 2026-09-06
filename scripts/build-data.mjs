// Script noi bo: doc cac file HTML fragment cu va sinh ra data/products.js + data/accessories.js
// Chay 1 lan luc thiet lap du an, khong can chay lai khi da co data/*.js
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "..");
const DEVILBISS_DIR = path.join(ROOT, "devilbiss_posts");
const PHUKIEN_DIR = path.join(ROOT, "phukien_posts");
const OUT_DIR = path.resolve(process.cwd(), "data");

const productMeta = [
  ["bai_01_sung-phun-son-devilbiss-gti-pro-lite.html", "sung-phun-son-devilbiss-gti-pro-lite", "Súng Phun Sơn Devilbiss GTi Pro Lite", "gti-pro-lite.webp"],
  ["bai_02_sung-phun-son-devilbiss-dv1-basecoat.html", "sung-phun-son-devilbiss-dv1-basecoat", "Súng Phun Sơn Devilbiss DV1 Basecoat", "dv1-basecoat.webp"],
  ["bai_03_sung-phun-son-devilbiss-dv1-clearcoat.html", "sung-phun-son-devilbiss-dv1-clearcoat", "Súng Phun Sơn Devilbiss DV1 Clearcoat", "dv1-clearcoat.jpg"],
  ["bai_04_sung-phun-son-devilbiss-tekna-pro.html", "sung-phun-son-devilbiss-tekna-pro", "Súng Phun Sơn Devilbiss TEKNA Pro", "tekna-pro.png"],
  ["bai_05_sung-phun-son-devilbiss-tekna-copper.html", "sung-phun-son-devilbiss-tekna-copper", "Súng Phun Sơn Devilbiss TEKNA Copper", "tekna-copper.png"],
  ["bai_06_sung-phun-son-devilbiss-sri-pro.html", "sung-phun-son-devilbiss-sri-pro", "Súng Phun Sơn Devilbiss SRi Pro", "sri-pro.jpg"],
  ["bai_07_sung-phun-son-devilbiss-sri-pro-lite.html", "sung-phun-son-devilbiss-sri-pro-lite", "Súng Phun Sơn Devilbiss SRi Pro Lite", "sri-pro-lite.png"],
  ["bai_08_sung-phun-son-devilbiss-advance-hd.html", "sung-phun-son-devilbiss-advance-hd", "Súng Phun Sơn Devilbiss Advance HD", "advance-hd.jpg"],
  ["bai_09_sung-phun-son-devilbiss-prolite.html", "sung-phun-son-devilbiss-prolite", "Súng Phun Sơn Devilbiss PROLite", "prolite.png"],
  ["bai_11_sung-phun-son-devilbiss-flg-manual.html", "sung-phun-son-devilbiss-flg-manual", "Súng Phun Sơn Devilbiss FLG", "flg-manual.jpg"],
  ["bai_12_sung-phun-son-devilbiss-jga-pro.html", "sung-phun-son-devilbiss-jga-pro", "Súng Phun Sơn Devilbiss JGA Pro", "jga-pro.jpg"],
  ["bai_13_sung-phun-son-devilbiss-gpg-manual.html", "sung-phun-son-devilbiss-gpg-manual", "Súng Phun Sơn Devilbiss GPG", "gpg-manual.jpg"],
  ["bai_17_sung-phun-son-devilbiss-tekna-prolite.html", "sung-phun-son-devilbiss-tekna-prolite", "Súng Phun Sơn Devilbiss TEKNA ProLite", "tekna-prolite.png"],
  ["bai_18_sung-phun-son-devilbiss-mbc-manual.html", "sung-phun-son-devilbiss-mbc-manual", "Súng Phun Sơn Devilbiss MBC", "mbc-manual.png"],
  ["bai_19_sung-phun-son-devilbiss-agx-series.html", "sung-phun-son-devilbiss-agx-series", "Súng Phun Sơn Tự Động Devilbiss AGX", "agx-series.jpg"],
];

const accessoryMeta = [
  ["pk_01_bo-dieu-ap-khi-devilbiss.html", "bo-dieu-ap-khi-devilbiss", "Bộ Điều Áp Khí Devilbiss", "air-regulators.webp"],
  ["pk_02_bo-loc-say-khi-camair.html", "bo-loc-say-khi-camair", "Bộ Lọc & Sấy Khí Camair", "camair-series.webp"],
  ["pk_03_bo-loc-khi-clean-air-control.html", "bo-loc-khi-clean-air-control", "Bộ Lọc Khí Clean Air Control", "clean-air-control.webp"],
  ["pk_04_bo-san-pham-clean-devilbiss.html", "bo-san-pham-clean-devilbiss", "Bộ Sản Phẩm Clean Devilbiss", "clean-products.webp"],
  ["pk_05_may-say-khi-dad-500.html", "may-say-khi-dad-500", "Máy Sấy Khí DAD-500", "dad-500.webp"],
  ["pk_06_bo-day-dan-son-khi-dah.html", "bo-day-dan-son-khi-dah", "Bộ Dây Dẫn Sơn & Khí DAH-XX", "dah-xx.webp"],
  ["pk_07_coc-son-dung-1-lan-dekups-evo.html", "coc-son-dung-1-lan-dekups-evo", "Cốc Sơn Dùng 1 Lần DeKups EVO", "dekups-evo.webp"],
  ["pk_08_mat-na-phong-doc-demask.html", "mat-na-phong-doc-demask", "Mặt Nạ Phòng Độc DeMask", "demask.webp"],
  ["pk_09_day-hoi-flextemp.html", "day-hoi-flextemp", "Dây Hơi FlexTemp", "flextemp-hose.webp"],
  ["pk_10_quan-ao-bao-ho-premium.html", "quan-ao-bao-ho-premium", "Quần Áo Bảo Hộ Premium Devilbiss", "premium-coveralls.webp"],
  ["pk_11_khan-lau-tay-scrubs.html", "khan-lau-tay-scrubs", "Khăn Lau Tay Scrubs", "scrubs.webp"],
  ["pk_12_may-rua-sung-tru-clean.html", "may-rua-sung-tru-clean", "Máy Rửa Súng Tru-Clean", "tru-clean.webp"],
];

function firstParagraph(html) {
  const m = html.match(/<p>(.*?)<\/p>/s);
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, "").trim();
}

function build(dir, meta, prefix) {
  const items = meta.map(([file, slug, title, image]) => {
    const html = fs.readFileSync(path.join(dir, file), "utf8").trim();
    const excerpt = firstParagraph(html);
    return { slug, title, image: `/images/products/${image}`, excerpt, contentHtml: html };
  });
  const jsonStr = JSON.stringify(items, null, 2);
  fs.writeFileSync(
    path.join(OUT_DIR, `${prefix}.js`),
    `// File nay duoc sinh tu scripts/build-data.mjs, khong can sua tay\nexport const ${prefix} = ${jsonStr};\n`,
    "utf8"
  );
  console.log(`Wrote ${prefix}.js with ${items.length} items`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
build(DEVILBISS_DIR, productMeta, "products");
build(PHUKIEN_DIR, accessoryMeta, "accessories");
