import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import deleteOneUser from "./handlers/delete";
import update from "./handlers/update";

const controller = {
  getAll,
  getOne,
  create,
  update,
  deleteOneUser,
};

export default controller;
