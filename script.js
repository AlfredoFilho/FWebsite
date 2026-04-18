document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsForm');

    // Validação simples de formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) valid = false;
        });

        if (valid) {
            alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});