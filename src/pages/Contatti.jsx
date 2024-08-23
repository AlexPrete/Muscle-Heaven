import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProva";

function Contatti(){
    useCounterProva();
    return(
        <>
        <Navbar></Navbar>
            <h1 className="">Pagina Contatti</h1>
        </>
    );
}

export default Contatti;