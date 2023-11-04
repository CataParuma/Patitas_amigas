const { v4: uuid } = require("uuid");
const userModel = require("../database/userModel");

const getAllUsers = async () => {
  try {
    const allUsers = await userModel.getAllUsers();

    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getOneUser = async (userId) => {
  try {
    const user = await userModel.getOneUser(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (newUser) => {
  const userToInsert = {
    ...newUser,
    user_id: uuid(),
    join_date: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdUser = await userModel.createNewUser(userToInsert);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (data) => {
  try {
    const loggedUser = await userModel.loginUser(data);
    return loggedUser;
  } catch (error) {
    throw error;
  }
};

const updateOneUser = async (userId, changes) => {
  try {
    const updatedUser = await userModel.updateOneUser(userId, changes);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteOneUser = async (userId) => {
  try {
    await userModel.deleteOneUser(userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  loginUser,
  updateOneUser,
  deleteOneUser,
};
