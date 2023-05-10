const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {  
      // defino el modelo
  sequelize.define('type', {
    id:{
      type: DataTypes.UUID,  //UUID = Identificador Único Universal
      defaultValue: DataTypes.UUIDV4, //generar un UUID automáticamente cuando se crea un nuevo registro
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(35),
        allowNull: false,
    }
  },{
    timestamps: false
  });
};