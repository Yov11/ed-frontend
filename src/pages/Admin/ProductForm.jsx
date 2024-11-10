// src/pages/Admin/ProductForm.jsx
import React, { useState } from 'react';

const ProductForm = ({ productToEdit, onSubmit }) => {
  const [form, setForm] = useState(
    productToEdit || { nombre: '', precio: '', categoria: '', descripcion: '', stock: '' }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">{productToEdit ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Categoría</label>
          <input
            type="text"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {productToEdit ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
