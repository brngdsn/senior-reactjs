# Senior ReactJS Developer Interview Concepts

This project is a Single Page Application (SPA) built with **React 18** and **Bulma CSS** that demonstrates advanced React concepts often discussed during senior-level technical interviews. Each demo focuses on a specific area of React, providing both a practical demonstration and a corresponding interview question with an answer.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Virtual DOM Demo:**  
  Illustrates how React efficiently updates the DOM by diffing the Virtual DOM before applying necessary changes to the actual DOM.

- **Hooks Demo:**  
  Demonstrates the usage of React Hooks such as `useState`, `useEffect`, `useMemo`, and `useCallback` for state management and side effects.

- **Performance Optimization Demo:**  
  Showcases how to prevent unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback`.

- **Form Demo:**  
  Highlights the differences between controlled and uncontrolled components through a simple form demonstration.

- **Theme Context Demo:**  
  Uses the React Context API to manage dynamic themes across the application, allowing users to switch between multiple themes.

- **Error Boundary Demo:**  
  Demonstrates how to implement error boundaries to catch JavaScript errors in the component tree and display a fallback UI.

- **Lazy Loading Demo:**  
  Implements code splitting using `React.lazy` and `Suspense` to load components asynchronously and optimize bundle size.

- **Data Fetcher Demo:**  
  Demonstrates asynchronous data fetching with proper cleanup using the `AbortController` in a React `useEffect`.

---

## Getting Started

### Prerequisites

- **Node.js** version **v20.8.0** (as specified in [`.nvmrc`](./.nvmrc))
- **npm** (or **yarn**) package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd senior-reactjs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create a production build, run:

```bash
npm run build
```

---

## Project Structure

```
senior-reactjs/
├── public/
│   └── index.html         # Main HTML file
├── src/
│   ├── components/        # React components for demos, Q&A, error handling, theming, etc.
│   │   ├── BuggyComponent.js
│   │   ├── DataFetcher.js
│   │   ├── ErrorBoundary.js
│   │   ├── FormDemo.js
│   │   ├── HooksDemo.js
│   │   ├── LandingPage.js
│   │   ├── LazyComponent.js
│   │   ├── PerformanceDemo.js
│   │   ├── QABox.js
│   │   ├── ThemeContext.js
│   │   ├── ThemedComponent.js
│   │   └── VirtualDomDemo.js
│   ├── App.js             # Main app component with routing
│   └── index.js           # Application entry point
├── .gitignore
├── .nvmrc
├── package.json
└── README.md
```

---

## Technologies Used

- **React 18:** A JavaScript library for building user interfaces.
- **React Router:** For client-side routing and navigation.
- **Bulma CSS:** A modern CSS framework based on Flexbox.
- **React.lazy & Suspense:** For code splitting and lazy loading of components.
- **Context API:** For managing global state (themes) without prop drilling.

---

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements, please open an issue or submit a pull request.

---

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

Enjoy exploring the demos and best practices for building high-quality React applications!
