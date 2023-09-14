console.log('main.js');

const socket = io();

function get_user_data(mode) {
    var data = undefined
    const cookieValue = document.cookie.split('; ').find(cookie => cookie.startsWith('sessionData='));
    if (cookieValue) {
        const jsonString = decodeURIComponent(cookieValue.split('=')[1]);
        const sessionData = JSON.parse(jsonString);
        if (mode == 'text') {
            data = jsonString
        } else {
            data = sessionData
        }
    }
    console.log(data)
    return data
}

function sendRegister() {
    data = get_user_data();
    sala = 'sala1';
    date = new Date().getTime()

    
    saveCookie('callID',data.email+date)

    let reg_msg = {
        Max: 1,
        To: '<' + sala + '@rpg-3fg3.onrender.com>',
        From: '<' + data.email+'>',
        CallID: data.email+date, //FIXME alterar para algo melhor dois!!!
        Expires: '3600'
    }

    socket.emit('register', reg_msg);
};

function saveCookie(key,data){
    document.cookie = `${key}=${data}; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/`;
}

function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
    console.log(data.email)
    fullName.textContent = data.name
    picture.setAttribute("src", data.picture)
    const data_json = JSON.stringify(data);
    saveCookie('sessionData',encodeURIComponent(data_json))

    window.location.href = 'home.html';
}

function loadGoogleOauth() {
    google.accounts.id.initialize({
        client_id: "537386322782-tagg8qjf15m40j6k7snrj69g9nim92v6.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            size: "large",
            type: "standard",
            locale: "pt-br",
            shape: "pill",
            theme: "filled_black",
            text: "continue_with",
            logo_alignment: "left"
        }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}

socket.on('redirect', (url) => {
    window.location.href = url;
});