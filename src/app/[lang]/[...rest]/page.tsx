import { notFound } from "next/navigation";

/**
 * Eşleşmeyen adresleri yakalar ve `[lang]/not-found.tsx`'i tetikler.
 *
 * Buna gerek var çünkü App Router, hiçbir rotayla eşleşmeyen adreslerde
 * kök `not-found`'u kullanıyor; sitenin kök düzeni `[lang]` altında
 * olduğu için markalı 404 sayfası aksi hâlde hiç render edilmiyordu.
 * Sabit segmentler (hakkimizda, galeri…) bu yakalayıcıdan önce eşleşir.
 *
 * Not: burada `generateMetadata` yazmak işe yaramıyor — `notFound()`
 * render'ı kestiği için sayfa başlığı düzenden gelir. Doğru 404 durum
 * kodu ve Next'in eklediği `noindex` etiketi yerinde olduğundan
 * arama motorları açısından sorun yok.
 */
export default function CatchAllPage(): never {
  notFound();
}
