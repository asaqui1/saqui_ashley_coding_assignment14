import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import components from Storybook library
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Img } from "./components/Img";
import { HeroImg } from "./components/HeroImg";
import { Card } from "./components/Card";

// HOMEPAGE
const Home: React.FC = () => (
  <div className="page">
    <section className="section basic-info">
      <HeroImg src="images/miffyicon.jpg" alt="Ashley Saqui" />
      <h1>Ashley Saqui</h1>
      <Label text="Full Stack Developer | UX/UI & Product Design" />
      <Text content=" Full Stack Web Development student specializing in front-end development, I'm dedicated to blending thoughtful UX with clean, intuitive UI. With experience across both front and back-end development, I bring a well-rounded perspective from concept to functionality. " />
      <div className="contact-links">
        <Button
          text="Email"
          backgroundColor="#f48fb1"
          onClick={() =>
            (window.location.href = "mailto:asaqui@academic.rrc.ca")
          }
        />
        <Button
          text="GitHub"
          backgroundColor="#ce93d8"
          onClick={() => window.open("https://github.com/asaqui1", "_blank")}
        />
        <Button
          text="LinkedIn"
          backgroundColor="#f48fb1"
          onClick={() =>
            window.open("https://linkedin.com/in/ashley-ms", "_blank")
          }
        />
      </div>
    </section>
  </div>
);

