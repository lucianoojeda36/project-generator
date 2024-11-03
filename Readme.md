# Project Creator

A npm package that allows you to easily create frontend projects with React, backend projects in Node.js, or full-stack projects with the appropriate structure.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Create a Frontend Project](#create-a-frontend-project)
  - [Create a Backend Project](#create-a-backend-project)
  - [Create a Full-Stack Project](#create-a-full-stack-project)
- [Project Structure](#project-structure)
- [Example Project](#example-project)
- [Custom Configuration](#custom-configuration)
- [Contribution](#contribution)
- [License](#license)

## Features

- Create a frontend project in React with a ready-to-use setup.
- Generate a Node.js backend using Express with the appropriate structure.
- Allows you to create a full-stack project that includes both frontend and backend, maintaining clear organization.
- Provides startup scripts and predefined configurations to facilitate development.
- Supports customization through templates and additional configurations.

## Installation

To use this package, you need to have Node.js and npm installed on your machine. You can then install the package globally using:

```bash
npm install -g project-generators

## Usage

Create a Frontend Project

npm start --- react -- name 

Create a Backend Project

npm start --- Node.js -- name 

Create a Fullstack Project

npm start --- React + Node.js -- name 


##Project Structure


<project-name>/
│
├── frontend/                # Frontend source code
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components for routing
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration files
│   ├── contexts/            # Context API for state management
│   ├── hooks/               # Custom React hooks
│   ├── store/               # Redux store configuration
│   └── tests/               # Unit and integration tests
│
├── backend/                 # Backend source code
│   ├── assets/              # Static files and assets
│   ├── services/            # Business logic and service layer
│   ├── routes/              # API route definitions
│   ├── middleware/          # Express middleware functions
│   ├── config/              # Configuration files and environment variables
│   ├── controllers/         # Route controllers for handling requests
│   ├── models/              # Database models and schemas
│   ├── tests/               # Unit and integration tests
│   └── utils/               # Utility functions and helpers
│
└── README.md                # Documentation for the complete project



