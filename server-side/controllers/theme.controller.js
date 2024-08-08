import Theme from "../models/Theme.model.js";

export const getThemes = async (req, res) => {
  try {
    const themes = await Theme.getCardsByThemes(req.params.themeValue);
    res.status(200).json(themes);
  } catch (error) {
    console.log(req.body);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
