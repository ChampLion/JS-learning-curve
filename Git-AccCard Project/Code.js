const xhr = new XMLHttpRequest;
const acc = document.querySelector('#userInput');
const submit = document.querySelector('#searchBtn');

const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repo = document.querySelector('#repos')
const pfp = document.querySelector('#avatar')
const name = document.querySelector('#name')

submit.addEventListener('click',(e)=>{
    const url = `https://api.github.com/users/${acc.value}`;
    console.log(url);
    xhr.open('GET', url)
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = this.responseText;
            console.log(data)
            const dataObj = JSON.parse(data);

            followers.innerHTML = `${dataObj.followers}`
            following.innerHTML = `${dataObj.following}`
            repo.innerHTML = `${dataObj.public_repos}`
            pfp.setAttribute('src',dataObj.avatar_url)
            name.innerHTML = `${acc.value}`
        }
    }
    xhr.send()
})