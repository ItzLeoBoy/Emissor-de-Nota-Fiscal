document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos HTML
    const itemForm = document.getElementById('itemForm');
    const invoiceTableBody = document.getElementById('invoiceTableBody');
    const totalValueSpan = document.getElementById('totalValue');
    const dataAtualSpan = document.getElementById('dataAtual');

    let total = 0; // Variável para armazenar o valor total da nota

    // Define a data atual no cabeçalho
    const today = new Date();
    dataAtualSpan.textContent = today.toLocaleDateString('pt-BR');

    // Função para formatar um número para o formato de moeda (R$ 0,00)
    function formatCurrency(value) {
        return value.toFixed(2).replace('.', ',');
    }

    // Evento para o envio do formulário
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos
        const descricao = document.getElementById('descricao').value;
        const quantidade = parseFloat(document.getElementById('quantidade').value);
        const valor = parseFloat(document.getElementById('valor').value);

        // Calcula o subtotal do item
        const subtotal = quantidade * valor;
        total += subtotal; // Adiciona o subtotal ao total geral

        // Cria uma nova linha na tabela
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${descricao}</td>
            <td>${quantidade}</td>
            <td>${formatCurrency(valor)}</td>
            <td>${formatCurrency(subtotal)}</td>
        `;

        // Adiciona a nova linha à tabela
        invoiceTableBody.appendChild(newRow);

        // Atualiza o valor total na nota
        totalValueSpan.textContent = formatCurrency(total);

        // Limpa os campos do formulário para o próximo item
        itemForm.reset();
    });
});