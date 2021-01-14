import { useState, useEffect } from 'react';
import Card from './Card';
import ModalExampleModal from './modals/modal'
import axios from 'axios';

const CardContainer = () => {
    const [potions, setPotions] = useState([]);
    console.log("potions", potions)

    useEffect(() => {
    axios.get("http://localhost:5000/potions")
    .then((x) => {
        console.log(x);
        setPotions(x.data)});
    }, []);
    return (
        <div>
            {potions && potions.map((potion, index) => {
                return(
                    <div>
                        <Card info={potion} key={index} />
                        <ModalExampleModal info={potion} key={index}/>
                    </div>
                )
            })}
        </div>
    )
}
export default CardContainer;

