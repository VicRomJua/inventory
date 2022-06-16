const jwt = require('jsonwebtoken');

const generarJWT = (id, nombre, apellidoP, apellidoM, numControl, sexo, rol) => {

    return new Promise((resolve, reject) => {

        const payload = { id, nombre, apellidoP, apellidoM, numControl, sexo, rol };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {

            if (err) {
                console.log(err)
                reject('No se pudo generar el JWT');
            }

            resolve(token);

        })


    })

}

module.exports = {
    generarJWT
}