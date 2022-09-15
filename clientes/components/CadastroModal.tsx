import { Button, FormControl, FormLabel, Grid, GridItem, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  NumberInput, NumberInputField, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ICliente } from "../models/ICliente";
import { saveCliente } from "../services/api";

interface Props {
    isOpen: boolean;
    cliente?: ICliente;
    onSave: () => void;
    onClose: () => void;
}

function CadastroModal({ isOpen, cliente, onSave, onClose }: Props) {
    const toast = useToast();
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [value, setValue] = useState(0);
    const [date, setDate] = useState("");

    const [isLoading, setLoading] = useState(false);


    const addCliente = async () => {


        const clienteToSave = {
            id: cliente?.id,
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            email: email,
            telefone: telefone,
            value,
            date: date,
        };


        setLoading(true);

        await saveCliente(clienteToSave);

        setLoading(false);

        toast({
            title: "Cadastro Efetuado",
            description: "Cadastro realizado com sucesso!",
            status: "success",
            position: "top-right",
        });

        onSave();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastrar Cliente</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Grid
                        templateColumns={"repeat(2, 1fr)"}
                        templateRows={"repeat(2, 1fr)"}
                        gap={4}
                    >
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Sobrenome</FormLabel>
                                <Input
                                    value={sobrenome}
                                    onChange={(e) => setSobrenome(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>


                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>CPF</FormLabel>
                                <Input
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Telefone</FormLabel>
                                <Input
                                    placeholder="DD 00000000"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Data de Nascimento</FormLabel>
                                <Input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>


                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                <Input
                                    placeholder="contato@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Renda</FormLabel>
                                <NumberInput value={value} onChange={(_, value) => setValue(value)}>
                                    <NumberInputField />
                                    {/* <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper> */}
                                </NumberInput>
                            </FormControl>
                        </GridItem>

                        

                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => onClose()} mr={3}>
                        Cancelar
                    </Button>
                    <Button
                        colorScheme="green"
                        onClick={addCliente}
                        disabled={isLoading}
                    >
                        {cliente ? "Editar" : "Adicionar"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CadastroModal;