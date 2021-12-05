import AdminUserSchema from "./User.schema.js";

// Create User
export const createAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};

// Get user by id
export const getAdminUserById = (_id) => {
  return AdminUserSchema.findById(_id);
};

//get single user by filter
export const getSingleAdminUserByFilter = (filter) => {
  return AdminUserSchema.findOne(filter);
};

//get all user by filter
export const getAllAdminUserByFilter = (filter) => {
  return AdminUserSchema.find(filter);
};

// Update User
export const updateAdminUser = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj, { new: true });
};

// Delete User
export const deleteAdminUser = (filter) => {
  return AdminUserSchema.findOneAndDelete(filter);
};
