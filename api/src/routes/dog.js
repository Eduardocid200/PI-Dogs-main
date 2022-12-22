const { Router } = require ('express');
const axios = require ('axios');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;


const router = Router();

const getApiInfo = async() => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${YOUR_API_KEY}`);
    const apiInfo = await apiUrl.data.map(e=>{ //.data xq me va a traer la info en .data
        return{
            id:e.id,
            name:e.name,
            height:e.height.metric.concat(' cm'), 
            weight:e.weight.metric.concat(' kgs'),
            life_span:e.life_span,
            image:e.image.url,
            temperament:e.temperament
        };
    });
    return apiInfo;
};    
  
const getDbInfo = async () => {
    return await Dog.findAll({
      include: {
          model: Temperament, //para que cdo cree una raza nueva me traiga los temperamentos
          attributes: ['name'], // del temperamento el name del temperamento creado en models, el id me lo trae igual
          through: { //sobre la tabla atributos, esa configuracion va siempre
              attributes: [],
        },
      }
    });
};
  
    const getAllDogs = async () => { //aca abjo llamo a las funciones y las ejecuto, sino, no hacen nada
        const apiInfo = await getApiInfo(); 
        const dbInfo = await getDbInfo();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal; //me devuelve un arreglo
  };
  

router.get('/', async (req, res) => {
    const name = req.query.name //un query con la propiedad name que me pasan por url
    let dogsTotal = await getAllDogs();
    if(name){                                      // el.name es el nombre de la raza del perro, o sea del perro
      let dogsName = await dogsTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      dogsName.length ?
      res.status(200).send(dogsName) :
      res.status(404).send('dog not found 😕')
    } else { // si no hay un query mando todos
        res.status(200).send(dogsTotal)
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const dogsTotal = await getAllDogs()
    if (id) {
        let dogId = await dogsTotal.filter(el => el.id == id) //con === no funcionaba
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('That id was not found 😕')
    }
})
    
        
    



router.post('/', async (req, res) => {
    let {
          name, 
          image, 
          heightMin,
          heightMax,  
          weightMin,
          weightMax, 
          life_span, 
          createdInDb, 
          temperament 
        } = req.body;

    let dogCreated = await Dog.create ({ //creo el perro con todo esto)
          name, 
          image, 
          heightMin,
          heightMax,  
          weightMin,
          weightMax, 
          life_span, 
          createdInDb, 
    })  
    //me lo traigo del modelo de temperament
    let temperamentDb = await Temperament.findAll({ //el temp lo tengo que encontrar en el modelo q 
        where : {name : temperament}                // tiene toddos los temperamentos, donde coincida con el temperamento del modelo
    })
    dogCreated.addTemperament(temperamentDb) //Temperament de la tabla de base de datos
    res.send('Dog created 🐶')
});





module.exports = router;