# Novacrust – Crypto Checkout Page

## Overview

This project implements a streamlined crypto checkout experience for Novacrust, focused on the point where users provide recipient details and confirm a transaction. The scope is intentionally limited to a two-step flow to reflect a realistic checkout path while emphasizing usability, clarity, and error prevention.

---

## Implemented Flow

1. **Recipient Details Page**

   - Bank details are collected and validated first.
   - Contact details are unlocked only after successful bank validation.

2. **Confirmation Page**

   - Displays submitted recipient and payment information.
   - Serves as the terminal step for the current scope.

Pages such as crypto to cash conversion and Send Ethereum to Address Page were excluded (Although UI was designed).

---

## State / Component Management Approach

- State is centralized at the page level (`RecipientDetailPage`).
- Child components (`BankDetails`, `ContactDetails`) are **fully controlled components**.
- No global state library (Redux, Zustand, etc.) is used, as the state lifecycle is short-lived and page-scoped.
- Components like (`TransactionSelector`, `PaymentSelector`, `Options`) where created for Dropdown.

---

## Assumptions

- Bank account name resolution is mocked and deterministic.
- data.ts file contains mockup data for rendering some (`BankLists`, `CountryLists`, `PayLists`, `UsdtCoins`)
- No backend, API calls, or persistence layer are involved.
- Errors and Loading State are handled client-side only.

## Trade-offs

- **No global state**: Limits cross-page persistence but simplifies reasoning.
- **Mocked bank resolution**: Avoids external dependencies at the cost of realism.
- **No crypto logic**: Excludes conversion rates, gas fees, and wallet interaction to prevent premature complexity.
- **No accessibility pass**: Visual fidelity was prioritized over full a11y compliance at this stage.

Each trade-off is reversible once the flow is validated (There are plans for improvements).

---

## Setup Instructions

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in the browser and navigate to the checkout flow.

---

## Technologies / Dependencies Used

- React Typescript
- React-Router
- TailwindCSS
- React-Icons

## Routes / Links

- **Recipient Details Page:** [https://novacrust-crypto-checkout-ten.vercel.app](https://novacrust-crypto-checkout-ten.vercel.app)
- **Confirmation Page:** [https://novacrust-crypto-checkout-ten.vercel.app/confirm](https://novacrust-crypto-checkout-ten.vercel.app/confirm)
- **Crypto Page:** [https://novacrust-crypto-checkout-ten.vercel.app/crypto](https://novacrust-crypto-checkout-ten.vercel.app/crypto)
- **Send Ethereum Page:** [https://novacrust-crypto-checkout-ten.vercel.app/send-eth](https://novacrust-crypto-checkout-ten.vercel.app/send-eth)
