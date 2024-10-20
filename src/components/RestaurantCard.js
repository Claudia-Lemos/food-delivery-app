import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla,locality } =
    resData?.info;

  return (
    <div className="m-2 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[480px]" >
      <img 
        className="rounded-lg h-2/12"
        alt="res-logo"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="text-sm">
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">{costForTwo} • {avgRating} stars</h4>
      <h4 className="py-1"> {locality} • {sla.deliveryTime} minutes</h4>
      <h4 className="py-1"></h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {

  return () => {
    return (
    <div>
      <label>Promoted</label>
      <RestaurantCard/>
    </div>

    )
  }
}

export default RestaurantCard;
