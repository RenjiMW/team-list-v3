# 📘 Squad Builder — Simple Rugby Team Manager

## 📋 Overview

**Squad Builder** is a web application designed to manage a rugby team roster.  
The app allows users to:

- Maintain a list of available players.
- Build a match squad consisting of **15 main players + 8 substitutes**.
- Edit player attributes (e.g., name, position, weight, height, experience).
- Visualize player positions on a rugby field layout.

---

## 🏗️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **State management:** React Context API + Reducer
- **Drag & Drop:** `@hello-pangea/dnd`
- **Storage (current implementation):** Browser `localStorage`

---

## 🔧 Installation & Setup

### Prerequisites

- Node.js (>=18)
- npm or yarn

### Steps

```bash
# Clone repository
git clone https://github.com/<your-username>/squad-builder.git

# Navigate to project
cd squad-builder

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
```

The app will be available at http://localhost:5173/
