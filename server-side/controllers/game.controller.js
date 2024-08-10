import Game from "../models/Game.model.js";

export const createGame = async (req, res) => {
  try {
    const game = await Game.createGame(req.body, req.session.user.id);
    res.status(200).json({ message: "Création partie ok", game });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erreur création partie", error: error.message });
  }
};
