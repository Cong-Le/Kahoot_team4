var socket = io();

socket.on('connect', function() {
    socket.emit('requestDbNames'); //Get database names to display to user
});

socket.on('gameNamesData', function(data) {
    for (var i = 0; i < Object.keys(data).length; i++) {
        // var div = document.getElementById('game-list');
        // var button = document.createElement('button');

        // button.innerHTML = data[i].name;
        // button.setAttribute('onClick', "startGame('" + data[i].id + "')");
        // button.setAttribute('id', 'gameButton');

        // div.appendChild(button);
        // div.appendChild(document.createElement('br'));`

        var div = document.getElementById('kahoot_list');

        var k = document.createElement('div');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var div5 = document.createElement('div');
        var div6 = document.createElement('div');
        var div7 = document.createElement('div');



        k.setAttribute('class', 'kahoot-card__content-wrap');

        div2.setAttribute('id', 'kahoot-card__details');
        div3.setAttribute('id', 'kahoot-card__title');
        div3.innerHTML = data[i].name;
        div4.setAttribute('class', 'kahoot-card__action-buttons');
        div5.setAttribute('id', 'play_btn');
        div6.setAttribute('id', 'repair_btn');
        div7.setAttribute('id', 'delete');






        var img = document.createElement('img');
        img.setAttribute('id', 'kahoot-card__image');
        img.setAttribute('src', '../../images/kahoot_card_img.png');




        var buttonplay = document.createElement('button');
        var buttonedit = document.createElement('button');
        var buttonDelete = document.createElement('button');

        buttonplay.setAttribute('id', 'play');
        buttonedit.setAttribute('id', 'repair');
        buttonDelete.setAttribute('id', 'delete');

        buttonplay.innerHTML = "Chơi";
        buttonedit.innerHTML = "Sửa";
        buttonDelete.innerHTML = "Xóa";

        buttonplay.setAttribute('onClick', "startGame('" + data[i].id + "')");
        buttonDelete.setAttribute('onClick', "deleteQuiz('" + data[i].id + "')");

        k.appendChild(div1);
        k.appendChild(div2);
        div1.appendChild(img);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div4.appendChild(div5);
        div4.appendChild(div6);
        div4.appendChild(div7);
        div5.appendChild(buttonplay);
        div6.appendChild(buttonedit);
        div7.appendChild(buttonDelete);

        div.appendChild(k);

    }
});

function startGame(data) {
    window.location.href = "/host/" + "?id=" + data;
}

function deleteQuiz(data) {
    window.location.href = "../"; //chua sua gi`
}