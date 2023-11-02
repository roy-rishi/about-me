const content = JSON.parse(
    `
    [
        {
            "id": "red-pandas",
            "title": "Red Pandas",
            "descr": "Raising awareness for Red Pandas, one webpage at a time",
            "image": "red-panda.png",
            "details": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum. Sed id semper risus in hendrerit gravida. Placerat duis ultricies lacus sed. Id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit.",
                "Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
            ],
            "gallery": [
                [
                    "red-panda.png",
                    "camera.jpeg"
                ],
                [
                    "sketchbook.jpeg",
                    "code.jpeg"
                ],
                [
                    "desktop.jpeg",
                    "sketchbook.jpeg"
                ]
            ]
        },
        {
            "id": "violin-robot",
            "title": "Violin Playing Robot",
            "descr": "A robot that plays the violin",
            "image": "camera.jpeg",
            "details": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum. Sed id semper risus in hendrerit gravida. Placerat duis ultricies lacus sed. Id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit.",
                "Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
            ]
        },
        {
            "id": "ecologme",
            "title": "Ecologme",
            "descr": "A website for sustainability",
            "image": "sketchbook.jpeg",
            "details": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum. Sed id semper risus in hendrerit gravida. Placerat duis ultricies lacus sed. Id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit.",
                "Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
            ]
        }
    ]`
);



function getQueryValue(q) {
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == q){return pair[1];}
       }
       return(false);
}

// load project information into project page
function loadProjectPage() {
    // get project defined by url key
    var query = getQueryValue("p")
    let proj = null;
    console.log("query " + query)
    for (let i = 0; i < content.length; i++) {
        if (content[i]["id"] == query)
            proj = content[i];
    }
    console.log(proj);

    // set name, description, & header image
    document.getElementById("project-name").innerHTML = proj["title"];
    document.getElementById("description").innerHTML = proj["descr"];
    document.getElementById("header-img").src = imgBaseURL + proj["image"];
    console.log("wrote project name, descr, header img")

    // populate details
    details = proj["details"];
    for (let i = 0; i < details.length; i++) {
        const p = document.createElement("div");
        p.setAttribute("class", "body-text");
        p.innerHTML = details[i];
        document.getElementById("details-container").appendChild(p);
    }

    // populate gallery images
    images = proj["gallery"];
    for (let col = 0; col < images.length; col++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");

        for (let row = 0; row < images[col].length; row++) {
            console.log("adding to gallery " + imgBaseURL + images[col][row]);
            
            const imageContainer = document.createElement("div");
            imageContainer.setAttribute("class", "image-container");

            const image = document.createElement("img");
            image.setAttribute("class", "gallery-image");
            image.setAttribute("src", imgBaseURL + images[col][row]);
            
            imageContainer.appendChild(image);
            column.appendChild(imageContainer);
        }
        document.getElementById("gallery-template").appendChild(column);
    }
}

// load project cards into home page
function loadHomePage() {
    let projectsContainer = document.getElementById("projects-list-template");
    for (let i = 0; i < content.length; i++) {
        proj = content[i];
        console.log(proj);

        let newContent = `
        <img src="${imgBaseURL + proj["image"]}" class="project-image">
        <div class="project-card-text-container">
            <div class="subheader-text project-title">${proj["title"]}</div>
            <div class="body-text project-card-text">${proj["descr"]}</div>
        </div>
        <a class="button" href="${projectBaseURL + "?p=" + proj["id"]}">
            <span class="button-text">Read More</span>
            <image src="./assets/icons/arrow-right.svg" class="right-arrow-icon"/>
        </a>`;

        const newCard = document.createElement('div');
        newCard.setAttribute("class", "project-card");
        newCard.innerHTML = newContent;
        projectsContainer.appendChild(newCard)
    }
}



// set url origin to local or server location
var imgBaseURL = window.location.origin === "file://" ? "./assets/images/" : window.location.origin + "/assets/images/";
var projectBaseURL = window.location.origin === "file://" ? "project.html" : window.location.origin + "project";

console.log("images at " + imgBaseURL);

if (document.getElementById("projects-list-template") == null) {
    loadProjectPage();
} else {
    loadHomePage();
}