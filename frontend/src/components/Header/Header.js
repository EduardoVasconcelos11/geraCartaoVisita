// Header.js
import React from 'react';
import sampleImage from '../../assets/logo.svg'; // Caminho para a imagem


const Header = () => {
  return (
    <header style={styles.header}>
      <img src={sampleImage} alt="Resultados Digitais" style={styles.logo} />
      <h1 style={styles.title}>Gerador de Cartão de Visita</h1>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ddd',
    fontWeight:'700',
    fontSize:'24px'
  },
  logo: {
    height: '50px'
  },
  title: {
    fontSize: '18px',
    color: '#000'
  }
};

export default Header;
