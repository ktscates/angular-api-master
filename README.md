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

## Key Features

- **Post Management**: Ability to create, edit, delete, and view posts. Modal dialogs are used for creating and editing posts.
- **Pagination**: Posts are displayed with pagination controls to navigate through different pages of posts.
- **Commenting**: Each post can display associated comments retrieved from the API.
- **Responsive Design**: The application is designed to be fully responsive using Tailwind CSS, ensuring a good user experience across various devices.
- **API Integration**: The application interacts with APIs for fetching, creating, updating, and deleting posts, as well as for fetching comments.

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ktscates/angular-style-showcase.git
   cd angular-style-showcase
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the App

    ```bash
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`.

## Lazy Loading

The project implements lazy loading for one of the modules to optimize loading times and improve performance. This feature ensures that only necessary code is loaded on demand, reducing the initial load size.

## Responsive Design

The application is fully responsive, with a layout that adapts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.

## Live Link

You can access the deployed application at [Angular API Master](https://ktscates-angular-api-master.netlify.app/).
