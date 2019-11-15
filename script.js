console.log("Hello World!");
const Size = 500; //array size.
let num = new Array(Size);
let op = new Array(Size);
let counter = 0; //This keeps track of what sub the op and num array should be
let resneed = false;
let dec = false;
let decounter = 0;

window.onload = cleararr();

function cleararr()
{
	document.getElementById("screentext").innerHTML = "0";
	for(let i = 0; i < Size; i++)// set every item in op array to null and in num array to 0
	{
		num[i] = null;
		op[i] = null;
	}//for
	counter = 0;
	console.log("CLEAR");
	dec = false;
	decounter = 0;
}//cleararr

function addnum(n)//it adds n to the end of a string
{
	if(resneed)
	{
		resneed = false;
		num[counter] = null;
	}//if resneed
	if(num[counter] == null)
	{
		num[counter] = 0;
	}
	if(dec)
	{
		num[counter] = num[counter] + (n / Math.pow(10, decounter + 1));
		decounter++;
	}//if dec
	else
		num[counter] = num[counter] * 10 + n;
	document.getElementById("screentext").innerHTML = num[counter];
}//addnum

function addop(o)//sets the operator to o and increments the counters
{
	op[counter] = o;
	document.getElementById("screentext").innerHTML = op[counter];
	counter++;
	dec = false;
	decounter = 0;
}//addop

function calculate()
{
	let total = num[0];
	for(let i = 0; i < counter; i++)
	{
		if(num[i + 1] != null)
		{
			if(op[i] == "+")
			{
				total += num[i + 1];
			}// if +
			else if(op[i] == "-")
			{
				total -= num[i + 1];
			}// if -
			else if(op[i] == "*")
			{
				total *= num[i + 1];
			}// if *
			else if(op[i] == "/")
			{
				total /= num[i + 1];
			}// if /
		}//if blank
	}//for i
	cleararr();
	num[0] = total;
	resneed = true;
	console.log(total);
	document.getElementById("screentext").innerHTML = total;
	return total;
}//calcualte

function decimal()
{
	if(!dec)
	{
		dec=true;
		document.getElementById("screentext").innerHTML = num[counter] + ".";
		console.log("test");
	}//if !dec
}//decimal

document.addEventListener('keydown', function(event)//read keyboard input
{
	for ( let i = 48; i <= 57; i++)//checks if input is number
	{
		if(event.which == i && event.key != "*")
		{
			addnum(i-48);
		}//if 
	}//for i
	if(event.key == '*' || event.which == 88)
		addop("*");
	else if(event.key == "+")
		addop("+");
	else if(event.key == "-")
		addop("-");
	else if(event.which == 191 || event.key == 'd')
		addop('/');
	else if(event.which == 13 || event.key =="=")
		calculate();
	else if(event.which == 8 || event.key == "c" || event.key == "C"|| event.which == 27)
		cleararr();
	else if(event.key == ".")
		decimal();

});
