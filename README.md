## EJS Compiler Project

**EJS Compiler** is a project designed to compile and manage EJS templates, with support for Docker and automation scripts.

### Project Structure

- **docker-compose.yml**: Configuration file for Docker containers.
- **scripts/**: Contains shell scripts to streamline the workflow:
  - build.sh: Script to compile templates.
  - server.sh: Starts the server.
  - shell.sh: Opens an interactive shell within the container.
- **app/**: Main directory for the application.
  - **bs-config.js**: Configuration for BrowserSync.
  - **compile.js**: Main script for compiling EJS templates.
  - **server.js**: File to start the application server.
  - **views/**: Contains EJS templates.
  - **public/**: Static files such as CSS and JS.

### Prerequisites

Ensure you have the following installed:

- Docker and Docker Compose / Node.js (optional, for local execution)

### How to Start

#### With Docker

1. Build and start the project:
   ```bash
   docker-compose up -d
   ```
2. Start the development server:
   ```bash
   ./scripts/server.sh
   ```
3. Access the application at [http://localhost:3001](http://localhost:3001).
4. Compile the project to HTML:
   ```bash
   ./scripts/build.sh
   ```

#### Without Docker

1. Start the server:
   ```bash
   npm run server
   ```
2. Compile:
   ```bash
   npm run build
   ```

### Contributing

1. Fork the repository.
2. Create a branch for your feature (git checkout -b feature/feature-name).
3. Commit your changes (git commit -m 'Added something').
4. Push to the branch (git push origin feature/feature-name).
5. Open a Pull Request.

### License

This project is released under the MIT license.
