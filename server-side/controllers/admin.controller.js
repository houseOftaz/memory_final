import Admin from "../models/Admin.model.js";

export const adminGetUsers = async (req, res) => {
  const users = await Admin.getUsers();
  return res.status(200).json({ users });
};
