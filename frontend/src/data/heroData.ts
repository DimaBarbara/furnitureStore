import type { SliderItem } from "../types/data";

const sliderData: SliderItem[] = [
  {
    id: 1,
    imageUrl: "/img/photo1.png",
    altText: "Меблі ручної роботи на замовлення",
    title: "Виробляємо меблі з 1997 року.",
    subtitle: "Перевірена якість, що служить десятиліттями.",
    description:
      "Наш багаторічний досвід — гарантія якості. Ми знаємо, як створювати меблі, які витримають випробування часом.",
    circles: [
      { id: 1, svg: "/svg/photo.svg", title: "25+", subtitle: "років досвіду" },
      {
        id: 2,
        svg: "/svg/people.svg",
        title: "2",
        subtitle: "майстри-засновники",
      },
      {
        id: 3,
        svg: "/svg/star.svg",
        title: "100%",
        subtitle: "ручна перевірка",
      },
    ],
  },
  {
    id: 2,
    imageUrl: "/img/photo2.png",
    altText: "Сучасна кухня на замовлення",
    title: "Швидко, Круто, Без Посередників.",
    subtitle: "Ваші унікальні меблі всього за 14 днів!",
    description:
      "Оскільки ми працюємо без величезного штату, ми гарантуємо швидке виконання замовлень та пряму комунікацію з майстрами. Це економить ваш час та гроші.",
    circles: [
      {
        id: 4,
        svg: "/svg/photo.svg",
        title: "14",
        subtitle: "днів виробництва",
      },
      {
        id: 5,
        svg: "/svg/people.svg",
        title: "від -15%",
        subtitle: "дешевше конкурентів",
      },
      {
        id: 6,
        svg: "/svg/star.svg",
        title: "3D",
        subtitle: "безкоштовний дизайн",
      },
    ],
  },

  {
    id: 3,
    imageUrl: "/img/photo3.png",
    altText: "Екологічна шафа-купе",
    title: "Чесні ціни від сімейної майстерні.",
    subtitle: "Жодного компромісу між ціною та якістю матеріалів.",
    description:
      "Наші ціни приємно здивують, тому що ви платите за роботу, а не за утримання офісів та менеджерів. Ми використовуємо лише перевірену фурнітуру та екологічні матеріали.",
    circles: [
      { id: 7, svg: "/svg/photo.svg", title: "5", subtitle: "років гарантії" },
      {
        id: 8,
        svg: "/svg/people.svg",
        title: "0",
        subtitle: "прихованих платежів",
      },
      { id: 9, svg: "/svg/star.svg", title: "A+", subtitle: "еко-матеріали" },
    ],
  },
];

export default sliderData;
