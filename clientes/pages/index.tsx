import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClienteTable from "../components/ClienteTable";
import { Heading, useDisclosure } from "@chakra-ui/react";
import CadastroModal from "../components/CadastroModal";
import { useEffect, useState } from "react";
import { ICliente } from "../models/ICliente";
import { getClientes, removeCliente } from "../services/api";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [clienteToEdit, setClienteToEdit] = useState<ICliente>();

  const fetchClientes = () =>
    getClientes().then(clienteList => setClientes(clienteList));

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Venture Labs</title>
        <meta name="description" content="Criação de Wep App Simples de Cadastro"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading className={styles.titulo} as="h2" mb="100px">
        Venture Labs
        </Heading>
        <ClienteTable
          clientes={clientes}
          onAddCliente={() => onOpen()}
          onEditCliente={(cliente) => {
            setClienteToEdit(cliente);
            onOpen();
          }}
          onRemoveCliente={async (cliente) => {
            await removeCliente (cliente);
            fetchClientes();
          }}
        />
        <CadastroModal
          isOpen={isOpen}
          cliente={clienteToEdit}
          onSave={() => {
            fetchClientes();
            onClose();
            setClienteToEdit(undefined);
          }}
          onClose={() => {
            onClose();
            setClienteToEdit(undefined);
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ellenmariadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub @ellenmariadev
        </a>
      </footer>
    </div>
  );
};

export default Home;