// WORK
const Work: React.FC = () => (
  <div className="page">
    <section className="section">
      <h2>Work</h2>
      <div className="work-grid">
        {/* Project 1 */}
        <div className="project-card">
          <Img src="images/storybook.png" alt="Component Library Project" />
          <div className="project-content">
            <Card
              title="Component Library"
              description="A reusable React component library built with TypeScript and Storybook. Includes buttons, cards, forms, tables, and more with full documentation."
              backgroundColor="#ffffff"
            />
            <div className="tech-list">
              <Label text="React" />
              <Label text="TypeScript" />
              <Label text="Storybook" />
              <Label text="Styled Components" />
            </div>
            <Button
              text="View Project →"
              backgroundColor="#f48fb1"
              onClick={() =>
                window.open(
                  "https://github.com/ashleysaqui/component-library",
                  "_blank",
                )
              }
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <Img src="images/coffee.jpg" alt="Mental Health Cafe" />
          <div className="project-content">
            <Card
              title="Mental Health Cafe"
              description="The Mental Health Café is a nonprofit drop-in center in Winnipeg, Manitoba that offers a relaxed, café-style space for people to focus on mental wellness. They host workshops, support groups, and share mental health resources. Their goal is to create a safe and welcoming environment to reduce stigma and encourage open conversations around mental health."
              backgroundColor="#ffffff"
            />
            <div className="tech-list">
              <Label text="PHP" />
              <Label text="Github" />
              <Label text="XAMPP" />
              <Label text="phpMyAdmin" />
            </div>
            <Button
              text="View Project →"
              backgroundColor="#ce93d8"
              onClick={() =>
                window.open(
                  "https://github.com/ashleysaqui/portfolio",
                  "_blank",
                )
              }
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <Img src="images/emojiapp.jpg" alt="React Emoji App" />
          <div className="project-content">
            <Card
              title="React Emoji App"
              description="This React Emoji Explorer project lets users fetch random emojis from a public API and browse them in an interactive way. Users can search for emojis by name or category, “like” their favorites, and load new random emojis on demand. The app displays each emoji inside a card and updates automatically using React state and data binding."
              backgroundColor="#ffffff"
            />
            <div className="tech-list">
              <Label text="React" />
              <Label text="Fetch API" />
              <Label text="CSS" />
              <Label text="Javascript" />
            </div>
            <Button
              text="View Project →"
              backgroundColor="#f48fb1"
              onClick={() =>
                window.open("https://github.com/ashleysaqui/web-app", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

// SKILLS
const Skills: React.FC = () => (
  <div className="page">
    <section className="section">
      <h2>Skills</h2>
      <br></br>
      <Text content="As a Full Stack Developer, I specialize in front-end development with a focus on creating intuitive user interfaces and smooth user experiences. Here are the technologies and tools I work with:" />

      <div className="skills-content">
        <div className="skill-category">
          <Label text="Languages & Frameworks:" />
          <br></br>
          <Text content="JavaScript / TypeScript" />
          <br></br>
          <Text content="React" />
          <br></br>
          <Text content="Node.js" />
          <br></br>
          <Text content="HTML5 & CSS" />
          <br></br>
          <Text content="Styled Components" />
          <br></br>
          <Text content="Tailwind CSS" />
          <br></br>
          <Text content="Python" />
          <br></br>
          <Text content="PHP" />
          <br></br>
          <Text content="Ruby on Rails" />
          <br></br>
          <Text content="Java" />
        </div>
        <div className="skill-category">
          <Label text="Tools & Technologies:  " />
          <br></br>
          <Text content="Docker & Containerization" />
          <br></br>
          <Text content="Git & GitHub" />
          <br></br>
          <Text content="VS Code" />
          <br></br>
          <Text content="npm / yarn" />
          <br></br>
          <Text content="Storybook" />
          <br></br>
          <Text content="Linux Terminal" />
          <br></br>
        </div>
      </div>
    </section>
  </div>
);

// RESOURCES
const Resources: React.FC = () => (
  <div className="page">
    <section className="section">
      <h2>Resources</h2>
      <br></br>
      <Text content="These are some of the resources I use regularly for learning and development:" />
      <div className="resources-grid">
        <div className="resource-item">
          <Img src="images/w3.jpg" alt="W3Schools Online Web Tutorials" />
          <br></br>
          <Label text="W3Schools Online Web Tutorials" />
          <br></br>
          <Text content="I use this site for references and to help me get started with projects." />
          <Button
            text="Visit →"
            backgroundColor="#f48fb1"
            onClick={() => window.open("https://www.w3schools.com/", "_blank")}
          />
        </div>
        <div className="resource-item">
          <Img src="images/reactjs.png" alt="React Documentation" />
          <br></br>
          <Label text="React Documentation" />
          <br></br>
          <Text content="Official React library documentation with guides, tutorials, and API references for building modern UIs." />
          <Button
            text="Visit →"
            backgroundColor="#ce93d8"
            onClick={() =>
              window.open("https://github.com/reactjs/react.dev", "_blank")
            }
          />
        </div>
        <div className="resource-item">
          <Img src="images/docker.png" alt="Docker Documentation" />
          <br></br>
          <Label text="Docker Docs" />
          <br></br>
          <Text content="Container platform documentation for building, shipping, and running applications in isolated environments." />
          <Button
            text="Visit →"
            backgroundColor="#f8bbd9"
            onClick={() =>
              window.open("https://github.com/docker/docs", "_blank")
            }
          />
        </div>
        <div className="resource-item">
          <Img src="images/typescript.png " alt="TypeScript Documentation" />
          <br></br>
          <Label text="TypeScript Handbook" />
          <br></br>
          <Text content="Official TypeScript documentation covering types, interfaces, generics, and best practices." />
          <Button
            text="Visit →"
            backgroundColor="#e1bee7"
            onClick={() =>
              window.open("https://www.typescriptlang.org/docs/", "_blank")
            }
          />
        </div>
      </div>
    </section>
  </div>
);

// DEV SET UP
const Setup: React.FC = () => (
  <div className="page">
    <section className="section">
      <h2>Developer Setup</h2>
      <br></br>
      <Text content="Here's a look at my development environment and preferences:" />

      <div className="setup-content">
        <div className="setup-item">
          <Label text="VS Code Setup" />
          <br></br>
          <Text content="Theme: Terracota Cream" />
          <br></br>
          <Text content="Extensions: React Snippets" />
          <br></br>
          <Text content="Extensions: Prettier - Code Formatter" />
          <br></br>
          <Text content="Extensions: ESLint" />
          <br></br>
          <Text content="Extensions: Docker" />
          <br></br>
          <Text content="Extensions: VS Code Pets - To make coding more fun!" />
        </div>

        <div className="setup-item">
          <Label text="Terminal Setup" />
          <br></br>
          <Text content="Shell: Zsh" />
          <br></br>
          <Text content="Terminal: Windows Terminal" />
          <br></br>
          <Text content="Package Manager: npm" />
          <br></br>
          <Text content="Version Control: Git & GitHub" />
          <br></br>
          <Text content="Containerization: Docker Desktop" />
        </div>

        <div className="setup-item">
          <Label text="Preferred Editor Font" />
          <br></br>
          <Text content="Font Family: Fira Code" />
          <br></br>
          <Text content="Alternative: JetBrains Mono" />
          <br></br>
          <Text content="Font Size: 14px" />
          <br></br>
          <Text content="Line Height: 1.6" />
          <br></br>
          <Text content="Ligatures: Enabled" />
        </div>
      </div>
    </section>
  </div>
);

// MAIN APP
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              Ashley's Portfolio ☾ ⋆*･ﾟ:⋆*･ﾟ
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/setup">Setup</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/setup" element={<Setup />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Ashley Saqui. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
