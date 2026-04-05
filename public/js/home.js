function $(id){
    return document.getElementById(id);
}

const BG = $("BG");


document.addEventListener('DOMContentLoaded', () => {
    BG.style.width = window.innerWidth + "px";
    BG.style.height = window.innerHeight + "px";
    document.body.style.width = window.innerWidth + "px";
    document.body.style.height = window.innerHeight + "px";
    BG.style.background = "#101010";

    const bgDot1 = document.createElement('div');
    bgDot1.classList.add("bgDots");
    bgDot1.id = "bgDot1";
    BG.appendChild(bgDot1);
    bgDot1.style.backgroundColor = "#c9b1e9";
    bgDot1.style.width = "500px"; 
    bgDot1.style.height = "500px";
    bgDot1.style.left = (window.innerWidth - 500) / 2 + "px";
    bgDot1.style.top = (window.innerHeight - 500) / 2 + "px";
    bgDot1.style.scale = '0';

    const bgDot2 = document.createElement('div');
    bgDot2.classList.add("bgDots");
    bgDot2.id = "bgDot2";
    BG.appendChild(bgDot2);
    bgDot2.style.backgroundColor = "#ee6055";
    bgDot2.style.width = "500px";
    bgDot2.style.height = "500px";
    bgDot2.style.left = (window.innerWidth - 500) / 2 + "px";
    bgDot2.style.top = (window.innerHeight - 500) / 2 + "px";
    bgDot2.style.scale = '0';
    
    const bgDot3 = document.createElement('div');
    bgDot3.classList.add("bgDots");
    bgDot3.id = "bgDot3";
    BG.appendChild(bgDot3);
    bgDot3.style.backgroundColor = "#fee440";
    bgDot3.style.width = "480px";
    bgDot3.style.height = "480px";
    bgDot3.style.left = (window.innerWidth - 480) / 2 + "px";
    bgDot3.style.top = (window.innerHeight - 480) / 2 + "px";
    bgDot3.style.scale = '0';

    const bgDot4 = document.createElement('div');
    bgDot4.classList.add("bgDots");
    bgDot4.id = "bgDot4";
    BG.appendChild(bgDot4);
    bgDot4.style.backgroundColor = "#ffa962";
    bgDot4.style.width = "360px";
    bgDot4.style.height = "360px";
    bgDot4.style.left = (window.innerWidth - 360) / 2 + "px";
    bgDot4.style.top = (window.innerHeight - 360) / 2 + "px";
    bgDot4.style.scale = '0';

    const bgDot5 = document.createElement('div');
    bgDot5.classList.add("bgDots");
    bgDot5.id = "bgDot5";
    BG.appendChild(bgDot5);
    bgDot5.style.backgroundColor = "#c9b1e9";
    bgDot5.style.width = "250px";
    bgDot5.style.height = "250px";
    bgDot5.style.left = (window.innerWidth - 250) / 2 + "px";
    bgDot5.style.top = (window.innerHeight - 250) / 2 + "px";
    bgDot5.style.scale = '0';

    const bgMask = document.createElement('div');
    bgMask.id = "bgMask";
    BG.appendChild(bgMask);
    bgMask.style.width = window.innerWidth + "px";
    bgMask.style.height = window.innerHeight + "px";
    bgMask.style.background = "#000"
    setTimeout(() => {
        startAnimation();
    }, 1000);

});

function setBG(){
    const bgDot1 = $("bgDot1");
    const bgDot2 = $("bgDot2");
    const bgDot3 = $("bgDot3");
    const bgDot4 = $("bgDot4");
    const bgDot5 = $("bgDot5");
    bgDot1.style.left = "600px";
    bgDot1.style.top = "-60px";
    bgDot1.style.scale = '1';

    bgDot2.style.left = "970px";
    bgDot2.style.top = "220px";
    bgDot2.style.scale = '1';

    bgDot3.style.left = "680px";
    bgDot3.style.top = "360px";
    bgDot3.style.scale = '1';

    bgDot4.style.left = "800px";
    bgDot4.style.top = "290px";
    bgDot4.style.scale = '1';

    bgDot5.style.left = "-120px";
    bgDot5.style.top = "800px";
    bgDot5.style.scale = '1';
}

