# Angular Project

## Project Description

This Angular project is a dynamic web application designed to showcase proficiency in working with APIs, managing state, and implementing responsive UI components. The application includes features for creating, editing, deleting, and viewing posts, along with pagination and commenting functionalities.

## Available npm Scripts

The following npm scripts are available in this project:

- **`npm start`**: Runs the Angular application in development mode. This command uses the Angular CLI to start a development server and open the application in a web browser.

- **`npm run build`**: Builds the Angular application for production. This command compiles the application and outputs the build artifacts to the `dist` directory.

- **`npm test`**: Runs the unit tests for the Angular application using Jest.

- **`npm run lint`**: Lints the TypeScript and HTML files using ESLint to ensure code quality and consistency.

- **`npm run format`**: Formats the codebase using Prettier to enforce consistent code style.

## Project Structure and Key Features

### Project Structure

- **`src/`**: Contains the source code of the Angular application.
  - **`app/`**: The core application folder.
    - **`components/`**: Contains Angular components, including `PostListComponent`, `ModalFormComponent`, `PaginationComponent`, etc.
    - **`services/`**: Contains Angular services, including `ApiClientService` for API interactions.
    - **`model/`**: Contains TypeScript interfaces for data models, such as `Post` and `Comment`.
    - **`app.config.ts`**: Configuration file for the application.
    - **`app.routes.ts`**: Defines the routing configuration for the application.
  - **`assets/`**: Contains static assets like images and styles.
  - **`environments/`**: Contains environment configuration files for development and production.
  - **`styles/`**: Contains global styles and theme files, including `tailwind.config.js`.

### Key Features

- **Post Management**: Ability to create, edit, delete, and view posts. Modal dialogs are used for creating and editing posts.
- **Pagination**: Posts are displayed with pagination controls to navigate through different pages of posts.
- **Commenting**: Each post can display associated comments retrieved from the API.
- **Responsive Design**: The application is designed to be fully responsive using Tailwind CSS, ensuring a good user experience across various devices.
- **API Integration**: The application interacts with APIs for fetching, creating, updating, and deleting posts, as well as for fetching comments.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ktscates/angular-api-master.git
   cd angular-api-master
   ```

