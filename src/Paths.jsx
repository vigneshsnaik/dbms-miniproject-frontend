import React from "react";
import AdminDashboard from "./scenes/admin/dashboard";
import AdminUsers from "./scenes/admin/manageusers";
import AdminTransactions from "./scenes/admin/transactions";
import AdminManageAssets from "./scenes/admin/manageassets";
import AdminForm from "./scenes/admin/form";
import AdminFAQ from "./scenes/admin/faq";
import AdminMarketplace from "./scenes/admin/marketplace";
import UserDashboard from "./scenes/user/dashboard";
import UserTransactions from "./scenes/user/transactions";
import UserManageAssets from "./scenes/user/manageassets";
import UserForm from "./scenes/user/form";
import UserFAQ from "./scenes/user/faq";
import UserMarketplace from "./scenes/user/marketplace";
import { Routes, Route } from "react-router-dom";

export default function Paths() {
  return (
    <Routes>
      {/* Admin Paths */}
      <Route path="/admin/" element={<AdminDashboard />} />
      <Route path="/admin/manageUsers" element={<AdminUsers />} />
      <Route path="/admin/assets" element={<AdminManageAssets />} />
      <Route path="/admin/transactions" element={<AdminTransactions />} />
      <Route path="/admin/form" element={<AdminForm />} />
      <Route path="/admin/faq" element={<AdminFAQ />} />
      <Route path="/admin/marketplace" element={<AdminMarketplace />} />
      {/* User Paths */}
      <Route path="/user/" element={<UserDashboard />} />
      <Route path="/user/transactions" element={<UserTransactions />} />
      <Route path="/user/assets" element={<UserManageAssets />} />
      <Route path="/user/faq" element={<UserFAQ />} />
      <Route path="/user/form" element={<UserForm />} />
      <Route path="/user/marketplace" element={<UserMarketplace />} />
    </Routes>
  );
}
