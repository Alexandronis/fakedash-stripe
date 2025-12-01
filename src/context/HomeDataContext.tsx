// src/context/HomeDataContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

/*
|--------------------------------------------------------------------------
| Cookie helpers (no js-cookie)
|--------------------------------------------------------------------------
*/

function setCookie(name: string, value: any) {
  document.cookie = `${name}=${encodeURIComponent(
    JSON.stringify(value)
  )}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match[2]));
  } catch {
    return null;
  }
}

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export interface HomeData {
  totalEarnings: number; // 140,349.00
  dayBeforePercent: number; // 10
  payoutPercent: number; // 10
  failedPaymentsPercent: number; // 4
  linkPaymentsPercent: number; // 0
  refundsPercent: number; // 0

  usdBalance: number; // 4,519.24
  payoutsTotal: number; // 14,034.90
  grossVolume: number; // 140,349.00

  paymentsSucceeded: number; // 140,349
  paymentsRefunded: number; // 0
  paymentsFailed: number; // 5,613.96

  topCard: number; // 140,349
  topLink: number; // 0

  // CHARTS (top graph)
  chartA: (number | null)[];
  chartB: (number | null)[];
}

interface HomeDataContextType {
  data: HomeData;
  updateField: (key: keyof HomeData, value: any) => void;
  updateMultiple: (values: Partial<HomeData>) => void;
  resetToDefaults: () => void;
}

/*
|--------------------------------------------------------------------------
| Default Values
|--------------------------------------------------------------------------
*/

const DEFAULT_DATA: HomeData = {
  totalEarnings: 140_349.0,
  dayBeforePercent: 10,
  payoutPercent: 10,
  failedPaymentsPercent: 4,
  linkPaymentsPercent: 0,
  refundsPercent: 0,

  usdBalance: 4519.24,
  payoutsTotal: 14_034.9,
  grossVolume: 140_349.0,

  paymentsSucceeded: 140_349.0,
  paymentsRefunded: 0,
  paymentsFailed: 5613.96,

  topCard: 140_349.0,
  topLink: 0,

  chartA: [
    0, 0, 0, 0, 2056.2364264654357, 2056.2364264654357,
    2056.2364264654357, 2178.314171252013, 2178.314171252013,
    2178.314171252013, 2178.314171252013, 1625.060359869742,
    1625.060359869742, 1937.9907331798343, 1937.9907331798343,
    1937.9907331798343, 3463.4129842103985, 3463.4129842103985,
    3463.4129842103985, 3463.4129842103985, null, null, null,
    null, null
  ],

  chartB: [
    0, 0, 1143.9664640650165, 1143.9664640650165,
    1143.9664640650165, 2504.3733100550853, 2504.3733100550853,
    2504.3733100550853, 2504.3733100550853, 3186.642631103393,
    3164.1007237399635, 3164.1007237399635, 2982.883939975166,
    2864.9910600248345, 2864.9910600248345, 2864.9910600248345,
    2661.232368896607, 2661.232368896607, 2661.232368896607,
    3043.664466918205, 3043.664466918205, 3043.664466918205,
    3043.664466918205, 4703.908535934984, 5264.926230262997
  ],
};

/*
|--------------------------------------------------------------------------
| Context
|--------------------------------------------------------------------------
*/

const HomeDataContext = createContext<HomeDataContextType | null>(null);

export const useHomeData = () => {
  const ctx = useContext(HomeDataContext);
  if (!ctx) throw new Error("useHomeData must be inside provider");
  return ctx;
};

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
*/

export const HomeDataProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                            children,
                                                                          }) => {
  const [data, setData] = useState<HomeData>(DEFAULT_DATA);

  // LOAD FROM COOKIE
  useEffect(() => {
    const saved = getCookie("homeData");
    if (saved) {
      setData({ ...DEFAULT_DATA, ...saved }); // merge to ensure all new fields exist
    }
  }, []);

  // SAVE TO COOKIE ON CHANGE
  useEffect(() => {
    setCookie("homeData", data);
  }, [data]);

  /*
  |--------------------------------------------------------------------------
  | Update functions
  |--------------------------------------------------------------------------
  */

  const updateField = (key: keyof HomeData, value: any) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateMultiple = (values: Partial<HomeData>) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const resetToDefaults = () => {
    setData(DEFAULT_DATA);
  };

  return (
    <HomeDataContext.Provider
      value={{
        data,
        updateField,
        updateMultiple,
        resetToDefaults,
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};
