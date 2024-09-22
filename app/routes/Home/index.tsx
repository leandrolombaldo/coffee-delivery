import { useEffect, useState } from "react";
import Navbar from "~/components/navbar";
import Banner from "~/assets/banner-principal-coffee.png";
import { arrayInfo } from "./helper";
import { getCafes } from "~/services/api";
import { Cafe } from "~/@types/cafes.types";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ConvertNumberToReal } from "~/utils/convertNumberToReal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { decrement, increment } from "~/features/cafes/cafesSlice";
import { ButtonAddAndRemove } from "~/components/buttonAddAndRemove";

export default function Home() {
  const [cafes, setCafes] = useState<Cafe[]>([] as Cafe[]);
  const quantities = useSelector((state: RootState) => state.cafes.quantities);

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log("🚀 ~ Home ~ position:", position);
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  //       console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //       // https://nominatim.openstreetmap.org/reverse?format=json&lat=LATITUDE&lon=LONGITUDE
  //       fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log("🚀 ~ Home ~ data:", data);
  //         });
  //     },
  //     (error) => {
  //       console.error("Erro ao obter a localização:", error.message);
  //     }
  //   );
  // } else {
  //   console.error("Geolocalização não é suportada pelo seu navegador.");
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await getCafes();
        setCafes(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCafes();
  }, []);

  return (
    <div className="">
      <Navbar />

      <div className="bg-white max-w-screen-xl m-auto py-[92px] flex justify-between items-center">
        <div className="">
          <h1 className="font-bold text-5xl w-[80%] font-serif">Encontre o café perfeito para qualquer hora do dia</h1>
          <h2 className="font-normal text-xl mt-4 ">
            Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora
          </h2>

          <div className="mt-[66px] grid grid-cols-2 gap-y-5  w-[90%]">
            {arrayInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div style={{ backgroundColor: info.color }} className="p-2 rounded-full">
                  {info.icon}
                </div>
                <p className="text-lg">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={Banner}
          alt="Banner com formato diferente e fundo amarelo revirado, com um copo de café e grãos de café espalhado"
        />
      </div>

      <main className="max-w-screen-xl m-auto">
        <h3 className="text-[28px] font-bold mb-[54px]">Nossos cafés</h3>

        <section className="grid grid-cols-auto-min-max gap-8 pb-[157px]">
          {cafes.map((cafe) => (
            <article
              key={cafe.id}
              className="bg-[#F3F2F2] rounded-s-[6px] rounded-se-[36px] rounded-br-[6px] rounded-bl-[36px] flex justify-center flex-col mt-[40px] px-5 pb-5"
            >
              <img
                src={`app/assets/cafes/Type=${cafe.name.replace(/\s+/g, "_")}.png`}
                alt={`Imagem do café ${cafe.name}`}
                className="w-[120px] h-[120px] m-auto mt-[-20px]"
              />
              <div className="flex justify-center items-center gap-1 mt-3">
                {cafe.type.map((type) => (
                  <div key={type} className="rounded-[100px] bg-[#F1E9C9] py-1 px-2">
                    <p className="text-[#C47F17] font-bold text-[10px] uppercase">{type}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-[#403937] text-xl font-bold text-center mt-4 mb-2">{cafe.name}</h2>
              <p className="text-[#8D8686] text-sm ">{cafe.description}</p>

              <div className="flex items-center gap-6 m-auto mt-[33px]">
                <p className="text-[#574F4D] text-sm ">
                  R$ <strong className="text-2xl font-extrabold">{ConvertNumberToReal(cafe.price)}</strong>
                </p>

                <div className="flex items-center gap-2">
                  <ButtonAddAndRemove
                    onClickAdd={() => dispatch(increment(cafe.id))}
                    onClickRemove={() => dispatch(decrement(cafe.id))}
                    quantities={quantities[cafe.id] || 0}
                  />

                  <button className="p-2 bg-[#4B2995] rounded-md">
                    <ShoppingCart size={22} weight="fill" color="#FFF" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
