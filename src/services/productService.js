import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Obtener todos los productos
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/productos`);
  return response.data;
};

// Agregar un nuevo producto
export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/productos`, product);
  return response.data;
};

// Otros métodos como actualizar y eliminar productos
