# Todo Application

## Overview

Welcome to the Todo Application! This project showcases a fully functional and responsive todo list app built with React, TypeScript,Tailwind CSS and Vite. The application allows users to create, update, and delete todo items with a smooth and responsive design. All data is managed locally using `localStorage`, eliminating the need for backend API calls for CRUD operations.

## Features

- **Responsive Design:** The application is designed to be fully responsive, adapting seamlessly to different screen sizes.
- **Initial Data Fetch:** Retrieves initial todo items and stores them in `localStorage`.
- **Create Todo:** Add new todo items to the list.
- **Update Todo:** Mark todo items as completed, with real-time updates to the list.
- **Delete Todo:** Remove todo items from the list and `localStorage`.

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static types.
- **Vite:** A fast build tool and development server.
- **LocalStorage:** Used for persisting todo data across sessions/
- **`assets/`**: Contains SVG icons and other static assets.
- **`components/`**: Includes React components for various parts of the application.
- **`models/`**: Includes React models for type safety in application.
- **`hooks/`**: Custom hooks for managing localStorage operations.
- **`App.tsx`**: The main application component that renders the entire app.
- **`main.tsx`**: Entry point for the React application.

## Implementation Details

### Initial Data Fetch

The application uses the Fetch API to retrieve an initial list of todos and stores the data in `localStorage`. This ensures that the app can display todos even when offline.

### Create Todo

Users can add new todos to the list. The application updates `localStorage` directly when a new todo is created.

### Update Todo

Todo items can be marked as completed. The application updates the `localStorage` array and removes completed todos from the display.

### Delete Todo

Todos can be deleted from the list. The application removes the item from `localStorage` and updates the displayed list.

## Benefits of React and TypeScript

- **React**: Provides a component-based architecture, making it easy to build and manage UI elements with reusable components.
- **TypeScript**: Adds static type checking to JavaScript, which helps catch errors early and improves code quality and maintainability.

## Design

The design is focused on usability and responsiveness using tailwind css:

- **Responsive Layout**: The application adapts to various screen sizes, ensuring a good user experience on both mobile and desktop devices.
- **Clean UI**: Uses a clean and intuitive interface to enhance user experience and interaction.
- **Optimized Code**: Code is structured and modular, making it easy to maintain and extend.

## Screenshot 

![image](https://github.com/user-attachments/assets/1c9e9678-3458-4a45-875c-785a8f6a635d)
__________________________________________________________________________________________________

![Screenshot (53)](https://github.com/user-attachments/assets/236f1330-8a08-4451-9a6c-1ec876c36569)


---
