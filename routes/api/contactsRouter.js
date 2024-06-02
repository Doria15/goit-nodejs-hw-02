import express from "express";
import { controlWrapper } from "../../helpers/controlWrapper.js";
// prettier-ignore
import { addContact, deleteContactById, getAllContacts, getContactById, updateContactById, updateStatusContact } from "../../controllers/contactsController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, controlWrapper(getAllContacts));

router.get("/:contactId", authenticateToken, controlWrapper(getContactById));

router.post("/", authenticateToken, controlWrapper(addContact));

router.delete(
  "/:contactId",
  authenticateToken,
  controlWrapper(deleteContactById)
);

router.put("/:contactId", authenticateToken, controlWrapper(updateContactById));

router.patch(
  "/:contactId/favorite",
  authenticateToken,
  controlWrapper(updateStatusContact)
);

export { router };
