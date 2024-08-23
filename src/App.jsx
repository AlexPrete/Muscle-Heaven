

import Navbar from './components/Navbar';
import CardForm from './components/CardForm';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Example from './components/Example';



// creo la funzione che andrò poi a richiamare nel mio button
// function handleClick(){
//   alert("ciao")
// }
// // in questo modo usando e + e.target.value stampo in console NON tutto l'evento ma direttamente l'input messo dall'utente
// function handleChange(e){
//   console.log(e.target.value)
// }

// function handleSubmit(e){
//   // il PREVENT DEFAULT è molto importante per evitare che la pagina venga ricaricata ogni volta, perdendo quindi il concetto di SPA 
//   e.preventDefault()
//   console.log(e)
// }

// UTILIZZO DI REDUCER

// function formReducer(state, action){
//     switch(action.type){
//       case "CHANGE_FIELD":
//         return {...state, [action.field]: action.value};
//       case "RESET_FORM":
//         return {name: '', email: ''};
//       default:
//         return state;
//     }
// }


function App() {
  //const cities = useSelector((state) => state.cities.value);
  // const [count, setCount] = useState(0);
  // const [items, setItems] = useState([1,2,3]);
  // const [user, setUser]   = useState({name: "Sara", age:38});
  // console.log(items);
  // console.log(user);

  // state per le chiamata http
  //const [data, setData] = useState([]);

  //state per il form gestito con useReducer
  //const[formState, dispatchFormState] = useReducer(formReducer, {name: '', email: ''})

  // const handleFieldChange = (field, value) => {
  //   //il dispatch fa da tramite, è come se chiamasse la modifica
  //   //                  ACTION
  //   dispatchFormState({type: "CHANGE_FIELD",field,value })
  // }

  // const resetForm = (e) => {
  //   e.preventDefault();
  //   dispatchFormState({type: "RESET_FORM"})
  // }

  // const sendForm = (e) => {
  //   e.preventDefault();
  //   console.log(formState);
  // }
    



//   const aggiungiItem = () => {
//     const nuovoItem = 4;
//     setItems([...items, nuovoItem]); // ...items è lo SPREAD OPERATOR e serve e mantenere lo stato, in questo caso il mio array sarà 1,2,3,4 e non solo 4
//     console.log(items);
//   };
// // stesso esempio di spread operator ma con il cambio nome di un utente
//   const updateUserName = () => {
//     const updatedUser = {...user, name: "Sola"};
//     setUser(updatedUser); 
//     console.log(user);
//   };

// // finzione per aggiungere città al mio array di oggetti, usando il form CardForm
// const addCity = (city) =>{
//     setCities([...cities, city]);
// };


//  CHIAMATE HTTP

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//       setData(data);
//       console.log(data)});
// },[count]);


// le nostre città ora sono uno stato react useState
  // const [cities, setCities] = useState ([
  //   {
  //     id: 0,
  //     name: "Tokyo",
  //     imgUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
  //     isVisited: true,
  //   },
  //   {
  //     id: 1,
  //     name: "New York",
  //     imgUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
  //     isVisited: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Rome",
  //     imgUrl: "https://images.unsplash.com/photo-1548585742-1df49e753a83?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
  //     isVisited: true,
  //   },
  //   {
  //     id: 3,
  //     name: "London",
  //     imgUrl: "https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
  //     isVisited: false,
  //   }
  // ]);

  return (
    
  //   //<ProvaContext.Provider value={{count, setCount}}>

  //   //<Example cities={cities}></Example>

  //   {/* USO CARD FORM IN APP JSX E GLI PASSO LA FUNZIONE (ADDCITY) COME PROP */}
  //   //<CardForm addCity={addCity}></CardForm>


  //     {/* <Navbar /> */}
  //     {/* utilizzo di tailwind */}
  //     <div className='grid grid-cols-4 gap-10'>
  //       {cities
  //       //.filter((city)=>city.isVisited) //con filter nascondo dalla lista le città non visitate
  //       .map((city) => (
  //         <Card
  //           key={city.id} //quando vado a lavorare con gli array DEVO usare la key (di solito si usa l'id)
  //           title={city.name}

  //           // posso utilizzare lo state anche quando vado a generare qualcosa, tipo le card
  //           //title={count}

  //           isVisited={city.isVisited}
  //           imgUrl={city.imgUrl}
  //         >
  //           {city.description}
  //         </Card>
  //       ))}
      
  //     </div>


  //       {/* MANDO A SCHERMO IL CONTENTO DEL JSON TRAMITE CHIAMATA HTTP UTILIZZANDO FETCH  */}
  //       <h1>CARTE GENERATE TRAMITE CHIAMATA HTTP UTILIZZANDO LA FETCH</h1>
  //     <div className='grid grid-cols-4 gap-10 mt-5'>
  //       {data.map((item) => (
  //           <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
  //               <p className='text-red-500 mb1'>userId: {item.userId}</p>
  //               <h2 className='text-xl text-blue-300 underline mb-3'>{item.title}</h2>
  //               <p className='text-gray-800'>{item.body}</p>
  //           </div>
  //       ))}
  //     </div>
      

           


  // <div className='card'>
  //     <button onClick={()=> setCount((count)=>count +1)}>
  //       count is {count}
  //     </button>

  //       {/* devo usare l'arrow function altrimenti l'alert parte in loop all'avvio della pagina */}
  //     <button onClick={()=> alert(("ciao"))}>alert</button>

  //     {/* altro metodo */}
  //     <button onClick={handleClick}>alert</button>

  //     {/* ALTRI EVENTI */}
  //     <input onChange={handleChange} type="text" />

  //     <button onClick={aggiungiItem}>prova array con 4</button>

  //     <button onClick={updateUserName}>prova cambia nome </button>

  //     <form onSubmit={handleSubmit} action="">
  //         <button type='submit'>invia</button>
  //     </form>
  // </div>

  // <form>
  //   <div>
  //     <label htmlFor="name">Nome:</label>
  //     <input 
  //       type="text"
  //       id="name"
  //       name="name"
  //       value={formState.name}
  //       onChange={(e)=> handleFieldChange("name", e.target.value)}
  //      />
  //   </div>

  //   <div>
  //     <label htmlFor="email">Email:</label>
  //     <input 
  //       type="email"
  //       id="email"
  //       name="email"
  //       value={formState.email}
  //       onChange={(e)=> handleFieldChange("email", e.target.value)}
  //      />
  //   </div>
  //   <button onClick={resetForm}>Reset</button>
  //   <button onClick={sendForm}>Invia</button>
  // </form>

  //   </ProvaContext.Provider>
  <>
  <Navbar></Navbar>
  {/* <Example></Example> */}
  
  <CardForm></CardForm>
 
  </>
  );
}


export default App;
