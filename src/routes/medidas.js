var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/conhece", function (req, res) {
    medidaController.buscarUltimasMedidasConhece(req, res);
});

router.get("/ultimas/bosque", function (req, res) {
    medidaController.buscarUltimasMedidasBosque(req, res);
});

router.get("/ultimas/curiosidade", function (req, res) {
    medidaController.buscarUltimasMedidasCuriosidade(req, res);
});

router.get("/tempo-real/:conhece", function (req, res) {
    medidaController.buscarMedidasEmTempoRealConhece(req, res);
})
router.get("/tempo-real/:bosque", function (req, res) {
    medidaController.buscarMedidasEmTempoRealBosque(req, res);
})
router.get("/tempo-real/:curiosidade", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCuriosidade(req, res);
})

module.exports = router;