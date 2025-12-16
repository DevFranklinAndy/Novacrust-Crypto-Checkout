import bnbPNG from "../assets/BNB.png";
import celoPNG from "../assets/CELO.png";
import tonPNG from "../assets/TON.png";

import rainBowPNG from "../assets/Rainbow.png";
import metamaskPNG from "../assets/Metamask.png";
import vectorPNG from "../assets/Vector.png";
import walletConnectPNG from "../assets/WalletConnect.png";

import moniepointJPEG from "../assets/Moniepoint.jpg";
import opayJPEG from "../assets/Opay.jpg";
import palmpayJPEG from "../assets/Palmpay.jpg";
import kudaJPEG from "../assets/Kuda.png";

import nigeriaPNG from "../assets/Nigeria.png";
import kenyaPNG from "../assets/Kenya.png";
import southAfricaPNG from "../assets/South_Africa.png";

export interface Item {
  id: number;
  image: string;
  title: string;
  abbrTitle?: string;
}

export const usdtCoins: Item[] = [
  { id: 1, title: " USDT - BNB", image: bnbPNG, abbrTitle: "BNB" },
  { id: 2, title: " USDT - CELO", image: celoPNG, abbrTitle: "CELO" },
  { id: 3, title: " USDT - TON", image: tonPNG, abbrTitle: "TON" },
];

export const countryList: Item[] = [
  { id: 1, title: "NIGERIA", image: nigeriaPNG, abbrTitle: "NGN" },
  { id: 2, title: "SOUTH AFRICA", image: southAfricaPNG, abbrTitle: "RSA" },
  { id: 3, title: "KENYA", image: kenyaPNG, abbrTitle: "KEN" },
];

export const payList: Item[] = [
  { id: 1, image: metamaskPNG, title: "Metamask" },
  { id: 2, image: rainBowPNG, title: "Rainbow" },
  { id: 3, image: walletConnectPNG, title: "WalletConnect" },
  {
    id: 4,
    image: vectorPNG,
    title: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
  },
];

export const bankList: Item[] = [
  { id: 1, image: moniepointJPEG, title: "Moniepoint" },
  { id: 2, image: opayJPEG, title: "Opay (PAYCOM)" },
  { id: 3, image: kudaJPEG, title: "Kuda Bank" },
  { id: 4, image: palmpayJPEG, title: "PalmPay" },
  { id: 5, image: vectorPNG, title: "Other Banks (Fidelity, First Bank, etc)" },
];