function changeBG(n){
    const bgDot1 = $("bgDot1");
    const bgDot2 = $("bgDot2");
    const bgDot3 = $("bgDot3");
    const bgDot4 = $("bgDot4");
    const bgDot5 = $("bgDot5");
    switch(n){
        case 0:
            bgDot1.style.left = "600px";
            bgDot1.style.top = "-60px";
            bgDot1.style.scale = '1';

            bgDot2.style.left = "970px";
            bgDot2.style.top = "220px";
            bgDot2.style.scale = '1';

            bgDot3.style.left = "680px";
            bgDot3.style.top = "360px";
            bgDot3.style.scale = '1';

            bgDot4.style.left = "800px";
            bgDot4.style.top = "290px";
            bgDot4.style.scale = '1';

            bgDot5.style.left = "-120px";
            bgDot5.style.top = "800px";
            bgDot5.style.scale = '1';
            break;
        case 1:
            bgDot1.style.left = "1000px";
            bgDot1.style.top = "170px";
            bgDot1.style.background = "#94c7f3";

            bgDot2.style.left = "620px";
            bgDot2.style.top = "200px";
            bgDot2.style.background = "#fff57d";

            bgDot3.style.width = "500px";
            bgDot3.style.height = "500px";
            bgDot3.style.left = "760px";
            bgDot3.style.top = "360px";
            bgDot3.style.background = "#b973d9";
            
            bgDot4.style.opacity = 0;
            bgDot5.style.opacity = 0;
            break;
        case 2:
            bgDot1.style.left = "760px";
            bgDot1.style.top = "170px";

            bgDot2.style.left = "760px";
            bgDot2.style.top = "170px";

            bgDot4.style.opacity = 1;
            bgDot4.style.background = "#ff6262";
            bgDot4.style.left = "820px";
            bgDot4.style.top = "290px";
            break;
        case 3:
            bgDot2.style.top = "200px";
            bgDot2.style.scale = 1.2;
            bgDot2.style.background = "#ffeb00";

            bgDot3.style.top = "440px";

            bgDot4.style.top = "350px";
            bgDot4.style.scale = 0.7;
            break;
        case 4:
            bgDot1.style.left = "1000px";
            bgDot1.style.top = "250px";
            bgDot1.style.scale = 1.3;

            bgDot2.style.left = "700px";
            bgDot2.style.top = "200px";
            bgDot2.style.scale = 1;

            bgDot3.style.left = "720px";
            bgDot3.style.top = "440px";
            bgDot3.style.scale = 0.7;

            bgDot4.style.left = "960px";
            bgDot4.style.top = "370px";
            bgDot4.style.scale = 0.8;
            break;
    }
    setTimeout(() => {

        
    }, 2500);
    setTimeout(() => {
        
        
    }, 5000);

    setTimeout(() => {
        
    }, 7500);

    setTimeout(() => {
        
    }, 10000);
    setTimeout(() => {
        loopBG();
    }, 12500);
}

