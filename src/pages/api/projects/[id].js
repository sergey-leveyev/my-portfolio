import nc from "next-connect";
import dbConnect from "../../../../server/config/dbConnect";

import {
  getSingleProject,
  updateProject,
  deleteProject,
} from "../../../../server/controllers/projectControllers";

const handler = nc();

dbConnect();

handler.get(getSingleProject);

handler.put(updateProject);

handler.delete(deleteProject);

export default handler;
