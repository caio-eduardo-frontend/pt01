
# Exercício sobre eventos em Javascript

**1)** Criar uma branch com o nome do seu usuário do github. *Ex.: no meu caso seria*:  

```git
git checkout -b tondinizr
```

**2)** No main.js crie um *listener* pro evento de *‘input’* para o elemento *“dataNascimento”*, esse evento deve pegar o value desse elemento e alterar o value do elemento  *“idade”* sendo essa **idade = calcularIdade(dataNascimento)**;

**3)** Ainda no main.js crie um listerner para o *‘click’* do *“input[type='submit']”* nesse evento ele deve prevenir o comportamento *default* do *submit* (recarregar a tela) e chamar a funcão **criarAluno()**;

**4)** Verifique se os comportamentos a seguir acontecem:

- Ao digitar a data de nascimento a idade será calculada automaticamente;
- Ao clicar no botão ‘Cadastrar’ um alerta será emitido e os dados do novo aluno deve ser impresso no console.

**5)** Adicione as alteracões a um commit e de um push para a o github
