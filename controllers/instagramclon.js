const Instagramclon= require("../models/instagramclon")


const getFotos = (req, res) => {
  Instagramclon.getAll()
      .then((data) => {
        if (data[0].length) {
          res.status(200).send({ data: data[0] });
        } else {
          res.status(200).send({ msg: "this page is empty" });
        }
      })
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  };

  const getFoto = (req, res) => {
    const id = req.params.id;
    Instagramclon.getById(id)
      .then((data) => {
        if (data[0].length) {
          res.status(200).send({ data: data[0] });
        } else {
          res.status(404).send({ msg: "product not found" });
        }
      })
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  };

  const createFoto = (req, res) => {
    const { title, image, description, likes } = req.body;
    const instagram = new Instagramclon(title, image, description, likes);
    instagram
      .create()
      .then(() => res.status(201).send({ data: instagram }))
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  };

  const updateFoto = (req, res) => {
    const id = req.params.id;
    const { title, image, description, likes } = req.body;
    const instagram = new Instagramclon(title, image, description, likes);
    instagram
      .update(id)
      .then(() => res.status(200).send({ data: instagram }))
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  };
  
  const deleteFoto = (req, res) => {
    const id = req.params.id;
    Instagramclon.delete(id)
      .then(() => {
        res.status(200).send({ msg: "this  post  is  deleted" });
      })
      .catch((err) => {
        res.status(500);
        console.log(err);
      });
  };

  module.exports = { getFotos, getFoto, createFoto, updateFoto, deleteFoto };