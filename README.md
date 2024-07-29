# DBMS Mini Project - Frontend

This repository contains the frontend code for the DBMS mini-project. The project is built using React and provides a user interface for interacting with the backend services.

## Project Structure

The project has the following structure:

```
dbms-miniproject-frontend-main/
├── public/
│   ├── assets/
│   │   └── user.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── UserLogin.jsx
│   ├── scenes/
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   │   └── index.jsx
│   │   │   ├── faq/
│   │   │   │   └── index.jsx
│   │   │   ├── form/
│   │   │   │   └── index.jsx
│   │   │   ├── manageassets/
│   │   │   │   └── index.jsx
│   │   │   ├── manageusers/
│   │   │   │   └── index.jsx
│   │   │   ├── marketplace/
│   │   │   │   ├── Marketplace.css
│   │   │   │   └── index.jsx
│   │   │   └── transactions/
│   │   │       └── index.jsx
│   │   ├── global/
│   │   │   ├── Login.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   ├── App.js
│   ├── Paths.jsx
│   ├── extrascript.js
│   ├── index.css
│   ├── index.js
│   └── theme.js
├── .gitattributes
├── .gitignore
├── package-lock.json
└── package.json
```

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have `node` and `npm` installed. If not, you can install them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your_username/dbms-miniproject-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd dbms-miniproject-frontend
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```

### Usage

To start the development server, run:
```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build, run:
```sh
npm run build
```

The build artifacts will be stored in the `build/` directory.
