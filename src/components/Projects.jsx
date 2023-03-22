import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import airshare from '../assets/img/Airshare.gif'
import musicfy from '../assets/img/Musicfy.gif'
import memegen from '../assets/img/Memegen.gif'
import React from "react";


export const Projects = () => {
    const projects = [
        {
            title: "Airshare",
            description: "Fully functional Airbnb clone with date choosing, property filters, user and owner dashboard and more.",
            technology:'Vue.js, Node.js, MongoDB, Sass, Express, Axios, Git, Postman ',
            imgUrl: airshare,
            Link:'https://airshare-backend-iszf.onrender.com',
        },
        {
            title: "Music app",
            description: "A Spotify clone with a player bar, top songs around you, genre filtering, search bar and more",
            technology:"React.js, Redux, Axios, Bootstrap, Tailwind, ShazamCoreApi ",
            imgUrl: musicfy,
            Link:'https://liorkeizman.github.io/Musicfy/'
        },
        {
            title: "Meme Generator",
            description: "A Meme generator app with a customizable memes, download and sharing options, filtering by category and more",
            technology:"Javascript, CSS, HTML ",
            imgUrl: memegen,
            Link:'https://liorkeizman.github.io/MemeGen/'
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>As a developer, I am constantly seeking opportunities to apply my skills and learn new ones. In my personal projects, I have tackled a variety of challenges, from building simple websites and applications to creating more complex projects that showcase my ability to work with APIs and databases. These projects not only demonstrate my technical skills, but also reflect my passion for creating useful and engaging applications. I am excited to continue exploring new project ideas and challenges, and to share my passion for development with others.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {

                                            <ProjectCard
                                                // key={index}
                                                {...projects[0]}

                                            />


                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {

                                        <ProjectCard
                                            {...projects[1]}

                                        />

                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    {

                                        <ProjectCard
                                            {...projects[2]}

                                        />

                                    }
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorsharp" />
        </section>
    )
}