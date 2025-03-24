/* Estilo do corpo da página */
body {
    display: flex;
    flex-direction: column; /* Organiza os elementos verticalmente */
    justify-content: center; /* Centraliza no eixo vertical */
    align-items: center; /* Centraliza no eixo horizontal */
    min-height: 100vh; /* Garante que o body ocupe sempre toda a altura visível */
    margin: 0; /* Remove margens padrão */
    text-align: center; /* Centraliza os textos */
    font-family: Arial, sans-serif; /* Adiciona uma fonte padrão para melhor visualização */
    background-color: #f9f9f9; /* Adiciona um fundo claro */
    color: #333; /* Define cor padrão do texto */
}

/* Estilo para a div que contém a imagem */
.imagem-container {
    display: flex; /* Garante centralização adicional */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    text-align: center; /* Centraliza internamente os textos */
    max-width: 800px; /* Define uma largura máxima para a div */
    width: 100%; /* Ocupa a largura total disponível */
    padding: 16px; /* Adiciona um espaçamento interno */
    box-sizing: border-box; /* Inclui padding na largura */
}

/* Estilo para as imagens */
img {
    max-width: 100%; /* Garante que a imagem se adapte à largura do contêiner */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 8px; /* Adiciona cantos arredondados para um design mais moderno */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
}
