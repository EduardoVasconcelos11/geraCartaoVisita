import React from "react";
import "./index.css";
import Logo from "../../assets/symbol.svg";
import domtoimage from "dom-to-image";
import { useRef } from "react";

const Cartao = (props) => {
  const { name, phone, email } = props.payload.data;
  const cardRef = useRef(); // Referência para o componente do cartão

  const exportAsImage = () => {
    domtoimage
      .toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "cartao_visita.png"; // Nome do arquivo
        link.click(); // Simula o clique para baixar a imagem
      })
      .catch((error) => {
        console.error("Erro ao gerar a imagem:", error);
      });
  };
  const redirectToExternal = () => {
    window.open("https://app.rdstation.com.br/signup", "_blank"); // Abre o link em outra aba 
     };
  return (
    <div className="card-container">
      <button
        className="rd-station-link"
        onClick={props.clickCard}
        style={{
          background: "none",
          fontWeight: "100",
          fontSize: "20px",
          textAlign: "left",
          width: "80%",
          padding: "0px 0px 20px 0px",
        }}
      >
        &lt; Gerar outro cartão
      </button>
      <div
        ref={cardRef}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "80%",
          height: "20vh",
          position: "relative",
        }}
      >
        <div className="logo">
          {/* Substitua pela sua logo */}
          <img
            src={Logo}
            alt="Logo"
            width="68"
            height="68"
            style={{ marginLeft: "50px" }}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="card-info">
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <button className="download-btn" onClick={exportAsImage}>
        ⬇ BAIXAR CARTÃO
      </button>
      <button
        className="rd-station-link"
        onClick={redirectToExternal}
        style={{ background: "none", fontWeight: "800", fontSize: "16px" }}
      >
        FAZER UM TESTE GRÁTIS DO RD STATION MARKETING →
      </button>
    </div>
  );
};

export default Cartao;
