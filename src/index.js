import PageTemplate from './pageFormatClass.js';
import fillHomePage from './homePage.js';
main();

function main()
{
    const body = document.querySelector('body');
    const website = new PageTemplate(body);
    website.populateHomePage(fillHomePage);
}