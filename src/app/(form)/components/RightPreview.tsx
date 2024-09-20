import { useText } from "../contexts/StateContext";
import BigPreview from "./tabs/_components/BigPreview";
import EmailPreview from "./tabs/_components/EmailPreview";

const RightPreview = () => {
  const { clickedStep, setClickedStep } = useText();
  return (
    <div className="w-[100%] h-[100vh] bg-[#ffffff] flex justify-center items-center">
      <div className="w-[98%] h-[98%] bg-[#000] rounded-2xl flex justify-center items-center">
      {clickedStep !== "Welcome Screen" && clickedStep !== "End Screen" ? (
          clickedStep === "Email" ? (
            <EmailPreview />
          ) : clickedStep === "Phone" ? (
            <EmailPreview />
          ) : null
        ) : (
          <BigPreview />
        )}
      </div>
    </div>
  );
};

export default RightPreview;
