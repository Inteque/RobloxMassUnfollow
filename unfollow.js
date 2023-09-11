// Replace USERID below with the userId of **your** account
var userId = USERID;

// Replace PLACEHOLDER below with your x-csrf-token
var token = "PLACEHOLDER"

function httpGet(passedUrl){
    xhr = new XMLHttpRequest();
    xhr.open("GET", passedUrl, false);
    xhr.send();
    return xhr.responseText;
}

var url = "https://friends.roblox.com/v1/users/" + userId + "/followings?limit=100";
var followings = JSON.parse(httpGet(url)).data;

for (var i=0; i<followings.length; i++){
    var id = followings[i].id;

    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://friends.roblox.com/v1/users/" + id + "/unfollow", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-csrf-token", token)
    xhr.send("targetUserId="+id);
}