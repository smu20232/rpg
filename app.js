const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => res.type('html').send(html))

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from aoaoaoa!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>

    <script src="https://accounts.google.com/gsi/client" async></script>
    
    <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>

    <script>
    function handleCredentialResponse(response) {
      const data = jwt_decode(response.credential)
      console.log(data)
      console.log(data.email)
      fullName.textContent = data.name
      picture.setAttribute("src",data.picture)
    }
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "537386322782-tagg8qjf15m40j6k7snrj69g9nim92v6.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { size: "large",
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
</script>

    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from joao s2 vini matheussad happy happy happy!
      <div id="buttonDiv"></div> 
      
      <p id="fullName"> </p>
      <img id="picture" />

    </section>
  </body>
</html>
`
