

// this is login dropdown box 

function dropDwon(){
    let drop = document.getElementById("login");
    if(drop.style.display==="block"){
        drop.style.display="none"
    }else{
        drop.style.display="block"
    }
}

// close dropdown if user click any where 

window.onclick = function(event){
    if(!event.target.matches('.login_]button')){
        let drop = document.getElementById("login");
        if(drop.style.display==="block")
            drop.style.display="none";
    }
}


function service_list(){
    let service = document.getElementById("service_list");
    if(service.style.display==="block"){
        service.style.display="none";
    }else{
        service.style.display="block"
    }
}

function project_list(){
    let project=document.getElementById("project_list");
    if(project.style.display==="block"){
        project.style.display="none"
    }else{
        project.style.display="block"
    }
    
}
