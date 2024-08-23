// import { useState, useEffect, useContext } from "react";
// import { ProvaContext } from "../stores/ProvaContext";
import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Example(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <p className="mb-3">Conteggio: {count}</p>
            <button
            className="mr-3"
            aria-label="Increment value"
            onClick={()=>dispatch(increment())}>
                Incrementa +
            </button>

            <button
            className="mr-3"
            aria-label="Decrement value"
            onClick={()=>dispatch(decrement())}>
                Decrementa -
            </button>
        </div>
    );
}

export default Example;

































































// // eslint-disable-next-line react/prop-types
// function Example({cities}){
//     // ESEMPIO DI UTILIZZO DEL CONTEXT
//     const {count, setCount} = useContext(ProvaContext);

//     // const [count, setCount] = useState(0);
//     // //duplichiamo lo state per le chiamata http
//     // //const [data, setData] = useState(null);


//     // // modo corretto, adesso il conteggio e il titolo del documento sono sincronizzati, tramite useEffect
//     // useEffect(()=>{
//     //     document.title = `Conteggio: ${count}`; 
//     //     // count fa parte di un array di dipendenze
//     // },[count]);

//     // useEffect(()=>{
//     //     document.title = `Conteggio: ${count}`; 
//     //     // se nello useEffect NON  metto nessuna dipendenza specifica, ci affidiamo a QUALSIASI update del componente 
//     //     console.log("ciao da useEffect");
//     // });

//     // useEffect(()=>{
//     //     document.title = `Conteggio: ${count}`; 
//     //     // mettendo un array VUOTO, diciamo che questo useEffect venga lanciato SOLO la prima volta che il componente viene creato
//     //     console.log("ciao da useEffect");
//     // // eslint-disable-next-line react-hooks/exhaustive-deps
//     // },[]);

//     // useEffect(()=>{
//     //     document.title = `Conteggio: ${count}`; 
//     //     // nell'array con count ho passato anche cities (preso da app.jsx quando richiamo Example), adesso lo useEffect si aggiorna anche al cambiamento di cities (cards)
//     // },[count, cities]);

//     // //utilizzo del localStorage
//     // useEffect(()=>{
//     //     localStorage.setItem("count", count.toString()); 
//     //     document.title = `Conteggio: ${count}`; 
//     //     console.log("ciao da useEffect");
//     //     },[count, cities]);
        

// // in questo modo il mio conteggio non è sincronizzato con l'effettivo titolo del documento, il titolo sarà sempre di 1 indietro

//     // const handleClick = () => {
//     //     setCount (count + 1);
//     //     document.title = `Conteggio: ${count}`;
//     // };

//     // CHIAMATE HTTP 
//     // fetch
//     // useEffect(()=>{
//     //     fetch("https://jsonplaceholder.typicode.com/posts")
//     //     .then((response) => response.json())
//     //     .then((data) => {
//     //         setData(data);
//     //         console.log(data)});
//     // },[count]);

//     return (
//         <div>
//             <p>conteggio: {count}</p>

           

//             {/* passo setCount direttamente all' onCick */}
//             <button onClick={()=>setCount (count + 1)}>incrementa</button>
//         </div>
//     );
// }

// export default Example;