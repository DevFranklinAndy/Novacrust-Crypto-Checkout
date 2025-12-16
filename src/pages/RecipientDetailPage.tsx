import { useState } from "react";
import Navigation from "../components/Navigation";
import BankDetails from "../ui/BankDetails";
import ContactDetails from "../ui/ContactDetails";
import { useNavigate } from "react-router-dom";

type Step = "bank" | "contact";

export interface BankState {
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export interface ContactState {
  email: string;
  phone: string;
}

export interface Errors {
  bank?: { bankCode?: string; accountNumber?: string };
  contact?: { email?: string; phone?: string };
}

// Generate Mockup of Account Names
const generateMockAccountName = (
  bankName: string,
  accountNumber: string
): string => {
  if (accountNumber.length !== 10 || !bankName) return "";

  const names = [
    "FRANKLIN ANDREW",
    "FAVOUR ITIRE",
    "ODUTUGA GBEKE",
    "OKAFOR MARIZU",
  ];

  const index = +accountNumber[0] % names.length;

  return `${names[index]}`;
};

const RecipientDetailPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("bank");
  const [bank, setBank] = useState<BankState>({
    bankCode: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  const [contact, setContact] = useState<ContactState>({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string>("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const validateBank = (): boolean => {
    const bankErrors: Errors["bank"] = {};

    if (!bank.bankCode) bankErrors.bankCode = "Bank is required";

    if (!/^\d{10}$/.test(bank.accountNumber))
      bankErrors.accountNumber = "Account number must be 10 digits";

    if (Object.keys(bankErrors).length > 0) {
      setErrors({ bank: bankErrors });
      return false;
    }

    setErrors({});
    return true;
  };

  const validateContact = (): boolean => {
    const contactErrors: Errors["contact"] = {};

    if (!contact.email || !contact.email.includes("@"))
      contactErrors.email = "Valid email is required";

    if (contact.phone.replace(/\D/g, "").length < 10)
      contactErrors.phone = "Valid phone number is required";

    if (Object.keys(contactErrors).length > 0) {
      setErrors({ contact: contactErrors });
      return false;
    }

    setErrors({});
    return true;
  };

  const handleBankChange = (field: keyof BankState, value: string) =>
    setBank((prev) => {
      const updated = { ...prev, [field]: value };

      if (field === "accountNumber" || field === "bankName") {
        updated.accountName = generateMockAccountName(
          updated.bankName,
          updated.accountNumber
        );
      }
      return updated;
    });

  const handleContactChange = (field: keyof ContactState, value: string) =>
    setContact((prev) => ({ ...prev, [field]: value }));

  const handleBankSubmit = () => {
    if (!validateBank()) return;
    setSuccess("Bank Details successfully submitted");
    setIsSubmiting(true);

    setTimeout(() => {
      setIsSubmiting(false);
      setStep("contact");
    }, 5000);
  };

  const handleContactSubmit = () => {
    if (!validateContact()) return;

    setIsSubmiting(true);

    setSuccess(
      `ACCOUNT NAME: ${bank.accountName}, ACCOUNT NUMBER: ${bank.accountNumber}, BANK: ${bank.bankName}, PHONE: ${contact.phone}, EMAIL: ${contact.email}`
    );

    setTimeout(() => navigate("/confirm", { state: { bank, contact } }), 2000);
  };
  return (
    <>
      <Navigation label="Recipient Details" />
      {step === "bank" && (
        <BankDetails
          success={success}
          value={bank}
          errors={errors.bank}
          onChange={handleBankChange}
          onSubmit={handleBankSubmit}
          isSubmitting={isSubmiting}
        />
      )}
      {step === "contact" && (
        <ContactDetails
          value={contact}
          errors={errors.contact}
          onChange={handleContactChange}
          onSubmit={handleContactSubmit}
          isSubmitting={isSubmiting}
        />
      )}
    </>
  );
};

export default RecipientDetailPage;
