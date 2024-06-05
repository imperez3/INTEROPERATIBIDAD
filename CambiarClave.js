const mysql = require('mysql8/promise');

exports.handler = async (event) => {
    const { idCuenta, nuevaClave } = JSON.parse(event.body);

    const connection = await mysql.createConnection({
        host: 'localhost:3306',
        user: 'root',
        password: 'Jefzal13281',
        database: 'atm'
    });

    const [rows] = await connection.execute('UPDATE CuentaBancaria SET claveTarjeta = ? WHERE id = ?', [nuevaClave, idCuenta]);

    await connection.end();

    return {
        statusCode: 200,
        body: JSON.stringify({ mensaje: 'Clave cambiada exitosamente' }),
    };
};
