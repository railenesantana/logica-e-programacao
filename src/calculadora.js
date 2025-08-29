function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSomadeDoisValores = somarDoisNumeros (valor1, valor2);

    // 2. Divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoSomadeDoisValores / 2;

    // 3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}