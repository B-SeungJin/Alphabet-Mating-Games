var body;
var randNumArr = new Array();
var size = 16;
var cells;
setRandNumArr = function(){
    for(var i=0;i<size;)
    {
        var idx = Math.floor(Math.random()*size);
        if(randNumArr[idx] == undefined){
            randNumArr[idx] = String.fromCharCode(i%8+65);
            i++;
        }
    }
};

function init(){
    body = document.getElementsByTagName("body")[0];
    var heading = document.createElement("h1");
    heading.innerText = "Alphabet Mating Games";
    body.appendChild(heading);
    var puzzle = document.createElement("div");
    puzzle.id = 'puzzle';
    body.appendChild(puzzle);

    setRandNumArr();

    for(var i=0;i<size;i++)
    {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.id = "cell" + randNumArr[i];
        cell.innerText = randNumArr[i];
        cell.code = randNumArr[i];
        puzzle.appendChild(cell);
    }
};

function compare(){
    alert("Game Start");
    var tmp = null;
    for(var i=0;i<cells.length;i++){
        cells[i].onclick = function(){
            this.innerText = this.code;
            this.style.background = "green";
            if(tmp == null){
                tmp =this;
                tmp.st
            }
            else{
                if (tmp == this){
                    alert("You have clicked on the same cell.");
                    return;
                }
                if(tmp.code == this.code){
                    alert('Correct.');
                }
                else {
                    alert("It is not the same.");
                    tmp.innerText ='';
                    this.innerText ='';
                    tmp.style.background = "";
                    this.style.background ="";
                }
                tmp = null;
            }
        }
    }
}

function start(){
    var message = document.createElement('p');
    message.innerText = 'The game starts in 5second';
    body.appendChild(message);
    var sec = 5;

    var fn = setInterval(function(){
        sec--;
        message.innerText = 'The game starts in '+ sec + 'seconds';
        if (sec == 0){
            message.innerText ='Find the same alphabetic location.';
            clearInterval(fn);
        }
    },1000);
    setTimeout(function(){
        cells = document.getElementById('puzzle').getElementsByTagName("div");
        for(var i=0;i<size;i++){
            cells[i].innerText ="";
        }
        compare();
    },5000);

}

function main(){
    init();
    start();
}

window.onload = main;