# 🚀 DevStack

DevStack is a simple and responsive web application where users can explore different technologies and build their own development stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* Vite

## ✨ Features

* Explore different development technologies
* Add and remove technologies from your own stack
* Show selected technologies with a clean and responsive UI

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from parent to child. State is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component. I used it to manage my selected technology stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after rendering. It can be used to load JSON data from an API or file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React update the UI correctly and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show an empty stack message when there are no selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send data back by calling a function passed from the parent through props.
