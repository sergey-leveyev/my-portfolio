import nc from "next-connect";
import dbConnect from "../../../../server/config/dbConnect";

import {
  allProjects,
  newProject,
} from "../../../../server/controllers/projectControllers";

const handler = nc();

dbConnect();

handler.get(allProjects);

handler.post(newProject);

export default handler;
