import express from "express";
import { controlWrapper } from "../../helpers/controlWrapper.js";
// prettier-ignore
import {signupUser, loginUser, logoutUser, getCurrentUsers, updateUserSubscription, updateAvatar, verifyEmail, resendVerifyEmail} from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router();

router.post("/signup", controlWrapper(signupUser));

router.post("/login", controlWrapper(loginUser));

router.get("/logout", authenticateToken, controlWrapper(logoutUser));

router.get("/current", authenticateToken, controlWrapper(getCurrentUsers));

router.patch("/", authenticateToken, controlWrapper(updateUserSubscription));

// prettier-ignore
router.patch("/avatars", authenticateToken, upload.single("avatar"), controlWrapper(updateAvatar));

router.get("/verify/:verificationToken", controlWrapper(verifyEmail));

router.post("/verify", authenticateToken, controlWrapper(resendVerifyEmail));

export { router };
