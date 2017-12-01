namespace L07_Class {
    export let crc3: CanvasRenderingContext2D;

    let hintergrund: Hintergrund;
    let moveObj: MoveObj[] = [];

    //let skis: Ski[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc3 = canvas.getContext("2d");
  
        hintergrund = new Hintergrund(0, 0, 0); //übergabe von werten + farbe (farbe war test wegen problemen)
        
        for (let i: number = 0; i < 5; i++) {
            let s: Ski = new Ski(300, 150);
            moveObj.push(s);
            let b: Baume = new Baume(100, 150);
            moveObj.push(b);
            let w: Wolke = new Wolke(100, 150);
            moveObj.push(w);
}
     /*   hintergrund.setRandomStyle(); */

        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    skis[i] = s;
                }
        */

        animate();
    }

    function animate(): void {
        crc3.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        hintergrund.drawHintergrund(); //hintergrund wird gezeichnet
      
          for (let i: number = 0; i < moveObj.length; i++) {
            let m: MoveObj = moveObj[i];
            m.update();
}

        /*
                for (let i: number = 0; i < skis.length; i++) {
                    let s: Ski = skis[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
}