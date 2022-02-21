import nc from "next-connect";
import dbConnect from "../../../../server/config/dbConnect";

import { allProjects } from "../../../../server/controllers/projectControllers";

const hendler = nc();

dbConnect();

hendler.get(allProjects);

export default hendler;
