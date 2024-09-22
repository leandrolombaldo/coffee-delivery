import { json } from "@remix-run/react";
import { defineClientLoader } from "@remix-run/react/dist/single-fetch";
import { Cafe } from "~/@types/cafes.types";

const arrayCafes = [
  {
    id: "1",
    type: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: "2",
    type: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: "3",
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: "4",
    type: ["Tradicional"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: "5",
    type: ["Tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: "6",
    type: ["Tradicional", "com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: "7",
    type: ["Tradicional", "com leite"],
    name: "Cappuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: "8",
    type: ["Tradicional", "com leite"],
    name: "Mochaccino",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: "9",
    type: ["Tradicional", "com leite"],
    name: "Mochaccino",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
  {
    id: "10",
    type: ["especial", "com leite"],
    name: "Chocolate Quente",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
  {
    id: "11",
    type: ["Tradicional", "com leite"],
    name: "Cubano",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
  {
    id: "12",
    type: ["Tradicional", "com leite"],
    name: "Havaiano",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
  {
    id: "13",
    type: ["Tradicional", "com leite"],
    name: "Árabe",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
  {
    id: "14",
    type: ["Tradicional", "com leite"],
    name: "Irlandês",
    description: "Café expresso com leite vaporizado e espuma de leite",
    price: 9.9,
  },
];

export function getCafes(): Promise<Cafe[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayCafes);
    }, 2000); // Simulando atraso de 2 segundos
  });
}
