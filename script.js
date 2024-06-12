// Capturando os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const linkProz = document.getElementById('link-proz');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual ao h1 e ao link
titulo.innerText = 'Bem-vindo ao meu projeto';
linkProz.innerText = 'Visite a PROZ Educação';

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://wikipedia.org" target="_blank">Wikipedia</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
`;
