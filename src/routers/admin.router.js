import express from "express";
import { newAdminUserFormValidation } from "../middlewares/formValidation.middleware.js";
import { hashPass } from "../helpers/bcrypt.helper.js";
import { createAdminUser } from "../models/user/User.model.js";
const Router = express.Router();

Router.post("/", newAdminUserFormValidation, async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPass(password);

    const user = await createAdminUser(req.body);

    user._id
      ? res.json({
          status: "success",
          message: "Admin user created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create account",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "Email already exist";
    }
    next(error);
  }
});

export default Router;
