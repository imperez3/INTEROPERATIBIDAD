const mysql = require('mysql8/promise');

exports.handler = async (event) => {
    const { idCuenta, monto } = JSON.parse(event.body);

    const connection = await mysql.createConnection({
        host: 'localhost:3306',
        user: 'root',
        password: 'Jefzal13281',
        database: 'atm'
    });

    const [rows] = await connection.execute('SELECT saldo FROM CuentaBancaria WHERE id = ?', [idCuenta]);

    if (rows[0].saldo >= monto) {
        await connection.execute('UPDATE CuentaBancaria SET saldo = saldo - ? WHERE id = ?', [monto, idCuenta]);
        await connection.end();
        return {
            statusCode: 200,
            body: JSON.stringify({ mensaje: 'Retiro exitoso' }),
        };
    } else {
        await connection.end();
        return {
            statusCode: 400,
            body: JSON.stringify({ mensaje: 'Fondos insuficientes' }),
        };
    }
};
