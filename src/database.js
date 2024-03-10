import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'C0l0mb1A.',
    database: 'Prueba01'
})

export default pool;