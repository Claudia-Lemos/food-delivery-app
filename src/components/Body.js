import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [fliteredRestaurants, setFliteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Do lazy loading for list of restaurants....chapter 6.1(at the end)...fetch post call.
  //Get swiggy other features....deal for the day....whats on your mind...etc

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
         <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
          <button 
          onClick={()=>{
             const filteredRestaurants = listOfRestaurants.filter((res)=>
          res.info.name.toLowerCase().includes(searchText.toLowerCase()))
             setFliteredRestaurants(filteredRestaurants)
           }  }
          >Search</button>  
        </div> 
        <button
          className="filter-btn"
          onClick={() => {
             filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            console.log(filteredList);
            setFliteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {fliteredRestaurants.length > 0
          ? fliteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          : listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
