function calcularDiasVividos() {
    // Obtém a idade do campo de entrada
    const idade = document.getElementById("idade").value;

    // Verifica se a idade é válida
    if (!idade || idade <= 0) {
        document.getElementById("resultado").textContent = 
            "Por favor, insira uma idade válida.";
        return;
    }

    // Calcula o número de dias vividos (aproximadamente)
    const diasVividos = idade * 365;

    // Exibe o resultado
    document.getElementById("resultado").textContent = 
        `Você já viveu aproximadamente ${diasVividos} dias.`;
}