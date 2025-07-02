# World's Most Annoying Cookie Consent

A simple, responsive landing page that showcases **HTML**, **CSS**, and **JavaScript** best practices with an automated build pipeline via **Vite**. It displays a tongue‑in‑cheek list of “benefits” such as “Master React in 10 minutes!” and then triggers a modal asking the visitor to consent to data usage.

---

## ✨ Features

| Feature                    | Description                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------- |
| **Responsive layout**      | Adapts gracefully to any screen size.                                                  |
| **Blocking modal**         | Pops up after a short delay and disables the page until the visitor accepts the terms. |
| **Color‑coded highlights** | Benefits list uses distinct colors to reinforce each item.                             |
| **Lightweight build**      | Vite provides hot‑reload in development and optimized bundles for production.          |

---

## 🔧 Tech Stack

- **HTML5** & **CSS3**
- **JavaScript (ES6+)**
- **[Vite](https://vitejs.dev/)** for development server and bundling
- **Node.js ≥ 18** with **npm** (or **pnpm/yarn**) for package management

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd landing-page

# 2. Install dependencies
npm install

# 3. Start the dev server with hot reload
npm run dev

# 4. Build for production
npm run build

# 5. (Optional) Preview the production build
npm run preview
```

---

## 📂 Project Structure

```
├── images/          # Visual assets (SVG, JPG, PNG)
│   └── loading.svg
├── index.html       # Page markup
├── index.css        # Global styles
├── index.js         # Modal logic & interactions
├── package.json     # Metadata & npm scripts
└── vite.config.js   # Vite configuration
```

---

## 🛠️ Customization

- **Colors & Fonts** – Adjust variables or rules in `index.css`.
- **Content** – Edit headings, lists, and messages directly in `index.html`.
- **Modal behavior** – Tweak timing, copy, or animations in `index.js`.

---

## 🤝 Contributing

1. **Fork** this repository.
2. Create a **feature branch**: `git checkout -b feature/my-new-feature`.
3. **Commit** your changes: `git commit -m "feat: add my new feature"`.
4. **Push** the branch: `git push origin feature/my-new-feature`.
5. Open a **pull request**.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

> **Tip:** Use this landing page as a playground for animations, cookie consent banners, or integrating a UI component library. Happy coding!
