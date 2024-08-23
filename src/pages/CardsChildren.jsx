
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import CardItem from "../components/Carditem";

function CardsChildren(){
    const cities = useSelector((state)=>state.cities.value);

    return(
        <>
        <Navbar></Navbar>

            <h1>Pagina CardsChildren</h1>
            <div>
                {cities.map((city)=>(
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <CardItem
                        title={city.name}
                        isVisited={city.isVisited}
                        imgUrl={city.imgUrl}>
                            {city.description}
                        </CardItem>
                    </Link>
                ))}
            </div>
            <Outlet/>
        </>
    );
}

export default CardsChildren;