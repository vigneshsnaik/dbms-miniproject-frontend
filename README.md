# DBMS Mini Project - Frontend

This repository contains the frontend code for the DBMS mini-project. The project is built using React and provides a user interface for interacting with the backend services.

## Project Overview
The tokenization of physical assets promises to revolutionize asset management, offering enhanced liquidity, transparency, and accessibility. However, existing solutions face several challenges. Traditional asset markets often restrict accessibility due to high entry barriers, limiting participation to a select few. Moreover, opacity in asset ownership and transaction records introduces inefficiencies and fraud risks. Managing diverse portfolios of physical assets entails cumbersome processes, including ownership transfer and transaction settlement, often requiring intermediaries and incurring additional costs.

This project aims to overcome these challenges by providing a comprehensive platform for asset tokenization. Through a user-friendly interface, it democratizes access to asset tokenization, allowing a broader range of investors to participate in fractional ownership of physical assets. Transparent and immutable records of asset ownership and transactions are ensured through smart contracts, mitigating fraud risks and fostering trust among participants. By streamlining asset management processes, our project reduces reliance on intermediaries and simplifies tasks such as ownership transfer and dividend distribution.

In conclusion, our project strives to empower investors by offering a user-centric approach to asset tokenization, fostering financial inclusivity and opportunity. With its emphasis on accessibility, transparency, and efficiency, it seeks to unlock the full potential of asset tokenization, ushering in a new era of asset management.

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

[Solidity Contract](https://github.com/vigneshsnaik/dbms-web3-contract)<br>
[Moralis Integration](https://github.com/vigneshsnaik/dbms-moralis-integration)
