
//model
let titls;
const st = JSON.parse( localStorage.getItem('key'));
if (Array.isArray(st)) {
    titls = st;
}else { 
    titls = [{
    dodat: 'vid1',
    todo: 'vid',
    id: '1',
 }];

}

 //creat
 function creat(title, vime){
    const id = '' + new Date().getTime();
    titls.push( {
        dodat:title,
        todo:vime,
        id: id,
    });
    savt();
}

 //linck
 function link(idtd2){
    titls = titls.filter(function (todo){
    if (todo.id === idtd2){
        const vi = todo.dodat ;
        render2()
    } else {
        return true;
    }});
    savt();
}

 //deletes
 function delet(idtd){
    titls = titls.filter(function (todo){
    if (todo.id === idtd){
     return false;
    } else {
     return true;
    }});
    savt();
}



function savt(){
    localStorage.setItem('key', JSON.stringify(titls));
}

//controler
 render();
 function addtitil() {
    const textbox = document.getElementById('titl-l');
    const title = textbox.value;
    const vid = document.getElementById('imige');
    const vime = vid.value;
    creat(title, vime);
    render();
 }

//linck and id
 function db1() {
const link = todoe.id;
    render2();
}

function db2() {
    const a = document.getElementById('l')
    a.href = "t2vw.html";    
}
function db3() {
    const a = document.getElementById('l')
    a.href = "";
    
}



//delet
 function db(event) {
    const dletb2 = event.target;
    const idtd = dletb2.id;
    delet(idtd);
    render();
}


//view
  function render(){

    document.getElementById('tl').innerHTML ='';
    titls.forEach(function (todo){
     const element = document.createElement('div');
     const dletb = document.createElement('button');
     
     dletb.innerText = todo.dodat +' '+ todo.todo +' '+ todo.id;
     dletb.style = 'margin-left: 3% ; margin-top: 3% ; height:80px ; width:140px; background-color: rgb(100,110,190)';
     dletb.onmouseenter = db2;
     dletb.onmouseleave = db3;
     dletb.onclick = db1;
     dletb.id = todo.id;
     element.appendChild(dletb);


     const dletb2 = document.createElement('button');
     dletb2.innerText = 'Delete';
     dletb2.style = 'margin-left: 3% ; margin-top: 3% ';
     dletb2.onclick = db;
     dletb2.onmouseenter = db3;
     element.appendChild(dletb2);

     const til = document.getElementById('tl')
     til.appendChild(element);
    });
  };

   
  function render2(){
    document.getElementById('tl2').innerHTML ='';
    titls.forEach(function (todoe){
     const element = document.createElement('div');
     const dletb = document.createElement('button');
     dletb.innerText = 'link';
     dletb.style = 'margin-left: 3% ; margin-top: 3% ; height:400px ; width:700px; background-color: rgb(100,110,190)';
     dletb.id = todoe.id;
     element.appendChild(dletb);
     const til = document.getElementById('tl2')
     til.appendChild(element);
    });
  };
