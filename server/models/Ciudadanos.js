const Sequelize = require("sequelize");

const db = require("../config/database");

//Definimos el objeto Mascota

const Ciudadanos = db.define("ciudadanos", {
  usuario_apellidos: {
    type: Sequelize.STRING,
  },
  usuario_nombre: {
    type: Sequelize.STRING,
  },
  usuario_tipo_documento: {
    type: Sequelize.INTEGER,
  },
  usuario_documento: {
    type: Sequelize.STRING,
  },
  usuario_direccion: {
    type: Sequelize.STRING,
  },
  usuario_municipio: {
    type: Sequelize.INTEGER,
  },
  usuario_barrio: {
    type: Sequelize.INTEGER,
  },
  usuario_telefono: {
    type: Sequelize.INTEGER,
  },
  usuario_operador: {
    type: Sequelize.STRING,
  },
  usuario_email: {
    type: Sequelize.STRING,
  },
  usuario_email: {
    type: Sequelize.STRING,
  },
  usuario_clave: {
    type: Sequelize.STRING,
  },
  usuario_tipo_usuario: {
    type: Sequelize.CHAR,
  },
  usuario_estado: {
    type: Sequelize.STRING,
  },
});

module.exports = Ciudadanos;
