import makeBlockie from "ethereum-blockies-base64";
import TimeAgo from "javascript-time-ago";
import { SetStateAction } from "react";
import { Signer, Wallet } from "../../utils/types";

interface TopSectionPageProps {
  wallet: Wallet;
  signer: Signer | null;
  showAddSignerBox: boolean;
  setShowAddSignerBox: (value: SetStateAction<boolean>) => void;
  typeOfToken: number;
  setTypeOfToken: (value: SetStateAction<number>) => void;
}

const TopSectionPage = ({
  wallet,
  signer,
  setShowAddSignerBox,
  showAddSignerBox,
  typeOfToken,
  setTypeOfToken,
}: TopSectionPageProps) => {
  const timeAgo = new TimeAgo("en-US");

  return (
    <section className="sticky top-0 z-20 grid h-72 bg-purple-800  px-32  text-white">
      <div className="col-span-3 my-auto">
        <div className="flex items-center  space-x-10">
          <div
            className=" self-start overflow-hidden rounded"
            onClick={() => {
              // handleUpdateSigner(null);
            }}
          >
            <img
              src={makeBlockie(
                wallet.contractAddress ? wallet.contractAddress : "raghav.eth"
              )}
              alt="Wallet Contract Blockie Image"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Multisig Wallet Contract</span>
            <span className="font-mono text-lg font-bold">
              {wallet.contractAddress}
            </span>
            <span className="text-xs">
              Created {timeAgo.format(new Date())}
              {/* {timeAgo.format(new Date(wallet.createdOn))} */}
            </span>
            <div className="mt-8 flex items-center justify-between space-x-16 px-4">
              <div className="flex flex-col items-center tracking-tighter">
                <p className="font-mono text-lg font-semibold">
                  {wallet.signers.length}
                </p>
                <p className="text-xs">Signers</p>
              </div>
              {signer && !showAddSignerBox && (
                <button
                  className="btn-blue min-w-[16rem]"
                  onClick={() => {
                    setShowAddSignerBox(true);
                  }}
                >
                  Add Signer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSectionPage;
