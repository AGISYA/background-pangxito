import { FaMoneyBillWave, FaGrinStars, FaThumbsUp } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-3xl mb-1 text-green-500" />,
      title: "Harga Terbaik",
      description: (
        <div>
          {/* Teks untuk mobile */}
          <div className="block md:hidden">
            Pangsit berkualitas <br /> dengan harga yang <br /> terjangkau
          </div>

          {/* Teks untuk desktop */}
          <div className="hidden md:block">
            Pangsit berkualitas dengan harga yang terjangkau
          </div>
        </div>
      ),
    },
    {
      icon: <FaGrinStars className="text-3xl mb-1 text-yellow-500" />,
      title: "Rasa Enak",
      description: (
        <div>
          {/* Teks untuk mobile */}
          <div className="block md:hidden">
            Nikmati kelezatan <br /> pangsit tulang rangu <br /> 3in1 kami
          </div>

          {/* Teks untuk desktop */}
          <div className="hidden md:block">
            Nikmati kelezatan pangsit tulang rangu 3in1 kami
          </div>
        </div>
      ),
    },
    {
      icon: <FaThumbsUp className="text-3xl mb-1 text-blue-500" />,
      title: "Terekomendasi",
      description: (
        <div>
          {/* Teks untuk mobile */}
          <div className="block md:hidden">
            Pelanggan puas <br /> dengan rasa dan <br /> kualitas kami.
          </div>

          {/* Teks untuk desktop */}
          <div className="hidden md:block">
            Pelanggan puas dengan rasa dan kualitas kami.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Keunggulan Kami
        </h2>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-start gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105 text-sm md:text-base" // Added responsive text size
          >
            <div className="flex text-xs items-center justify-center w-12 h-12 rounded-full mb-2">
              {feature.icon}
            </div>
            <h3 className="text-xs font-semibold md:text-lg text-red-600 mb-1">
              {feature.title}
            </h3>
            <div className="text-gray-800 mx-0 md:mx-10 lg:mx-20 font-medium text-center text-[10px] md:text-xs">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
