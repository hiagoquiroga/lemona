// URLs de compra por quantidade
const purchaseUrls = {
    1: 'https://pay.kiwify.com.br/J5DqC5N',
    2: 'https://pay.kiwify.com.br/J5DqC5N',
    3: 'https://pay.kiwify.com.br/8HTzXcu'
};

// Preços por quantidade
const prices = {
    1: 'R$ 177,00',
    2: 'R$ 277,00',
    3: 'R$ 377,00'
};

// Quantidade selecionada (padrão: 1)
let selectedQuantity = 1;

// Função para gerar número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para randomizar contador de pessoas vendo
function randomizeViewingCounter() {
    const viewingCounter = document.getElementById('viewingCounter');
    if (viewingCounter) {
        const randomViewing = getRandomNumber(25, 65);
        viewingCounter.textContent = `${randomViewing} pessoas vendo agora`;
    }
}

// Função para randomizar estoque restante
function randomizeStockCounter() {
    const stockCounter = document.getElementById('stockCounter');
    if (stockCounter) {
        const randomStock = getRandomNumber(85, 150);
        stockCounter.textContent = `Unidades restantes: ${randomStock}`;
    }
}

// Atualizar preço principal
function updateMainPrice() {
    const mainPrice = document.getElementById('mainPrice');
    if (mainPrice) {
        mainPrice.textContent = prices[selectedQuantity];
    }
}

