function makebub(){
    var clut = "";
    for(var i=1;i<=160;i++){
        var rn = Math.floor(Math.random()*10);
        clut +=` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clut;
    }
    var time=60;
    function runtimer(){
        var timeint = setInterval(function(){
            if(time>0){
                time--;
                document.querySelector("#timeval").textContent=time;
            }
            else{
                clearInterval(timeint);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over<\h1>`;
            }
         
            
        },1000);
    
    }
    var hitrn;
    function gethit(){
        hitrn = Math.floor(Math.random() * 10);
        document.querySelector("#hitval").textContent =  hitrn;
    }
    var score=0;
    function inscore(){
        score += 10;
        document.querySelector("#scval").textContent = score;
    }
    document.querySelector("#pbtm").addEventListener("click",function(a){
        var clicked=Number((a.target.textContent));
        if(clicked === hitrn){
            inscore();
            makebub();
            gethit();
        }
    })
    
    
    gethit();
    runtimer();
    makebub();