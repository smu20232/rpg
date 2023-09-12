console.log('main.js'); 

function meuRegister() {
    alert('Button clicked!');
    const cookieValue = document.cookie.split('; ').find(cookie => cookie.startsWith('sessionData='));
    let msg = {
        Max: 1,
        To: 'server.com',
        From: 'cliente',
        CallID: 'data.id',
        Expiress: '2600'
    }

}