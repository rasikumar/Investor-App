import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ChartRadialLabel } from "@/components/chart-radial";
import WelcomeMessage from "@/components/welcome-message";
import User from "@/hooks/UserHandle";
import React from "react";

const statsConfig = [
  { key: "totalActiveOrders", label: "Active Orders" },
  { key: "totalInactiveOrders", label: "Inactive Orders" },
  { key: "totalOrderAmount", label: "Order Amount" },
  { key: "totalProductsBuyed", label: "Products Bought" },
  { key: "totalProfitAmount", label: "Profit" },
  { key: "totalDepositAmount", label: "Deposits" },
  { key: "totalWithdrawAmount", label: "Withdrawals" },
  { key: "totalReferrals", label: "Referrals" },
  { key: "walletAmount", label: "Wallet Balance" },
];

const Home = () => {
  const { userData, isUserDataLoading, isUserDataError } = User();

  if (isUserDataLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-muted/50 border border-primary animate-pulse aspect-video rounded-xl"
          />
        ))}
      </div>
    );
  }

  if (isUserDataError || !userData) {
    return <p className="text-center text-red-500">Failed to load data</p>;
  }

  return (
    <div className="flex flex-1 flex-col gap-6 pt-0">
      <WelcomeMessage />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {statsConfig.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-2xl border border-primary/20 bg-card shadow-sm p-4 flex flex-col justify-center items-center hover:shadow-md transition"
          >
            <span className="text-sm text-muted-foreground">{label}</span>
            <span className="text-2xl font-semibold text-primary mt-1">
              {userData[key] ?? 0}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
          <ChartRadialLabel />
          <ChartAreaInteractive />
      </div>
    </div>
  );
};

export default Home;
