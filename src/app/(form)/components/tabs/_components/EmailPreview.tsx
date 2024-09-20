import { useText } from "@/app/(form)/contexts/StateContext";

// Function to validate email using regex
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const EmailPreview = () => {
  const {
    emailTitle,
    setEmailTitle,
    emailDescription,
    setEmailDescription,
    emailRequired,
    setEmailRequired,
    emailValue,
    setEmailValue,
  } = useText();

  const handleCheck = () => {
    if (emailRequired) {
      if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Email is valid!");
    } else {
      alert("Email check not required.");
    }
  };

  return (
    <div className="w-[60%] h-[50%] flex">
      <div className="relative w-[100%] flex flex-col justify-center items-start gap-2">
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] bg-transparent resize-none text-4xl"
          value={emailTitle}
          onChange={(e) => setEmailTitle(e.target.value)}
        />
        <textarea
          className="border border-transparent hover:border-white w-[90%] rounded-md transition-all duration-700 text-[#fff] resize-none bg-transparent text-xl"
          value={emailDescription}
          onChange={(e) => setEmailDescription(e.target.value)}
        />
        <div className="w-[100%] flex justify-start items-center">
          <textarea
            className="border-b border-[#fff] w-[80%] h-10 transition-all duration-700 text-[#ffffff95] resize-none bg-transparent text-lg"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <button
            className="py-1 px-3 rounded-md bg-white ml-4"
            onClick={handleCheck}  
          >
            <h1 className="text-[#000] text-sm">Check</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
