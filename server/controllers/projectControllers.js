import Project from "../models/project";

import APIFeatures from "../utils/apiFeatures";

const allProjects = async (req, res) => {
  try {
    const resPerPage = 4;

    const projectCount = await Project.countDocuments();

    const apiFeatures = new APIFeatures(Project.find(), req.query);

    apiFeatures.search();
    apiFeatures.filter();

    let projects = await apiFeatures.query;

    const page = req.query.page;

    console.log(page);
    const startIndex = (page - 1) * resPerPage;
    const endIndex = page * resPerPage;

    projects = projects.slice(startIndex, endIndex);

    let filteredProjectsCount = projects.length;

    res.status(200).json({
      success: true,
      count: projects.length,
      projectCount,
      resPerPage,
      filteredProjectsCount,
      projects,
    });
  } catch (error) {
    res.status(404).json({
      succes: false,
      error: error.message,
    });
  }
};

//Create new project  => /api/projects
const newProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//Get project details  => /api/projects/:id
const getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.query.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//Update project details  => /api/projects/:id
const updateProject = async (req, res) => {
  try {
    let project = await Project.findById(req.query.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found with this ID",
      });
    }

    project = await Project.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//Delete project   => /api/projects/:id
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.query.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found with this ID",
      });
    }

    await project.remove();

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export {
  allProjects,
  newProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
