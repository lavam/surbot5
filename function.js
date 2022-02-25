function alertFn() {
alert ('Alert !');
}

function promptFn() {
prompt ("Prompt box", "Welcome");
}

function getDateTime() {
var today = new Date();
var date =  today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();
var time= today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    dateTime = date +", "+ time;
}
