# CEFET-CG

This repository comprises exercises and concepts covered in Renato Mauro's Computer Graphics course at CEFET-RJ. The projects utilize [p5.js](https://p5js.org/), a JavaScript library for creative coding.

## Table of Contents

- [Project Setup with VS Code](#project-setup-with-vs-code)
- [File Descriptions](#file-descriptions)

## Project Setup with VS Code

To set up and run this project using Visual Studio Code (VS Code), follow these steps:

### 1. Install Visual Studio Code
Download and install [VS Code](https://code.visualstudio.com/).

### 2. Install the p5.vscode Extension
- Open VS Code.
- Go to the Extensions view (`Ctrl+Shift+X`).
- Search for **p5.vscode** by Sam Lavigne.
- Click **Install**.

### 3. Clone the Repository

```bash
git clone https://github.com/GustavoMenant/CEFET-CG.git
```

### 4. Open the Project
Open the cloned folder (`CEFET-CG`) in VS Code using `File > Open Folder`.

### 5. Run the Project
- Open the `index.html` file.
- Right-click inside the editor and choose **"Show p5 Sketch"**, or click **"Go Live"** if you're using Live Server.

---

## File Descriptions

Below is a brief overview of the main JavaScript files in this repository:

- **`bezier.js`**  
  Demonstrates the creation of Bézier curves, useful for modeling smooth and scalable shapes in computer graphics.

- **`estrela.js`**  
  Renders star shapes using polar coordinates and trigonometric functions.

- **`polar-coords.js`**  
  Explores the use of polar coordinates to generate abstract and symmetric patterns.

- **`sierpinski-fractal.js`**  
  Implements the recursive generation of the Sierpinski Triangle, a classic example of a mathematical fractal.

> _Note: Files inside the `libraries` folder, as well as `index.html` and `style.css`, are standard setup files and not explained here._

---

For more on how to use p5.js, check out the [official reference](https://p5js.org/reference/).
