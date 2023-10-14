<!DOCTYPE html>

<?php // I'll use php comments so people can't read it off from the skeleton of the website ?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css" />

    <title>Document</title>

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
</head>

<body>

    <section id="Header">
        <div class="dev-personal"><img id="dev-portrait" src="assets/images/SelfPortrait.png" /></div>
        <div class="dev-details">
            <div class="dev-details-content">
                <h1 class="dev-name">ROQUE DANIELLE B. PEREZ</h1>
                <p class="dev-summary"><i>I'm a backend web developer, but I designed this portfolio myself.</i></p>
            </div>
        </div>
    </section>

    <nav class="nav">
        <span class="logo"><a href="#"><b>Roque</b></a></span>
        <span class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li class="contact"><a href="#Contact">Hire Me!</a></li>
            </ul>
        </span>
    </nav>

    <section id="Projects">
        <h2><b>PROJECTS</b></h2>
        <div class="cont-projects">
            
            <?php // cont-projects will contain project cards ?>
            <div class="project-card">
                <div class="project-header">
                    <img src="assets/images/Tensai Screenshot.png" alt="Screenshot of Tensai">
                </div>
                <div class="project-content">
                    <h3 class="project-title">TENSAI: An Interactive E-Learning Web Application in Science for Grade 1 Students with Voice-Controlled Assistant</h3>
                    <p class="project-description">This was developed as part of the requirements for ICTC2023 & ICTC2113 courses.</p>
                    <a class="project-button" id="project-button-tensai">
                        See More...
                    </a>
                    <div class="project-dropdown" id="project-dropdown-tensai">
                        <b>I did:</b>
                        <ul>
                            <li>Lead the project</li>
                            <li>Developed the backend of the whole system</li>
                            <li>Tweaked with the frontend for DOM purposes</li>
                        </ul>

                        <b>Technologies:</b>
                        <ul>
                            <li>HTML, CSS, Javascript</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>PWA</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="Contact">
        <div class="card-contact">
            <h1 class="card-title">HIRE ME!</h1>
            <p class="card-content">
                work.roqueperez@gmail.com
            </p>
        </div>
    </section>

    <footer>
        All rights reserved 2023-<p id="copyright-year"> Present</p>.
    </footer>

    <script src="frontend.js" defer></script>

</body>

</html>