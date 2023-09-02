// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNascimentoDate = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (hoje.getMonth() < dataNascimentoDate.getMonth() || 
        (hoje.getMonth() === dataNascimentoDate.getMonth() && hoje.getDate() < dataNascimentoDate.getDate())) {
        idade--;
    }

    return idade;
}

// Função para criar um novo aluno
function criarAluno() {
    // Coleta os dados do aluno do formulário
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;

    // Cria um objeto chamado "aluno" com as propriedades nome, dataNascimento, idade e email,
    // onde as propriedades são definidas com os valores coletados dos campos de entrada acima.
    const aluno = {
        nome,
        dataNascimento,
        idade,
        email,
    };

    // Exibe o objeto aluno no console do navegador usando console.log
    console.log("Novo aluno:", aluno);
    // Exibe um alerta ao usuário informando que o novo aluno foi criado e pede para verificar o console para mais detalhes.
    alert("Novo aluno criado! Verifique o console do navegador para mais detalhes.");
}