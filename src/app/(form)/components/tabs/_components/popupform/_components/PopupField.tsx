const PopupField = ({ icon: Icon, fieldName, onClick }: any) => {
  return (
    <div
      className=" w-[8rem] h-10 flex cursor-pointer hover: group "
      onClick={onClick}
    >
      <div className=" w-[30%] h-[100%] flex justify-center items-center">
        {Icon && (
          <Icon className="text-lg text-[#000] group-hover:text-blue-500 transition-all duration-200" />
        )}
      </div>
      <div className=" w-[70%] h-[100%] flex justify-start items-center">
        <h1 className="text-[#000000cd] group-hover:text-blue-500 transition-all duration-200">
          {fieldName}
        </h1>
      </div>
    </div>
  );
};

export default PopupField;
