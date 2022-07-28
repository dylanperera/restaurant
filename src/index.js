import PageTemplate from "./pageFormatClass.js";
import fillHomePage from "./homePage.js";
import fillContactPage from "./contactPage.js";

import fillMenuPage from "./menuPage.js";

main();

function main() {
  const body = document.querySelector("body");
  const website = new PageTemplate(body);

  let currentPage = "home page";
  website.populateHomePage(fillHomePage);
  const headerOptions = Array.from(
    document.getElementById("pageHeader").lastChild.children
  );
  let bodyContent = document.getElementById("pageInfo");
  changeOptionUi(currentPage, headerOptions);

  for (let i = 0; i < 3; i++) {
    headerOptions[i].addEventListener("click", () => {
      if (i == 0) {
        if (currentPage != "home page") {
          if (currentPage == "menu page") {
            bodyContent.classList.remove("menupageInfo");
          } else if (currentPage == "contact page") {
            bodyContent.classList.remove("contactpageInfo");
          }

          currentPage = "home page";
          website.removeCurrentContent();
          website.populateHomePage(fillHomePage);
          changeOptionUi(currentPage, headerOptions);
        }
      } else if (i == 1) {
        if (currentPage != "menu page") {
          if (currentPage == "home page") {
            bodyContent.classList.remove("homepageInfo");
          } else if (currentPage == "contact page") {
            bodyContent.classList.remove("contactpageInfo");
          }

          currentPage = "menu page";
          website.removeCurrentContent();
          website.populateMenuPage(fillMenuPage);
          changeOptionUi(currentPage, headerOptions);
        }
      } else {
        if (currentPage == "home page") {
          bodyContent.classList.remove("homepageInfo");
        } else if (currentPage == "menu page") {
          bodyContent.classList.remove("menupageInfo");
        }

        currentPage = "contact page";
        website.removeCurrentContent();
        website.populateContactPage(fillContactPage);
        changeOptionUi(currentPage, headerOptions);
      }
    });
  }

  
}

function changeOptionUi(currentPage, headerOptions) {
  if (currentPage == "home page") {
    headerOptions[0].style.borderBottom = "1px solid white";
    headerOptions[1].style.borderBottom = "none";
    headerOptions[2].style.borderBottom = "none";
  } else if (currentPage == "menu page") {
    headerOptions[0].style.borderBottom = "none";
    headerOptions[1].style.borderBottom = "1px solid white";
    headerOptions[2].style.borderBottom = "none";
  } else if (currentPage == "contact page") {
    headerOptions[0].style.borderBottom = "none";
    headerOptions[1].style.borderBottom = "none";
    headerOptions[2].style.borderBottom = "1px solid white";
  }
}
