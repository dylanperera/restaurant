import lumpRicePic from "./images/lumpRice.png";
import brieSpecialPic from "./images/brieSpecial.png";
import buffetPic from "./images/buffet.png";
import custardPic from "./images/custard.png";
import fruitPlatterPic from "./images/fruitPlatter.png";
import intoTheSeaPic from "./images/intoTheSea.png";
import lunchSpecialPic from "./images/lunchSpecial.png";
import riceKabobPic from "./images/riceKabob.png";

import './styles/menuPageStyles.css';

export default function fillMenuPage() {
  const contentBody = document.getElementById("pageInfo");
  contentBody.classList.add('menupageInfo');
  attachFoodCards(contentBody);
}

function attachFoodCards(contentBody) {
  const foodNames = [
    "Lump Rice",
    "Brie Special",
    "Buffets",
    "Sea Food",
    "Lunch Specials",
    "Rice Kabob Special",
    "Fruit Platter",
    "Custard",
  ];
  const foodPics = [
    lumpRicePic,
    brieSpecialPic,
    buffetPic,
    intoTheSeaPic,
    lunchSpecialPic,
    riceKabobPic,
    fruitPlatterPic,
    custardPic,
  ];

  
  for (let i = 0; i < 8; i++) {
    const currentCard = document.createElement("div");
    currentCard.id = "foodCard";

    const currentCardTitle = document.createElement("div");
    currentCardTitle.textContent = foodNames[i];

    const currentCardPic = document.createElement("img");
    currentCardPic.src = foodPics[i];
    currentCardPic.id = "foodimg";


    currentCard.appendChild(currentCardPic);
    currentCard.appendChild(currentCardTitle);


    contentBody.appendChild(currentCard);
  }
}
