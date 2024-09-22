import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "@phosphor-icons/react";
import { Form } from "@remix-run/react";
import { useState } from "react";
import Navbar from "~/components/navbar";

export default function Checkout() {
  const [payment, setPayment] = useState<string>("");
  console.log("🚀 ~ Checkout ~ payment:", payment);

  return (
    <>
      <Navbar />

      <Form className="bg-white max-w-screen-xl m-auto mt-10 flex gap-8">
        <div className="w-2/3 border-[1px]">
          <h2 className="text-[18px] text-[#403937] font-bold">Complete seu pedido</h2>

          <div className="p-10 bg-[#F3F2F2] rounded-md mt-4">
            <div className="flex items-start gap-2">
              <MapPinLine size={22} color="#C47F17" />

              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base text-[#403937] ">Endereço de entrega</h3>
                <p className="text-[#574F4D] text-sm">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="mt-8">
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>

          <div className="p-10 bg-[#F3F2F2] rounded-md mt-3">
            <div className="flex items-start gap-2">
              <CurrencyDollarSimple size={22} color="#8047F8" />

              <div className="flex flex-col gap-[2px]">
                <h3 className="text-base text-[#403937] ">Endereço de entrega</h3>
                <p className="text-[#574F4D] text-sm">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <input
                type="radio"
                id="credit-card"
                name="payment"
                value="credit-card"
                onChange={(e) => setPayment(e.target.value)}
                className="hidden"
              />
              <label
                htmlFor="credit-card"
                className={`w-full bg-[#E6E5E5] flex rounded-md gap-3 p-4  ${
                  payment === "credit-card" && "bg-[#EBE5F9] border-[1px] border-[#8047F8]"
                }  hover:bg-[#EBE5F9] hover:border-[1px] hover:border-[#8047F8] cursor-pointer `}
              >
                <CreditCard size={16} color="#8047F8" />
                <span className="uppercase text-[#574F4D] text-xs">Cartão de crédito</span>
              </label>

              <input
                type="radio"
                id="debit-card"
                name="payment"
                value="debit-card"
                onChange={(e) => setPayment(e.target.value)}
                className="hidden"
              />
              <label
                htmlFor="debit-card"
                className={`w-full bg-[#E6E5E5] flex rounded-md gap-3 p-4  ${
                  payment === "debit-card" && "bg-[#EBE5F9] border-[1px] border-[#8047F8]"
                }  hover:bg-[#EBE5F9] hover:border-[1px] hover:border-[#8047F8] cursor-pointer `}
              >
                <Bank size={16} color="#8047F8" />
                <span className="uppercase text-[#574F4D] text-xs">cartão de débito</span>
              </label>

              <input
                type="radio"
                id="money"
                name="payment"
                value="money"
                onChange={(e) => setPayment(e.target.value)}
                className="hidden"
              />
              <label
                htmlFor="money"
                className={`w-full bg-[#E6E5E5] flex rounded-md gap-3 p-4  ${
                  payment === "money" && "bg-[#EBE5F9] border-[1px] border-[#8047F8]"
                }  hover:bg-[#EBE5F9] hover:border-[1px] hover:border-[#8047F8] cursor-pointer `}
              >
                <Money size={16} color="#8047F8" />
                <span className="uppercase text-[#574F4D] text-xs">Dinheiro</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-1/3 border-[1px]">
          <h2 className="text-[18px] text-[#403937] font-bold">Cafés selecionados</h2>
        </div>
      </Form>
    </>
  );
}
