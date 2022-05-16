import React, {useEffect, useState} from 'react';
import axios from "axios";

const Menu = () => {
    const [pizza,setPizza] = useState([])
    useEffect(() => {
        axios.get("https://motion-food.herokuapp.com/pizza-list")
            .then(({data}) => setPizza(data))
            .catch(e => {
                console.log(e)
            })
        // console.log("pizza",pizza)
    },[])
    console.log("pizza",pizza)
    return (
        <div className='container'>
                {
                    pizza?.results?.map(el => (
                        <div className='flex justify-between' key={el.id}>
                            <img src={el.image} alt=""/>
                            <p>{el.name}</p>
                        </div>
                    ))
                }
           
        </div>
    );
};

export default Menu;