import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sayfa kaynağında Next.js sürümünü açığa çıkarmayalım
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Site başka bir sayfada çerçeve içine alınamasın (clickjacking)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Tarayıcı içerik tipini tahmin etmeye çalışmasın
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Dış sitelere tam adres yerine yalnızca alan adı gitsin
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Kullanılmayan cihaz izinlerini kapat
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
