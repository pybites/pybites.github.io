// if about page, calc pybites age and fill in div
if(window.location.pathname.endsWith('about.html') === true){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var founded = new Date(2016,11,19); // 11 for dec ?!
    var today = new Date();
    var diffDays = Math.round(Math.abs((founded.getTime() - today.getTime())/(oneDay)));
    var div = document.getElementById('pbDaysOld'); 
    div.innerHTML = '<strong>' + diffDays + '</strong>';
	console.log('PyBites is ' + diffDays + ' old');
}

/* https://www.w3schools.com/howto/howto_js_filter_lists.asp */
function filterList() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("articleList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
