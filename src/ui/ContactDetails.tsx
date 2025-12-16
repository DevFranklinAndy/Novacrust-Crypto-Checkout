import { HiOutlineChevronDown } from "react-icons/hi";
import nigeriaPNG from "../assets/Nigeria.png";
import Button from "../components/Button";
import Error from "../components/Error";
import type { ContactState } from "../pages/RecipientDetailPage";

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) return digits;

  if (digits.length <= 6) return `${digits.slice(0, 3)} - ${digits.slice(3)}`;

  return `${digits.slice(0, 3)} - ${digits.slice(3, 6)} - ${digits.slice(6)}`;
};

interface ContactDetailsProps {
  value: ContactState;
  errors?: { email?: string; phone?: string };
  onChange: (field: keyof ContactState, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const ContactDetails = ({
  value,
  errors = {},
  onChange,
  onSubmit,
  isSubmitting,
}: ContactDetailsProps) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
  //   setValue(formatPhoneNumber(event.target.value));

  return (
    <form
      className="form-container w-full flex-1"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="input-holder">
        <p>Recipient email</p>
        <input
          type="email"
          className="input"
          placeholder="Enter recipient email"
          value={value.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
        {errors.email && <Error error={errors.email} />}
      </div>

      <div className="input-holder mb-auto">
        <p>Recipient phone number</p>
        <div className="border border-border-default rounded-[3rem] flex overflow-hidden ring-4 ring-transparent ring-offset-2 focus-within:ring-primary-dark/70 transition duration-300">
          <div className="flex items-center gap-2 border-r border-border-default text-text-light font-normal sm:p-8 p-4 cursor-pointer bg-surface-lighter">
            <span>+234</span>{" "}
            <img
              src={nigeriaPNG}
              alt="Nigeria Logo"
              className="h-8 w-8 object-cover rounded-full mr-2"
            />
            <HiOutlineChevronDown className="input-holder__icon" />
          </div>

          <input
            type="text"
            className="outline-0 p-8 text-text-light placeholder:text-text-light w-full flex-1"
            placeholder="000 - 000 - 0000"
            value={value.phone}
            onChange={(e) =>
              onChange("phone", formatPhoneNumber(e.target.value))
            }
          />
        </div>

        {errors.phone && <Error error={errors.phone} />}
      </div>

      <Button
        label={isSubmitting ? "Processing..." : "Continue"}
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default ContactDetails;
