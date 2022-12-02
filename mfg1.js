window.onload = function () {

    var posx = 1;
    var posy = 1;


    /* children тестовый комментарий*/
    var win = document.getElementById("win");
    var lose = document.getElementById("lose");

    var again = document.getElementById("again");
    var creat = document.getElementById("creat");

    var cont = document.getElementById("container");
    var out = document.getElementById("out");
    var rand = 0;
    var start = document.getElementById("start");
    var b = document.getElementById("box");
    var t;

    /*get moving buttons*/
    var f = document.getElementById("right");
    var f2 = document.getElementById("left");
    var f3 = document.getElementById("down");
    var f4 = document.getElementById("up");
    var x = document.getElementById("stop");

    /*get manage buttons*/
    var changeCoords = document.getElementById("changeCoords");
    var manage = document.getElementById("manage");



    /* stone position*/
    var ys1 = 174;
    var ys2 = 227;
    var xs1 = 253;
    var xs2 = 277;
    /*dark holes position*/
    var y1 = 120;
    var y2 = 150;
    var x1 = 120;
    var x2 = 150;

    var y3 = 0;
    var y4 = 230;
    var x3 = 200;
    var x4 = 230;

    var y31 = 40;
    var y32 = 65;
    var x31 = 160;
    var x32 = 200;

    var y41 = 190;
    var y42 = 225;
    var x41 = 165;
    var x42 = 210;

    var y51 = 15;
    var y52 = 300;
    var x51 = 85;
    var x52 = 117;

    var y61 = 0;
    var y62 = 237;
    var x61 = 20;
    var x62 = 47;

    var y71 = 250;
    var y72 = 300;
    var x71 = 120;
    var x72 = 150;

    /*win point*/
    var yw1 = 0;
    var yw2 = 35;
    var xw1 = 240;
    var xw2 = 300;

    var sizeOutX = cont.clientWidth;
    var sizeOutY = cont.clientHeight;


    //������������ ������� ������
    addEventListener("keydown", moveRect);

    function moveRect(e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 37:  // ���� ������ ������� ����� 
                e.preventDefault();
                f2.focus();
                break;
            case 38:   // ���� ������ ������� �����
                e.preventDefault();
                f4.focus();
                break;
            case 39:   // ���� ������ ������� ������
                e.preventDefault();
                f.focus();
                break;
            case 40:   // ���� ������ ������� ����
                e.preventDefault();
                f3.focus();
                break;
            case 32:   // ���� ������ ������� ������
                x.focus();
                break;
            case 13:   // ���� ������ ������� Enter
                x.focus();

                if (document.getElementById("box") == null) {
                    addBox();
                    lose.style.display = "none";
                    win.style.display = "none";
                    move2();
                }
                else {
                    clearInterval(t);
                    timer = clearTimeout(timer);
                    timenum = clearTimeout(timenum);
                    lose.style.display = "none";
                    win.style.display = "none";
                    move2();
                }
                break;
        }
    }



    function addBox() {
        setTimeout(piu, 100);
        function piu() {
            var txt = document.createTextNode("=)");
            var nbox = document.createElement("div");
            var p = document.createElement("p");
            p.id = "gametxt";
            p.appendChild(txt);
            nbox.appendChild(p);
            b = nbox;
            nbox.id = "box";
            cont.appendChild(nbox);
            posx = 1;
            posy = 1;
        }
    }

    function delDiv() {
        cont.removeChild(b);
        clearInterval(t);
        timer = clearTimeout(timer);
        timenum = clearTimeout(timenum);
        lose.style.display = "block";
    }

    function addDiv() {
        cont.removeChild(b);
        clearInterval(t);
        win.style.display = "block";
    }


    creat.onclick = function () {
        lose.style.display = "none";
        addBox();
    }

    again.onclick = function () {
        win.style.display = "none";
        addBox();
    }

    f.onfocus = right;
    f2.onfocus = left;
    f3.onfocus = bottom;
    f4.onfocus = tops;

    x.onclick = function () {
        clearInterval(t);
    }

    /*move right (�������� ������)*/
    function right() {
        t = setInterval(move, 5);
        f.onblur = function () {
            clearInterval(t);
        }
        function move() {
            if (posx <= 274) {
                posx++;
                b.style.left = posx + "px";
                out.innerHTML = "posy: " + posy + "<br/>" + "posx: " + posx;
                coords();
                /*stop moving*/
            }
            else {
                clearInterval(t);
            }
        }
    }

    /*move left (�������� �����)*/
    function left() {
        t = setInterval(move, 5);
        f2.onblur = function () {
            clearInterval(t);
        }
        function move() {
            if (posx > 0) {
                posx--;
                b.style.left = posx + "px";
                out.innerHTML = "posy: " + posy + "<br/>" + "posx: " + posx;
                coords();
                /*stop moving*/
            }
            else {
                clearInterval(t);
            }
        }
    }

    /*move down (�������� ����)*/
    function bottom() {
        t = setInterval(move, 5);
        f3.onblur = function () {
            clearInterval(t);
        }
        function move() {
            if (posy <= 274) {
                posy++;
                b.style.top = posy + "px";
                out.innerHTML = "posy: " + posy + "<br/>" + "posx: " + posx;
                coords();
                /*stop moving*/
            }
            else {
                clearInterval(t);
            }
        }
    }

    /*move up(�������� �����)*/
    function tops() {
        t = setInterval(move, 5);

        f4.onblur = function () {
            clearInterval(t);
        }
        function move() {
            if (posy > 0) {
                posy--;
                b.style.top = posy + "px";
                out.innerHTML = "posy: " + posy + "<br/>" + "posx: " + posx;
                coords();
                /*stop moving*/
            }
            else {
                clearInterval(t);
            }
        }
    }

    function coords() {
        /*1 object*/
        if (posy >= y1 && posy <= y2 && posx >= x1 && posx <= x2) {
            delDiv();
        }
        /*2 object*/
        else if (posy >= y3 && posy <= y4 && posx >= x3 && posx <= x4) {
            delDiv();
        }
        /*3 Object */
        else if (posy >= y31 && posy <= y32 && posx >= x31 && posx <= x32) {
            delDiv();
        }
        /*4 Object */
        else if (posy >= y41 && posy <= y42 && posx >= x41 && posx <= x42) {
            delDiv();
        }
        /*5 Object */
        else if (posy >= y51 && posy <= y52 && posx >= x51 && posx <= x52) {
            delDiv();
        }
        /*6 Object */
        else if (posy >= y61 && posy <= y62 && posx >= x61 && posx <= x62) {
            delDiv();
        }
        /*7 Object */
        else if (posy >= y71 && posy <= y72 && posx >= x71 && posx <= x72) {
            delDiv();
        }
        /*w Object */
        else if (posy >= yw1 && posy <= yw2 && posx >= xw1 && posx <= xw2) {
            addDiv();
        }
        /*stones */
        else if (posy >= ys1 && posy <= ys2 && posx >= xs1 && posx <= xs2) {
            clearInterval(t);
            if (posy >= ys1 && posy <= ys1 + 5) {
                posy--;
            }
            else if (posy <= ys2 && posy >= ys2 - 5) {
                posy++;
            }
            else if (posx >= xs1 && posx <= xs1 + 5) {
                posx--;
            }
        }

    }



    changeCoords.onmousedown = function () {
        manage.style.backgroundColor = "red";
        manage.onmouseover = function () {
            manage.onmousemove = function (event) {
                manage.style.backgroundColor = "#447766";
                b.style.top = posy + "px";
                b.style.left = posx + "px";
                var xL = event.offsetX == undefined ? event.layerX : event.offsetX;
                var yL = event.offsetY == undefined ? event.layerY : event.offsetY;
                posx = xL;
                posy = yL;

                var out = document.getElementById("out");

                out.innerHTML = "xL: " + xL + "<br> yL: " + yL + "<br>" +
                    "sizeX: " + sizeOutX + "<br> sizeY: " + sizeOutY;
            }
        }
    }




    //spider code
    //startcoords
    var nuvX = 175;
    var nuvY = 160;

    //htmlelements
    var spi = document.getElementById("spider");
    var spiP =
        document.getElementById("spiP");

    //get sizes
    var wCoord = cont.clientWidth - spi.clientWidth;
    var hCoord = cont.clientHeight - spi.clientHeight;

    //timeouts
    var timer;
    var timerSpiSize;
    var s = 0.65;
    var timenum;

    //set direction
    move2();
    function move2() {
        var num = Math.random();
        if (num < 0.25) {
            timer = clearTimeout(timer);
            moveRight();
        }
        else
            if (num >= 0.25 && num < 0.5) {
                timer = clearTimeout(timer);
                moveLeft();
            }
            else
                if (num >= 0.5 && num < 0.75) {
                    timer = clearTimeout(timer);
                    moveTop();
                }
                else
                    if (num >= 0.75 && num <= 1) {
                        timer = clearTimeout(timer);
                        moveBottom();
                    }
        timenum = setTimeout(move2, 600);
    }

    function moveRight() {
        timer = setTimeout(moveRight, 10);
        nuvX = nuvX + 1;
        spi.style.left = nuvX + "px";
        spi.style.transform = "rotate(90deg)";
        moveCheck();
    }

    function moveLeft() {
        timer = setTimeout(moveLeft, 10);
        nuvX = nuvX - 1;
        spi.style.left = nuvX + "px";
        spi.style.transform = "rotate(270deg)";
        moveCheck();
    }

    function moveTop() {
        timer = setTimeout(moveTop, 10);
        nuvY = nuvY + 1;
        spi.style.top = nuvY + "px";
        spi.style.transform = "rotate(180deg)";
        moveCheck();
    }

    function moveBottom() {
        timer = setTimeout(moveBottom, 10);
        nuvY = nuvY - 1;
        spi.style.top = nuvY + "px";
        spi.style.transform = "rotate(0deg)";
        moveCheck();
    }

    //check position of spider
    function moveCheck() {
        if ((nuvX - 15) < posx && (nuvX + 15) > posx &&
            (nuvY - 15) < posy && (nuvY + 15) > posy) {
            var b = document.getElementById("box");
            cont.removeChild(b);
            t = clearInterval(t);
            lose.style.display = "block";
            timer = clearTimeout(timer);
            timenum = clearTimeout(timenum);
        }
        if (nuvX >= wCoord) {
            timer = clearTimeout(timer);
            moveLeft();
        }
        else if (nuvX <= 0) {
            timer = clearTimeout(timer);
            moveRight();
        }
        else if (nuvY >= hCoord) {
            timer = clearTimeout(timer);
            moveBottom();
        }

        else if (nuvY <= 0) {
            timer = clearTimeout(timer);
            moveTop();
        }
    }

    //change size of spider 
    spiSize();
    function spiSize() {
        s = s * (-1);
        spiP.style.fontSize = (20 + s) + "px";
        timerSpiSize = setTimeout(spiSize, 80);
    }


}

