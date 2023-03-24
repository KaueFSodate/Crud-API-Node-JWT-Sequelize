const jwt = require('jsonwebtoken')
const usuario = require('../models/usuario')
const secret = 'AX88GHASFGFXFAG'

// Pegar usuário por token

const pegarUsuarioToken = async(token) => {
    
    // Se não tiver token
    if(!token){
        res.json({message: "Acesso negado"})
    }

    // Decodifica o token
    const decoded = jwt.verify(token, secret)

    // Pega o id do token decodificado
    const usuarioid = decoded.id

    const Usuario = await usuario.findOne({
        where:{
            id: usuarioid
        }
    });

    return Usuario

}

module.exports = pegarUsuarioToken