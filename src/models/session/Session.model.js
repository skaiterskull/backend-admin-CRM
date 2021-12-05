import SessionSchema from "./Session.schema.js";

// Create token
export const storeAccessJWT = (obj) => {
  return SessionSchema(obj).save();
};

// Get token by id
export const getAccessJWT = (filter) => {
  return SessionSchema.findOne(filter);
};

// Delete token
export const deleteSessionToken = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
