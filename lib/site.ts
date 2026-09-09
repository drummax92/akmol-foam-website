const twoGisOrgId = "70000001018079119";

export const siteConfig = {
  companyName: "Акмолинские пенопласты",
  legalName: "ТОО «Акмолинские пенопласты»",

  phoneNumber: "+77015445489",
  whatsappNumber: "77011714040",

  displayPhone: "8 (701) 544-54-89",
  displayWhatsapp: "8 (701) 171-40-40",

  address: "Трасса Астана-Караганда, 25, Астана",

  workingHours: "Пн–Сб: 09:00–17:00, Вс: выходной",

  twoGisOrgId,
  twoGisUrl: `https://2gis.kz/astana/firm/${twoGisOrgId}?m=71.553781%2C51.138286%2F18.55`,

  priceDate: "29.06.2026",
};

export const navItems = [
  { label: "Главная", href: "/" },
  { label: "Продукция и цены", href: "/products" },
  { label: "Калькулятор", href: "/calculator" },
  { label: "Доставка и контакты", href: "/delivery" },
];
