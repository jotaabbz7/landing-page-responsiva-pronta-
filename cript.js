// Função para validar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de email simples
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Se tudo estiver correto, exibe uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
    this.reset(); // Limpa o formulário
});

// Função para validar o formato do email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Exemplo de interatividade: Adicionar um efeito de hover nos produtos
document.querySelectorAll('.produto').forEach(produto => {
    produto.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    produto.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});