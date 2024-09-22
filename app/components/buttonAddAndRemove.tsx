import { Minus, Plus } from "@phosphor-icons/react";

interface ButtonAddAndRemoveProps {
  onClickAdd: () => void;
  onClickRemove: () => void;
  quantities: number;
}

export const ButtonAddAndRemove = ({ onClickAdd, onClickRemove, quantities }: ButtonAddAndRemoveProps) => {
  return (
    <div className="bg-[#E6E5E5] rounded-md p-2 flex items-center gap-1">
      <button onClick={onClickRemove}>
        <Minus size={16} color="#8047F8" />
      </button>
      <span className="text-[#272221] text-base mx-1">{quantities || 0}</span>
      <button onClick={onClickAdd}>
        <Plus size={16} color="#8047F8" />
      </button>
    </div>
  );
};
