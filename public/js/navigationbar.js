document.write(
    `

    <div id="navigation" style="position:fixed;">
    <div style="display: flex;">
        <div class="name mt-1">
            <p>DSC</p>
            <p>VIT Pune</p> 
        </div>
        <div>
            <img src="../static/images/4.png" id="logo" class="logo mt-3" alt="dsclogo"/>
        </div>
    </div>
   
    <div class="mainnav d-flex">
        <div class="routes ">
            <div> <a href="./" >Dashboard</a></div>
            <div> <a href="./events" >Events</a></div>
            <div> <a href="./projects" >Projects</a></div>
            <div> <a href="./teams" >Teams</a></div>
            <div>   <a href="http://certificate-generator-dsc.herokuapp.com/" >Certificates</a></div>
            
        </div>
        <div class="shortcuts" id="tools">
        
            <div><a href="./"><img src="../static/images/menu.png" alt="" ></a></div>
            <div><a href="./events"><img src="../static/images/calendar2.png" alt="" ></a></div>
            <div><a href="./projects"><img src="../static/images/window.png" alt="" ></a></div>
            <div><a href="./teams"><img src="../static/images/teams.png" alt="" ></a></div>
            <div><a href="http://certificate-generator-dsc.herokuapp.com/" ><img src="../static/images/certificate6.png" alt="" ></a></div>
            
        </div>
    </div>
    <img src="../static/images/dscbottom1.JPG" id="bottomimg">
</div>


    `
)

var open=false;
       document.querySelector('#navigation').addEventListener('mouseover',()=>{
           open=true;
           document.getElementById('navigation').style.transform="translate3d(0%,0px,0px)"
       })
       document.querySelector('#navigation').addEventListener('mouseleave',()=>{
           open=false;
           document.getElementById('navigation').style.transform="translate3d(-62%,0px,0px)"
       })
       document.getElementById('logo').addEventListener('click',()=>{
           if(open==true){
               open=false
            document.getElementById('navigation').style.transform="translate3d(-62%,0px,0px)"
           }
           else{
               open=true
            document.getElementById('navigation').style.transform="translate3d(0%,0px,0px)"

           }
       })
     
      
       if(window.location.href.split('/').slice(-1)[0]==='#' | window.location.href.split('/').slice(-1)[0]===''){
           document.querySelector('.routes div:nth-child(1n) a').style.color="rgb(255,255,255)";
          
       }
       else if(window.location.href.split('/').slice(-1)[0]==='events'){
        document.querySelector('.routes div:nth-child(2n) a').style.color="rgb(255,255,255)";
       
       }
       else if(window.location.href.split('/').slice(-1)[0]==='projects'){
        document.querySelector('.routes div:nth-child(3n) a').style.color="rgb(255,255,255)";
     
       }
       else if(window.location.href.split('/').slice(-1)[0]==='teams'){
        document.querySelector('.routes div:nth-child(4n) a').style.color="rgb(255,255,255)";
      
       }

       