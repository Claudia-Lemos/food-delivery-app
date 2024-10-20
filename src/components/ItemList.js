import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    
    return ( 
    <div> 
{/* Work on deep nesting for some */}

        {items.map((item) =>(
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
        <div className="w-9/12">
            <div className="py-2 ">
            <spam>{item.card.info.name}</spam>
            <spam> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</spam>
            </div>
        <p className="text-xs">{item.card.info.description}</p>
    </div>
<div className="w-3/12 p-4 relative">
<div className="absolute"> 
    <button className="p-1 mx-16 rounded-lg bg-black text-yellow-50 shadow-lg text-sm top-0 left-0">Add+</button>
</div>
<img className="w-full" src={CDN_URL + item.card.info.imageId}></img>
</div>

</div>
))}
</div>
    )} 

export default ItemList;