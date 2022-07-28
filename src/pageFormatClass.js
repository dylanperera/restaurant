import backgroundImageURL from "./images/lavender.jpg"; //returns the url of the image
import "./styles/pageFormat.css";

export default class Page {
  //#currentPage;
  //constructor creates page template
  constructor(body) {
    addBackgroundImg();

    //create header
    const header = createHeader();
    body.appendChild(header);

    const bodyInfo = createBody();
    body.appendChild(bodyInfo);
  }

  //method to add info to home page
  populateHomePage(inputFunction) {
    inputFunction();
  }

  //method to add info to contact page
  populateContactPage(inputFunction) {
    inputFunction();
  }

  //method to add info to menu page
  populateMenuPage(inputFunction) {
    inputFunction();
  }

  removeCurrentContent() {
    const contentBody = document.getElementById("pagesInfo");
    contentBody.textContent = "";
  }
}

function addBackgroundImg() {
  const background = document.createElement("img");
  background.src = backgroundImageURL;
}

function createHeader() {
  const header = document.createElement("div");
  header.id = "pageHeader";

  const headerTitle = document.createElement("p");
  headerTitle.id = "headerTitle";
  headerTitle.textContent = "Lavender Catering";
  header.appendChild(headerTitle);

  const headerOptions = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    let currentPageOption = document.createElement("li");
    if (i == 0) {
      currentPageOption.textContent = "Home";
    } else if (i == 1) {
      currentPageOption.textContent = "Menu";
    } else {
      currentPageOption.textContent = "Contact";
    }
    currentPageOption.id = "currentPageOption";
    headerOptions.appendChild(currentPageOption);
  }

  header.append(headerOptions);
  return header;
}

function createBody() {
  const bodyInfo = document.createElement("div");
  bodyInfo.id = "pageInfo";
  return bodyInfo;
}
