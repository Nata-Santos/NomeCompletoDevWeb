const processar = async (event) => {
    event.preventDefault();

    // (ENTRADA)
    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome');

    const nomeDigitado = campoNome.value;
    const sobrenomeDigitado = campoSobrenome.value;

    // (PROCESSAMENTO)
    // const nomeCompleto = `${nomeDigitado} ${sobrenomeDigitado}`;
    // const nomeCatalogo = `${sobrenomeDigitado.toUpperCase()}, ${nomeDigitado}`;

    const dadosAEnviar = {
        nome: nomeDigitado,
        sobrenome: sobrenomeDigitado
    };

    const request = await fetch('/nome', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({dadosAEnviar})
    });

    const result = await response.json();
    console.log(result);

    

    const{nomeCompleto, nomeCatalogo} = result;


    // (SAÍDA)
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