import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card(){
    const {cardID} = useParams();
    console.log(cardID);

    const cities =useSelector((state)=>
        state.cities.value.filter((city)=>city.id == cardID.toString())
);

console.log(cities)
    return(
        <>
        <Navbar></Navbar>
            <h1>{cities[0].name}</h1>
            <div>
                {cities[0].isVisited && (
                    <span>visitata</span>
                )}
                {!cities[0].isVisited && (
                    <span>non visitata</span>
                )}
            </div>
            <img src={cities[0].imgUrl} alt=""></img>
            {cities[0].description}
        </>
    );
}

export default Card;