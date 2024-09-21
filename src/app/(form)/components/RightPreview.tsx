import { useText } from "../contexts/StateContext";
import BigPreview from "./tabs/_components/BigPreview";
import ContactPreview from "./tabs/_components/ContactPreview";
import EmailPreview from "./tabs/_components/EmailPreview";

const RightPreview = () => {
  const { clickedStep } = useText();
  return (
    <div className="w-[100%] h-[100vh] bg-[#ffffff] flex justify-center items-center">
      <div className="w-[98%] h-[98%] bg-[#000] rounded-2xl flex justify-center items-center">
      {clickedStep !== "Welcome Screen" && clickedStep !== "End Screen" ? (
          clickedStep === "Email" ? (
            <EmailPreview />
          ) : clickedStep === "Contacts" ? (
            <ContactPreview />
          ) : null
        ) : (
          <BigPreview />
        )}
      </div>
    </div>
  );
};

export default RightPreview;
