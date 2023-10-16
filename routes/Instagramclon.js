const express = require('express')
const router = express.Router();
const { getFotos, getFoto, createFoto, updateFoto, deleteFoto } = require('../controllers/instagramclon')

router.get("/instagram", getFotos)
router.get("/instagram/:id", getFoto)
router.post("/instagram", createFoto)
router.put("/instagram/:id", updateFoto)
router.delete("/instagram/:id", deleteFoto)

module.exports = router