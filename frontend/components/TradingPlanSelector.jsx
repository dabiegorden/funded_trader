"use client"

import React, { useState } from 'react';

const TradingPlanSelector = () => {
  const [activePlan, setActivePlan] = useState("1 Step");
  const [activeAmount, setActiveAmount] = useState("2.5K");
  
  const planTypes = ["1 Step", "2 Step", "Pro Edge"];
  const accountSizes = ["2.5K", "5K", "10K", "25K", "50K", "100K"];
  
// Data for each plan type
const planData = {
    "1 Step": {
      phase1: {
        tradingPeriod: "Unlimited",
        minTradingDays: "2 Days",
        maxDailyLoss: "4%",
        maxTrailingLoss: "6%",
        profitTarget: "10%",
        leverageFX: "1:40 (Fx), 1:15 (Metals), 1:15 (Indices)",
        leverageCrypto: "1:2"
      },
      funded: {
        tradingPeriod: "Unlimited",
        minTradingDays: "2 Days",
        maxDailyLoss: "4%",
        maxTrailingLoss: "6%",
        profitTarget: "-",
        leverageFX: "1:40(Fx), 1:15(Metals), 1:15(Indices)",
        leverageCrypto: "1:2"
      }
    },
    "2 Step": {
      phase1: {
        tradingPeriod: "Unlimited",
        minTradingDays: "5 Days",
        maxDailyLoss: "5%",
        maxTrailingLoss: "8%",
        profitTarget: "8%",
        leverageFX: "1:40 (Fx), 1:15 (Metals), 1:15 (Indices)",
        leverageCrypto: "1:2"
      },
      phase2: {
        tradingPeriod: "Unlimited",
        minTradingDays: "5 Days",
        maxDailyLoss: "5%",
        maxTrailingLoss: "8%",
        profitTarget: "5%",
        leverageFX: "1:40 (Fx), 1:15 (Metals), 1:15 (Indices)",
        leverageCrypto: "1:2"
      },
      funded: {
        tradingPeriod: "Unlimited",
        minTradingDays: "2 Days",
        maxDailyLoss: "4%",
        maxTrailingLoss: "6%",
        profitTarget: "-",
        leverageFX: "1:40(Fx), 1:15(Metals), 1:15(Indices)",
        leverageCrypto: "1:2"
      }
    },
    "Pro Edge": {
      funded: {
        tradingPeriod: "Unlimited",
        minTradingDays: "None",
        maxDailyLoss: "5%",
        maxTrailingLoss: "10%",
        profitTarget: "-",
        leverageFX: "1:30(Fx), 1:10(Metals), 1:10(Indices)",
        leverageCrypto: "1:2"
      }
    }
  };

  // Render column headers based on selected plan
  const renderHeaders = () => {
    if (activePlan === "1 Step") {
      return (
        <>
          <div className="text-center bg-green-500 py-4 w-1/2 text-xl font-bold cursor-pointer">Phase 1</div>
          <div className="text-center bg-green-500 py-4 w-1/2 text-xl font-bold cursor-pointer">Funded</div>
        </>
      );
    } else if (activePlan === "2 Step") {
      return (
        <>
          <div className="text-center bg-green-500 py-4 w-1/3 text-xl font-bold cursor-pointer">Phase 1</div>
          <div className="text-center bg-green-500 py-4 w-1/3 text-xl font-bold cursor-pointer">Phase 2</div>
          <div className="text-center bg-green-500 py-4 w-1/3 text-xl font-bold cursor-pointer">Funded</div>
        </>
      );
    } else {
      return (
        <div className="text-center bg-green-500 py-4 w-full text-xl font-bold cursor-pointer">Funded</div>
      );
    }
  };

  // Render table rows based on selected plan
  const renderRows = () => {
    const rows = [
      { label: "Trading Period", key: "tradingPeriod" },
      { label: "Minimum Trading Days", key: "minTradingDays" },
      { label: "Maximum Daily Loss", key: "maxDailyLoss" },
      { label: "Maximum Loss (Trailing)", key: "maxTrailingLoss" },
      { label: "Profit Target", key: "profitTarget" },
      { label: "Leverage (FX)", key: "leverageFX" },
      { label: "Leverage (Crypto)", key: "leverageCrypto" }
    ];

    return rows.map((row, index) => (
      <div key={index} className="flex border-b border-green-900">
        <div className="w-1/3 md:w-1/4 bg-green-950 text-white p-4 md:p-6 cursor-pointer">
          {row.label}
        </div>
        <div className="flex flex-grow bg-green-400 overflow-x-auto md:overflow-visible">
          {activePlan === "1 Step" && (
            <>
              <div className="w-1/2 p-4 md:p-6 cursor-pointer text-center min-w-[120px]">{planData[activePlan].phase1[row.key]}</div>
              <div className="w-1/2 p-4 md:p-6 cursor-pointer text-center min-w-[120px]">{planData[activePlan].funded[row.key]}</div>
            </>
          )}
          {activePlan === "2 Step" && (
            <>
              <div className="w-1/3 p-4 md:p-6 cursor-pointer text-center min-w-[120px]">{planData[activePlan].phase1[row.key]}</div>
              <div className="w-1/3 p-4 md:p-6 cursor-pointer text-center min-w-[120px]">{planData[activePlan].phase2[row.key]}</div>
              <div className="w-1/3 p-4 md:p-6 cursor-pointer text-center min-w-[120px]">{planData[activePlan].funded[row.key]}</div>
            </>
          )}
          {activePlan === "Pro Edge" && (
            <div className="w-full p-4 cursor-pointer md:p-6 text-center">{planData[activePlan].funded[row.key]}</div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        {/* Plan Type Selection */}
        <div className="rounded-full bg-green-950 p-1 flex mb-4 md:mb-0 md:mr-4 cursor-pointer overflow-hidden">
          {planTypes.map((plan) => (
            <button
              key={plan}
              className={`rounded-full px-4 py-2 text-sm md:text-base flex-1 transition-colors cursor-pointer
                ${activePlan === plan ? 'bg-green-500 text-green-950' : 'text-green-500'}`}
              onClick={() => setActivePlan(plan)}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Account Size Selection */}
        <div className="rounded-full bg-green-950 p-1 flex overflow-x-auto md:overflow-visible cursor-pointer scrollbar-hide">
          {accountSizes.map((size) => (
            <button
              key={size}
              className={`rounded-full px-3 py-2 text-sm md:text-base whitespace-nowrap transition-colors cursor-pointer
                ${activeAmount === size ? 'bg-green-500 text-green-950' : 'text-green-500'}`}
              onClick={() => setActiveAmount(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Trading Plan Table */}
      <div className="mt-8 rounded-lg overflow-hidden border border-green-500 overflow-x-auto">
        {/* Header Row */}
        <div className="flex bg-green-950 text-white min-w-[650px] md:min-w-0">
          <div className="w-1/3 md:w-1/4 bg-green-950 p-4 md:p-6 font-bold cursor-pointer">
            {activeAmount} Trading Plan
          </div>
          <div className="flex-grow flex">
            {renderHeaders()}
          </div>
        </div>

        {/* Data Rows */}
        <div className="min-w-[650px] md:min-w-0">
          {renderRows()}
        </div>
      </div>
    </div>
  );
};

export default TradingPlanSelector;