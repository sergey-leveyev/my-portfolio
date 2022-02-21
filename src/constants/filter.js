import { projects } from "./constants";

export const filterd = [];
const req = [];

for (let i = 0; i < projects.length; i++) {
  const tags = projects[i].tags;

  for (let x = 0; x < req.length; x++) {
    if (tags.includes(req[x])) {
      filterd.push(projects[i]);
    }
  }
}
