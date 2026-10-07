const pedido = {
  cliente: {
    nome: 'Ana Souza',
    email: 'ana@email.com',
    cpf: '123.456.789-00',
    cidade: 'Salvador',
  },
  carrinho: [
    { nome: 'Teclado', preco: 350 },
    { nome: 'Mouse', preco: 120 },
  ],
  pagamento: 'cartao',
}

const monitor = { nome: 'Monitor', preco: 1600 }

// Passo 1
const { cliente, carrinho, pagamento } = pedido
console.log(pagamento)

// Passo 2
const { cupom = 'SEM CUPOM' } = pedido
console.log(cupom)

// Passo 3
const { nome, cidade } = cliente
console.log(nome, cidade)

// Passo 4
// Preservar o carrinho original evita que a loja perca o registro do que a Ana
// escolheu de fato: se a lista original fosse alterada, não daria pra comparar
// ou desfazer a mudança.
const carrinhoFinal = [...carrinho, monitor]
console.log(carrinho.length, carrinhoFinal.length)

// Passo 5
const mousePromocao = { ...carrinho[1], preco: 100 }
console.log(carrinho[1].preco, mousePromocao.preco)

// Passo 6
// Tirar o CPF protege a cliente: se o dado aparecer na tela ou vazar, alguém
// pode usar o CPF dela para fraudes.
const { cpf, ...clienteSeguro } = cliente
console.log(clienteSeguro)

// Passo 7
const [item1, item2, item3] = carrinhoFinal
const total = item1.preco + item2.preco + item3.preco
console.log('Total:', total)

// Desafio extra
const resumoDoPedido = (nomeCliente, ...itens) => {
  console.log('Cliente:', nomeCliente)
  console.log('Quantidade de itens:', itens.length)
  console.log('Primeiro item:', itens[0].nome)
  console.log('Último item:', itens[itens.length - 1].nome)
}

resumoDoPedido(nome, ...carrinhoFinal)
