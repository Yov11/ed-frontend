// src/pages/Admin/AdminDashboard.jsx
import React from 'react';
import ProductList from './ProductList';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Panel de Administración</h1>
        
      </header>
      <main className="p-6">
        <ProductList />
      </main>
    </div>
  );
};

export default AdminDashboard;
