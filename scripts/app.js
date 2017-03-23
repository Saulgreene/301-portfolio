'use strict';

var Project.all = [];

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

Project.loadAll = function(projectData) {
  projectData.forEach(function(e){
    Project.all.push(new Project(e));
  })
}

Project.fetchAll = function() {
  $.getJSON('data/projectData.json')
  .then(function(data) {
    Project.loadAll(data);
    Project.all.forEach(function(a){
      $('#project-overview').append(a.toHtml());
    });
  })
}
