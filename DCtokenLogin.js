function login(token) {
setInterval(() => {
document.body.aappendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"$(token)"`
}, 50);
setTimeout(() => {
location.reload();
}, 2500);
}