import Admin from "../models/Admin.model.js";

export const adminGetUsers = async (req, res) => {
  const users = await Admin.getUsers();
  return res.status(200).json({ users });
};

export const adminBanishUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Admin.banishUser(id);
    return res.status(200).json({ message: "User banned" });
  } catch (error) {
    return res.status(500).json({ message: "Error banning user", error });
  }
};
