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
});
