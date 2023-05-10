const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        max: 1000
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        max: 1000
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        max: 1000
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        max: 1000
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{
    timestamps: false
  });
};
