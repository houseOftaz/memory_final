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

export const createMsg = async (req, res) => {
  try {
    console.log("controller", req.body);
    const msg = await Game.createMsg(
      req.session.user.id,
      req.body.to_user_id,
      req.body.subject,
      req.body.message
    );
    res.status(200).json({ message: "Création message ok", msg });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erreur création message", error: error.message });
  }
};
