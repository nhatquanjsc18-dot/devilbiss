import { products } from '../data/products';
import { accessories } from '../data/accessories';

export const dynamic = 'force-static';

const BASE = 'https://devilbiss.nhatquan.vn';

export default function sitemap() {
  const pages = ['/', '/nha-phan-phoi/', '/bai-viet/', '/phu-kien/', '/lien-he/'].map((p) => ({
    url: BASE + p,
  }));
  const items = [
    ...products.map((p) => ({ url: `${BASE}/bai-viet/${p.slug}/` })),
    ...accessories.map((a) => ({ url: `${BASE}/phu-kien/${a.slug}/` })),
  ];
  return [...pages, ...items];
}
