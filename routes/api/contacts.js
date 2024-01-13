const express = require("express");

const foo = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", foo.getAll);

router.get("/:contactId", foo.getById);

router.post("/", validateBody(schema.addScheme), foo.add);

router.delete("/:contactId", foo.deleteById);

router.put("/:contactId", validateBody(schema.addScheme), foo.updateById);

module.exports = router;
