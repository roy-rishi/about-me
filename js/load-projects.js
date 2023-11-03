const content = JSON.parse(
    `
    [
        {
            "id": "red-pandas",
            "title": "Red Pandas",
            "descr": "Raising awareness for Red Pandas, one webpage at a time",
            "image": "red-panda/0.webp",
            "body":
                [
                    {
                        "type": "paragraph",
                        "heading": "Details",
                        "content": [
                            "The red panda is slightly larger than a domestic cat with a bear-like body and thick russet fur. The belly and limbs are black, and there are white markings on the side of the head and above its small eyes. Red pandas are very skillful and acrobatic animals that predominantly stay in trees.",
                            "Almost 50% of the red panda’s habitat is in the Eastern Himalayas. They use their long, bushy tails for balance and to cover themselves in winter, presumably for warmth. Primarily an herbivore, the name panda is said to come from the Nepali word ‘ponya,’ which means bamboo or plant eating animal.",
                            "— WWF"
                        ]
                    },
                    {
                        "type": "gallery",
                        "heading": "Gallery",
                        "content": [
                            [
                                "red-panda/2.webp",
                                "red-panda/0.webp"
                            ],[
                                "red-panda/3.webp",
                                "red-panda/4.webp"
                            ],[
                                "red-panda/1.webp"
                            ]
                        ]
                    }
                ]
        },
        {
            "id": "violin-robot",
            "title": "Violin Playing Robot",
            "descr": "",
            "image": "camera.jpeg",
            "body":
                [
                    {
                        "type": "paragraph",
                        "heading": "Details",
                        "content": [
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum. Sed id semper risus in hendrerit gravida. Placerat duis ultricies lacus sed. Id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit.",
                            "Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
                        ]
                    }
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

// load header
function loadHeader(proj) {
    // set name, description, & header image
    document.getElementById("project-name").innerHTML = proj["title"];
    document.getElementById("description").innerHTML = proj["descr"];
    document.getElementById("header-img").src = imgBaseURL + proj["image"];
    console.log("wrote project name, descr, header img")
}

// load paragraph section
function loadParagraphSection(header, content) {
    // section container
    const secContainer = document.createElement("div");
    secContainer.setAttribute("id", "project-details");
    // heading
    const heading = document.createElement("div");
    heading.setAttribute("class", "subheader-text");
    heading.innerHTML = header;
    secContainer.appendChild(heading);
    // paragraphs container
    const pContainer = document.createElement("div");
    pContainer.setAttribute("class", "project-details-content");

    // add paragraphs
    for (let i = 0; i < content.length; i++) {
        const p = document.createElement("div");
        p.setAttribute("class", "body-text");
        p.innerHTML = content[i];
        pContainer.appendChild(p);
    }
    secContainer.appendChild(pContainer);
    document.getElementById("main-body-template").appendChild(secContainer);
}

// load gallery section
function loadGallerySection(header, images) {
    // section container
    const secContainer = document.createElement("div")
    secContainer.setAttribute("id", "project-gallery");
    // heading
    const heading = document.createElement("div");
    heading.setAttribute("class", "subheader-text");
    heading.innerHTML = header;
    secContainer.appendChild(heading);
    // images container
    const imgContainer = document.createElement("div")
    imgContainer.setAttribute("class", "gallery-container");

    for (let col = 0; col < images.length; col++) {

        // column container
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
        imgContainer.appendChild(column);
    }
    secContainer.appendChild(imgContainer);
    document.getElementById("main-body-template").appendChild(secContainer);
    // set width css
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

    // load header
    loadHeader(proj);

    // populate body from array
    for (let i = 0; i < proj["body"].length; i++) {
        let section = proj["body"][i];
        let secType = section["type"];

        if (secType == "paragraph") {
            loadParagraphSection(section["heading"], section["content"]);
        }
        if (secType == "gallery") {
            loadGallerySection(section["heading"], section["content"]);
        }
    }


    // populate gallery images
    // images = proj["gallery"];
    // for (let col = 0; col < images.length; col++) {
    //     const column = document.createElement("div");
    //     column.setAttribute("class", "column");

    //     for (let row = 0; row < images[col].length; row++) {
    //         console.log("adding to gallery " + imgBaseURL + images[col][row]);
            
    //         const imageContainer = document.createElement("div");
    //         imageContainer.setAttribute("class", "image-container");

    //         const image = document.createElement("img");
    //         image.setAttribute("class", "gallery-image");
    //         image.setAttribute("src", imgBaseURL + images[col][row]);
            
    //         imageContainer.appendChild(image);
    //         column.appendChild(imageContainer);
    //     }
    //     document.getElementById("gallery-template").appendChild(column);
    // }
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
var projectBaseURL = window.location.origin === "file://" ? "project.html" : window.location.origin + "/project";

console.log("images at " + imgBaseURL);

if (document.getElementById("projects-list-template") == null) {
    loadProjectPage();
} else {
    loadHomePage();
}