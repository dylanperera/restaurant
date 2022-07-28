import chefPic from './images/chef.png';
import './styles/homePageStyles.css';
export default function fillHomePage()
{
    const contentBox = document.getElementById('pageInfo');
    contentBox.classList.add('homepageInfo');
    const mainText = document.createElement('div');
    mainText.textContent = "Best food in the country!";
    const secondaryText = document.createElement('div');
    secondaryText.textContent = "Serving you since 2020";
    const chefImg = document.createElement('img');
    chefImg.src = chefPic;
    chefImg.id = "chefimg";
    const thirdText = document.createElement('div');
    thirdText.textContent = "Order online or visit us!";
    contentBox.appendChild(mainText);
    contentBox.appendChild(secondaryText);
    contentBox.appendChild(chefImg);
    contentBox.appendChild(thirdText);
}