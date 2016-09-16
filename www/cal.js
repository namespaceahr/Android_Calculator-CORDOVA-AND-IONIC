var ans=0;
var mem=0;
var m=0;
var curr="";
var add1=0;
var add2=0;
var sub1=0;
var sub2=0;
var multi1=0;
var multi2=0;
var div1=0;
var div2=0;


function mPlus(btn)
{
m+=parseInt(document.getElementById('caltext').value);


}

function mMinus(btn)
{
m-=parseInt(document.getElementById('caltext').value);


}
function mClear(btn)
{
m=0;
}
function mShow(btn)
{
document.getElementById('caltext').value=m;

}

function sqrt(btn)
{
var sqrt=Math.sqrt(parseInt(document.getElementById('caltext').value));
document.getElementById('caltext').value=sqrt;
mem=document.getElementById('caltext').value;

}

function aS(btn)
{

document.getElementById('caltext').value=mem;

}
function equal(btn)
{
if(op=="div")
{

var div2=parseInt(curr);

var div=div1/div2;


document.getElementById('caltext').value=div;
div1=0;
div2=0;
curr=document.getElementById('caltext').value;
mem=div;
}
if(op=="multi")
{

var multi2=parseInt(curr);

var multi=multi1*multi2;


document.getElementById('caltext').value=multi;
multi1=0;
multi2=0;
curr=document.getElementById('caltext').value;
mem=multi;
}

if(op=="sub")
{

var sub2=parseInt(curr);

var sub=sub1-sub2;


document.getElementById('caltext').value=sub;
sub1=0;
sub2=0;
curr=document.getElementById('caltext').value;
mem=sub;
}

if(op=="sum")
{

var add2=parseInt(curr);

var sum=add1+add2;


document.getElementById('caltext').value=sum;
add1=0;
add2=0;
curr=document.getElementById('caltext').value;
mem=sum;
}
}
function add(btn)
{
add1=parseInt(curr);
curr="";
op="sum";
}

function sub(btn)
{
sub1=parseInt(curr);
curr="";
op="sub";
}
function multi(btn)
{
multi1=parseInt(curr);
curr="";
op="multi";
}

function div(btn)
{
div1=parseInt(curr);
curr="";
op="div";
}
function addcaltext(btn)
{
var ch=btn.innerHTML;
if(curr=="")
{
document.getElementById('caltext').value="";
curr=document.getElementById('caltext').value=ch;

}

 else if(document.getElementById('caltext').value=="0.")
{
document.getElementById('caltext').value=ch;

}
else
{
curr=document.getElementById('caltext').value+=ch;
}
}    

function aC(btn)
{
ans=0;
mem=0;
curr="";
add1=0;
add2=0;
sub1=0;
sub2=0;
multi1=0;
multi2=0;
div1=0;
div2=0;
 document.getElementById('caltext').value="0.";
}   