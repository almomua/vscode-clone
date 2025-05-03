# VS Code Clone

A lightweight clone of Visual Studio Code's interface built with React, TypeScript, and Vite. This project recreates the core UI components and basic functionality of VS Code including the file explorer, syntax highlighting, and tab management.

![VS Code Clone Screenshot](https://via.placeholder.com/800x450.png?text=VS+Code+Clone+Screenshot)

## Features

- **File Explorer**: Tree view of files and folders with expandable/collapsible functionality
- **Syntax Highlighting**: Code highlighting for various languages using react-syntax-highlighter
- **Tab Management**: Open multiple files in tabs with active tab tracking
- **Context Menu**: Right-click context menu for file operations
- **Resizable Panels**: Adjustable explorer and editor panels
- **File Icons**: Language-specific icons for different file types

## Tech Stack

- **React 19** with hooks for state management
- **TypeScript** for type safety
- **Redux Toolkit** for global state management
- **Tailwind CSS** for styling
- **react-syntax-highlighter** for code highlighting
- **react-resizable-panels** for resizable UI components
- **Vite** for fast development and bundling

## Project Structure

```
src/
├── components/        # UI Components
│   ├── SVG/           # SVG icon components
│   ├── IconImg.tsx    # Image component for icons
│   └── ...            # Other UI components
├── constants/         # Application constants
├── data/              # Mock data for file tree
├── interfaces/        # TypeScript interfaces
├── store/             # Redux store configuration
│   └── fileTreeSlice/ # Redux slice for file tree state
└── styles/            # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vscode-clone.git
cd vscode-clone
```

2. Install dependencies
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Linting

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Key Components

- **ResizablePanel**: Creates resizable panels for the explorer and editor
- **RecursiveComponent**: Renders the file tree recursively
- **SyntaxHighlight**: Provides syntax highlighting for code files
- **OpenedFileBar**: Manages open file tabs
- **DropMenu**: Context menu for file operations

## State Management

This project uses Redux Toolkit to manage application state:

- **fileTreeSlice**: Handles file tree state, open files, and active file tracking

## Future Enhancements

- Terminal integration
- Search functionality
- Settings panel
- Extensions support
- Custom themes

## License

MIT

## Acknowledgements

- VS Code team for the inspiration
- React and TypeScript communities for excellent tools and documentation
- Contributors to the open-source libraries used in this project
