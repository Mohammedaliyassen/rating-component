function selected(par){
    var i=1;
     for(i;i<=par;i++){
        document.getElementById('rate'+i).style.cssText=' background-color: #fc7613; color:#fff';  
        }
    for(i=5;i > par;i--){
        document.getElementById('rate'+i).style.cssText=' background-color: #262e39; color:#fff';  
        }
    document.getElementById('butt1').addEventListener('click',()=>{
        document.getElementById('rotateMagic').style.cssText = 'transform: translate(-26vw, 20vh);'
        })
        document.querySelector('#fin').innerHTML =`You selected ${par} out of 5 `
    }
   
    



