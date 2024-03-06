import AccountContent from "@/components/AccountContent";
import Header from "@/components/home/Header";
import React from "react";

const AccountPage = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-hidden">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h2 className="text-white text-3xl font-semibold">Account setting</h2>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default AccountPage;
