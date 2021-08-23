const express = require("express");
const router = express.Router();
const routesController = require("../controllers/routes");

router.post(
  "/shortening",
  routesController.getShortUrl
);

router.get(
  "/:urlCode",
  routesController.redirectLongUrl
);

router.post(
  "/:urlCode",
  routesController.getLongUrlData
);





module.exports = router;