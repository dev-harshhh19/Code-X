# Code X | Secure Encoder & Decoder

Code X is a modern web application designed to transform text into a custom secure cipher system. Built with performance and user experience in mind, it creates a seamless environment for cryptography enthusiasts and casual users alike to encode and decode messages instantly.

## Features

- **Secure Encoding**: Custom cipher algorithm transforming uppercase letters and numbers.
- **Real-time Processing**: Instant conversion logic with zero latency.
- **Production Grade UI**: Responsive design with glassmorphism effects and smooth animations.
- **Mobile First**: Fully optimized layout for all device sizes (Desktop, Tablet, Mobile).
- **Privacy Focused**: All processing happens client-side; no data is stored or transmitted.
- **Interactive Experience**: 3D parallax background and gyroscope support for mobile devices.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Performance**: Optimized rendering with requestAnimationFrame and React best practices

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dev-harshhh19/Code-X.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Code-X
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles and themes
├── components/          # Reusable UI components
│   ├── SecretEncoder.tsx # Core encoding logic UI
│   ├── Background3D.tsx  # Interactive parallax background
│   └── ...
├── lib/                 # Utility functions and logic
│   ├── encode.ts        # Encoding algorithm
│   ├── decode.ts        # Decoding algorithm
│   └── maps.ts          # Cipher character mappings
└── ...
```

## License

This project is licensed under the MIT License.
