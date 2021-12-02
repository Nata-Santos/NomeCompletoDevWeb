const processar = async (event) => {
    event.preventDefault();

    //ENTRADA
    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome');

    const nome = campoNome.value;
    const sobrenome = campoSobrenome.value;

    //PROCESSAMENTO
    const dadosAEnviar = { nome, sobrenome };

    const response = await fetch('/Nome', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAEnviar)
    });

    const result = await response.json();
    

    const { nomeCompleto, nomeCatalogo } = result;

    // SAÍDA
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
        <div>Nome completo = ${nomeCompleto}</div>
        <div>Nome catálogo = ${nomeCatalogo}</div>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoProcessar = document.querySelector('#processar');
    botaoProcessar.addEventListener('click', processar);
});