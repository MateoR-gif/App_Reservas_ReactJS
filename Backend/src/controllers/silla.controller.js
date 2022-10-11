import { getConnection } from '../database/connection'

export const getSillas = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Silla')
    console.log(result);

    res.json(result.recordset);

};