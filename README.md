<div align="center">

# <img src="https://www.theodinproject.com/assets/icons/odin-icon-22b41941.svg"> <br>

# ☀️ Weather App

**A modern web application to fetch and display current weather conditions and forecasts.**

[Live Demo](https://franchuphone.github.io/weather-app/) <!-- TODO: Add actual live demo link if available (e.g., GitHub Pages) -->

</div>

## 📖 Overview

The Weather App is a clean and efficient web application designed to provide users with real-time weather information and forecasts for various locations. Built with a modern JavaScript toolchain, it focuses on delivering a smooth user experience by leveraging external weather APIs to present essential meteorological data. This project serves as an excellent example of a well-structured frontend application utilizing Webpack for asset bundling and Babel for JavaScript transpilation.

## ✨ Features

- 🌍 **Location-Based Weather Display**: Get current weather details for any specified city or location.
- 🌡️ **Detailed Weather Conditions**: View temperature, weather description, and other relevant metrics.
- 📅 **Date and Time Utility**: Utilizes `date-fns` for robust date and time formatting, enhancing forecast readability.
- 🛠️ **Modern JavaScript Toolchain**: Developed with Webpack 5, Babel, and ESLint for a streamlined development experience and high code quality.
- modular **Organized Codebase**: A clear project structure ensures maintainability and scalability.

## 🔧 Future improvements

- 🎯 **Add selection of location**: enables displaying a choice of locations based on current user input
- 🎯 **Upgrade UX**: add some functionnality on main weather display to upgrade readability and usability for users
- 🎯 **Toggle weather forecast**: change display of forecast from day on day to hour on hour by a simple clic
- 🎯 **Bugs tracking**: fixing some minors bugs on display rendering based on users feedback

## 🛠️ Tech Stack

**Frontend:**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Build Tools:**

![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![date-fns](https://img.shields.io/badge/date--fns-DD2F4F?style=for-the-badge&logo=date-fns&logoColor=white) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: `^14.x.x` or higher (includes npm)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Franchuphone/weather-app.git
    cd weather-app
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment setup**
    This application requires an API key from a weather service (e.g., OpenWeatherMap, AccuWeather).
    You will need to configure your environment to include this key. Typically, this is done by creating a `.env` file in the project root:

    ```
    # .env
    WEATHER_API_KEY=your_actual_api_key_here
    ```

    _Ensure you replace `your_actual_api_key_here` with your valid API key._

4.  **Start development server**

    ```bash
    npm run dev
    ```

5.  **Open your browser**
    Visit `http://localhost:8080` (or the port indicated in your console)

## 📁 Project Structure

```
weather-app/
├── src/                    # Source code directory
│   ├── index.js            # Main application entry point
│   ├── modules/            # Contains JS modules for logic (e.g., API calls, UI rendering)
│   ├── styles/             # Global or component-specific CSS files
│   └── assets/             # Images, fonts, or other static assets
├── package.json            # Project metadata and dependencies
├── package-lock.json       # npm dependency lock file
├── babel.config.json       # Babel configuration for JavaScript transpilation
├── eslint.config.mjs       # ESLint configuration for code quality
├── webpack.common.js       # Webpack common configuration for dev and prod
├── webpack.dev.js          # Webpack specific settings for development
└── webpack.prod.js         # Webpack specific settings for production build
```

## ⚙️ Configuration

### Environment Variables

The application expects an API key for the weather service to be available in the environment.

| Variable          | Description                                 | Default | Required |
| ----------------- | ------------------------------------------- | ------- | -------- |
| `WEATHER_API_KEY` | Your API key for the chosen weather service | None    | Yes      |

### Configuration Files

- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`: Control the entire build process, including JavaScript transpilation, CSS processing, and asset management.
- `babel.config.json`: Configures Babel to transpile modern JavaScript features for wider browser compatibility.
- `eslint.config.mjs`: Defines code style rules and best practices enforced by ESLint to maintain code quality.

## 🚀 Deployment

### Production Build

To create a minified and optimized production build of the application:

```bash
npm run build
```

This command will compile all assets and output them into the `dist/` directory, ready for deployment.

### Deployment Options

The `dist/` directory contains all the static files required to run the application. You can deploy these files to any static hosting service, such as:

- **GitHub Pages**: Push the `dist` folder content to a `gh-pages` branch.
- **Vercel/Netlify**: These services can automatically detect the build process and deploy the `dist` folder.
- **Any Web Server**: Simply copy the contents of the `dist` folder to your web server's public directory.

## 🤝 Contributing

We welcome contributions to the Weather App! If you're interested in improving the project, please consider:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes following a clear commit message convention.
4.  Push your branch and open a pull request.

### Development Setup for Contributors

The development setup is straightforward, as outlined in the [Quick Start](#🚀-quick-start) section. Ensure you have Node.js and npm installed, and then follow the installation steps.

## 📄 License

No particular license, just keep in mind to respect the work of others and just point to this repository for credentials.

## 🙏 Acknowledgments

- **[date-fns](https://date-fns.org/)**: For providing a comprehensive and easy-to-use library for date manipulation.
- **[Webpack](https://webpack.js.org/)**: For the powerful and flexible module bundler.
- **[Babel](https://babeljs.io/)**: For enabling the use of modern JavaScript features.

## 📞 Support & Contact

- 🐛 Issues: [GitHub Issues](https://github.com/Franchuphone/weather-app/issues)
- 👤 Author: [Franchuphone](https://github.com/Franchuphone)
- 📧 Contact: [LinkedIn](https://chk.me/fDTZdvK)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Franchuphone

</div>
