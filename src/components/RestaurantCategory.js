import ItemList from "./ItemList"


const RestaurantCategory = ({data}) => {

const items = data.itemCards;
console.log(items);


return (
    <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex flex-col items-center">
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

    </div>
    {Array.isArray(items) && <ItemList items={items}/>}    
</div>
    
  )}


export default RestaurantCategory;