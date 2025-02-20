import { TAssortmentItem } from "../types/types";

import phillyRoll from "../assets/philly-roll.jpg";
import californiaRoll from "../assets/california-roll.jpg";
import spicyTuna from "../assets/spicy-tuna.jpg";
import dragonRoll from "../assets/dragon-roll.jpg";
import tempura from "../assets/tempura.jpg";
import syakeMaki from "../assets/syake-maki.jpg";
import tekkaMaki from "../assets/tekka-maki.jpg";
import gunkanIkra from "../assets/gunkan-ikra.jpg";
import unagiMaki from "../assets/unagi-maki.jpg";
import vegan from "../assets/vegan.jpg";
import { ImageSourcePropType } from "react-native";

const imageSources: { [key: string]: ImageSourcePropType } = {
  "philly-roll": phillyRoll,
  "california-roll": californiaRoll,
  "spicy-tuna": spicyTuna,
  "dragon-roll": dragonRoll,
  tempura: tempura,
  "syake-maki": syakeMaki,
  "tekka-maki": tekkaMaki,
  "gunkan-ikra": gunkanIkra,
  "unagi-maki": unagiMaki,
  vegan: vegan,
};

const hardcodedData: TAssortmentItem[] = [
  {
    id: "1",
    title: "Филадельфия",
    img: "philly-roll",
    price: 450,
    weight: 250,
    ingredients:
      "Лосось, сливочный сыр, авокадо, огурец, рис, нори, кунжут, острый соус, майонез, сыр филадельфия, зеленый лук, васаби, имбирь.",
  },
  {
    id: "2",
    title: "Калифорния",
    img: "california-roll",
    price: 400,
    weight: 230,
    ingredients:
      "Краб, авокадо, огурец, икра тобико, майонез, рис, нори, зеленый лук, соус терияки, васаби, кунжут, чеснок, уксус, имбирь.",
  },
  {
    id: "3",
    title: "Спайси тунец",
    img: "spicy-tuna",
    price: 470,
    weight: 240,
    ingredients:
      "Тунец, майонез, огурец, специи, рис, нори, острый соус, кунжут, зеленый лук, авокадо, васаби, имбирь.",
  },
  {
    id: "4",
    title: "Дракон",
    img: "dragon-roll",
    price: 500,
    weight: 260,
    ingredients:
      "Угорь, авокадо, соус унаги, рис, нори, кунжут, соус соевый, васаби, имбирь, зелень, томаты.",
  },
  {
    id: "5",
    title: "Эби темпура",
    img: "tempura",
    price: 480,
    weight: 250,
    ingredients:
      "Креветка в темпуре, сливочный сыр, огурец, авокадо, рис, нори, кунжут, соус унаги, чеснок, имбирь, васаби, соевый соус.",
  },
  {
    id: "6",
    title: "Сякэ маки",
    img: "syake-maki",
    price: 320,
    weight: 150,
    ingredients:
      "Лосось, рис, нори, кунжут, соус соевый, васаби, имбирь, зелень.",
  },
  {
    id: "7",
    title: "Текка маки",
    img: "tekka-maki",
    price: 330,
    weight: 150,
    ingredients: "Тунец, рис, нори, кунжут, соевый соус, васаби, имбирь.",
  },
  {
    id: "8",
    title: "Гункан с икрой",
    img: "gunkan-ikra",
    price: 520,
    weight: 120,
    ingredients:
      "Икра, рис, нори, кунжут, авокадо, соус унаги, васаби, имбирь, соевый соус.",
  },
  {
    id: "9",
    title: "Унаги маки",
    img: "unagi-maki",
    price: 550,
    weight: 300,
    ingredients:
      "Унаги (угорь), рис, нори, авокадо, огурец, соус терияки, кунжут, майонез, васаби, имбирь, зелень, рисовый уксус.",
  },
  {
    id: "10",
    title: "Веган ролл",
    img: "vegan",
    price: 350,
    weight: 200,
    ingredients:
      "Авокадо, огурец, манго, кунжут, рис, нори, соус терияки, чеснок, уксус, имбирь, зелень.",
  },
];

export { hardcodedData, imageSources };
