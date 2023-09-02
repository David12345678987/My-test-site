
//model
let titls;
const st = JSON.parse( localStorage.getItem('key'));
if (Array.isArray(st)) {
    titls = st;
}else { 
    titls = [{
    dodat: 'todo1',
    todo: '45-2022',
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

function db(event) {
    const dletb = event.target;
    const idtd = dletb.id;
    delet(idtd);
    render();
}


//view
  function render(){

    document.getElementById('tl').innerHTML ='';

    titls.forEach(function (todoe){
     const element = document.createElement('div');
     element.innerText =  todoe.dodat +' '+ todoe.todo;
     const dletb = document.createElement('button');
     dletb.innerText = 'delet';
     dletb.style = 'margin-left: 3%';
     dletb.onclick = db;
     dletb.id = todoe.id;
     element.appendChild(dletb);
     const til = document.getElementById('tl')
     til.appendChild(element);
    });
  };

   

