const { response } = require('express')
let data = [{
    id: 1,
    nombre: "Juan",
    Apellido: "Pepe",
    Edad: 20
}, {
    id: 2,
    nombre: "Martin",
    Apellido: "Rios",
    Edad: 20
}]

const usuariosGet = (req, res = response) => {
    res.json({
        staus: true,
        datos: data
    })
}

const usuariosGetId = (req, res = response) => {
    const id = parseInt(req.params.id)

    const dataPut = data.find(element => element.id === id)


    res.json({
        ok: true,
        msg: dataPut
    })
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    data.push(body)

    res.status(201).json({
        staus: true,
        datos: data
    })
}

const usuariosDelete = (req, res=response) => {
    res.json({
        ok: true,
        msg: 'delete Api'
    })
}

const usuariosPut =(req, res=response) => {
    const id = parseInt(req.params.id)
    const body = req.body

    const dataPut = data.find(element => element.id === id)


    res.json({
        ok: true,
        msg: dataPut
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosGetId

}