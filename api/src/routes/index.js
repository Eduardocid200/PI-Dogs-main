const { Router } = require('express');
// Importar todos los routers;
const dogRoute = require('./dog');
const temperamentRoute = require('./temperament');




const router = Router();

// Configurar los routers
router.use('/dog', dogRoute);
router.use('/temperament', temperamentRoute);


module.exports = router;
