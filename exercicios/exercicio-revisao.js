const pedidoDani = {
  cliente: {
    nome: 'Dani Rocha',
    email: 'dani@email.com',
    cpf: '555.666.777-88',
    cidade: 'Recife',
  },
  carrinho: [
    { nome: 'Fone', preco: 90 },
    { nome: 'Webcam', preco: 200 },
  ],
  pagamento: 'cartao',
}

const cabo = { nome: 'Cabo USB', preco: 30 }

// Passo 1
const { cliente, carrinho, pagamento, desconto = 0 } = pedidoDani
console.log(pagamento, desconto)

// Passo 2
const { nome, cidade } = cliente
console.log(nome, cidade)

// Passo 3
const carrinhoNovo = [...carrinho, cabo]
console.log(carrinho.length, carrinhoNovo.length)

// Passo 4
const webcamPromocao = { ...carrinho[1], preco: 150 }
console.log(carrinho[1].preco, webcamPromocao.preco)

// Passo 5
const { cpf, ...clienteSeguro } = cliente
console.log(clienteSeguro)

// Passo 6
const [primeiro, ...demais] = carrinhoNovo
console.log(primeiro.nome, demais.length)

// Passo 7
const gerarRecibo = (nomeCliente, ...itens) => {
  const [item1, item2, item3] = itens
  const total = item1.preco + item2.preco + item3.preco

  console.log('Cliente:', nomeCliente)
  console.log('Quantidade de itens:', itens.length)
  console.log('Total:', total)
}

gerarRecibo(nome, ...carrinhoNovo)

// Passo 8
console.log(carrinho.length, clienteSeguro.cpf)

// Desafio extra (descomente para testar)
// gerarRecibo(nome, ...carrinho)
//
// Erro esperado: TypeError: Cannot read properties of undefined (reading 'preco')
// Aponta para a linha do total (item1.preco + item2.preco + item3.preco).
// Com só 2 itens, o item3 fica undefined, e undefined.preco quebra. O rest aceita
// qualquer quantidade, mas o destructuring de 3 itens e a soma fixa assumem
// exatamente 3.
// Minha ideia: percorrer a lista inteira somando os preços, em vez de pegar
// item por item (um laço, ou algo como o reduce).
