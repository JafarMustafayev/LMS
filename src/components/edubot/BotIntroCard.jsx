import eduBot from "../../assets/img/eduBot.png";
import { studentProfile } from "../../data/studentDatas";

function BotIntroCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white px-6 py-3 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <span className="text-5xl">
            <img src={eduBot} alt="" />
          </span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900">EduBot AI</h2>
        <p className="mt-1 text-sm text-gray-500">
          Sizin ağıllı tədris köməkçiniz
        </p>
      </div>

      <div className="mt-3 rounded-2xl bg-blue-50 p-5">
        <h3 className="font-bold text-gray-900">
          Salam,{studentProfile.firstName}! 👋
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Mən sizə dərsləriniz, tapşırıqlarınız, qiymətləriniz və digər
          mövzularda kömək edə bilərəm.
        </p>
      </div>
    </div>
  );
}

export default BotIntroCard;
