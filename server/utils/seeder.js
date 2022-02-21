const mongoose = require("mongoose");

const Project = require("../models/project");

const projects = require("../data/constants");

mongoose
  .connect("mongodb://localhost:27017/portfolio")
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
