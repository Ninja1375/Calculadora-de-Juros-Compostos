function calcularJuros() {
    // Obtendo os valores do formulário
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);

    // Verificando se algum campo está vazio ou inválido
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate < 0 || time <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Fórmula de juros compostos: M = P * (1 + i)^t
    const montante = principal * Math.pow((1 + rate), time);
    const juros = montante - principal;

    // Exibindo os resultados
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block'; // Exibe a div de resultados
    resultDiv.innerHTML = `
        <p><strong>Montante Final:</strong> R$ ${montante.toFixed(2)}</p>
        <p><strong>Juros Totais:</strong> R$ ${juros.toFixed(2)}</p>
    `;
}
