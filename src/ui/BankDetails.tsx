import { HiOutlineChevronDown } from "react-icons/hi";
import Option from "../components/Options";
import { bankList } from "../utils/data";
import { useState } from "react";
import Error from "../components/Error";
import Button from "../components/Button";
import type { BankState } from "../pages/RecipientDetailPage";
import Success from "../components/Success";

interface BankDetailsProps {
  value: BankState;
  success: string;
  errors?: { bankCode?: string; accountNumber?: string };
  onChange: (field: keyof BankState, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const BankDetails = ({
  value,
  errors = {},
  onChange,
  onSubmit,
  success,
  isSubmitting,
}: BankDetailsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="form-container w-full"
    >
      <div className="input-holder">
        <p>Bank</p>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`input-holder__dropdown ${
            isOpen ? "ring-offset-2 ring-primary-dark/70" : "ring-transparent"
          }`}
        >
          <div className="input-holder__select">
            <p>{value.bankName || "Select an option"}</p>
            <HiOutlineChevronDown
              className={`${isOpen ? "rotate-180" : ""} input-holder__icon`}
            />
            {isOpen && (
              <Option
                array={bankList}
                parentStyle="dropdown"
                onSelect={(item) => {
                  onChange("bankName", item.title);
                  onChange("bankCode", item.title);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {errors.bankCode && <Error error={errors.bankCode} />}

      <div className="input-holder">
        <p>Account Number</p>
        <input
          type="text"
          inputMode="numeric"
          maxLength={10}
          value={value.accountNumber}
          placeholder="Enter your account number"
          className="input"
          onChange={(e) =>
            onChange("accountNumber", e.target.value.replace(/\D/g, ""))
          }
        />
      </div>
      {errors.accountNumber && <Error error={errors.accountNumber} />}

      <div className="input-holder mb-auto">
        {value.accountName && (
          <>
            <p>Account Name</p>
            <div className="bg-surface-muted px-[2.4rem] py-[1.6rem] rounded-[3rem]">
              <p>{value.accountName}</p>
            </div>
          </>
        )}
        {success && <Success success={success} />}
      </div>

      <Button
        type="submit"
        label={isSubmitting ? "Processing..." : "Next"}
        disabled={isSubmitting}
      />
    </form>
  );
};

export default BankDetails;
