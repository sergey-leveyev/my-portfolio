const mongoose = require("mongoose");

const Project = require("../models/project");

const projects = require("../data/constants");

mongoose
  .connect("mongodb+srv://root:Sl0546413505@portfolio.ggsg1z3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to local database"));

const seedProjects = async () => {
  try {
    await Project.deleteMany();
    console.log("All projects are deleted");

    await Project.insertMany(projects);
    console.log("All projects are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProjects();
