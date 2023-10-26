

class Tooltip{}
class ProjectItem{




}
class ProjectList{
    constructor(item) {
    const projItems=document.querySelectorAll(`#${item}-projects li`);
    console.log(projItems);
    }
    

}

class App{

    static init()
    {
        const finishedProject=new ProjectList('finished');
        const activeProject=new ProjectList('active');
    }

}
App.init();