function startAnimation(){
    if ($("title1")){
        for (let i = 0; i < $("title1").children.length; i++){
            setTimeout(() => {
                $("title1").children[i].style.transform = "translateY(0)";
                $("title1").children[i].style.opacity = 1;
                $("title1").children[i].style.filter = "blur(0)";
            },30*i);
        }
    }
    setTimeout(() => {
        $("title1").style.scale = 1;
        $("title2").style.transform = "translateX(220px)";
    }, 600);
    setTimeout(() => {
        $("title1").style.transform = "translateX(-240px)";
    }, 1250);
    for (let i = 0; i < $("title2").children.length; i++){
        setTimeout(() => {
            $("title2").children[i].style.transform = "translateX(0)";
            $("title2").children[i].style.opacity = 1;
            $("title2").children[i].style.filter = "blur(0)";
        },1280+30*i);
    }

    setTimeout(() => {
        

        $("title3").style.scale = 1;
        $("title3").style.opacity = 2;
        $("title3").style.filter = "blur(0px)";
        $("title3").style.transform = "translateX(0px)";
    }, 2500);

    setTimeout(() => {
        $("title1").style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
        $("title1").style.transform = "translateX(-1600px) translateY(-300px) rotate(-45deg)";

        $("title2").style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
        $("title2").style.transform = "translateX(-1200px) translateY(-300px) rotate(-30deg)";
    }, 2600);

    setTimeout(() => {
        $("title1").style.transition = "all 0.5s cubic-bezier(.4,0,.2,1)";
        $("title1").style.transform = "translateX(-1600px) translateY(-300px) rotate(-45deg)";
        $("title1").style.opacity = 0;
        $("title1").style.filter = "blur(20px)";

        $("title2").style.transition = "all 0.5s cubic-bezier(.4,0,.2,1)";
        $("title2").style.transform = "translateX(-1200px) translateY(-300px) rotate(-30deg)";
        $("title2").style.opacity = 0;
        $("title2").style.filter = "blur(20px)";
        
        $("title3").style.transition = "all 0.5s cubic-bezier(.4,0,.2,1)";
        $("title3").style.transform = "translateY(-400px)"
        $("title3").style.opacity = 0;
        $("title3").style.filter = "blur(20px)";
        
    }, 5000);
    for (let i = 0; i < $("title4").children.length; i++){
        setTimeout(() => {
            $("title4").children[i].style.transform = "translateX(0)";
            $("title4").children[i].style.opacity = 1;
        },5250+200*i);
    }
    setTimeout(() => {
        $("title4").style.transition = "all 0.5s cubic-bezier(.4,0,.2,1)";
        $("title4").style.transform = "translateX(-450px) scale(0.7)";
        $("title5").style.transition = "all 0s cubic-bezier(.31,.01,.66,-0.59)";
        $("title5").style.transform = "translateX(320px) scale(0.7)";
    }, 6500);
    for (let i = 0; i < $("title5").children.length; i++){
        setTimeout(() => {
            $("title5").children[i].style.transform = "translateX(0px)";
            $("title5").children[i].style.opacity = 1;
        },6500+200*i);
    }
    setTimeout(() => {
        $("clapperBoard").style.transform= "translateY(0px) rotate(0deg)";
        $("clapperBoard").style.filter = "blur(0)";
    }, 8000);
    setTimeout(() => {
        $("clapper2").style.animation = "clapper 0.5s cubic-bezier(.31,.01,.66,-0.59) 0s 2 alternate";
    }, 9000);
    setTimeout(() => {
        $("title4").style.transition = "all 0s cubic-bezier(.31,.01,.66,-0.59)";
        $("title4").style.opacity = 0;
        $("title4").style.filter = "blur(20px)";
        
        $("title5").style.transition = "all 0s cubic-bezier(.31,.01,.66,-0.59)";
        $("title5").style.opacity = 0;
        $("title5").style.filter = "blur(20px)";
        $("bgMask").style.transitionDuration = "0s";
        $("bgMask").style.background = "rgba(255, 255, 255, 0.25)";
        BG.style.transitionDuration = "0s";
        BG.style.background = "#fff";
        setBG();
    }, 9500);
    setTimeout(() => {
        $("clapperBoard").style.transition = "all 1s cubic-bezier(.4,0,.2,1)";
        $("clapperBoard").style.transform= "translate(-550px, 0px) rotate(0deg)";
        $("clapperBoard").style.scale = 1;
        $("title6").style.transform = "translateX(50px)";
    }, 10000);
    setTimeout(() => {
        $("clapper2").style.transform = "translate(5px, 4px) rotate(-120deg)";
    }, 10500);
    setTimeout(() => {
        const el = $("title6").children[0];
        const duration = 1000; 
        let startTime = null;

        const startX = -600, targetX = 0;
        const startY = 20, targetY = 0;
        const jumpHeight = 300; 

        function cubicBezier(t) {
            const b = (t, p0, p1, p2, p3) => 
                Math.pow(1-t, 3)*p0 + 3*Math.pow(1-t, 2)*t*p1 + 3*(1-t)*Math.pow(t, 2)*p2 + Math.pow(t, 3)*p3;
            return b(t, .08,.31,.46,1); 
        }

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            let elapsed = currentTime - startTime;
            let t = Math.min(elapsed / duration, 1);

            const p = cubicBezier(t);

            // 1. 計算座標
            // 水平位移
            let curX = startX + (targetX - startX) * p;
            
            // 垂直拋物線：透過 sin 確保在 p=1 時準確回到 targetY (0)
            let parabola = Math.sin(p * Math.PI) * jumpHeight;
            let curY = (startY + (targetY - startY) * p) - parabola;

            // 2. 屬性漸變
            let curScale = 0 + (1 - 0) * p;
            let curOpacity = 0 + (1 - 0) * p;
            let curBlur = 20 * (1 - p);

            // 3. 渲染
            el.style.transform = `translate(${curX}px, ${curY}px) scale(${curScale}) rotate(0deg)`;
            el.style.opacity = curOpacity;
            el.style.filter = `blur(${curBlur}px)`;

            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                // 確保最終狀態完美歸零
                el.style.transform = `translate(0, 0) scale(1) rotate(0deg)`;
                el.style.filter = "blur(0px)";
                el.style.opacity = 1;
            }
        }

        requestAnimationFrame(animate);
    }, 11000);

    setTimeout(() => {
        const el = $("title6").children[0];
        const duration = 300;
        let startTime = null;

        const startX = 0, targetX = 40;
        const startY = 0, targetY = 0;
        const jumpHeight = 40; 

        function cubicBezier(t) {
            const b = (t, p0, p1, p2, p3) => 
                Math.pow(1-t, 3)*p0 + 3*Math.pow(1-t, 2)*t*p1 + 3*(1-t)*Math.pow(t, 2)*p2 + Math.pow(t, 3)*p3;
            return b(t, .08,.31,.46,1);
        }

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            let elapsed = currentTime - startTime;
            let t = Math.min(elapsed / duration, 1);

            const p = cubicBezier(t);

            // 1. 計算座標
            // 水平位移
            let curX = startX + (targetX - startX) * p;
            
            // 垂直拋物線：透過 sin 確保在 p=1 時準確回到 targetY (0)
            let parabola = Math.sin(p * Math.PI) * jumpHeight;
            let curY = (startY + (targetY - startY) * p) - parabola;

            // 2. 屬性漸變
            let curScale = 1;
            let curOpacity = 1;
            let curBlur = 1;

            // 3. 渲染
            el.style.transform = `translate(${curX}px, ${curY}px) scale(${curScale}) rotate(0deg)`;
            el.style.opacity = curOpacity;
            el.style.filter = `blur(${curBlur}px)`;

            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                // 確保最終狀態完美歸零
                el.style.transform = `translate(40px, 0) scale(1) rotate(0deg)`;
                el.style.filter = "blur(0px)";
                el.style.opacity = 1;
            }
        }

        requestAnimationFrame(animate);
    }, 12100);

    setTimeout(() => {
        $("title6").children[1].style.transform = "translateX(-100px)";

    }, 12600);
    setTimeout(() => {
        $("title6").children[0].style.transition = "all 0.2s linear";
        $("title6").children[0].style.transform = "translateX(-192px)";
    }, 13100);
    setTimeout(() => {
        $("title6").children[0].style.transition = "all 0.5s cubic-bezier(0,.72,.46,1)";
        $("title6").children[0].style.transform = "translateX(-60px)";
        
        $("clapper2").style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
        $("clapper2").style.transform = "translate(-10px, 4px) rotate(-6deg)";
    }, 13300);

    setTimeout(() => {
        $("title6").children[1].style.transition = "all 1s cubic-bezier(0,.72,.46,1)";
        $("title6").children[1].style.transform = "translateX(0px)";
    }, 13400);

}