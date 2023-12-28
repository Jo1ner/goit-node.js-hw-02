const express = require("express");

const foo = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", foo.getAll);

router.get("/:contactId", foo.getById);

router.post("/", validateBody(schemas.addScheme), foo.add);

router.delete("/:contactId", validateBody(schemas.addScheme), foo.deleteById);

router.put("/:contactId", foo.updateById);

module.exports = router;
