import { useState } from "react";
import LazyLoad from "react-lazyload";
import { motion, useScroll, useSpring } from "framer-motion";

function MyButton() {
  return (

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tharathep's Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="asset/styles.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand mx-auto logo" id="nav-name">Tharathep's Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" id="nav-personal" href="#Personal-info">Personal Information</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-skill" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-edu" href="#edu">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-activities" href="#activities">Activities</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-certificate" href="#cer">Certificate</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="Personal-info" class="text-center py-5">
        <header class="mb-4"><br>Personal Information</header>
        <img id="myimg" src="asset/img/Myimg.png" class="rounded-circle border border-info" alt="My Image" width="200"
            height="200">
        <p class="mt-3"><b class="topic">Name</b> Tharathep Luangsilp</p>
        <p class="mt-3"><b class="topic">Nickname</b> Non</p>
        <p><b class="topic">Birthday</b> <span id="BirthDay"> 11<span id="Month">/10/</span>2009</span> </p>
    </section>

    <section id="skills" class="text-center py-4">
        <header class="mb-4">My Skills</header>
        <div class="container">
            <div class="row">
                <div class="col-md-3 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/language.png" alt="English Skill" class="mb-2 skill-logo" width="50">
                            <h5 class="card-title">English Skill</h5>
                            <p class="card-text">I can speak, Read and listen in English language.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/Prog.png" alt="Programming Skill" class="mb-2 skill-logo" width="50">
                            <h5 class="card-title">Programing Skill</h5>
                            <p class="card-text">I can make Website(Full-Stack) and also Python application</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/Design.png" alt="Design Skill" class="mb-2 skill-logo" width="50">
                            <h5 class="card-title">Design Skill</h5>
                            <p class="card-text">I Can design Logo, Website, UX/UI, 3D models and Fonts</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/Sing.png" alt="Singing Skill" class="mb-2 skill-logo" width="50">
                            <h5 class="card-title">Singing Skill</h5>
                            <p class="card-text">I can sing a song and also play instruments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="edu" class="text-center py-4">
        <header class="mb-5">My Education</header>
        <p>(Click or hover to see infomations.)</p>
        <div class="imgcontainer">
            <div class="scimgnp"></div>
            <div class="scimgps"></div>
        </div>
    </section>


    <section id="activities" class="text-center py-4">
        <header class="mb-4">My Activities</header>
        <div class="container">
            <div class="row">
                <div class="col-md-15 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/act1.png" alt="Activity 1" class="mb-2 activity">
                            <h5 class="card-title">Participated in the presentation</h5>
                            <p class="card-text">Presented the curriculum plan to Police General Permpoon Chidchob at
                                the <u><b>Transforming Education in the Digital Era event.</b></u></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/act2.png" alt="Activity 2" class="mb-2 activity">
                            <h5 class="card-title">Participated in the presentation</h5>
                            <p class="card-text">Presented the Online learning plan in <br><u><b>Edu Soft Power Festival
                                        2024 event.</b></u></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/act3.png" alt="Activity 3" class="mb-2 activity">
                            <h5 class="card-title">Participated in the presentation</h5>
                            <p class="card-text">Presented the Robotics curriculum to visitors for education</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="asset/img/act4.png" alt="Activity 4" class="mb-2 activity">
                            <h5 class="card-title">Participated in the presentation</h5>
                            <p class="card-text">Presenting the Robotics curriculum at PS Open House 2024</b></u></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="cer" class="text-center py-4">
        <header class="mb-4">My Certificate</header>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer1.png" alt="Sillapa 71" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer2.png" alt="Sillapa 70"class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer3.png" alt="World Robot Championship 2022" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer4.png" alt="Maker Robotics 2024" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer5.png" alt="World Robot Chapionship 2023" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer6.png" alt="BorntoDEV <u>ChatGPT</u>" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer7.png" alt="freeCodeCamp <u>Responsive Web Design</u>" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer8.png" alt="Thai Etiquette Contest 2024" class="cert-img">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card cercard">
                        <div class="card-body">
                            <img src="asset/img/cer/cer9.png" alt="Thai Etiquette Contest 2023" class="cert-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption"></div>
    </div>
</body>

  );

var modal = document.getElementById("myModal");
        
        // Get all certificate images
        var certImages = document.getElementsByClassName("cert-img");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        
        // Loop through each image and add click event
        for (var i = 0; i < certImages.length; i++) {
            certImages[i].onclick = function(){
              modal.style.display = "block"; // Show the modal
              modalImg.src = this.src; // Set the source of the modal image to the clicked image
              captionText.innerHTML = this.alt; // Set the caption text to the alt attribute of the clicked image
            }
        }
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none"; // Hide the modal
        }
}

    
export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);
  return (
    <>
      <LazyLoad hedight={200}>
        <motion.div
          className="progress-bar fixed top-0 left-0 h-1 md:h-2 right-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-50"
          style={{ scaleX: scaleX }}
        />
        <div
          className={`flex flex-col gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        >
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
          <Hero />
          <EveryLink />
          <ImageSlideRevealGrid />
        </div>

        <Contact />
      </LazyLoad>
    </>
  );
}
