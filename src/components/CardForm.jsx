import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/citiesSlice';
// recupero la funzione addCity come prop e aggiungo la mia città (in questo caso manualmente e con un form fittizio), e la vado a renderizzare al premere del tasto

// eslint-disable-next-line react/prop-types
// function CardForm({addCity}){
// const [formData, setFormData ] = useState({
//     name: "",
//     description: "",
//     imgUrl: "",
//     isVisited: false,
// });

function CardForm(){
    const dispatch = useDispatch();
    const [formData, setFormData ] = useState({
    name: "",
    description: "",
    imgUrl: "",
    isVisited: false,
});



const handleImputChange = (e) => {
    const {name, value, type, checked} = e.target
    // così dico che se il type è value prende value, se è checkbox prende checked
    const inputValue = type == "checkbox" ? checked : value
    setFormData({
        ...formData,
        [name]: inputValue,
    });
};

const handleSubmit = (e) => {
    e.preventDefault()
    const city = {
        id: Math.random(),
        name: formData.name,
        description: formData.description,
        imgUrl: formData.imgUrl,
        isVisited: formData.isVisited,
    };

// riporto lo state del form a come era prima (vuoto)
    setFormData({
        name: "",
        description: "",
        imgUrl: "",
        isVisited: false,
    });
    
// AGGIUNTA CITTà CON REDUX E DISPATCH
    dispatch(add(city));

    // richiamo la funzione e l'elemento che mi deve passare
    // eslint-disable-next-line no-undef

    // VECCHIO MODO CON STATE AGGIUNTA CITTà
    //addCity(city)
};

// qui vado a dichiarare il mio count preso da context
//const {count} = useContext(ProvaContext);

    return(
        <form
         onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-80 mb-10 customCardform bg-zinc-900 p-5 rounded-lg">
            <div className="flex flex-col">
                <label>nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleImputChange}></input>
            </div>

            <div className="flex flex-col">
                {/* inserisco COUNT che prendo dal context */}
                <label>descrizione </label>
                <textarea name="description" value={formData.description} onChange={handleImputChange}></textarea>
            </div>

            <div className="flex flex-col">
                <label>immagine</label>
                <input type="text" name="imgUrl" value={formData.imgUrl} onChange={handleImputChange}></input>
            </div>

            <div className="flex flex-col">
                <label>visitata?</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleImputChange}></input>
            </div>
                
                <button className="bg-zinc-950" type="submit">aggiungi Card</button>
        </form>
    )
      
}

export default CardForm;