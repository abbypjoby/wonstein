setInterval(function(){
    clickGenerateSchedule();
    getSchedules();
},random(4000,10000));

function random(min,max) {
    return min + (max - min) * Math.random()
}

function clickGenerateSchedule() {
    var btn = document.querySelector(".css-1cfu9qr-hoverStyles-hoverStyles-defaultStyle-buttonCss");
    btn.click();
}

function getSchedules() {
    var alert = document.querySelector(".css-td21f1-alertCss-warningCss-warningsCss");
    if (null === alert){
        sendNotification();
    }
}

function sendNotification() {
    console.log("Sending notification");
    try {
        chrome.runtime.sendMessage('abmocgladbgigehikdkaefgffganbfoh', {
            type: 'notification',
            options: {
            title: 'Just wanted to notify you',
            message: 'Schedule is available',
            iconUrl: '../icon.png',
            type: 'basic'
            }
        });
    } catch(error) {
        console.log(error);
    }
}
