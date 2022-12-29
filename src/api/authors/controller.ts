import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import deleteOneAuthor from "./handlers/delete";

const controller = {
  getAll,
  getOne,
  create,
  update,
  deleteOneAuthor,
};

export default controller;
