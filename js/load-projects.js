const content = JSON.parse(
    `{
        "red-pandas": {
            "title": "Red Pandas",
            "descr": "Raising awareness of Red Pandas, one webpage at a time",
            "image": "./assets/images/red-panda.png",
            "details": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in fermentum. Sed id semper risus in hendrerit gravida. Placerat duis ultricies lacus sed. Id neque aliquam vestibulum morbi blandit cursus risus. Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit.",
                "Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
            ],
            "gallery": [
                [
                    "./assets/images/red-panda.png",
                    "./assets/images/camera.jpeg"
                ],
                [
                    "./assets/images/sketchbook.png",
                    "./assets/images/code.jpeg"
                ],
                [
                    "./assets/images/desktop.png",
                    "./assets/images/sketchbook.jpeg"
                ]
            ]
        },
        "violin-robot": {
            "title": "Violin Playing Robot",
            "descr": "A robot that plays the violin",
            "image": "./assets/images/camera.jpeg",
            "details": [
                "fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida. Aliquet nec ullamcorper sit amet. Aliquet sagittis id consectetur purus. Ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae. Lobortis feugiat vivamus at augue. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra orci sagittis eu volutpat. Massa tincidunt nunc pulvinar sapien et ligula. Donec enim diam vulputate ut."
            ]
        }
    }`
);

function getQueryValue(q)
{
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == q){return pair[1];}
       }
       return(false);
}

// get project defined by url key
var query = getQueryValue("p")
proj = content[query];

// set name, description, & header image
document.getElementById("project-name").innerHTML = proj["title"];
document.getElementById("description").innerHTML = proj["descr"];
document.getElementById("header-img").src = proj["image"];

// populate details
details = proj["details"];
for (let i = 0; i < details.length; i++) {
    const p = document.createElement("div");
    p.setAttribute("class", "body-text");
    p.innerHTML = details[i];
    document.getElementById("details-container").appendChild(p);
}

// populate gallery images
