import axios from "axios";
import { ICliente, SaveClienteDto } from "../models/ICliente";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getClientes = async () => {
  const response = await api.get<ICliente[]>("/clientes");

  return response.data;
};


export const saveCliente = async (cliente: SaveClienteDto) => {
  if (cliente.id) {
    const response = await api.put(`/clientes/${cliente.id}`, cliente);

    return response.data;
  }

  const response = await api.post("/clientes", cliente);

  return response.data;
};

export const removeCliente = async (cliente: ICliente) => {
    await api.delete(`/clientes/${cliente.id}`)
}