// Selecionar quantidade
function selectQuantity(quantity) {
    selectedQuantity = quantity;

    // Remover seleção de todos os options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });

    // Adicionar seleção ao option clicado
    const selectedOption = document.querySelector(`.option[data-quantity="${quantity}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    // Atualizar preço principal
    updateMainPrice();
}

// Trocar imagem principal
function changeMainImage(thumbnail, index) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage) {
        mainImage.src = thumbnail.src;
    }

    // Remover classe active de todas as thumbnails
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });

    // Adicionar classe active à thumbnail clicada
    thumbnail.classList.add('active');
}

// Gerenciar clique no botão de compra e outras inicializações
document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.getElementById('buyButton');

    // Randomizar valores ao carregar a página
    randomizeViewingCounter();
    randomizeStockCounter();

    // Atualizar contadores periodicamente
    setInterval(randomizeViewingCounter, 8000); // Atualiza a cada 8 segundos
    setInterval(randomizeStockCounter, 12000); // Atualiza a cada 12 segundos

    // Selecionar quantidade 1 por padrão
    selectQuantity(1);

    if (buyButton) {
        buyButton.addEventListener('click', function () {
            const url = purchaseUrls[selectedQuantity];
            if (url) {
                window.location.href = url;
            }
        });
    }

    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other items (optional - accordion style)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current
                item.classList.toggle('active');
            });
        }
    });

    // Testimonials Data
    const testimonials = [
        {
            name: "Mariana Lopes",
            title: "Surpreendente!",
            rating: 5,
            text: "Usei pela primeira vez antes de um jantar e fiquei chocada com o efeito imediato. As linhas ao redor dos olhos suavizaram muito, minha pele ficou lisinha. Já virou item fixo na minha rotina.",
            reply: "Mariana, que alegria ler isso! 💖 Ficamos muito felizes em saber que você sentiu o efeito logo na primeira aplicação. Obrigado por confiar na Le Mona!"
        },
        {
            name: "Cláudia Menezes",
            title: "Resultado visível!",
            rating: 5,
            text: "Nunca achei que um creme pudesse dar um efeito tão rápido. Minhas amigas perguntaram o que eu tinha feito no rosto. Simplesmente amei!",
            reply: "Cláudia, esse tipo de comentário é tudo pra gente! ✨ Obrigado por compartilhar sua experiência."
        },
        {
            name: "Renata Pacheco",
            title: "Funciona de verdade",
            rating: 5,
            text: "Já testei vários produtos caros e nenhum chegou perto desse resultado. As linhas da testa diminuíram bastante logo na aplicação.",
            reply: "Renata, obrigado pelo carinho! 💕"
        },
        {
            name: "Patrícia Azevedo",
            title: "Incrível como disfarça!",
            rating: 5,
            text: "Usei antes de sair e a diferença foi nítida. As ruguinhas ao redor da boca ficaram bem mais suaves. Me senti muito mais confiante.",
            reply: "Patrícia, ficamos felizes demais em saber disso! ✨ Obrigado por dividir sua experiência com a gente."
        },
        {
            name: "Juliana Furtado",
            title: "Efeito imediato",
            rating: 5,
            text: "Confesso que comprei desconfiada, mas me surpreendi. A pele fica mais firme na hora, principalmente na região dos olhos.",
            reply: "Juliana, entendemos a desconfiança e amamos quando o resultado fala por si! 💖 Obrigado por confiar."
        },
        {
            name: "Simone Carvalho",
            title: "Vale cada centavo",
            rating: 5,
            text: "Já tinha até desistido de cremes. Esse realmente entrega o que promete. Uso sempre antes da maquiagem.",
            reply: "Simone, seu comentário significa muito pra nós! 💫 Obrigado por fazer parte da rotina Le Mona."
        },
        {
            name: "Débora Martins",
            title: "Pele mais jovem na hora",
            rating: 5,
            text: "O efeito é visível e imediato. Não some completamente, mas melhora MUITO. Dá um ar de pele descansada.",
            reply: "Débora, descrição perfeita! ✨ Obrigado pela sinceridade e pelo feedback real."
        },
        {
            name: "Luciana Prado",
            title: "Não fico mais sem",
            rating: 5,
            text: "Uso há algumas semanas e sempre me surpreendo. As linhas finas ficam bem menos aparentes.",
            reply: "Luciana, é isso que buscamos todos os dias! 💕 Obrigado por fazer parte da família Le Mona."
        },
        {
            name: "Fernanda Rios",
            title: "Gostei muito do efeito",
            rating: 5,
            text: "Tenho linhas na testa e esse foi o único produto que realmente disfarçou sem deixar a pele estranha.",
            reply: "Fernanda, que bom ler isso! ✨ Obrigado pelo feedback."
        },
        {
            name: "Carla Nogueira",
            title: "Superou minhas expectativas",
            rating: 5,
            text: "Achei que seria só mais um creme, mas me enganei. O efeito é real e aparece rápido.",
            reply: "Carla, amamos surpreender positivamente! 💖 Obrigado pelo depoimento."
        },
        {
            name: "Vanessa Ribeiro",
            title: "Perfeito para ocasiões especiais",
            rating: 5,
            text: "Uso sempre quando vou sair ou tenho algum evento. A pele fica com aparência mais lisa e firme.",
            reply: "Vanessa, perfeito pra esses momentos mesmo! ✨ Obrigado pelo carinho."
        },
        {
            name: "Aline Costa",
            title: "Finalmente algo que funciona",
            rating: 5,
            text: "Depois de gastar tanto dinheiro com produtos que não davam resultado, esse realmente me ganhou.",
            reply: "Aline, ficamos muito felizes em saber disso! 💕 Obrigado por confiar na Le Mona."
        },
        {
            name: "Cristina Barros",
            title: "Muito satisfeita",
            rating: 5,
            text: "O efeito é imediato e visível, principalmente nos olhos. Já recomendei para minhas irmãs.",
            reply: "Cristina, recomendação é o maior elogio que podemos receber! 💖 Muito obrigado."
        },
        {
            name: "Mônica Teixeira",
            title: "Funciona mesmo",
            rating: 5,
            text: "Não faz milagre, mas melhora demais a aparência da pele. Dá outra autoestima.",
            reply: "Mônica, comentário honesto e real exatamente como gostamos! ✨ Obrigado por compartilhar."
        }
    ];

    const itemsPerPage = 6;
    let currentPage = 1;

    function renderTestimonials(page) {
        const grid = document.getElementById('testimonialsGrid');
        if (!grid) return;

        grid.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = testimonials.slice(start, end);

        paginatedItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-stars">★★★★★</div>
                <div class="testimonial-author">
                    <span class="author-name">${item.name}</span>
                    <span class="review-title">${item.title}</span>
                </div>
                <p class="review-content">${item.text}</p>
                <div class="dev-reply">
                    <span class="reply-header">Resposta – Le Mona:</span>
                    <span class="reply-content">${item.reply}</span>
                </div>
            `;
            grid.appendChild(card);
        });

        renderPagination();
    }

    function renderPagination() {
        const paginationContainer = document.getElementById('testimonialsPagination');
        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(testimonials.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.onclick = () => {
                currentPage = i;
                renderTestimonials(currentPage);
                // Optional: scroll to top of testimonials section
                document.querySelector('.testimonials-section').scrollIntoView({ behavior: 'smooth' });
            };
            paginationContainer.appendChild(btn);
        }
    }

    // Initialize testimonials
    renderTestimonials(currentPage);
});
