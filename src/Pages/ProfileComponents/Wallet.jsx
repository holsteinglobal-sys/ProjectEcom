import React from 'react';
import { MdAccountBalanceWallet, MdHistory } from 'react-icons/md';

const Wallet = () => {
    return (
        <div className="space-y-6 m-3">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <MdAccountBalanceWallet className="text-primary" /> My Wallet
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Balance Card */}
                <div className="card bg-gradient-to-r from-primary to-indigo-600 text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-white/80">Available Balance</h2>
                        <div className="text-4xl font-bold mt-2">₹0.00</div>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary">
                                + Add Money
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Promo Card */}
                <div className="card bg-base-100 shadow border border-gray-200">
                    <div className="card-body items-center text-center">
                         <div className="text-4xl">🎁</div>
                         <h3 className="font-bold text-lg">Refer & Earn</h3>
                         <p className="text-sm text-gray-500">Invite friends and earn ₹50 per referral.</p>
                         <button className="btn btn-link btn-sm">View Details</button>
                    </div>
                </div>
            </div>

            {/* Transactions Placeholder */}
            <div className="card bg-base-100 shadow-sm border border-gray-100">
                <div className="card-body">
                    <h3 className="card-title text-sm flex items-center gap-2 text-gray-500 uppercase tracking-wide">
                        <MdHistory /> Transaction History
                    </h3>
                    <div className="divider my-0"></div>
                    <div className="py-8 text-center text-gray-400">
                        No transactions yet.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
