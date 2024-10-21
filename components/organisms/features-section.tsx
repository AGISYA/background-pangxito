import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaGrinStars, FaThumbsUp } from "react-icons/fa";

const FeaturesSection = () => {
  const [dataAdventages, setDataAdventages] = useState<any>(null);

  useEffect(() => {
    const checkExistData = localStorage.getItem("adventages") || "";
    // console.log("checkExistData", checkExistData);
    if (checkExistData !== "") {
      setDataAdventages(JSON.parse(checkExistData));
    }
  }, []);
  console.log(dataAdventages);

  return (
    <div className="py-6">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Keunggulan Kami
        </h2>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-start gap-4">
        {/* Fitur 1 */}
        <div className="flex flex-col items-center transition-transform transform hover:scale-105 text-sm md:text-base">
          <div className="flex items-center justify-center w-12 h-12 rounded-full mb-2">
            <FaMoneyBillWave className="text-3xl mb-1 text-green-500" />
          </div>
          <h3 className="text-xs font-semibold md:text-lg text-red-600 mb-1">
            {dataAdventages?.adventages1?.judul1 || "Harga Terbaik"}
          </h3>
          <div className="text-gray-800 mx-0 md:mx-10 lg:mx-20 font-medium text-center text-[10px] md:text-xs">
            <div className="block md:hidden">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    dataAdventages?.adventages1?.deskription1 ||
                    "Pangsit berkualitas <br/> dengan harga yang <br/> terjangkau",
                }}
              />
            </div>
            <div className="hidden md:block">
              {dataAdventages?.adventages1?.deskription1 ||
                "Pangsit berkualitas dengan harga yang terjangkau"}
            </div>
          </div>
        </div>

        {/* Fitur 2 */}
        <div className="flex flex-col items-center transition-transform transform hover:scale-105 text-sm md:text-base">
          <div className="flex items-center justify-center w-12 h-12 rounded-full mb-2">
            <FaGrinStars className="text-3xl mb-1 text-yellow-500" />
          </div>
          <h3 className="text-xs font-semibold md:text-lg text-red-600 mb-1">
            {dataAdventages?.adventages2?.judul2 || "Rasa Enak"}
          </h3>
          <div className="text-gray-800 mx-0 md:mx-10 lg:mx-20 font-medium text-center text-[10px] md:text-xs">
            <div className="block md:hidden">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    dataAdventages?.adventages2?.deskription2 ||
                    "Nikmati kelezatan <br /> pangsit tulang rangu <br /> 3in1 kami",
                }}
              />
            </div>
            <div className="hidden md:block">
              {dataAdventages?.adventages2?.deskription2 ||
                "Nikmati kelezatan pangsit tulang rangu 3in1 kami"}
            </div>
          </div>
        </div>

        {/* Fitur 3 */}
        <div className="flex flex-col items-center transition-transform transform hover:scale-105 text-sm md:text-base">
          <div className="flex items-center justify-center w-12 h-12 rounded-full mb-2">
            <FaThumbsUp className="text-3xl mb-1 text-blue-500" />
          </div>
          <h3 className="text-xs font-semibold md:text-lg text-red-600 mb-1">
            {dataAdventages?.adventages3?.judul3 || "Terekomendasi"}
          </h3>
          <div className="text-gray-800 mx-0 md:mx-10 lg:mx-20 font-medium text-center text-[10px] md:text-xs">
            <div className="block md:hidden">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    dataAdventages?.adventages3?.deskription3 ||
                    "Pelanggan puas <br /> dengan rasa dan <br /> kualitas kami.",
                }}
              />
            </div>
            <div className="hidden md:block">
              {dataAdventages?.adventages3?.deskription3 ||
                "Pelanggan puas dengan rasa dan kualitas kami."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
