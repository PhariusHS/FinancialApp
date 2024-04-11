import spent from "../models/spent.model.js";

export const getSpents = async (req, res) => {
  try {
    const spents = await spent.find();
    res.json(spents);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSpent = async (req, res) => {
    try {
        const spent = await spent.findById(req.params.id);
        if (!spent) return res.status(404).json({ message: "spent not found" });
        return res.json(spent);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const createSpent = async (req, res) => {
  try {
    const { name, price, type, description, necessary } = req.body;

    const newSpent = new spent({
      name,
      price,
      type,
      description,
      necessary
    });

    await newSpent.save();
    res.json(newSpent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSpent = async (req, res) => {
  try {
    const deletedSpent = await spent.findByIdAndDelete(req.params.id);
    if (!deletedSpent)
      return res.status(404).json({ message: "Spent not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSpent = async (req, res) => {
  try {
    const { name, price, type, description, necessary, date } = req.body;
    const spentUpdated = await spent.findOneAndUpdate(
      { _id: req.params.id },
      { name, price, type, description, necessary, date },
      { new: true }
    );
    return res.json(spentUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
