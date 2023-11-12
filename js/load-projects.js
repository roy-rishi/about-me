// set url origin to local or server location
var imgBaseURL = window.location.origin === "file://" ? "./assets/images/" : window.location.origin + "/assets/images/";
var projectBaseURL = window.location.origin === "file://" ? "project.html" : window.location.origin + "/project";

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
            "id": "ccc",
            "title": "Inglemoor Coding Club",
            "descr": "Coding and Computing Club at Inglemoor High School",
            "thumbnail": "ccc/01.webp",
            "banner": "",
            "body": [
                {
                    "type": "paragraph",
                    "heading": "Club Activities",
                    "content": [
                        "We host events that cater to all levels and interests in computer science. Additionally, members of Inglemoor's IB CS, Web Design, and C# classes can benefit from our homework help sessions, tips, and environment to learn.",
                        "<a class='button' href='https://inglemoorccc.org/'>Club Website<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Northshore Coding Competition",
                    "content": [
                        "A competition that we hosted at our high school. It aimed to build upon skills students learned in an out of the classroom throughout the school year. The officer team that I directed created questions and solutions, fundraised for food, and promoted the event to highschoolers in our school district. Additionally, we reached out to sponsors and guest speakers, bringing a principal machine learning scientist at Microsoft and a software development manager at Amazon to speak to our attendees on their life stories.",
                        "With 35 students in attendance from around the district, the event was an all-round success. We learned a lot, and we are bringing this event back for April, 2024.",
                        "<a class='button' href='https://ncc.inglemoorccc.org/'>Competition Page<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "ccc/02.webp",
                            "ccc/06.webp"
                        ],[
                            "ccc/05.webp"
                        ],[
                            "ccc/03.webp",
                            "ccc/07.webp"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Viking Coding Cup",
                    "content": [
                        "A school-wide event with a variety of competition categories. It aimed to be accessible to programmers of all levels, with problems ranging in difficulty level. The officer team that I directed created questions and solutions and promoted the event through our school's publications, class presentations, and online media."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["ccc/08.webp"]
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "Our Mascot",
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
            "thumbnail": "violin-robot/render/hero-right2.webp",
            "body": [
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "Designed to explore how robotics can apply machine learning to perform the intricate task of playing the violin. Few other instruments demand the speed, agility, and precision, that the violin does. With a long bow that needs to be guided precisely through its stroke, and a fingerboard without frets, it takes years of dedicated practice to master this instrument. <span style='font-style: italic;'>Could a robot learn to play the violin?</span> Better yet, could it learn new pieces without human input? With endless possibilities for achieving this, the project and the answer to that question are a work in progress; highlights in its Computer-Aided Design (CAD) and electronics are available one this page.",
                        "The robot will take input of any song by a MIDI and audio file, and plan the motion of the robot. Just like a human, the robot will dynamically adjust it's motion according to real-time audio and motion feedback. These systems, paired with specialized mechanics, will work together to drive the robot at the high speeds and extreme precision that playing the violin demands. Through this project, I am developing software and mechanical systems that advance my skills in robotics. I know that I have and will continue to take away skills that I would have never had if not for this project, and I hope to implement those in medicine and sustainability in the future."
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Degrees of Freedom",
                    "content": [
                        "The robot is designed to perform these motions",
                        "<video autoplay muted loop style='width: 100%'><source src='${imgBaseURL}violin-robot/render/dof.mp4' type='video/mp4'></video>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "Annotated Components",
                    "content": [
                        ["violin-robot/render/annotated-parts1.webp"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "<h3>Component 1</h3>The two z-axis carriages are responsible for guiding the bow rail upwards and downwards. They move a short distance vertically, allowing for the robot to modulate the pressure of the bow on the violin's string, dynamically adjust for misalignments throughout the bow-stroke, and provide other self-correcting measures.",
                        "<h3>Component 2</h3>This carriage holds a real violin bow (bow not pictured) in its clamp, and contrains its sliding motion to the left and right as pictured. It rides on v-wheels positioned to direct counter-forces perpendicularly into the rail for precision even under the load of being pressed against the violin's strings. They are tensioned against the rail through the elasticity of the carriage, allowing for the lowest tolerances in its motion regardless of pressure. Note: This carriage was previously designed for a 20x40mm rail, however the design has since changed to use a 20x20mm rail to reduce moving mass. This is why the guide wheels have not yet been redesigned to fit the new, thinner rail.",
                        "<h3>Component 3</h3>This arm supports a real violin, allowing it to rotate. This allows the robot to select which string, or strings, will make contact with the bow."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["violin-robot/render/back-annotated1.webp"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "<h3>Component 4</h3>At the forefront of the fingering mechanism is this carriage. It rapidly slides alongst the length of the string, controlling the pitch by contacting the string with a roller. Given the need for both speed and extreme precision, this was the most challenging aspect of the robot's mechanics. It is belt-driven and powered by two high-amperage stepper motors. As it is critical to minimize the weight of the moving carriage, it uses a different type of rail than the bow. This allows for plastic bushings to guide the carriage long the rail instead of the heavier v-wheels and accompanying hardware. The weight savings allow for faster movements with greater precision and reduced risk of lost steps.",
                        "<h3>Component 5</h3>This smaller carriage mounts the roller that contacts the violin's strings. It dynamically adjusts for the slant of the violin strings, and can lift away from the string. It is extremely light-weight to allow for rapid movements along the lenght of the string. Although it is currently operated by a micro-servo mounted to the sliding carriage, future revisions will be remotely actuated by a cable (similar to cable-actuated bike brake) further minimizing weight while allowing for speed beyond the capabilities of a micro-servo."
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Interactive Model",
                    "content": [
                        "Click on the image, or click and drag to the left or right, to interact with the model below",
                        "<iframe src='${imgBaseURL}violin-robot/36-frame-table.html' width='100%' height='640px' frameborder='0' scrolling='no'>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Physical Build",
                    "content": [
                        "Various components and versions of the robot. Most parts have several revisions, and can be seen lined up. There were many unused prototypes and revisions that brough the robot to its current stage."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "violin-robot/01.jpg"
                        ],[
                            "violin-robot/02.jpg"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "<h1>Specialized Circuit Board</h1>",
                    "content": [
                        "Based on the ATmega2560 microcontroller, this board performs hardware actions requested by a Raspberry Pi single board computer. It drives 6 stepper motors, takes sensor input, and manages a custom active cooling system. It implements robust power supply circuity and cooling to drive motors at 36 V, for a system maximum of 360 W. The software will be written for the Raspberry Pi and the custom board."
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
            "descr": "Capturing nature through photography",
            "thumbnail": "photo/wild_0481-crop.webp",
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
                        "I visit remote forests, tweaking my camera settings until I capture the starry night. Mount Rainier National Park is my favorite photography destination."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/astro_0226.webp",
                            "photo/astro_0231.webp"
                        ],[
                            "photo/astro_0227.webp"
                        ],[
                            "photo/astro_0245.webp",
                            "photo/astro_0222.webp"
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
                            "photo/wild_0498.webp",
                            "photo/wild_0463.webp",
                            "photo/wild_0564.webp"
                        ],[
                            "photo/wild_0481.webp",
                            "photo/wild_0450.webp",
                            "photo/wild_0631.webp"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Other Photography",
                    "content": [
                        "I'm always taking photos, bringing a camera with me to more places than not. Below, you'll find various galleries of my shots."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/flower_0298.webp",
                            "photo/flower_0287.webp",
                            "photo/flower_0289.webp"
                        ],[
                            "photo/flower_0292.webp",
                            "photo/flower_0293.webp"
                        ],[
                            "photo/flower_0301.webp",
                            "photo/flower_0284.webp",
                            "photo/flower_0291.webp"
                        ]
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/land_0584.webp",
                            "photo/land_0620.webp",
                            "photo/land_121539.webp"
                        ],[
                            "photo/land_0855.webp",
                            "photo/land_2129.webp",
                            "photo/land_1026.webp"
                        ],[
                            "photo/land_095247.webp",
                            "photo/land_113230.webp",
                            "photo/land_163900.webp"
                        ]
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "photo/macro_0028.webp"
                        ],[
                            "photo/macro_0643.webp"
                        ],[
                            "photo/macro_0224.webp"
                        ]
                    ]
                }
            ]
        },
        {
            "id": "ecologme",
            "title": "EcologMe",
            "descr": "A website that generates actionable ideas for anyone to lower their environmental footprint",
            "thumbnail": "ecologme/01.webp",
            "banner": "",
            "body": [
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["ecologme/02.webp"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Details",
                    "content": [
                        "EcologMe’s mission is to empower individuals to make a positive impact on the environment. Through user and locale-based input, we generate actionable and motivating ideas for community members to lower their environmental footprint. By leveraging user input that includes their location, budget, and free time, our recommendations are incredibly personalized to address specific needs and preferences. This lends them to solutions that integrate well with the local community and keep individuals motivated to pursue their own goals.",
                        "EcologMe collects localization input on crucial factors such as air quality, water quality, littering, and biodiversity. Our platform is dedicated to providing tailored solutions that are relevant to each individual's local community. By offering personalized recommendations that address personal concerns and motivations, we aim to inspire and empower individuals to take meaningful action towards a greener and more sustainable future – for their community, and themselves."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "Data",
                    "content": [
                        ["ecologme/03.webp"],
                        ["ecologme/04.webp"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "Individuals must understand and value the projected benefits of changing their behavior. Our platform has this at the heart of its design, making use of a stats page on the user’s local city to highlight pertinent issues that align with the generated suggestions for making progress. This page innovatively unites data with solutions by putting data at the center of the experience to highlight the data-driven nature of the solutions."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "User-Specific Input",
                    "content": [
                        ["ecologme/05.webp"]
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "Generated Solutions",
                    "content": [
                        ["ecologme/06.webp"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "Based on the location-specific data that our website gathered, and the user input, the website generated five ideas. Here, it can be seen that because the user wanted to focus on their home energy usage, the first idea was to install smart thermostats. Unlike any previous software, our project also makes an argument, stating how and why the solution is ideal for the user. Through this creative implementation of emerging AI technology, our website promotes environmentalism at the individual level, a critical step to make a global difference in humanity's footprint."
                    ]
                }
            ]
        },
        {
            "id": "instructables",
            "title": "Instructables",
            "descr": "Inspiring others through my projects",
            "thumbnail": "instructables/01.webp",
            "banner": "",
            "body": [
                {
                    "type": "paragraph",
                    "heading": "What Instructables Is",
                    "content": [
                        "Instructables is a website that provides a platform for people to share projects with step-by-step instructions for others to replicate. Users can upload their projects, which include detailed instructions, fiiles, and photos to help others replicate or get inspired from their work. It has become a popular resource for people seeking guidance and inspiration for their DIY endeavors, and it increases accessibilty to a range of topics.",
                        "I publish many of my projects online, hoping they may inspire others. On Instructables, I write clear and concise guides that that anyone can follow. I not only show how I made my project, but also how <span style='font-style:italic;'>anyone</span> can make it. I use a 3D printer, however I explain alternative tools that can be used, how it can be done by hand, and how individuals could leverage community resources.",
                        "<a class='button' href='https://www.instructables.com/member/Zero%20To%20Infinity/'>My Profile<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Contests and Achievements",
                    "content": [
                        "Instructables runs contests for creating and publishing new high quality projects. They accept international entries from makers of all ages and professions, and have a community panel judge contest entries.",
                        "I won first prize for a project on making strap-on cleats for traction in ice. The contest was winter themed, so I created a project (detailed below) that made an important safety device more accessible. The judges appreciated my clear presentation of an effective solution to slippery shoes. Out of nearly 100 entries, my entry was selected for the first prize.",
                        "I won runner up for a student design challenge. I learned a new skill, and designed a project around it. See more below."
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "<h1>Strap-On Cleats for Ice and Snow Traction</h1>",
                    "content": [
                        "Winter can be such a blast, but slips and falls from slippery sidewalks and icy roads pose a serious threat to those that need to walk or commute in icy conditions, such as workers, students, or individuals with disabilities. They are at higher risk for serious injury, but don't always have the option to stay indoors. Snow shoes are often an excellent solution, but they are bulky and inaccessible. With many shoe sizes without cleats, this project helps anyone make one for their shoe. Some places rarely experience snow and ice, so homemade strap-on tracks can provide quick, accessible, and affordable relief to icy conditions.",
                        "<a class='button' href='https://www.instructables.com/Strap-On-Cleats-for-Ice-and-Snow-Traction/'>My Project<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "instructables/01.webp"
                        ],[
                            "instructables/05.webp"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "CAD Procedure",
                    "content": [
                        "With my goal to make it easy for anyone to customize this project to their own needs, I showed an in-depth summary of my design and thought process, highlighting various CAD features that I used to make a cleat for my shoe."
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        [
                            "instructables/06.webp"
                        ],[
                            "instructables/03.webp"
                        ],[
                            "instructables/04.webp"
                        ]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "<h1>New Year, New Skill Student Design Challenge</h1>",
                    "content": [
                        "I designed a project in which I learned a new skill, Sheet Metal CAD Tools, and entered this into this contest. I showed what I learned, teaching others the same skill throught a novel approach to manufacturing.",
                        "<a class='button' href='https://www.instructables.com/Custom-Paper-Dice-Using-Sheet-Metal-CAD-Tools/'>My Project<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                }
            ]
        },
        {
            "id": "tsa",
            "title": "Inglemoor TSA",
            "descr": "Inglemoor's Technology Student Association (TSA) chapter",
            "thumbnail": "tsa/01.jpg",
            "banner": "",
            "body": [
                {
                    "type": "paragraph",
                    "heading": "Club Activities",
                    "content": [
                        "We prepare members for success in the Washington TSA and National TSA conferences. By competing in a variety of events at these conferences, students have the chance to network with other students and develop real-world skills.",
                        "<a class='button' href='https://main--inglemoortsa.netlify.app/'>Club Website<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "Resources",
                    "content": [
                        "Creating and releasing resources for members to use is a significant part of what we do. As a president, I brainstorm and launch initiatives to achieve this goal. In addition to the workshops, presentations, and mentorship program that we have, we have utilized online resources. Our website, which I became the webmaster of, links to several resources, and condenses information into easy-to-use formats. For example, there is a page to help members learn about the events that TSA offers."
                        
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["tsa/02.jpg"],
                        ["tsa/03.jpg"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "<h1>Awards</h1>",
                    "content": [
                        "Results from my time competing at the Washington TSA state-level conference. I have competed in the following events:",
                        "<span style='font-weight: 700;'>Computer-Aided Design (CAD) 3D Engineering</span>: With time constraints, use CAD to make a 3D representation of a product. The preliminary round is judged on a 3D drawing and the semifinal round is judged based on the design solution and interview.",
                        "<span style='font-weight: 700;'>Software Development</span>: Teams will design, implement, test, and document a software development project in advance of the competition. The project should have plausible educational or social value.",
                        "<span style='font-weight: 700;'>Coding</span>: Coding or logic problems must be solved in a constrained amount of time. The preliminary round is judged based on a test and the semifinal round is judged based on the design and construction of problem solutions."
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "2023",
                    "content": [
                        "<h3><span style='font-style: italic; font-weight: 700;'>2nd Place</span> – Computer-Aided Design (CAD) 3D Engineering</h3>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["tsa/c01.jpg"],
                        ["tsa/c02.jpg"],
                        ["tsa/c03.jpg"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "<h3><span style='font-style: italic;'>2nd Place</span> – Software Development</h3>",
                        "My team and I developed Tool Link, a website that allows anyone to rent their tools, or workshops, to makers on the internet. As students interested in STEM, we can attest to the fact that it is extremely difficult to find the necessary tools to complete our ambitious projects. On the other hand, many might own 3D printers, laser cutters, lathes, and other tools, but without regularly using them. Without these tools, students can't make projects that could be the first step to change the world. <span style='font-style: italic; font-weight: 700;'>What if we could connect these people?</span>",
                        "<a class='button' href='https://www.tool-link.org/'>Tool Link<image src='./assets/icons/arrow-right.svg' class='right-arrow-icon'/></a>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["tsa/c04.jpg"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "2022",
                    "content": [
                        "<h3><span style='font-style: italic; font-weight: 700;'>2nd Place</span> – Computer-Aided Design (CAD) 3D Engineering</h3>"
                    ]
                },
                {
                    "type": "gallery",
                    "heading": "",
                    "content": [
                        ["tsa/c05.jpg"],
                        ["tsa/c06.jpg"],
                        ["tsa/c07.jpg"]
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "",
                    "content": [
                        "<h3><span style='font-style: italic; font-weight: 700;'>2nd Place</span> – Coding</h3>"
                    ]
                },
                {
                    "type": "paragraph",
                    "heading": "2021",
                    "content": [
                        "<h3><span style='font-style: italic; font-weight: 700;'>4th Place</span> – Computer-Aided Design (CAD) 3D Engineering</h3>"
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



console.log("images at " + imgBaseURL);

if (document.getElementById("projects-list-template") == null) {
    loadProjectPage();
} else {
    loadHomePage();
}