import express from "express";
import { controlWrapper } from "../../helpers/controlWrapper.js";
// prettier-ignore
import { signupUser, loginUser, logoutUser, getCurrentUsers, updateUserSubscription} from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/signup", controlWrapper(signupUser));

router.post("/login", controlWrapper(loginUser));

router.get("/logout", authenticateToken, controlWrapper(logoutUser));

router.get("/current", authenticateToken, controlWrapper(getCurrentUsers));

router.patch("/", authenticateToken, controlWrapper(updateUserSubscription));
export { router };
