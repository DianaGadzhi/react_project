import React from "react";
import { ReactComponent as IconHeader } from "../assets/icons/nikeIcon.svg";
import imgCard1 from "../assets/imgCard1.png";
import imgCard2 from "../assets/imgCard2.png";
import shadowImg1 from "../assets/shadowImg1.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export const CardData = [
  {
    iconHeader: <IconHeader />,
    titleHeader: "Nike",
    status: "Активное",
    image: `${imgCard1}`,
    shadow: `${shadowImg1}`,
    title: "Записать сторис в кросcовках Nike Air Max 720",
    giftTitle: "Репост строис в официальном аккаунте NikeRussia",
    item1: "55",
    item2: "0",
    item3: "1н : 2д : 23ч : 20м : 10с",
    item4: "250 / 3 000",
  },
  {
    iconHeader: <IconHeader />,
    titleHeader: "Nike",
    status: "Активное",
    image: `${imgCard2}`,
    shadow: `${imgCard2}`,
  
    avatars: [
      //  `${img2}`, `${img3}`
      
      {
        img1: `${img1}`,
        img2: `${img2}`,
        img3: `${img3}`
      }, 
      
      
    ],
    title: "Опубликовать сторис в Инстаграм со словами “Just Do It",
    giftTitle: "10% скидка в интернет-магазине",

    item1: "3",
    item2: "+3",
    item3: "23ч : 20м : 10с",
    item4: "250 / 3 000",
  },
];
