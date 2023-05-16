document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const userName = document.querySelector('.profile-username');
    const repo = document.querySelector('.repo');
    const seguidores = document.querySelector('.seguidores');
    const seguindo = document.querySelector('.seguindo');
    const link = document.querySelector('.profile-link');

    const api =  "https://api.github.com/users/EmilyMartinsDev";

    fetch(api)
    .then(res=>{
        return res.json();
    })
    .then(json=>{
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = json.login;
        repo.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following
        link.href = json.html_url
    })
    .catch(error=>{
        console.log(error);
    })
})