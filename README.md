# Nhất Quán - Devilbiss Website (Next.js)

Website chính thức Công ty CP Công nghiệp Nhất Quán — nhà phân phối chính hãng thiết
bị phun sơn Devilbiss/Binks và máy chà nhám Mirka/Dynabrade tại Việt Nam.

Xây dựng bằng **Next.js 14** (App Router, static export), **Tailwind CSS** và
**Framer Motion**. Build ra thuần HTML/CSS/JS tĩnh — chạy được trên bất kỳ hosting
tĩnh nào (Hostinger, Netlify, Vercel...), không cần server Node.js khi deploy.

## Cấu trúc thư mục

```
app/                Các trang (App Router)
  page.js           Trang chủ
  bai-viet/         Danh sách + chi tiết súng phun sơn (15 bài)
  phu-kien/         Danh sách + chi tiết phụ kiện (12 bài)
  lien-he/          Trang liên hệ (form Web3Forms)
components/         Header, Footer, ProductCard, ContactForm, hiệu ứng động...
data/                products.js, accessories.js — dữ liệu bài viết (sinh ra từ
                     scripts/build-data.mjs, có thể sửa tay sau khi sinh)
public/images/       Ảnh sản phẩm + favicon
scripts/build-data.mjs   Script sinh data/*.js từ các file HTML gốc (chỉ cần chạy
                          lại nếu muốn tái tạo từ nguồn HTML cũ)
```

## Chạy thử trên máy (development)

Cần cài [Node.js](https://nodejs.org) (bản 18 trở lên) trước.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem.

## Build ra file tĩnh

```bash
npm run build
```

Kết quả nằm trong thư mục `out/` — đây chính là toàn bộ website dạng file tĩnh
(HTML/CSS/JS/ảnh), sẵn sàng upload lên bất kỳ hosting nào.

## Đưa code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<ten-tai-khoan>/<ten-repo>.git
git push -u origin main
```

(Thay `<ten-tai-khoan>` và `<ten-repo>` bằng thông tin GitHub thật của bạn. Tạo repo
rỗng trên GitHub trước khi chạy `git push`.)

## Deploy lên Hostinger (hosting tĩnh — cách đơn giản nhất)

1. Trên máy, chạy `npm run build` để tạo thư mục `out/`
2. Đăng nhập **hPanel** Hostinger → vào **File Manager** của website (hoặc dùng FTP)
3. Vào thư mục `public_html` (xoá hết file cũ nếu có, hoặc để trong 1 thư mục con
   nếu muốn deploy vào một đường dẫn phụ)
4. Upload **toàn bộ nội dung bên trong** thư mục `out/` (không upload cả thư mục
   `out`, chỉ upload các file/folder *bên trong* nó) vào `public_html`
5. Mở lại domain — web đã chạy

> Mẹo: nếu Hostinger hỗ trợ Git Deploy hoặc bạn dùng SSH, có thể `zip` thư mục
> `out/` rồi upload 1 file zip, sau đó giải nén ngay trong File Manager thay vì kéo
> thả từng file — nhanh hơn nhiều với hàng chục file HTML.

## Deploy tự động qua GitHub (tuỳ chọn, nâng cao)

Nếu muốn mỗi lần `git push` tự động deploy, có thể dùng GitHub Actions để build và
đẩy thư mục `out/` lên Hostinger qua FTP/SFTP (cần thêm secrets `FTP_HOST`,
`FTP_USERNAME`, `FTP_PASSWORD` trong GitHub repo settings). Báo lại nếu muốn được
hỗ trợ thiết lập phần này.

## Form liên hệ (Web3Forms)

Trang `/lien-he` dùng [Web3Forms](https://web3forms.com) để gửi email khi khách
điền form — không cần backend riêng. Access key đã được gắn sẵn trong
`components/ContactForm.js`.

## Cập nhật nội dung sau này

- Sửa trực tiếp `data/products.js` hoặc `data/accessories.js` (mỗi sản phẩm là 1
  object có `slug`, `title`, `image`, `excerpt`, `contentHtml`)
- Thêm ảnh mới vào `public/images/products/`
- Chạy lại `npm run build` rồi upload lại thư mục `out/`
