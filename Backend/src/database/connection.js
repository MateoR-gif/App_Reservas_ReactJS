import sql from 'mssql';

const dbSettings = {
    user:'fazt',
    password:'1192918606',
    server:'localhost',
    database:'Taller 3',
    options:{
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};