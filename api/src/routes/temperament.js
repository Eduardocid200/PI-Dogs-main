const  axios = require('axios');
const { Router } = require('express');
const { Temperament } = require('../db');
const {live_gWKHYMr5HlfyGzevnRXJs3DOIi8R6Z8EIT1W1ImCFENGdI9ANWVRLAJXw00twJSs} = process.env;



const router = Router();

const getAllTemperaments = async (req, res) => {
    const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_gWKHYMr5HlfyGzevnRXJs3DOIi8R6Z8EIT1W1ImCFENGdI9ANWVRLAJXw00twJSs');
    const temperaments = temperamentsApi.data.map(el => el.temperament);

    //uno cadenas y separo por comas    
    let dataTemperament = temperaments.join().split(',')
    //elimino espacios en blanco a c/lado
    dataTemperament = dataTemperament.map( el => el.trim());

    //agrego los temperamentos a la base de datos
    dataTemperament.forEach (el => {
        if(el !== '') {
            Temperament.findOrCreate({
                where: { name: el }    
        })
      }
    });

    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments)
}


router.get('/', getAllTemperaments);








module.exports = router;