import mongoose from 'mongoose';

function dibujarEstrella(tamano) {
    const mitad = Math.floor(tamano / 2);
    for (let i = 0; i < tamano; i++) {
        let linea = '';
        for (let j = 0; j < tamano; j++) {
            if (
                (i === 0 && j === mitad) ||
                (i === mitad && j === 0) ||
                (i === tamano - 1 && j === mitad) ||
                (j === 0 && i === mitad) ||
                (j === tamano - 1 && i === mitad) ||
                (Math.abs(i - mitad) === Math.abs(j - mitad))
            ) {
                linea += '*';
            } else {
                linea += ' ';
            }
        }
        console.log(linea);
    }
}

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb',);
        console.log('*** Database is connected ***');
        dibujarEstrella(9);
    } catch (error) {
        console.log(error);
    }
}