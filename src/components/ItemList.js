const ItemList = ({items}) => {
    
    return ( 
    <div> 
{/* Work on deep nesting for some */}

        {items.map((item) =>(
        <div key={item.card.info.id} >
        <div><spam>{item.card.info.name}</spam><spam>{item.card.info.price}</spam></div>
        <p>{item.card.info.description}</p>
    </div>
))}
    </div>
    )}

export default ItemList;