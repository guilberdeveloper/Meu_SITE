// Inicialize o EmailJS com seu User ID
emailjs.init('service_ijie1oh');

// Função para validar o formulário
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("msg").value;
    var captcha = document.querySelector(".g-recaptcha-response").value;

    // Verifica se os campos estão vazios
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verifica se o e-mail é válido
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Verifica se o reCAPTCHA foi marcado
    if (captcha === "") {
        alert("Por favor, confirme que você não é um robô.");
        return false;
    }

    // Monta os parâmetros do e-mail
    var params = {
        from_name: nome,
        reply_to: email,
        telefone: telefone,
        message: mensagem
    };

    // Envia o e-mail usando EmailJS
    emailjs.send('service_ijie1oh', 'template_fpqtev7', params)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            alert("Obrigado por entrar em contato! Seu e-mail foi enviado com sucesso.");
            // Limpa os campos do formulário após o envio
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("msg").value = "";
        }, function(error) {
            console.error('Erro ao enviar e-mail:', error);
            alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
        });

    // Retorna falso para evitar o envio do formulário tradicional
    return false;
}

// Adiciona o evento de clique ao botão "Enviar"
document.querySelector(".btn_enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado diretamente
    validarFormulario(); // Chama a função para validar o formulário
});
