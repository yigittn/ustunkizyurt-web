/**
 * Dile bağlı olmayan site sabitleri: iletişim bilgileri ve sosyal hesaplar.
 * Metinler için `src/i18n/dictionaries` kullanılır.
 */

export const site = {
  /** Marka adı — çevrilmez, her dilde aynı. */
  name: "Üstün Kız Öğrenci Yurdu",
  url: "https://ustunkizyurdu.com",
} as const;

export const contact = {
  /**
   * Site genelinde gösterilen ana numara. WhatsApp hattıyla aynıdır;
   * kullanıcı ister arayabilir ister mesaj atabilir.
   */
  phone: "0533 579 99 25",
  phoneHref: "tel:+905335799925",
  whatsapp: "0533 579 99 25",
  whatsappHref: "https://wa.me/905335799925",
  /**
   * Tek iletişim adresi. Gmail kullanıcı adlarında Türkçe karakter
   * bulunamadığı için "ö" yerine "o" yazılmıştır (Instagram hesabıyla
   * da aynı: ustunkizogrenciyurdu).
   */
  email: "ustunkizogrenciyurdu@gmail.com",
  address: "Görükle, Üçoluk Cd. No:39, 16285 Nilüfer/Bursa",
  addressShort: "Görükle, Nilüfer / Bursa",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=G%C3%B6r%C3%BCkle+%C3%9C%C3%A7oluk+Cd.+No%3A39+16285+Nil%C3%BCfer+Bursa",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=G%C3%B6r%C3%BCkle%20%C3%9C%C3%A7oluk%20Cd.%20No%3A39%2016285%20Nil%C3%BCfer%20Bursa&z=16&output=embed",
} as const;

export const social = {
  instagram: "https://www.instagram.com/ustunkizogrenciyurdu/",
} as const;
