export const queries = {
    getAllSillas: 'SELECT * FROM Silla',
    getAllUsuarios: 'SELECT * FROM Usuarios',
    addNewUsuario: 'INSERT INTO Usuario (Cedula, Nombre) VALUES (@Cedula, @Nombre)',
    getSillabyId: 'SELECT * FROM Silla Where IdSilla = @Id'
}