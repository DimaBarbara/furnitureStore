import type { CategoryGridItem } from "../types/data";

const categoriesData: CategoryGridItem[] = [
  {
    id: 1,
    title: "ВІТАЛЬНІ",
    description:
      "Створи простір для затишку й зустрічей. Меблі, що поєднують комфорт, стиль і функціональність.",
    price: "$1,299",
    availability: "Під замовлення / В наявності: 2030 шт.",
    imageUrl: "/img/livingRoom.png",
    linkUrl: "/living-rooms",
  },
  {
    id: 2,
    title: "СПАЛЬНІ",
    description:
      "Місце для відпочинку й гармонії. Ліжка, шафи та тумби, що створюють атмосферу спокою.",
    price: "$1,049",
    availability: "Під замовлення / В наявності: 1540 шт.",
    imageUrl: "/img/bedroom.png",
    linkUrl: "/bedrooms",
  },
  {
    id: 3,
    title: "САНВУЗЛИ",
    description:
      "Сучасні меблі для ванної — функціональні, стильні та вологостійкі рішення для твого комфорту.",
    price: "$899",
    availability: "Під замовлення / В наявності: 860 шт.",
    imageUrl: "/img/bathrooms.jpg",
    linkUrl: "/bathrooms",
  },
  {
    id: 4,
    title: "ДИТЯЧІ",
    description:
      "Безпечні та яскраві меблі, що ростуть разом із твоєю дитиною. З любов’ю до кожної деталі.",
    price: "$749",
    availability: "Під замовлення / В наявності: 1120 шт.",
    imageUrl: "/img/childrensRoom.png",
    linkUrl: "/kids-rooms",
  },
  {
    id: 5,
    title: "ПРИХОЖІ",
    description:
      "Практичні рішення для зберігання та організації простору. Перші враження починаються з прихожої.",
    price: "$599",
    availability: "Під замовлення / В наявності: 650 шт.",
    imageUrl: "/img/hallway.png",
    linkUrl: "/hallways",
  },
  {
    id: 6,
    title: "КУХНІ",
    description:
      "Твоя територія натхнення. Сучасні кухні, де дизайн поєднується з функціональністю та зручністю.",
    price: "$1,499",
    availability: "Під замовлення / В наявності: 1240 шт.",
    imageUrl: "/img/kitchen.jpeg",
    linkUrl: "/kitchens",
  },
];

export default categoriesData;
