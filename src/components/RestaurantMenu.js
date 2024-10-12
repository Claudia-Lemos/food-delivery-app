import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

const {resId} = useParams(); 
const resInfo = useRestaurantMenu(resId);
console.log(resInfo);

if (resInfo === null) 
  return <Shimmer/>;


const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;


const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



console.log(itemCards);

console.log(categories);


return (
<div className ="text-center">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
         <h2>MENU :</h2>
{categories.map((category)=>(
<RestaurantCategory/>
))
}




{/* <ul>
  { itemCards.map((item) => (
<li key={item.card.info.id}>{item.card.info.name} - {" Rs. "}
{ item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
))} 

</ul>    */}
     </div>
)     
  }

export default RestaurantMenu;