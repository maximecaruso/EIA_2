var RPG;
(function (RPG) {
    var person1;
    var boss;
    var kL = [];
    var weapon1;
    var weaponenemys = [];
    var weaponenemyslv2 = [];
    var enemys = [];
    var dogs = [];
    var house;
    var lv1BG;
    var lv2BG;
    var lv3BG;
    var lv4BG;
    var gravity = 4.2;
    var ground = 265;
    var objCollider = [];
    var anzEnemy = Math.random() * 3;
    var lvl = [true, false, false, false];
    var anzeigeLM = [new Image(), new Image()];
    var sound;
    var sword;
    var anzeige = new Image();
    var deadScreen = new Image();
    var bg4 = new Image();
    window.addEventListener("load", menu);
    function swordSound() {
        sword = document.getElementById("sword");
        sword.play();
    }
    function backaudio(sound) {
        sound.play();
    }
    function menu() {
        sound = document.getElementById("lvl1");
        backaudio(sound);
        var button = document.getElementById("button");
        button.style.display = "block";
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Start";
        submit.style.position = "absolute";
        submit.style.left = "30%";
        submit.style.top = "10vh";
        submit.style.width = "40%";
        submit.style.height = "3em";
        submit.addEventListener("click", init);
        button.appendChild(submit);
        //        let option: HTMLButtonElement = document.createElement("button");
        //        option.name = "Button";
        //        option.type = "button";
        //        option.innerText = "Option";
        //        option.style.position = "absolute";
        //        option.style.left = "30%";
        //        option.style.top = "40vh";
        //        option.style.width = "40%";
        //        option.style.height = "3em";
        //        option.addEventListener("click", opTion);
        //        button.appendChild(option);
    }
    //    function opTion(): void {
    //        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
    //
    //        let option: HTMLButtonElement = document.createElement("button");
    //        option.name = "Button";
    //        option.type = "button";
    //        option.innerText = "Musik an";
    //        option.style.position = "absolute";
    //        option.style.left = "30%";
    //        option.style.top = "21em";
    //        option.style.width = "40%";
    //        option.style.height = "10em";
    //        option.addEventListener("mousedown", opTion);
    //        button.appendChild(option);
    //        let back: HTMLButtonElement = document.createElement("button");
    //        back.name = "Button";
    //        back.type = "button";
    //        back.innerText = "Musik an";
    //        back.style.position = "absolute";
    //        back.style.left = "30%";
    //        back.style.top = "21em";
    //        back.style.width = "40%";
    //        back.style.height = "10em";
    //        back.addEventListener("mousedown", menu);
    //        button.appendChild(back);
    //
    //
    //    }
    function init() {
        var button = document.getElementById("button");
        button.style.display = "none";
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        anzeigeLM[0].src = "Assats/img/lebensanzeige.png";
        anzeigeLM[1].src = "Assats/img/manaAnzeige.png";
        bg4.src = "Assats/img/hintergrund4B.png";
        RPG.crc2 = canvas.getContext("2d");
        objCollider[0] = [-30, 10];
        objCollider[1] = [770, 10];
        var button1 = document.getElementById("buttons");
        var links = document.createElement("button");
        links.name = "Button";
        links.type = "button";
        links.innerText = "<--";
        links.style.position = "absolute";
        links.style.left = "10%";
        links.style.top = "90vh";
        links.style.width = "20%";
        links.style.height = "9vh";
        links.addEventListener("touchstart", moveLeft);
        links.addEventListener("touchend", moveLeft);
        button1.appendChild(links);
        var rechts = document.createElement("button");
        rechts.name = "Button";
        rechts.type = "button";
        rechts.innerText = "-->";
        rechts.style.position = "absolute";
        rechts.style.left = "70%";
        rechts.style.top = "90vh";
        rechts.style.width = "20%";
        rechts.style.height = "9vh";
        rechts.addEventListener("touchstart", moveLeft);
        rechts.addEventListener("touchend", moveLeft);
        button1.appendChild(rechts);
        var jump1 = document.createElement("button");
        jump1.name = "Button";
        jump1.type = "button";
        jump1.innerText = "jump";
        jump1.style.position = "absolute";
        jump1.style.left = "10%";
        jump1.style.top = "80vh";
        jump1.style.width = "20%";
        jump1.style.height = "9vh";
        jump1.addEventListener("click", jump);
        button1.appendChild(jump1);
        var zaubern1 = document.createElement("button");
        zaubern1.name = "Button";
        zaubern1.type = "button";
        zaubern1.innerText = "Z";
        zaubern1.style.position = "absolute";
        zaubern1.style.left = "70%";
        zaubern1.style.top = "80vh";
        zaubern1.style.width = "20%";
        zaubern1.style.height = "9vh";
        zaubern1.addEventListener("click", zaubern);
        button1.appendChild(zaubern1);
        lv1BG = new RPG.Background("Assats/img/hintergrund.png", Math.random() * 800, 20);
        lv2BG = new RPG.Background("Assats/img/hintergrund2.png", Math.random() * 800, 20);
        lv3BG = new RPG.Background("Assats/img/hintergrund3.png", Math.random() * 800, 20);
        lv4BG = new RPG.Background("Assats/img/hintergrund4.png", Math.random() * 800, 20);
        deadScreen.src = "Assats/img/DeadScreen.png";
        person1 = new RPG.Person(100, ground, 2, "red", ground, gravity, objCollider, "Assats/img/Char.png", "Assats/img/magieEis.png");
        boss = new RPG.Boss(0, 30, "Assats/img/Boss/Demon.png", person1);
        for (var i = 0; i < 3; i++) {
            kL[i] = new RPG.Kronleuchter(0 + i * 163, 0, "Assats/img/kronleuchter.png", "Assats/img/kronleuchterhalter.png", person1);
        }
        for (var i = 0; i < anzEnemy; i++) {
            enemys[i] = new RPG.Enemy(500 + (Math.random() * 100), ground, 2, "red", ground, gravity, "Assats/img/Char.png", objCollider, "Assats/img/magieEis.png", person1);
        }
        for (var i = 0; i < anzEnemy; i++) {
            dogs[i] = new RPG.Dog(500 + (Math.random() * 100), ground, 2, "red", ground, gravity, "Assats/img/Char.png", objCollider, "Assats/img/magieEis.png", person1);
        }
        weapon1 = new RPG.Weapon(person1.getXPos(), person1.getyPos(), "orange", "Assats/img/Sword.png", person1);
        // house = new House(600, ground);
        for (var i = 0; i < anzEnemy; i++) {
            weaponenemys[i] = new RPG.Weapon(enemys[i].getXPos(), enemys[i].getyPos(), "orange", "Assats/img/AxtFire.png", enemys[i]);
            enemys[i].attackPerson(person1);
        }
        document.addEventListener("keydown", moveChangeDown);
        document.addEventListener("keyup", moveChangeUp);
        document.addEventListener("click", click);
        animate();
    }
    function click() {
        if (person1.getLeben() > 0) {
            if (lvl[0] == true) {
                for (var i = 0; i < anzEnemy; i++) {
                    if (enemys[i].getXPos() >= person1.getXPos() && (enemys[i].getXPos() - 25) <= person1.getXPos()) {
                        enemys[i].schaden(20);
                    }
                    else if (enemys[i].getXPos() <= person1.getXPos() && (enemys[i].getXPos() + 25) >= person1.getXPos()) {
                        enemys[i].schaden(20);
                    }
                }
            }
            if (lvl[1] == true) {
                for (var i = 0; i < anzEnemy; i++) {
                    if (dogs[i].getXPos() >= person1.getXPos() && (dogs[i].getXPos() - 25) <= person1.getXPos()) {
                        dogs[i].schaden(20);
                    }
                    else if (dogs[i].getXPos() <= person1.getXPos() && (dogs[i].getXPos() + 25) >= person1.getXPos()) {
                        dogs[i].schaden(20);
                    }
                }
            }
            if (lvl[3] == true) {
                for (var i = 0; i < 3; i++) {
                    if (person1.getXPos() >= 250 + 163 * i && person1.getXPos() <= 300 + 163 * i) {
                        kL[i].setFall(true);
                    }
                }
            }
            weapon1.attack();
            swordSound();
            window.setTimeout(clickEnd, 150);
        }
    }
    function clickEnd() {
        weapon1.attackEnd();
    }
    function moveChangeDown(_event) {
        if (person1.getyPos() >= ground) {
            if (_event.key == " ") {
                person1.setGravity(-gravity);
            }
        }
        if (_event.key == "d" || _event.key == "D") {
            person1.setLeft(true);
            weapon1.setChar("Assats/img/Sword.png");
        }
        if (_event.key == "a" || _event.key == "A") {
            person1.setRight(true);
            weapon1.setChar("Assats/img/SwordL.png");
        }
        if (person1.getMana() >= 50) {
            if (_event.key == "e" || _event.key == "E") {
                person1.setMagicTrue(true);
            }
        }
    }
    function moveLeft() {
        person1.setRight(true);
        weapon1.setChar("Assats/img/SwordL.png");
    }
    function moveRight() {
        person1.setLeft(true);
        weapon1.setChar("Assats/img/Sword.png");
    }
    function moveLeftE() {
        person1.setRight(false);
        person1.setChar("Assats/img/CharL.png");
    }
    function moveRightE() {
        person1.setLeft(false);
        person1.setChar("Assats/img/Char.png");
    }
    function jump() {
        person1.setGravity(-gravity);
    }
    function zaubern() {
        if (person1.getMana() >= 50) {
            person1.setMagicTrue(true);
        }
    }
    function moveChangeUp(_event) {
        if (_event.key == "d" || _event.key == "D") {
            person1.setLeft(false);
            person1.setChar("Assats/img/Char.png");
        }
        if (_event.key == "a" || _event.key == "A") {
            person1.setRight(false);
            person1.setChar("Assats/img/CharL.png");
        }
    }
    function animate() {
        RPG.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        RPG.crc2.fillStyle = "black";
        RPG.crc2.fillRect(0, 0, 800, 600);
        if (person1.getXPos() < 750 && lvl[0] == true) {
            lv1BG.update();
        }
        else if (person1.getXPos() > 750 && lvl[0] == true) {
            lvl[1] = true;
            lvl[0] = false;
            lvl[2] = false;
            lvl[3] = false;
            person1.setxPos(55);
        }
        if (person1.getXPos() < 750 && person1.getXPos() > 50 && lvl[1] == true && lvl[2] == false) {
            lv2BG.update();
        }
        else if (person1.getXPos() < 50 && lvl[1] == true) {
            lvl[1] = false;
            lvl[0] = true;
            lvl[2] = false;
            lvl[3] = false;
            person1.setxPos(745);
        }
        else if (person1.getXPos() > 750 && lvl[1] == true) {
            lvl[1] = false;
            lvl[0] = false;
            lvl[2] = true;
            lvl[3] = false;
            person1.setxPos(55);
        }
        if (person1.getXPos() < 750 && person1.getXPos() > 50 && lvl[2] == true && lvl[1] == false) {
            lv3BG.update();
        }
        else if (person1.getXPos() > 750 && lvl[2] == true) {
            lvl[1] = false;
            lvl[0] = false;
            lvl[2] = false;
            lvl[3] = true;
            person1.setxPos(55);
        }
        else if (person1.getXPos() < 50 && lvl[2] == true) {
            lvl[1] = true;
            lvl[0] = false;
            lvl[2] = false;
            lvl[3] = false;
            person1.setxPos(745);
        }
        if (lvl[3] == true && lvl[2] == false) {
            RPG.crc2.drawImage(bg4, 0, 0);
            boss.update();
            lv4BG.update();
            for (var i = 0; i < 3; i++) {
                kL[i].update();
                console.log(boss.getXpos());
                if (boss.getXpos() >= kL[i].getXpos() + 20 - 136 * i + 60 * i && boss.getXpos() <= kL[i].getXpos() + 60 - 136 * i + 60 * i && kL[i].getFall() == true && kL[i].getYposK() == 20) {
                    boss.setSchaden();
                }
            }
            boss.drawLeben();
        }
        // house.update();
        person1.update();
        if (lvl[0] == true) {
            for (var i = 0; i < enemys.length; i++) {
                person1.magieSchaden(enemys[i]);
                enemys[i].update();
                enemys[i].movetotarget(person1);
                weaponenemys[i].update();
                weaponenemys[i].followObj(enemys[i].getXPos(), enemys[i].getyPos());
                enemys[i].attackPerson(person1);
                enemys[i].magieAttack(person1);
                enemys[i].magieSchaden();
            }
        }
        if (lvl[1] == true) {
            for (var i = 0; i < enemys.length; i++) {
                person1.magieSchaden(enemys[i]);
                dogs[i].update();
                dogs[i].movetotarget(person1);
                dogs[i].magieSchaden();
                dogs[i].attackPerson(person1);
            }
        }
        if (lvl[2] == true && person1.getXPos() > 542 && person1.getLeft() == true && person1.getXPos() < 695) {
            person1.setGround(person1.getGround() - 0.38);
        }
        if (lvl[2] == true && person1.getXPos() > 540 && person1.getRight() == true && person1.getXPos() < 695) {
            person1.setGround(person1.getGround() + 0.38);
        }
        RPG.crc2.fillStyle = "red";
        RPG.crc2.drawImage(anzeigeLM[0], 5, 5);
        if (person1.getLeben() > 0) {
            RPG.crc2.fillRect(14, 8, person1.getLeben(), 4);
        }
        RPG.crc2.fillStyle = "lightblue";
        RPG.crc2.drawImage(anzeigeLM[1], 5, 18);
        RPG.crc2.fillRect(14, 21, person1.getMana(), 4);
        weapon1.update();
        weapon1.followObj(person1.getXPos(), person1.getyPos());
        // crc2.fillRect(20, 20, Math.random() * 10, 10);
        /*
                for (let i: number = 0; i < skis.length; i++) {
                    let s: Ski = skis[i];
                    s.update();
                }
        */
        if (person1.getLeben() < 0) {
            RPG.crc2.drawImage(deadScreen, 0, 0);
        }
        if (boss.getLeben() <= 0) {
            deadScreen.src = "Assats/img/Gewonnen.png";
            RPG.crc2.drawImage(deadScreen, 0, 0);
        }
        window.setTimeout(animate, 20);
    }
})(RPG || (RPG = {}));
//# sourceMappingURL=main.js.map