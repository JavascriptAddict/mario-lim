//  Written by Mario Lim. Do not copy without permission from creator.
var init = {
    introImg: document.getElementById("introImg"),
    educationImg: document.getElementById("educationImg"),
    achievementsImg: document.getElementById("achievementsImg"),
    projectsImg: document.getElementById("projectsImg"),
    introDesc: document.getElementById("introDesc"),
    educationDesc: document.getElementById("educationDesc"),
    achievementsDesc: document.getElementById("achievementsDesc"),
    projectsDesc: document.getElementById("projectsDesc"),

    fetchData: function(){
        fetch('/mario-lim/data.json')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.displayData(json);
            });
    },
    displayData: function(data){
        introObj = data.intro;
        educationObj = data.education;
        achievementsObj = data.achievements;
        projectsObj = data.projects;

        this.introImg.src = introObj.image;
        this.introDesc.innerHTML = introObj.data;
        this.educationImg.src = educationObj.image;
        this.achievementsImg.src = achievementsObj.image;
        this.projectsImg.src = projectsObj.image;
        
        this.loopData(educationObj.data, this.educationDesc);
        this.loopData(achievementsObj.data, this.achievementsDesc);
        this.loopData(projectsObj.data, this.projectsDesc);
    },
    loopData: function(data, section){
        html = "";
        for (var count = 0; count < data.length; count++){
            html = html + "<li><p>" + data[count] + "</p></li>";
        }
        section.innerHTML = html;
    }
}
