import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ICliente } from "../models/ICliente";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"

interface Props {
  clientes: ICliente[];
  onAddCliente: () => void;
  onEditCliente: (expense: ICliente) => void;
  onRemoveCliente: (expense: ICliente) => void;
}

const ClienteTable = ({
  clientes,
  onAddCliente,
  onEditCliente,
  onRemoveCliente,
}: Props) => {
  return (
    <>
      <Box display="flex" placeContent="end" w="90vw">
        <Button
          size="lg"
          bg="#15c8a4ec"
          color="white"
          _hover={{ bg: "#15c8a4a2" }}
          _active={{ bg: "15c8a4a2" }}
          onClick={() => onAddCliente()}
        >
          Cadastrar Cliente
        </Button>
      </Box>
      <Box
        mt={5}
        border="1px solid"
        borderColor="gray"
        borderWidth={1}
        borderRadius="md"
        w="90vw"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th borderColor="whiteAlpha.200" color="gray.100" isNumeric>
                  ID
                </Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">NOME</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">SOBRENOME</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">DATA DE NASCIMENTO</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">CPF</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">E-MAIL</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">TELEFONE</Th>
                <Th borderColor="whiteAlpha.200" color="#15c8a4ec">RENDA</Th>
              </Tr>
            </Thead>
            <Tbody color="whiteAlpha.700">
              {clientes.map((cliente) => (
                <Tr key={cliente.id}>
                  <Td borderColor="whiteAlpha.200" isNumeric>{cliente.id}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.nome}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.sobrenome}</Td>
                  <Td borderColor="whiteAlpha.200">{new Date(cliente.date).toLocaleDateString("pt-BR")}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.cpf}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.email}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.telefone}</Td>
                  <Td borderColor="whiteAlpha.200">{cliente.value}</Td>
                  <Td borderColor="whiteAlpha.200">
                    <IconButton
                      aria-label="Editar"
                      icon={<EditIcon />}
                      color="yellow.400"
                      variant="ghost"
                      onClick={() => {
                        onEditCliente(cliente);
                      }}
                    />
                    <IconButton
                      aria-label="Remover"
                      icon={<DeleteIcon />}
                      color="red.500"
                      variant="ghost"
                      onClick={() => onRemoveCliente(cliente)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ClienteTable;
