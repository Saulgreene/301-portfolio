'use strict';

var projects = [];

function Project(projectData){
  this.title = projectData.title;
  this.projectUrl = projectData.projectUrl;
  this.dateStarted = projectData.dateStarted;
  this.dateCompleted = projectData.dateCompleted;
  this.description = projectData.description;
}

allProjectsData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
