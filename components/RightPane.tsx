/* eslint-disable @next/next/no-img-element */
import React from "react";
import makeBlockie from "ethereum-blockies-base64";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import TransactionCard from "./TransactionCard";
import { Wallet } from "../utils/types";
TimeAgo.setDefaultLocale(en.locale);
TimeAgo.addLocale(en);

type Props = { wallet: Wallet };

const RightPane = ({ wallet }: Props) => {
    const timeAgo = new TimeAgo("en-US");
    return (
        <div className="col-span-4">
            <section className="sticky top-0 grid h-72 grid-cols-5 bg-purple-800 px-10 text-white">
                <div className="col-span-3 my-auto">
                    <div className="flex items-center justify-center space-x-10">
                        <div
                            className="h-20 w-20 self-start overflow-hidden rounded"
                            onClick={() => {
                                // handleUpdateSigner(null);
                            }}
                        >
                            <img
                                src={makeBlockie(wallet.contractAddress)}
                                alt="Wallet Contract Blockie Image"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm">
                                Multisig Wallet Contract
                            </span>
                            <span className="font-mono text-lg font-bold">
                                {wallet.contractAddress}
                            </span>
                            <span className="text-xs">
                                Created{" "}
                                {timeAgo.format(new Date(wallet.createdOn))}
                            </span>
                            <div className="mt-8 flex items-center justify-center space-x-16">
                                <div className="flex flex-col items-center">
                                    <p className="font-mono text-lg font-semibold tracking-tighter">
                                        {wallet.balance} ETH
                                    </p>
                                    <p className="text-xs">Balance</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-mono text-lg font-semibold tracking-tighter">
                                        {wallet.lockedBalance} ETH
                                    </p>
                                    <p className="text-xs">Locked Balance</p>
                                </div>
                                <div className="flex flex-col items-center tracking-tighter">
                                    <p className="font-mono text-lg font-semibold">
                                        {wallet.signers.length}
                                    </p>
                                    <p className="text-xs">Signers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 my-auto px-20">
                    <div className="flex h-full flex-col items-center justify-center">
                        <input
                            type="text"
                            className="input my-2"
                            placeholder="Address"
                        />
                        <input
                            type="text"
                            className="input my-2"
                            placeholder="Amount"
                        />

                        <button
                            className="btn-green-light mt-5 w-full"
                            type="submit"
                        >
                            Create Transaction
                        </button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col space-y-3 px-10 py-20">
                {wallet.transactions.map((transaction) => {
                    return (
                        <TransactionCard
                            key={transaction.id}
                            txn={transaction}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default RightPane;