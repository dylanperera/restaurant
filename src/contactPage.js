import locationImg from "./images/mapLocation.png";
import './styles/contactPageStyle.css';

export default function fillContactPage() {
  const contentBox = document.getElementById("pageInfo");
  contentBox.classList.add('contactpageInfo');

  //create phone icon + number
  const phoneNum = document.createElement("div");
  phoneNum.classList.add('inlineDiv');
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid", "fa-mobile-screen");
  phoneNum.appendChild(phoneIcon);
  const phoneNumber = document.createElement('div');
  phoneNumber.textContent = ' 647-393-8453';
  phoneNum.appendChild(phoneNumber);

  phoneNum.style.display = "inline";

  //create location icon + address
  const location = document.createElement("div");
  location.classList.add('inlineDiv');
  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fa-solid", "fa-location-dot");
  location.appendChild(locationIcon);
  const locationText = document.createElement('div');
  locationText.textContent = " 2260 Bovaird Dr E #121, Brampton, ON L6R 3J5";
  location.appendChild(locationText);

  //map location img
  const mapImg = document.createElement('img');
  mapImg.src = locationImg;
  mapImg.id = 'mapimg';

  //add content
  contentBox.appendChild(phoneNum);
  contentBox.appendChild(location);
  contentBox.appendChild(mapImg);
}
