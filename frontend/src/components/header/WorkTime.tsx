import TimeIcon from "/svg/time.svg";
import CompassIcon from "/svg/compass.svg";

const WorkTime = () => {
  return (
    <div className="flex flex-col text-start gap-2">
      <div>
        <div className="flex gap-1.5">
          <img src={TimeIcon} alt="Logo" className="w-5" />
          <p className="font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black">Пн-Пт з 9:00 до 18:00</p>
        </div>
        <div className="flex gap-1.5">
          <div className="w-5"></div>
          <p className="font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black">Сб-Вс з 10:00 до 14:00</p>
        </div>
      </div>
      <div className="flex gap-1.5">
        <img src={CompassIcon} alt="Logo" className="w-5" />
        <a
          href="https://maps.app.goo.gl/Ka6KfVNDeR1fREJP9"
          className="!underline font-normal text-base leading-[127%] tracking-[-0.04em] text-right text-black"
        >
          Наш цех
        </a>
      </div>
    </div>
  );
};

export default WorkTime;
