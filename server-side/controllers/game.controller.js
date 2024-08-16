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

export const getMsg = async (req, res) => {
  try {
    const msg = await Game.getMsg(req.session.user.id, req.params.msgId);

    res.status(200).json({ message: "Récupération message ok", msg });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erreur récupération message", error: error.message });
  }
};

export const deleteMsg = async (req, res) => {
  const { msgId } = req.params;
  try {
    console.log("controller", req.params);
    const msg = await Game.deleteMsg(req.session.user.id, msgId);
    res.status(200).json({ message: "Suppression message ok", msg });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Erreur suppression message", error: error.message });
  }
};
