import { Link, useLoaderData } from "@remix-run/react";
import Logo from "../assets/Logo-coffee.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";

export default function Navbar() {
  const total = useSelector((state: RootState) => state.cafes.total);

  return (
    <nav className="bg-white max-w-screen-xl m-auto py-8 flex justify-between">
      <div className="flex-shrink-0 flex items-center">
        <Link to="/">
          <img src={Logo} alt="logo da empresa coffee delivery" />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#EBE5F9] py-2 px-3 rounded-md">
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p className="text-[#4B2995] text-sm">Porto Alegre</p>
        </div>

        <Link to="/checkout">
          <div className="bg-[#F1E9C9] p-2 rounded-md hover:opacity-80 transition-all relative">
            <div className="absolute top-[-10px] right-[-10px] bg-[#C47F17] flex items-center justify-center w-5 h-5 rounded-full ">
              <p className="text-[12px] font-bold text-[#FFF]">{total || 0}</p>
            </div>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
