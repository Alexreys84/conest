/**
 * Módulo de conexão com banco de dados 
 * Uso do framework mongoose (nepm i mongoose)
 */

// importar a biblioteca
const mongoose = require('mongoose')

// definir o banco de dados (copiar a string do compass)
let url = "mongodb://admin:pti%402018@10.26.45.208:27017/?authSource=admin"

// Método para conectar 
const conectar = async () => {
    try {
        await mongoose.connect(url)
        console.log("MongoDB conectado")

    } catch (error) {
        console.log(`Problema detectado: ${error.message}`)
    }
}

// função desconectar
const desconectar = async () => {
    try {
        await mongoose.disconnect(url)
        console.log("MongoDB desconectado")

    } catch (error) {
        console.log(`Problema detectado: ${error.message}`)
    }
}

//exportar para o main os metodos conectar e desconectar
module.exports = { conectar, desconectar }
