import { getConnection, sql, queries } from '../database'

export const getSillas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllSillas)
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

};



export const getSillabyId = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("Id", id).query(queries.getSillabyId);

    res.send(result.recordset[0])

};
