import { useState } from "react";
import ItemList from "./ItemList"


const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
     };


    const items = data.itemCards;
console.log(items);



return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
    <div className="flex justify-between cursor-pointer" onClick={handleClick} >
        <span className="font-bold text-lg">
            {data.title} 
            { data.itemCards ? `(${data.itemCards.length})` : `(${data.categories.length})` }
             </span>
        <span>⬇️</span>

        {/* {data?.categories?.map((category) => (
            <div key={data.id} className="flex flex-col items-center">
                <span>{category.title}  </span>
                <span>⬇️</span>
            </div>
        ))} */}

    
    {showItems && <ItemList items={items}/>}    
</div>
</div>
  )}


export default RestaurantCategory;