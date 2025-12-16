import { useState, type FormEvent } from "react";
import Button from "./Button";
import Error from "./Error";
import Success from "./Success";

const ComingSoon = ({ label }: { label: string }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    if (!email) {
      setError("Kindly provide your email address");
      setLoading(false);
    } else
      setTimeout(() => {
        setLoading(false);
        setSuccess(
          `Hello Customer! ${email} will be used to update you about our newest features ✅✅✅.`
        );
        setError("");
        setEmail("");
      }, 2000);

    setTimeout(() => setSuccess(""), 10000);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-[1.7rem]">
      <div className="w-full text-center">
        <h2 className="text-primary-dark text-[3.2rem] font-semibold font-clash">
          Coming Soon!
        </h2>
        <p className="text-dark-subtle text-[2rem] mt-[1.7rem] mb-12">
          {label} is almost here. <br />
          Enter your email and we’ll let you know the moment it’s live.
        </p>
      </div>
      <div className="text-primary-dark font-medium space-y-[1.6rem] w-full mb-32">
        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Enter your email"
        />
        {error && (
          <div className="flex justify-center">
            <Error error={error} />
          </div>
        )}
        {!error && success && <Success success={success} />}
      </div>

      <Button label={loading ? "Processing..." : "Update me"} type="submit" />
    </form>
  );
};

export default ComingSoon;
