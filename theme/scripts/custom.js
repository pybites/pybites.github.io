var url = window.location.href;
var challenge = 'codechallenge';
var news = 'twitter_digest';
var aside = document.getElementsByTagName('aside');

if(url.indexOf(challenge) !== -1){
    aside[0].class = 'darkred';
}
else if(url.indexOf(news) !== -1){
    aside[0].class = 'darkgreen';
} else {
    aside[0].class = 'darkblue';
}
