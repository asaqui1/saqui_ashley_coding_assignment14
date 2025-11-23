# Ashley Saqui - Portfolio Website

## Project description

This is a portfolio website I built for my coding assignment. The portfolio showcases my work, skills, and development setup. I built this project using React and TypeScript, and I reused components from my previous Storybook assignment. The final website runs inside a Docker container at localhost:5575.

## What I did in this project

1. I converted my React project from JavaScript to TypeScript by changing the file extensions from .js to .tsx and adding type definitions.

2. I imported and reused components from my previous Storybook component library including Button, Label, Text, Img, HeroImg, and Card.

3. I added React Router to create multiple pages with navigation instead of a single page website. The portfolio now has five separate pages: Home, Work, Skills, Resources, and Setup.

4. I styled the website with a feminine pastel theme using pink and lavender colors.

5. I created a Dockerfile that builds a production version of the React app and serves it using Nginx on port 5575.

6. I set up a CI/CD pipeline using GitHub Actions that automatically runs Prettier, ESLint, and unit tests whenever I push code to the repository.

7. I configured Prettier for code formatting and Husky for pre-commit hooks.

## Technologies I used

- React 19 for building the user interface
- TypeScript for type-safe JavaScript
- React Router for page navigation
- Styled Components for component styling
- Docker for containerization
- Nginx for serving the production build
- GitHub Actions for CI/CD pipeline
- Prettier for code formatting
- ESLint for code linting
- Husky for pre-commit hooks

## Portfolio sections

The portfolio contains five pages:

1. Home - Contains my name, title, bio, and contact links for Email, GitHub, and LinkedIn.

2. Work - Displays my projects. Each project has a title, description, image, link, and a list of technologies used.

3. Skills - Shows my programming languages and frameworks like JavaScript, TypeScript, React, Node.js, HTML5, CSS3, and Python. Also lists tools I use like Docker, Git, VS Code, and Storybook.

4. Resources - Contains helpful resources I use for development including MDN Web Docs, React Documentation, Docker Docs, and TypeScript Handbook. Each resource has a title, icon, summary, and link.

5. Setup - Describes my developer setup including my VS Code configuration, terminal setup, and preferred editor font settings.

## How to run the Portfolio

### Prerequisites

You need to have Docker installed on your computer. You can download it from the Docker website.

### Steps to Run

Step 1: Open your terminal or PowerShell.

Step 2: Navigate to the project folder.

cd path/to/saqui_ashley_portfolio

Step 3: Build the Docker image. This command reads the Dockerfile and creates an image with all the project files and dependencies.

docker build -t saqui_ashley_coding_assignment14 .

Step 4: Run the Docker container. This starts the container and maps port 5575 on your computer to port 5575 inside the container.

docker run -d -p 5575:5575 --name saqui_ashley_coding_assignment14 saqui_ashley_coding_assignment14

Step 5: Open your web browser and go to localhost:5575 to view the portfolio.

### How to stop the Container

To stop the container run:

docker stop saqui_ashley_coding_assignment14

To remove the container run:

docker rm saqui_ashley_coding_assignment14

### How to rebuild after making changes

If you make changes to the code and want to see them in Docker, you need to stop and remove the old container, then rebuild.

docker stop saqui_ashley_coding_assignment14
docker rm saqui_ashley_coding_assignment14
docker build -t saqui_ashley_coding_assignment14 .
docker run -d -p 5575:5575 --name saqui_ashley_coding_assignment14 saqui_ashley_coding_assignment14

## Project structure

The project is organized like this:

- src folder contains all the React source code
- src/components folder contains the reusable components from my Storybook library
- src/App.tsx is the main application file with all the pages and routing
- src/App.css contains the styles for the portfolio
- Dockerfile contains instructions for building the Docker image
- nginx.conf configures the Nginx web server to run on port 5575
- .github/workflows/ci.yml defines the CI/CD pipeline
- .prettierrc contains Prettier configuration
- .husky folder contains pre-commit hooks

## CI/CD Pipeline

I set up a CI/CD pipeline using GitHub Actions. The pipeline runs automatically whenever I push code to the repository or create a pull request.

The pipeline does the following:

1. Checks out the code from the repository
2. Sets up Node.js version 18
3. Installs all the project dependencies
4. Runs Prettier to check code formatting
5. Runs ESLint to check for code errors
6. Runs the unit tests
7. Builds the production version of the app
8. Builds the Docker image to verify the Dockerfile works

You can see the pipeline running in the Actions tab of the GitHub repository.

## How the dockerfile works

The Dockerfile uses a two-stage build process.

Stage 1 is the build stage. It uses a Node.js image to install dependencies and build the production version of the React app. The npm install command installs all packages and npm run build creates optimized files in the build folder.

Stage 2 is the production stage. It uses a lightweight Nginx image to serve the built files. The built files from Stage 1 are copied into the Nginx html folder. The nginx.conf file tells Nginx to listen on port 5575.

This two-stage approach makes the final container small because it only includes the built files and Nginx, not all the development dependencies.