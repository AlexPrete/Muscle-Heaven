import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardItem from "../components/Carditem";
import { useSelector } from "react-redux";

function Cards(){
const cities = useSelector((state) => state.cities.value);
    return(
        <>
        <Navbar></Navbar>
            <h1>Pagina Cards</h1>
    <div className='grid grid-cols-4 gap-5'>
        {cities.map((city)=>(
    <Link to={`/cards/${city.id}`} key={city.id}>
      <CardItem
        
        title={city.name}
        isVisited={city.isVisited}
        imgUrl={city.imgUrl}>
          {city.description}
      </CardItem>

      </Link>
    ))}
  </div>
        </>
    );
}

export default Cards;