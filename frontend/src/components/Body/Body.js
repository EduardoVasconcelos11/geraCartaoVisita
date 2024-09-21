import React, { useState  } from "react";
import sampleImage from "../../assets/landingpage.svg";
import Formulario from "../formulario/Formulario";
import Cartao from "../Cartao/Cartao";
import api from '../../services/api';
import { Snackbar, Alert } from '@mui/material';

const Body = () => {
  const [card, setCard] = useState(false);
  const [response, setResponse] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Controlar visibilidade do snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Mensagem do snackbar
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Tipo do snackbar (success/error)

  const handleForm = async (data) => {
    try {

      const response = await api.post('/generate', data);

      setResponse(response.data);
      console.log('response',response)
      if (response.status !== 200) {
        console.log('Erro ao enviar os dados', response);
        setSnackbarMessage('Erro ao enviar os dados!');  // Define mensagem de erro
        setSnackbarSeverity('error');  // Define a gravidade como erro
        setSnackbarOpen(true);  // Mostra o Snackbar
      } else {
        setCard(true);
        console.log('response', response);
        setSnackbarMessage('Cartão gerado com sucesso!');  // Define mensagem de sucesso
        setSnackbarSeverity('success');  // Define a gravidade como sucesso
        setSnackbarOpen(true);  // Mostra o Snackbar
      }
    } catch (error) {
      console.log('Erro ao enviar os dados', error);
      setSnackbarMessage('Erro ao enviar os dados!');  // Define mensagem de erro
      setSnackbarSeverity('error');  // Define a gravidade como erro
      setSnackbarOpen(true);  // Mostra o Snackbar
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);  // Fecha o Snackbar

  };

  const handleCard = () => {
    setCard(false);
    console.log('Estado alterado!');
  };

  return (
    <main>
      <div className="cabecalho">
        <h2>Gerador de Cartão de Visita</h2>
        <span>
          <p>
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.
          </p>
        </span>
      </div>
      <div className="main-container">
        <div className="image-container">
          <img src={sampleImage} alt="Descrição da Imagem" />
        </div>

        <div className="principal">
          {card ? (
            <Cartao clickCard={handleCard} payload={response}/>
          ) : (
            <Formulario clickForm={handleForm} />
          )}
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Posição no canto inferior direito
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default Body;
