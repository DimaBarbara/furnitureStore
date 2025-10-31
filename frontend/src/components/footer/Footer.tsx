import Logo from "../common/Logo";
import GitHubImg from "/svg/github.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#fafafa]">
      <div className="flex justify-between items-center !px-6 !pt-6 ">
        <div>
          <p className="font-normal text-base leading-snug tracking-tight text-center text-[#bebebe]">
            © Меблева компанія "Два Андрія" 2000
          </p>
        </div>
        <div>
          <Logo />
        </div>
        <div className="flex items-center ">
          <span className="font-normal text-base leading-snug tracking-tight text-center text-[#bebebe] !mr-2">
            Сайт розроблено:
          </span>
          <span className="font-normal text-base leading-snug tracking-tight text-center text-[#bebebe]">
            <div className="flex items-center space-x-1 gap-2">
              <a
                href="https://github.com/DimaBarbara"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out opacity-70 hover:opacity-100 focus:opacity-100"
              >
                <img
                  src={GitHubImg}
                  alt="GitHub Дмитро"
                  className="h-7 w-auto"
                />
              </a>

              <a
                href="https://github.com/VladDarkApple2007"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out opacity-70 hover:opacity-100 focus:opacity-100" // Hover/Focus ефект
              >
                <img src={GitHubImg} alt="GitHub Влад" className="h-7 w-auto" />
              </a>
            </div>
          </span>
        </div>
      </div>
      <div className="border border-[#e7e6e6] w-full h-0 !mt-6 !mb-6 "></div>
      <div className="flex flex-col !px-6 ">
        <div className="flex justify-between">
          <div className="text-start">
            <h4 className="font-bold text-base leading-relaxed tracking-tight text-[#071828] mb-2">
              Про компанію
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Виробництво
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Розташування
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          <div className="text-start">
            <h4 className="font-bold text-base leading-relaxed tracking-tight text-[#071828] mb-2">
              Покупцеві
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Як зробити замовлення
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Рекомендації зі збірки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Договір публічної оферти
                </a>
              </li>
            </ul>
          </div>
          <div className="text-start">
            <h4 className="font-bold text-base leading-relaxed tracking-tight text-[#071828] mb-2">
              Корисна інформація
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Все про фасади
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Все про фурнітуру
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal !text-[#656d75] hover:!text-[#071828] focus:!text-[#071828] transition duration-200"
                >
                  Все про фасади
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="/img/bank-logo-1.png"
              alt="Банк 1"
              className="w-auto h-auto"
            />
            <img
              src="/img/bank-logo-2.png"
              alt="Банк 2"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
         <div className="border border-[#e7e6e6] w-full h-0 !mt-6 !mb-6"></div>
        <div>
          <p className="font-normal text-base leading-snug tracking-tight text-center text-[#bebebe] !pb-6">
            Усі права захищені. Будь-яке копіювання та використання матеріалів
            сайту дозволено лише з письмової згоди правовласника. Не є публічною
            офертою.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
