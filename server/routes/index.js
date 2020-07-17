const express = require("express");
const router = express.Router();

const Mascota = require("../models/Mascotas");

module.exports = function () {
  router.get("/", (req, res) => {
    res.render("inicio");
  });

  router.get("/mascotas", (req, res) => {
    Mascota.findAll()
      .then((mascotas) =>
        res.render("mascotas", {
          pagina: "Sobre las mascotas",
          mascotas: mascotas,
        })
      )
      .catch((error) => console.log(error));
  });

  router.get("/usuarios", (req, res) => {
    res.render("usuarios");
  });

  router.get("/registro", (req, res) => {
    res.render("registro");
  });

  router.get("/login", (req, res) => {
    res.render("login");
  });

  return router;
};
