// src/pages/Admin/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Cargando productos...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Lista de Productos</h2>
      <table className="table-auto border-collapse w-full border border-gray-300 text-left text-sm">
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-4 py-2">ID</th>
      <th className="border border-gray-300 px-4 py-2">Nombre</th>
      <th className="border border-gray-300 px-4 py-2">Categoría</th>
      <th className="border border-gray-300 px-4 py-2">Precio</th>
      <th className="border border-gray-300 px-4 py-2">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id} className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2">{product.id}</td>
        <td className="border border-gray-300 px-4 py-2">{product.nombre}</td>
        <td className="border border-gray-300 px-4 py-2">{product.categoria}</td>
        <td className="border border-gray-300 px-4 py-2">{product.precio}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
            Editar
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default ProductList;
