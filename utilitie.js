document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const botToken = '7499023185:AAEyvK2jO-5v6xTzQWcgwRVFLjpvVAluh5U'
    const chatId = '1651916414';
    const text = `Tienes un Nuevo mensaje:\n\nNombe: ${this.name.value}
    \nCorreo Electrónico: ${this.email.value}
    \n\nMensaje: ${this.message.value}`;
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text })
    });
    if (response.ok) window.location.href = "http://www.google.com";


});
