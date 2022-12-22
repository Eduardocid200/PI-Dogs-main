import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogName } from '../actions';


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('') //lo seteo en un string vacío

function handleInputChange(e){ //el value del input va a tomar el value del useState
    e.preventDefault()
    setName(e.target.value)
    console.log(name) //ese name va a llegarle a la acción de abajo

}

function handleSubmit(e){
    e.preventDefault()
    if(!name.length){
        alert('Please enter a breed');
    } else {
        dispatch(getDogName(name));//name es lo q está escribiendo el usuario
        setName(''); //es para q se borre lo q escriba en la searchbar

}
};   


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        <div>
            <input
            type='text'
            value={name}
            placeholder='Write a breed...'
            onChange = {(e) => handleInputChange(e)}
            />
            <button type='submit'>🔍</button>
        </div>
        </form>
    )
}