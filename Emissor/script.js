document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const invoiceTableBody = document.getElementById('invoiceTableBody');
    const totalValueSpan = document.getElementById('totalValue');
    const dataAtualSpan = document.getElementById('dataAtual');

    let total = 0;

    // NOVO: Variável de controle para gerar códigos sequenciais
    let codigoCounter = 1;

    const today = new Date();
    dataAtualSpan.textContent = today.toLocaleDateString('pt-BR');

    function formatCurrency(value) {
        return value.toFixed(2).replace('.', ',');
    }

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // NOVO: Gera o código do item usando o contador
        const codigo = codigoCounter++; // Usa o valor atual e depois o incrementa

        const descricao = document.getElementById('descricao').value;
        const quantidade = parseFloat(document.getElementById('quantidade').value);
        const valor = parseFloat(document.getElementById('valor').value);

        const subtotal = quantidade * valor;
        total += subtotal;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${codigo}</td>
            <td>${descricao}</td>
            <td>${quantidade}</td>
            <td>${formatCurrency(valor)}</td>
            <td>${formatCurrency(subtotal)}</td>
        `;

        invoiceTableBody.appendChild(newRow);
        totalValueSpan.textContent = formatCurrency(total);
        itemForm.reset();
    });
});