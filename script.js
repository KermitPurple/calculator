console.log("Hello World!");
const Size = 500; //array size.
let num = new Array(Size);
let op = new Array(Size);
let counter = 0; //This keeps track of what sub the op and num array should be
let resneed = false;
let dec = false;

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
}//cleararr

function addnum(n)//it adds n to the end of a string
{
	if(resneed)
	{
		resneed = false;
		num[counter] = 0;
	}//if resneed
	if(num[counter==null])
	{
		num[counter] = 0;
	}
	if(dec)
	{
		num[counter] = num[counter] + n/10;
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
	dec=true;
	document.getElementById("screentext").innerHTML = num[counter] + ".";
	console.log("test");
}//decimal
