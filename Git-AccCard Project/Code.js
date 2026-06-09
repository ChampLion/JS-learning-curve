const xhr = new XMLHttpRequest;
const acc = document.querySelector('#userInput');
const submit = document.querySelector('#searchBtn');

const follow = document.querySelector('#followers')
const follower = document.querySelector('#following')
const repo = document.querySelector('#repos')
const pfp = document.querySelector('#avatar')

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
            const followers = dataObj.followers
            const following = dataObj.following
            const repos = dataObj.public_repos

            follow.innerHTML = `${followers}`
            follower.innerHTML = `${following}`
            repo.innerHTML = `${repos}`
            pfp.setAttribute('src',dataObj.avatar_url)
        }
    }
    xhr.send()
})