function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


if (name == ""){
    return alert("Name cannot be empty")
} else if(email == ""){
    return alert("Please type your email")
} else if (phone == ""){
    return alert("Please type your number")
} else if(subject == ""){
    return alert("Please choose one")
} else if(message == ""){
    return alert("Please enter your message")
};

const destination = "aarifaziz77@gmail.com"
let a = document.createElement("a")
a.href = `mailto:${destination}?subject=${subject}&body= Hai! My name is ${name}, ${subject} ASAP. You can reach me at ${phone} or ${email}. PS ${message}`

a.click();

    let data = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    console.log(data);
}



let projects = []

function getProject(event){
    event.preventDefault()

    let projectName = document.getElementById("project").value 
    let startDate = document.getElementById("start").value 
    let endDate = document.getElementById("end").value 
    let description = document.getElementById("description").value 
    let nodeJS = document.getElementById("nodejs").checked 
    let nextJS = document.getElementById("nextjs").checked 
    let reactJS = document.getElementById("reactjs").checked 
    let typeScript = document.getElementById("typescript").checked 
    let image = document.getElementById("upload").files

    image = URL.createObjectURL(image[0])


    let project = {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        description: description,
        nodeJS: nodeJS,
        nextJS: nextJS,
        reactJS: reactJS,
        typeScript: typeScript,
        image: image
    };

    projects.push(project);
    console.log(projects);
    renderBlog()
}


function renderBlog() {
    document.getElementById("contents").innerHTML = ""
    
    for(let i = 0; i < projects.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="flex-style">
                <div class="project-detail">
                    <div class="inner-project" id="contents">
                        <div>
                            <img src="${projects[i].image}" alt="project-img">
                        </div>
                    
                        <div class="project-title">
                            <a href="myProjectDetail.html">
                                <h3>${projects[i].projectName}</h3> 
                            </a>
                        </div>

                        <div class="duration">
                            <p>Duration : ${getDuration(projects[i].startDate, projects[i].endDate)}</p> 
                        </div>

                        <div class="project-desc">
                            <p>${projects[i].description}</p>
                        </div>

                        <div class="logo-tech">
                            ${projects[i].nodeJS ? "<img src='./assets/img/node.js.png'>" : ""}
                            ${projects[i].nextJS ? "<img src='./assets/img/next.js.png'>" : ""}
                            ${projects[i].reactJS ? "<img src='./assets/img/react.js.png'>" : ""}
                            ${projects[i].typeScript ? "<img src='./assets/img/typescript.png'>" : ""}
                        </div>
                        
                        <div class="project-button">
                            <div class="edit">
                                <button>edit</button>
                            </div>
                            
                            <div class="delete">
                                <button>delete</button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>`
    }
}

function getDuration(startDate, endDate) {
    const distance = new Date(endDate) - new Date(startDate)
    const yearDistance = Math.floor(distance / (12 * 30 * 24 * 60 * 60 * 1000))
    if(yearDistance > 0) {
      return yearDistance + " Year"
    } else {
      const monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
      if(monthDistance > 0) {
        return monthDistance + " Month"
      } else {
        const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
        if(dayDistance > 0) {
          return dayDistance + " Day"
        }
      }
    }
  }


  
// part upgrade

// if (projectName == ""){
//     return alert("Please insert your project title")
//     } else if (startDate == ""){
//         return alert("Please input your start date")
//     } else if (endDate == ""){
//         return alert("Please input your end date")
//     } else if (description == ""){
//         return alert("Please enter your project description")
//     } else if (image == ""){
//         return alert("Please upload your image from computer")
// };
