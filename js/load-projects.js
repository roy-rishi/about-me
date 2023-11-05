const content = JSON.parse(
    `
    [
        {
            "id": "red-pandas",
            "unlisted": "",
            "title": "Red Pandas",
            "descr": "Raising awareness for Red Pandas, one webpage at a time",
            "thumbnail": "red-panda/0.webp",
            "banner": "",
            "body": [
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
            "title": "Violin Robot",
            "descr": "A violin playing robot built on precise Computer-Aided Design & powered by a custom circuit board",
            "thumbnail": "violin-robot/render2.webp",
            "body": [
                {
                    "type": "paragraph",
                    "heading": "Details",
                    "content": [
                        "Designed to explore how precision robotics can apply machine learning to perform the intricate task of playing the violin. Still a work in progress; Highlights in its Computer-Aided Design (CAD) and electronics are available here.",
                        "Design files at: <a href='https://github.com/roy-rishi/violin-robot' class='no-underline'>github.com/roy-rishi/violin-robot</a>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Computer-Aided Design",
                    "content": [
                        "Files for 3D printing. Designed over the past 6 months, with over 638 versions and two complete restarts. Here are some close-ups, but note that due to the nature of the complexity of this file, all components cannot be digitally assembled together into one picture. What follows are renders of various components, in no particular order."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "violin-robot/cad1.webp",
                            "violin-robot/cad6.webp",
                            "violin-robot/cad2.webp"
                        ],[
                            "violin-robot/cad8.webp",
                            "violin-robot/cad7.webp"
                        ],[
                            "violin-robot/cad3.webp",
                            "violin-robot/cad4.webp"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Specialized Circuit Board",
                    "content": [
                        "Based on the ATmega2560 microcontroller, this board performs hardware actions requested by a Raspberry Pi single board computer. It drives 6 stepper motors, takes sensor input, and manages a custom active cooling system. It implements robust power supply circuity and cooling to drive motors at 36 V, for a system maximum of 360 W."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "violin-robot/ee3.png",
                            "violin-robot/ee4.png"
                        ]
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "violin-robot/ee1.png",
                            "violin-robot/ee2.png"
                        ]
                    ]
                }
            ]
        },
        {
            "id": "photo",
            "title": "Photography",
            "descr": "",
            "thumbnail": "photo/wild_0498.jpg",
            "banner": "",
            "body": [
                {
                    "type": "style",
                    "content": "body \{background-color: rgb(20, 20, 20); color: white;\} \#navbar \{background-color: rgb(20, 20, 20);\} \#navbar * \{color:white;\} .right-arrow-icon \{filter:invert(1);\}"
                },
                {
                    "type": "paragraph",
                    "heading": "Astrophotography",
                    "content": [
                        "I visit remote forests, tweaking my camera settings until I reveal the starry night. Mount Rainier National Park is my ultimate photography location."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/astro_0226.jpg",
                            "photo/astro_0231.jpg"
                        ],[
                            "photo/astro_0227.jpg"
                        ],[
                            "photo/astro_0245.jpg",
                            "photo/astro_0222.jpg"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Wildlife Photography",
                    "content": [
                        "I've captured photos of animals in a variety of places, venturing anywhere from mountains to tundra to get the perfect shot."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/wild_0450.jpg",
                            "photo/wild_0463.jpg"
                        ],[
                            "photo/wild_0481.jpg",
                            "photo/wild_0498.jpg"
                        ],[
                            "photo/wild_0564.jpg",
                            "photo/wild_0406.jpg"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Other Photography",
                    "content": [
                        "I am always taking photos, bringing a camera with me to more places than not. Below, you'll find various galleries of my shots."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/flower_0298.jpg",
                            "photo/flower_0287.jpg",
                            "photo/flower_0289.jpg"
                        ],[
                            "photo/flower_0292.jpg",
                            "photo/flower_0293.jpg"
                        ],[
                            "photo/flower_0301.jpg",
                            "photo/flower_0284.jpg",
                            "photo/flower_0291.jpg"
                        ]
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
    // title
    title = document.createElement("div");
    title.setAttribute("class", "main-title");
    title.innerHTML = proj["title"];
    document.getElementById("project-header").appendChild(title);

    // description
    descr = document.createElement("div")
    descr.setAttribute("class", "body-text");
    descr.innerHTML = proj["descr"];
    document.getElementById("project-header").appendChild(descr);

    // bannner
    banner = document.createElement("img")
    banner.setAttribute("class", "project-header-image");
    // if no banner image, select thumnail as banner, if banner field = "", no banner image
    banner.setAttribute("src", imgBaseURL + (proj["banner"] != null ? proj["banner"] : proj["thumbnail"]));
    if (proj["banner"] != "")
        document.getElementById("project-header").appendChild(banner);
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

        // assign column width based on on number of columns
        if (images.length == 1)
            column.setAttribute("class", "column full-width")
        if (images.length == 2)
            column.setAttribute("class", "column half-width")
        if (images.length == 3)
            column.setAttribute("class", "column third-width")

        imgContainer.appendChild(column);
    }
    secContainer.appendChild(imgContainer);
    document.getElementById("main-body-template").appendChild(secContainer);
}

// load js
function loadJS(stringEval) {
    eval(stringEval)
}

function loadStyle(content) {
    style = document.createElement("style");
    style.innerHTML = content;
    document.getElementById("main-body-template").appendChild(style);
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
        if (secType == "script") {
            loadJS(section["content"]);
        }
        if (secType == "style") {
            loadStyle(section["content"]);
        }
    }

}

// load project cards into home page
function loadHomePage() {
    let projectsContainer = document.getElementById("projects-list-template");
    for (let i = 0; i < content.length; i++) {
        proj = content[i];
        console.log(proj);

        let newContent = `
        <img src="${imgBaseURL + proj["thumbnail"]}" class="project-image">
        <div class="project-card-text-container">
            <div class="subheader-text project-title">${proj["title"]}</div>
            <div class="body-text project-card-text">${proj["descr"]}</div>
        </div>
        <a class="button" href="${projectBaseURL + "?p=" + proj["id"]}">
            <span class="button-text">Read More</span>
            <image src="./assets/icons/arrow-right.svg" class="right-arrow-icon"/>
        </a>`;

        // if not unlisted, add to project list
        if (proj["unlisted"] == null) {
            const newCard = document.createElement('div');
            newCard.setAttribute("class", "project-card");
            newCard.innerHTML = newContent;
            projectsContainer.appendChild(newCard);
        }
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