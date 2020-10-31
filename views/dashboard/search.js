// const projects = [
//     {name: 'david'},
//     {name: 'patel'},
//     {name: 'kevin'},
//     {name: 'steven'},
//     {name: 'coco'},
//     {name: 'brock'},
//     {name: 'rock'}
//     ];


    // PROJECTS LIST GOTTEN FROM LOCAL STORAGE
projects = JSON.parse(localStorage.getItem("projects"));
if (projects == null || projects == undefined) {
  projects = [];
}

//  const projects = (projects) => {
//     let list = null;
//     for (let i = projects.length - 1; i >= 0; i--) {
//         list = { name: projects[i]};
//     }
//     return list;
// };

console.log(projects);
    
    const searchList = document.getElementById("searchlist")
    
    //set list from localStorage
    function setList(group){
        clearList();
        for (const projectSearch of group){
            const item = document.createElement("li");
            item.classList.add("list-group-item");
            const text = document.createTextNode(projectSearch.projectName);
            item.appendChild(text);
            searchlist.appendChild(item);
        }
        if(group.length === 0){
            setNoResults();
        }
    
    }
    
    //clear search list so we dont have duplicates 
    function clearList(){
        while(searchlist.firstChild){
            searchlist.removeChild(projects.firstChild);
        }
    }
    
    
    //set invalid search response
    function setNoResults(){
        const item = document.createElement("li");
        item.classList.add("list-group-item");
        const text = document.createTextNode("No results found");
        item.appendChild(text);
        searchlist.appendChild(item);
    }
    
    //get relevant of search input
    function getRelevancy(value, searchTerm){
        if (value === searchTerm){
            return 2;
        } else if (value.startsWith(searchTerm)){
            return 1;
        } else if (value.includes(searchTerm)){
            return 0;
        } else{
            return -1;
        }
    }

    
    
    const searchInput = document.getElementById("search");
    
    // main search action is performed here
    searchInput.addEventListener('input', (event) => {
        // console.log(event.target.value);
        let value = event.target.value;
    
        if(value && value.trim().length > 0){
            value = value.trim().toLowerCase();
            setList(projects.filter(projectSearch => {
                return projectSearch.projectName.includes(value);
            }).sort((projectSearchA, projectSearchB) => {
                return getRelevancy(projectSearchB.projectName, value)   -  getRelevancy(projectSearchA.projectName, value);
            }));
        } else {
    
            clearList();
        }
    }); 