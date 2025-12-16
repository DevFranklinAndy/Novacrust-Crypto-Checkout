import TransactionSelector from "../components/TransactionSelector";
import PaymentSelector from "../components/PaymentSelector";
import Button from "../components/Button";
import { countryList, payList, usdtCoins } from "../utils/data";

const CryptoToCash = () => {
  return (
    <form className="form-container w-full flex-1">
      {/* Transaction Selector */}
      <TransactionSelector label="pay" array={usdtCoins} />

      <TransactionSelector label="receive" array={countryList} />

      {/* Payment Selector */}
      <PaymentSelector label="from" array={payList} />
      <PaymentSelector label="to" array={payList} />

      <Button label="Convert now" type="submit" />
    </form>
  );
};

export default CryptoToCash;
