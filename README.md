# 🎰 Stellar Lottery - Web3 Frontend

## 📌 Project Description

The **Stellar Lottery Frontend** is a modern, cyberpunk-themed Web3 user interface built with React, Next.js, and Tailwind CSS. It provides a seamless experience for users to interact with the Soroban Decentralized Lottery smart contract on the Stellar network.

This frontend enables users to purchase lottery tickets, view current players, check previous winners, and connect their Freighter wallet for secure transactions.

## ⚡ What it does

* **Wallet Connection:** Seamless Freighter wallet integration for Stellar Network authentication.
* **Ticket Purchase:** User-friendly interface to buy lottery tickets (10 XLM per ticket).
* **Live Stats:** Real-time display of jackpot amount, active player count, and countdown timer.
* **Player Tracking:** View current players and their ticket counts.
* **Winner Display:** See previous draw winner, prize amount, and winning numbers.

## ✨ Features

* **🎨 Cyberpunk UI:** Modern dark-themed interface with neon purple and glowing green accents.
* **📱 Fully Responsive:** Mobile-first design that works seamlessly on all devices.
* **🔐 Wallet Integration:** Secure Freighter wallet connection for the Stellar Network.
* **⚡ Real-time Updates:** Live jackpot, player count, and countdown timer displays.
* **🏆 Winner Showcase:** View previous draw winners with prize amounts and winning numbers.
* **💜 Premium Design:** Smooth animations, gradient text, and glowing effects for an immersive experience.

## 🛠️ Tech Stack

* **Frontend Framework:** Next.js 14 with App Router
* **UI Library:** React 18
* **Styling:** Tailwind CSS 3
* **Language:** TypeScript 5
* **Blockchain:** Stellar Network (Freighter Wallet Integration)
* **Deployment:** Vercel



## 🧠 How it Works

1. **Connect Wallet:** Users click "Connect Freighter" to authenticate with their Stellar account.
2. **Buy Tickets:** Users can purchase lottery tickets (10 XLM each) through the intuitive interface.
3. **View Players:** Real-time display of all current players and their ticket counts.
4. **Check Winners:** View previous draw winners, prize amounts, and winning numbers.
5. **Monitor Stats:** Track live jackpot, active players, and time until the next draw.

## 📄 Contract Functions

🔹 `initialize`
* **Purpose:** Sets up the lottery round.
* **Parameters:** `admin` (Address), `token_addr` (Address), `ticket_price` (i128)

🔹 `buy_ticket`
* **Purpose:** Enters a user into the lottery.
* **Parameters:** `buyer` (Address)

🔹 `pick_winner`
* **Purpose:** Selects a random winner and pays out the pool.
* **Returns:** Winner's Address

🔹 `get_players`
* **Purpose:** Views the current participant pool.
* **Returns:** Vector of Addresses

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/dev-rps/decentralized-lottery.git

# Navigate to the frontend directory
cd decentralized-lottery

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Deployment

Deploy to Vercel:
```bash
npm run build
vercel deploy
```

## 🌐 Smart Contract Integration

* **Contract Address:** `CBLTMTDDDXFY3BKXYE6W4MY7RAQCFLKBG56MBHDZK6TIHGVHY2EJT7OV`
* **Network:** Stellar Testnet
* **Explorer Link:** 👉 [View on Stellar.Expert](https://stellar.expert/explorer/testnet/contract/CBLTMTDDDXFY3BKXYE6W4MY7RAQCFLKBG56MBHDZK6TIHGVHY2EJT7OV)

This frontend interacts with the Soroban smart contract to provide a seamless user experience for purchasing lottery tickets and viewing draw results.

## 🧪 Future Improvements

* 🔌 **Smart Contract Integration:** Direct contract interaction for buying tickets and checking results.
* 📊 **Advanced Analytics:** Detailed statistics and probability calculations for players.
* 🎯 **Multi-Round Support:** Track and display multiple lottery rounds with historical data.
* 🔔 **Notifications:** Real-time alerts for draws, winners, and ticket confirmations.
* 🌙 **Dark/Light Theme Toggle:** User preference for theme selection.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request if you want to add new features or optimize the logic.

## 👤 Author

* **Name:** Rudra Pratap Singh
* **Email:** rpscodes@gmail.com
* **GitHub:** [dev-rps](https://github.com/dev-rps)

## 📜 License

This project is licensed under the MIT License.

## ⭐ Acknowledgment

Built using the powerful **Soroban SDK** on the Stellar network to enable scalable, transparent, and efficient smart contract development.
