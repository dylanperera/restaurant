import PageTemplate from './pageFormatClass.js';
import fillHomePage from './homePage.js';
import fillContactPage from './contactPage.js';
import menuPage from './menuPage.js';

main();

function main()
{
    const body = document.querySelector('body');
    const website = new PageTemplate(body);
    //website.populateHomePage(fillHomePage);
    //website.populateContactPage(fillContactPage);
    website.populateMenuPage(menuPage);
}