import PhoneIcon from "/svg/phone.svg"
const PhoneNumbers = () => {
  return (
    <div className="flex flex-col gap-2">
        <p className="font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black">Дзвінки по Україні:</p>
        <div className="flex gap-1.5">
          <img src={PhoneIcon} alt="Logo" className="w-2.5" />
          <a href="tel:+380936494845 " className="font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black">+38 (093) 649-48-45</a>
        </div>
        <div className="flex gap-1.5">
          <img src={PhoneIcon} alt="Logo" className="w-2.5" />
          <a  href="tel:+380932061398" className="font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black">+38 (093) 206-13-98</a>
        </div>
    </div>
  );
};

export default PhoneNumbers;
