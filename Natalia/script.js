body {
    display: flex;
    flex-direction: column; /* Organiza os elementos verticalmente */
    justify-content: center; /* Centraliza no eixo vertical */
    align-items: center; /* Centraliza no eixo horizontal */
    height: 100vh; /* Faz o body ocupar 100% da altura da tela */
    margin: 0; /* Remove a margem padrão */
    text-align: center; /* Centraliza os textos */
}

/* Estilo para a div que contém a imagem */
.imagem-container {
    display: flex; /* Garante centralização adicional */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente, se necessário */
    text-align: center; /* Centraliza os textos internamente */
    width: 50%; /* Garante que ocupe toda a largura */
}

/* Estilo para as imagens */
img {
    max-width: 50%; /* A imagem nunca ultrapassará 90% da largura da tela */
    height: auto; /* Mantém a proporção da imagem */
}
