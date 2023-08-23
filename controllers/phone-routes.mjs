import { phone } from "../model/PhoneSchema.mjs";

export const addphone = async (req, res) => {
  let myphone = req.body;
  try {
    const newPhone = await phone.create(myphone);
    res.status(200).json(newPhone);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getPhones = async (req, res) => {
  try {
    const getAllPhones = await phone.find();
    res.status(200).json(getAllPhones);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getEditPhone = async (req, res) => {
  console.log();
  try {
    const Editphone = await phone.findOne({ _id: req.params.id });

    res.status(200).json(Editphone);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const EditPhone = async (req, res) => {
  let editedPhone = req.body;
  try {
    const Editphone = await phone.updateOne(
      { _id: req.params.id },
      { $set: editedPhone }
    );

    res.status(200).json(Editphone);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const deletePhone = async (req, res) => {
  try {
    const deletedPhone = await phone.deleteOne({ _id: req.params.id });

    res.status(200).json(deletedPhone);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
