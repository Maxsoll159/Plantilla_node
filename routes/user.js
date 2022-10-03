const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosGetId } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet )

router.get('/:id', usuariosGetId )

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)


module.exports = router