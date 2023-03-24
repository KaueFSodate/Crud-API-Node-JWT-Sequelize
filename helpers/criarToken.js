const jwt = require('jsonwebtoken')
const secret = 'AX88GHASFGFXFAG'


const criarToken = async(req, res, usuario) => {

    try {
        
        // Criar token
        const token = jwt.sign({
            id: usuario.id
        }, 
        secret
        )


        // Retornar token
        res.json({
            auth: true,
            token: token,
            usuarioid: usuario.id
        })

    }catch (error) {
        console.log(error)
    }
}

module.exports = criarToken