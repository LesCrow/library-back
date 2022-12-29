import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import deleteOneBook from "./handlers/delete";

const controller = {
  getAll,
  getOne,
  create,
  update,
  deleteOneBook,
};

export default controller;
