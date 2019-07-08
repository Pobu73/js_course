document.onkeydown=function checkKeyCode(event){
	var keycode;
	if(!event) var event=window.event;
	if(event.keyCode) keycode=event.keyCode;
	else if(event.which) keycode=event.which;
	switch(keycode){
		case 13: ravno(); break;
		case 46: clear_c(); break;
		case 8: clear_one(); break;
		case 111: semn('/'); break;
		case 106: semn('*'); break;
		case 107: semn('+'); break;
		case 109: semn('-'); break;
		case 96: clic(0); break;
		case 97: clic(1); break;
		case 98: clic(2); break;
		case 99: clic(3); break;
		case 100: clic(4); break;
		case 101: clic(5); break;
		case 102: clic(6); break;
		case 103: clic(7); break;
		case 104: clic(8); break;
		case 105: clic(9); break;
	}
}

var b=0;
var k='';
var znak=false;

function oper(operation){//обработка операций
	k=operation;
	znak=false;
	b=parseInt(display.innerHTML);
}

function clear_c(){//обнуление значения на дисплее
	document.getElementById("display").innerHTML=0;
	b=0;
	k='';
	znak=false;
}

function clear_one(){
var display1=document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML=display1.substring(0,display1.length -1);
}

function ravno(){//вывод результата
	if(k!=''){
		switch(k){
			case '/': b=b/parseInt(display.innerHTML);
			break;
			case '*': b=b*parseInt(display.innerHTML);
			break;
			case '+': b=b+parseInt(display.innerHTML);
			break;
			case '-': b=b-parseInt(display.innerHTML);
			case '%': b=b%parseInt(display.innerHTML);
		}
		display.innerHTML=b;
		k='';
	}

}

function clic(number){
	var display=document.getElementById("display");
	if(display.innerHTML.length<22){
		if(display.innerHTML!=0 && znak==true)
			display.innerHTML+=number;
		else
			display.innerHTML=number;
		znak=true;
	} 
}