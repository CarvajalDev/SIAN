const Sequelize = require("sequelize");

const db = require("../config/database");

//Definimos el objeto Mascota

const Mascota = db.define("mascotas", {
  mas_nombre: {
    type: Sequelize.STRING,
  },
  mas_especie: {
    type: Sequelize.INTEGER,
  },
  mas_raza: {
    type: Sequelize.INTEGER,
  },
  mas_fecha_nacimiento: {
    type: Sequelize.DATE,
  },
  mas_usuario: {
    type: Sequelize.INTEGER,
  },
  mas_direccion: {
    type: Sequelize.STRING,
  },
  mas_estado: {
    type: Sequelize.STRING,
  },
});

module.exports = Mascota;
