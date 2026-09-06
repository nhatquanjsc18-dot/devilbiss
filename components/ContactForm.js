"use client";

import { useState } from "react";

const WEB3FORMS_KEY = "59b6b1c8-f026-4011-afea-a77acb1f09e8";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black/10 bg-white p-8 shadow-card md:p-10"
    >
      <h2 className="heading-md mb-2 text-primary-dark">Gửi yêu cầu tư vấn</h2>
      <p className="mb-7 text-sm text-ink/60">
        Điền thông tin bên dưới, Nhất Quán sẽ liên hệ lại để tư vấn sản phẩm và
        báo giá phù hợp.
      </p>

      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="Yêu cầu tư vấn mới từ website Nhất Quán - Devilbiss"
      />
      <input
        type="hidden"
        name="from_name"
        value="Website Nhất Quán - Devilbiss"
      />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />

      <div className="mb-4">
        <label htmlFor="cfName" className="mb-1.5 block text-sm font-semibold">
          Họ và tên
        </label>
        <input
          id="cfName"
          name="name"
          type="text"
          required
          className="w-full border border-black/15 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cfPhone" className="mb-1.5 block text-sm font-semibold">
          Số điện thoại
        </label>
        <input
          id="cfPhone"
          name="phone"
          type="tel"
          required
          className="w-full border border-black/15 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cfEmail" className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input
          id="cfEmail"
          name="email"
          type="email"
          className="w-full border border-black/15 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="cfCompany"
          className="mb-1.5 block text-sm font-semibold"
        >
          Công ty / Đơn vị
        </label>
        <input
          id="cfCompany"
          name="company"
          type="text"
          className="w-full border border-black/15 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="cfProduct"
          className="mb-1.5 block text-sm font-semibold"
        >
          Sản phẩm quan tâm
        </label>
        <select
          id="cfProduct"
          name="product"
          className="w-full border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
        >
          <option value="">-- Chọn nhóm sản phẩm --</option>
          <option value="sung-phun-son">Súng phun sơn Devilbiss</option>
          <option value="phu-kien">Phụ kiện phun sơn</option>
          <option value="cha-nham">Máy chà nhám Mirka</option>
          <option value="khac">Khác / Chưa rõ</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="cfMessage"
          className="mb-1.5 block text-sm font-semibold"
        >
          Nội dung cần tư vấn
        </label>
        <textarea
          id="cfMessage"
          name="message"
          rows={4}
          required
          className="w-full resize-y border border-black/15 px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-solid w-full disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu →"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-semibold text-green-700">
          Gửi thành công! Nhất Quán sẽ liên hệ lại với bạn sớm nhất.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Có lỗi xảy ra khi gửi, vui lòng thử lại hoặc gọi hotline{" "}
          <a href="tel:0908050415" className="font-bold underline">
            0908 050 415
          </a>
          .
        </p>
      )}
    </form>
  );
}
