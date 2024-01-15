const express = require("express");

const foo = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", foo.getAll);

router.get("/:contactId", isValidId, foo.getById);

router.post("/", validateBody(schemas.addScheme), foo.add);

router.delete("/:contactId", isValidId, foo.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addScheme),
  foo.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  foo.updateStatusContact
);

module.exports = router;
