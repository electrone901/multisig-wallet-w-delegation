import { ERC20Token } from "../../utils/types";

interface CryptoCardProps {
  data: ERC20Token;
}

const CryptoCard = ({ data }: CryptoCardProps) => {
  return (
    <div>
      <div
        className="group cursor-pointer rounded-lg bg-gray-300 p-6 hover:scale-105"
        role="NFT Card"
      >
        <div className="flex w-full justify-center overflow-hidden rounded-md object-contain">
          <img
            className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            src={data.logoUrl ? data.logoUrl : "/img_not_found.png"}
            alt={data.contractName}
          />
        </div>

        <div className="px-2 pt-2 pb-4">
          <h5 className="text-xl font-bold">{data.contractName}</h5>
          <p className="mt-2 text-gray-500">{data.contractTickerSymbol}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
