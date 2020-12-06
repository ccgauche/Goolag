(function() {
    function test() {
        function checkUntil() {
            let o = document.querySelector("#text > a");
            if (o === undefined || o === null || o.innerText.length === 0) {
                setTimeout(() => {
                    checkUntil();
                }, 200);
                return;
            }
            if (o.innerText !== "Empire constitutionnel très démocratique populaire et républicain monarchiste d'Imhotep") {
                document.head.innerHTML = "<title>Goolag VPN error";
                document.body.innerHTML = `<div style="position: absolute;display: block; z-index: 1000000; background: black; top: 0; bottom: 0; right: 0; left: 0;"><h1 style="color: #FFF;line-height: 80vh;text-align: center;font-size: 36px;">Cette chaine n'est pas démocratique</h1></div>`
            }
        }
        if (window.location.href.includes("/channel/") && !window.location.href.includes("/UC-9hLSaVRQZ8Naa4Ynrf9Pw")) {
            document.head.innerHTML = "<title>Goolag VPN error</title>";
            document.body.innerHTML = `<div style="position: absolute;display: block; z-index: 1000000; background: black; top: 0; bottom: 0; right: 0; left: 0;"><h1 style="color: #FFF;line-height: 80vh;text-align: center;font-size: 36px;">Cette chaine n'est pas démocratique</h1></div>`
        } else if (window.location.href.includes("/watch?") ) {
            checkUntil();
        }
        setTimeout(() => {
            test();
        }, 2000);
    }
    test();
})();

