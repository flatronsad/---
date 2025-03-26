document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', async function() {
            const choice = button.id;
            // Отправка данных обратно в Telegram
            const response = await fetch('https://api.telegram.org/bot7078115913:AAHB5V4NMdzXZJ8kdy1PtIIrhPdte4Y9G-Q/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: 'Ваш_чат_ID',
                    text: `Вы выбрали: ${choice}`
                })
            });
            const result = await response.json();
            console.log(result);
            // Обработка результата игры
            const botChoice = Math.floor(Math.random() * 3);
            let botChoiceText;
            if (botChoice === 0) {
                botChoiceText = 'Камень';
            } else if (botChoice === 1) {
                botChoiceText = 'Ножницы';
            } else {
                botChoiceText = 'Бумага';
            }
            let resultText;
            if (choice === 'rock' && botChoiceText === 'Ножницы') {
                resultText = 'Вы выиграли!';
            } else if (choice === 'scissors' && botChoiceText === 'Бумага') {
                resultText = 'Вы выиграли!';
            } else if (choice === 'paper' && botChoiceText === 'Камень') {
                resultText = 'Вы выиграли!';
            } else if (choice === botChoiceText) {
                resultText = 'Ничья!';
            } else {
                resultText = 'Вы проиграли!';
            }
            document.getElementById('result').innerText = `Бот выбрал: ${botChoiceText}\n${resultText}`;
        });
    });
});
