# Soroban Lottery Frontend

A modern, cyberpunk-themed Web3 decentralized lottery frontend built with React, Vite, and Tailwind CSS v4.

## Features

- Dark cyberpunk theme with glowing effects
- Freighter wallet integration
- Responsive design for mobile and desktop
- Real-time player tracking
- Previous winner display
- Fully interactive UI with loading states

## Tech Stack

- React 18
- Vite 8
- Tailwind CSS v4
- Freighter Wallet API
- Stellar SDK

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Freighter Wallet browser extension

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Wallet connection header
│   ├── BuyTicket.jsx       # Ticket purchase component
│   ├── PlayersList.jsx     # Current players display
│   ├── PreviousWinner.jsx  # Previous winner display
│   └── Stats.jsx           # Lottery statistics
├── App.jsx                 # Main application component
├── index.css              # Global styles with Tailwind
└── main.jsx               # Application entry point
```

## Smart Contract Integration

The frontend is designed to integrate with the Soroban lottery smart contract deployed at:
`CBLTMTDDDXFY3BKXYE6W4MY7RAQCFLKBG56MBHDZK6TIHGVHY2EJT7OV`

Currently uses mock data for demonstration purposes.

## Design Features

- Cyberpunk aesthetic with dark theme
- Neon effects and glowing buttons
- Smooth animations and transitions
- Mobile-responsive layout
- Custom scrollbars
- Gradient accents

## License

MIT
