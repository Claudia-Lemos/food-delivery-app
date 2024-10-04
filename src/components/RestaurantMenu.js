import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resInfo, setResInfo} = useState(null)

    useEffect ( () =>{
    fetchMenu();
    },[])
    
const fetchMenu = async () => {
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=326931&catalog_qa=undefined&submitAction=ENTER");
const json = await data.json();
setResInfo (json.data)
}

if (resInfo === null) 
return <Shimmer/>

const { name, areaName, cuisines, costForTwoMessage, cloudinaryImageId, 
    avgRatingString } = resInfo?.cards[2]?.card?.card?.info

const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.

console.log(itemCards);

    return (
        <div className="menu">
            <p>
        <h1>{name}</h1>
        <h2>{areaName} {avgRatingString }</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        </p>
        <h2>MENU</h2>
        <ul></ul>
        </div>
    )
}

export default RestaurantMenu;