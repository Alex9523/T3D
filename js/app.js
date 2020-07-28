function Menu() {
    return (
        <div className="menu">
            <div className="mainmenu">
                <a href="#about" className="menu-a-1">Hello</a>
                <a href="#3dcube" className="menu-a-2">About</a>
                <a href="#skill" className="menu-a-3">Work</a>
                <a href="#contact" className="menu-a-4">Contact</a>
                <div className="menu-a-5"><a href="#footer">Developed by...</a></div>
            </div>
        </div>
    )
}

function Tittle() {
    return (
        <div className="tittle">
            <h4>My micro city for Maks from T3D</h4>
            <h1>Interactive Map</h1>
        </div>
    )
}

function Header() {
    return (
        <header id="about">

            <h1 className="hello">HELLO</h1>
            <canvas className="greating">
            </canvas>

        </header>
    )
}

function About() {
    return (
        <div id="3dcube" className="about-container">
            <article>
                <h2>About</h2>
                <p>Cite about <br />Frontent developing</p>
            </article>
            <hr />
            <Cube />
        </div>
    )
}

function Sphere() {
    return (
        <canvas id="sphere"></canvas>
    )
}

function Cube() {
    return (
        <canvas id="cube"></canvas>
    )
}

function Planet() {
    return (
        <canvas id="planet"></canvas>
    )
}

function Work() {
    return (
        <div id="skill" className="work">
            <div className="skills">
                <div className="skill">
                    <span><h2>qwerew qfref afra afr afarf arf arfarf arfre arferfa arfarf arfre arferfa</h2></span>
                    <Sphere />
                </div>
                <div className="skill">
                    <Planet />
                    <span><h2>qwerew qfref afra afr afarf arf arfarf arfre arferfa arfarf arfre arferfa</h2></span>
                </div>
            </div>
        </div>
    )
}

function Back() {
    return (
        <div className="testBack">
            <Contact />
            <canvas id="back">
                
            </canvas>
        </div>
    )
}

function Contact(){
    return(
        <div id="contact"className="contact-container">
            <div className="contact-info">
                <span><h3><a href="https://github.com/Alex9523/T3D">Git Hub</a></h3></span>
                <span><h3><a>syaskiy9523@gmail</a></h3></span>
                <span><h3><a>097-92-79-146</a></h3></span>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <footer id="footer">
            <h3>Developed by Alex for Maks</h3>
        </footer>
    )
}

function Main() {
    return (
        <div>
            <Menu />
            <Header />
            <About />
            <Work />
            <Back />
            <Footer />

        </div>
    )
}






ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
fog()
//ready()
sphere()
cube()
planet()
workBackground()