import express from "express";
import { loginAdminUserFormValidation } from "../middlewares/formValidation.middleware.js";
import { comparePass } from "../helpers/bcrypt.helper.js";
import { getSingleAdminUserByFilter } from "../models/user/User.model.js";
import {
  createAccessToken,
  createRefreshToken,
} from "../helpers/jwt.helper.js";
const Router = express.Router();

Router.post("/", loginAdminUserFormValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //get user by email
    const user = await getSingleAdminUserByFilter({ email });
    //check if password matched
    if (user?._id) {
      const matched = comparePass(password, user.password);

      if (matched) {
        //create token and store them in db
        const accessJWT = await createAccessToken(user._id, user.email);
        const refreshJWT = await createRefreshToken(user._id, user.email);
        // return the token

        return res.json({
          status: "success",
          accessJWT,
          refreshJWT,
        });
      }
    }

    res.json({
      status: "error",
      message: "Error, invalid credentials.",
    });
  } catch (error) {
    next(error);
  }
});

export default Router;
