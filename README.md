# TailorQuick (or TailorScript)

> A smart resume builder that takes all your information and automatically condenses it into a perfectly formatted, one-page resume.

![badge-placeholder](https://img.shields.io/badge/status-in_development-yellow)

---

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Demo / Screenshots](#demo--screenshots)
* [How to Use](#how-to-use)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running Locally](#running-locally)
* [Tests](#tests)
* [Future Plans / Roadmap](#future-plans--roadmap)
* [Known Issues](#known-issues)
* [FAQ](#faq)
* [Contributing](#contributing)
* [License](#license)
* [Contact / Authors](#contact--authors)

---

## Introduction

TailorQuick (or TailorScript) is an intelligent resume builder that eliminates the guesswork of trying to fit your experience and skills into a single page. Instead of manually trimming and formatting, users can simply input all their professional information—projects, experience, and achievements—and the tool automatically condenses and organizes it into a concise, polished layout.

**Target audience:** job seekers, students, and professionals who want a clean, professional resume without struggling with formatting tools.

**Inspiration:** After countless hours of manually editing resumes to meet page limits, this project was created to automate that process using smart text prioritization and layout optimization.

---

## Features

* **Chrome Extension Integration:** TailorQuick isn’t just a website—it’s a Chrome extension that travels with you everywhere. Once installed, it’s always accessible from your browser.
* **Simple Input Workflow:** Click the extension icon to open the transcript page, where you can enter your education, experience, projects, and skills in a structured format.
* **Contextual Tailoring:** While browsing job listings, highlight any text or job description, right-click, and select “Tailor.” A popup will instantly generate a customized resume based on your details and the job description.
* **Polished Design:** The interface is built with Chakra UI, ensuring a clean, modern, and accessible look.
* **AI-Powered Resume Generation:** Uses AI to decide what content to emphasize for each tailored resume. (Note: requires an API key to function.)

---

## Demo / Screenshots

*The project is currently in development and nearing completion.*

Placeholder content:

* **Demo URL:** Coming soon
* **Screenshots:** `screenshot_1.png`, `screenshot_2.png` (to be added)
* **Demo Video:** TBD

---

## How to Use

1. **Download the Extension:**

   * Visit this GitHub repository and download the packaged extension folder.
   * Inside the folder, you’ll find the compiled source code (`transpiled.js`). One of the files will contain an exported variable for the API key.
   * Obtain your own [OpenAI API key](https://platform.openai.com/) and paste it into that file. *(Note: this project is geared toward tech-savvy users; you must provide your own key due to API cost limitations.)*

2. **Install the Extension in Chrome:**

   * Open **Google Chrome** and go to `chrome://extensions/`.
   * Enable **Developer Mode** in the top-right corner.
   * Click **Load unpacked** and select the project folder.

3. **Open the Options Page:**

   * From the extensions list, click **Details → Options**, or simply click the **extension icon** in the top-right corner of Chrome.
   * This opens the **Transcript Builder Page**, built with Chakra UI.

4. **Fill in Your Information:**

   * Use the tree-view structure to navigate sections such as **Profile**, **Experience**, **Education**, **Skills**, and **Projects**.
   * Click **Add New Subsection** to input your details for each category.
   * A live preview of your entire transcript is visible on the right side of the screen.

5. **Tailor a Resume to a Job Posting:**

   * Navigate to any job hunting website.
   * Highlight a job description or relevant text.
   * Right-click and select **Tailor** from the context menu.
   * A popup will appear with a loading spinner while the AI processes your data.

6. **Review and Export Your Resume:**

   * Once complete, a one-page tailored resume will appear alongside a **Relevance Score**—a percentage representing how well your resume matches the job description.
   * You’ll also see **three bullet-point suggestions** for improving your transcript for better results.
   * Click the **Export** button below the preview to open Chrome’s native print dialog, where you can save your resume as a **PDF**.

---

## Tech Stack

TailorQuick (or TailorScript) is built using a modern TypeScript and React ecosystem optimized for Chrome extension development.

* **Language:** TypeScript
* **Framework:** React (with React Router for navigation)
* **Styling:** Chakra UI for accessible, responsive UI components
* **Build Tool:** Vite for fast development and bundling
* **Linting:** ESLint for code consistency and quality
* **AI Integration:** OpenAI API for intelligent resume tailoring
* **Browser Integration:** Chrome Extension APIs for context menus, popups, and persistent data storage

---

## Installation

**Supported Platforms:**

* Primarily developed and tested on **Windows**.
* Chrome extensions are **cross-platform by design**, so the packaged build should work on **macOS** and **Linux** as long as users install it via Chrome.

**Installation Options:**

1. **Use Precompiled Build (Recommended):**

   * Download the precompiled folder from this repository.
   * Load it into Chrome as described in the [How to Use](#how-to-use) section.
   * This method ensures compatibility across platforms.

2. **Compile Manually (Advanced Users):**

   * Developers may compile from source using Vite and TypeScript.
   * However, manual compilation is at your own discretion—compatibility may vary by environment.

---

## Configuration

TailorQuick requires an API key to interact with the OpenAI service.

**For Manual Compilation:**

* Define the OpenAI API key in a `.env` file:

```env
VITE_OPENAI_KEY=your_openai_api_key_here
```

**For Precompiled Version:**

* Open the `env.js` file in the source folder and replace the exported variable with your OpenAI API key:

```javascript
export const OPENAI_KEY = 'your_openai_api_key_here';
```

**Optional Configuration:**

* You can change the OpenAI model used by editing the `model` string in `OpenAIService.ts` with any valid model name from the [OpenAI API documentation](https://platform.openai.com/docs/models). For example:

```typescript
const model = 'gpt-4'; // or 'gpt-3.5-turbo'
```

---

## Running Locally

Currently, the project only supports a production build; there is no separate development mode. *(Reminder to add a development mode in the future.)*

**Commands:**

* Build the project for production:

```bash
npm run build
```

* Load the compiled build into Chrome as an unpacked extension (see [How to Use](#how-to-use)).

---

## Tests

No automated tests have been implemented yet.

---

## Future Plans / Roadmap

Planned improvements and feature additions include:

* **Dark and Light Mode:** Allow users to switch between themes.
* **SEO Features:** Enhance visibility for web-based content.
* **Accessibility Enhancements:** Improve support for assistive technologies.
* **Export Improvements:** Bypass the browser's native print dialog to directly export PDFs.
* **Multiple User Profiles:** Allow the extension to store information for multiple users.
* **Additional Transcript Sections:** Expand the number of sections available in the transcript.
* **Alternative Export Formats:** Support exporting to LaTeX and other formats.
* **Agent Network for AI Calls:** Implement a networked approach to increase the efficiency and capacity of resume generation.

---

## Known Issues

* The extension may conflict with websites built using React, causing certain elements (like search bars and buttons) to adopt the browser's color mode unexpectedly.
* Cross-origin permission issues can occur on some websites; for example, LinkedIn currently prevents the extension from functioning.
* The UI is not fully responsive and can break when the browser window is resized to unusual aspect ratios.
* Mobile devices are not supported; the extension only works on desktop Chrome.

---

## FAQ

**Q: Does this work for Firefox?**

* No, currently only Chrome is supported.

**Q: Do I have to pay to get an API key?**

* Yes, you need to pay OpenAI for an API key, but you are not paying the developer.

**Q: How much does it cost per resume?**

* Approximately $0.005 per resume.

**Q: What kind of jobs does it work for?**

* All types of jobs; the AI adapts to the job description provided.

**Q: Does the format pass ATS checks?**

* Yes, it is based on Jake's proven resume format.

---

## Contributing

Contributions are welcome! Users can submit issues, feature requests, or pull requests. Feel free to make any improvements or modifications you like.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
