// function to get the uri
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}


// x9 found, then do this
if (getQueryVariable('x9')) {
    console.log("x9 parameter found");
    var x9_string = getQueryVariable('x9');

    // make some url using the x9 string
    var urls = [],
        query_string = window.location.pathname;

    // this is where the x9 string is used to make a new new    
    var url1 = 'http://track.clixlife.co/' + x9_string + '?bo=d&' + query_string;
    var url2 = 'http://track.clixlife.co/' + x9_string + '?bo=b1&' + query_string;
    var url3 = 'http://track.clixlife.co/' + x9_string + '?bo=b2&' + query_string;

}

// redirect on back button click function
function redirectOnBack(urlToRedirect) {
    history.pushState(null, document.title, location.pathname);

    window.onpopstate = function() {
        console.log("Pop state fired");
        window.location = urlToRedirect;
    };
}


// url1 back button click
if (window.location.href == url1) {
    redirectOnBack(url2);
}

// url2 back button click
if (window.location.href == url2) {
    redirectOnBack(url3);
}


// url3 back button click
if (window.location.href == url3) {
    redirectOnBack(url2);
}


// again if they click back button on url2
if (window.location.href == url2) {
    redirectOnBack(url3);
}
