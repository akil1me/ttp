import apple from "../../assets/images/apple.png";
import paddon from "../../assets/images/paddon.png";
import bucket from "../../assets/images/bucket.png";
import cola from "../../assets/images/cola.png";

export const categorys = [
  {
    id: 1,
    title: "vegetable drawer box",
    categorys: ["tamato", "grapo", "apple", "charry", "cabbbage"],
    sizes: ["400x300", "300x200"],
    colors: ["#F7DE26", "#43514F", "#863228"],
    price: 8000,
    img: apple,
  },
  {
    id: 2,
    title: "palled",
    categorys: ["standart", "euro"],
    sizes: ["400x300", "300x200"],
    colors: ["#CEDDE5", "#171D21"],
    price: 250000,
    img: paddon,
  },
  {
    id: 3,
    title: "bucket",
    categorys: ["housekeeper", "emulsee"],
    sizes: ["17l/720g", "11l/520", "7l/320g"],
    colors: ["#2794CD", "#DD1E1E", "#27BA74"],
    price: 19100,
    img: bucket,
  },
  {
    id: 4,
    title: "beverage box",
    categorys: ["pepsi", "coca-cola"],
    sizes: ["400x300", "300x200"],
    colors: ["#2794CD", "#DD1E1E", "#27BA74"],
    price: 70000,
    img: cola,
  },
];
