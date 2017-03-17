'use strict';

var projects = [];

function Project(projectData){
  this.title = projectData.title;
  this.projectUrl = projectData.projectUrl;
  this.dateStarted = projectData.dateStarted;
  this.dateCompleted = projectData.dateCompleted;
  this.description = projectData.description;
  this.imgUrl = projectData.imgUrl;
}

//This functions concatenates the two properties to give a timeline of the project.
Project.prototype.calculateTime = function(){
  var time = this.dateStarted + this.dateCompleted;
  return time;
};

//Puts all objects in array from the projectData.js
allProjectsData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

//Takes a template from the index.html, removes template class and clones it
//Next step is to refactor for handlebars.js
Project.prototype.toHtml = function(){
  var $newProject = $('div.template').clone().removeClass('template');

  $newProject.find('.info h6').text(this.title);
  $newProject.find('.time').text(this.time);
  $newProject.find('.description').text(this.description);
  $newProject.find('.info a').attr('href', this.projectUrl);
  $newProject.find('.template img').attr('src', this.imgUrl);

  return $newProject;
};

projects.forEach(function(a){
  $('#project-overview').append(a.toHtml());
});
