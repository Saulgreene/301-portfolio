'use strict';

var projects = [];

function Project(projectData){
  this.title = projectData.title;
  this.projectUrl = projectData.projectUrl;
  this.time = projectData.time;
  this.description = projectData.description;
  this.imgUrl = projectData.imgUrl;
}

allProjectsData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

projects.forEach(function(a){
  $('#project-overview').append(a.toHtml());
});
