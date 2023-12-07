import React from "react";
import AdminDashboard from "./scenes/admin/dashboard";
import AdminUsers from "./scenes/admin/manageusers";
import AdminTransactions from "./scenes/admin/transactions";
import AdminManageAssets from "./scenes/admin/manageassets";
import AdminForm from "./scenes/admin/form";
import AdminFAQ from "./scenes/admin/faq";
import AdminMarketplace from "./scenes/admin/marketplace";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./scenes/global/UserLogin";
import SignUp from "./scenes/global/Login";

export default function Paths() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<UserLogin />} />
      {/* Admin Paths */}
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/manageUsers" element={<AdminUsers />} />
      <Route path="/assets" element={<AdminManageAssets />} />
      <Route path="/transactions" element={<AdminTransactions />} />
      <Route path="/form" element={<AdminForm />} />
      <Route path="/faq" element={<AdminFAQ />} />
      <Route path="/marketplace" element={<AdminMarketplace />} />
    </Routes>
  );
}
