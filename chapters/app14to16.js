document.write(`<h1>Question 1 to 6 are on console screen</h1> <br><br>`)

//Q=1
var emptyarr=[] //literal notayion
console.log(emptyarr)

//Q=2
var emptyarray=new Array //object notation
console.log(emptyarray)

//Q=3
var stringarray=['abc','123','@#$']
console.log(stringarray)

//Q=4
var numarray=[2,34,2,4,646,76]
console.log(numarray)

//Q=5
var booleanarray=[true,false,false,true,true]
console.log(booleanarray)

//Q=6
var mixarray=[4,'abc',true]
console.log(mixarray)

//Q=7
document.write(`<h1>Question=7</h1>`)
var qualifications=['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
for(var i=0;i<qualifications.length;i++){document.write(qualifications[i]+'<br>')}

//Q=8
document.write(`<h1>Question=8</h1>`)
var studentnames=['arshyan','fabiha','sarim']
var scoreofarshyan=+prompt('enter the score of arshyan')
var scoreoffabiha=+prompt('enter the score of fabiha')
var scoreofsarim=+prompt('enter the score of sarim')
var scoreofstudents=[]
var totalscore=500
scoreofstudents[0]=scoreofarshyan
scoreofstudents[1]=scoreoffabiha
scoreofstudents[2]=scoreofsarim
var perofarshyan=(scoreofarshyan/totalscore)*100
var peroffabiha=(scoreoffabiha/totalscore)*100
var perofsarim=(scoreofsarim/totalscore)*100
document.write(`
score of ${studentnames[0]} is ${scoreofstudents[0]} and Percentage is ${perofarshyan}% <br>
score of ${studentnames[1]} is ${scoreofstudents[1]} and Percentage is ${peroffabiha}% <br>
score of ${studentnames[2]} is ${scoreofstudents[2]} and Percentage is ${perofsarim}% <br>`)

//Q=9
document.write(`<h1>Question=9</h1>`)
var colors=['white','blue','black','red','pink']
document.write(colors)
//a
document.write(`<h1>(a)</h1>`)
var addbegin=prompt('enter the color name you want to add in the begining of array')
colors.unshift(addbegin)
document.write(colors)
//b
document.write(`<h1>(b)</h1>`)
var addend=prompt('enter the color name you want to add in the end of array')
colors.push(addend)
document.write(colors)
//c
document.write(`<h1>(c)</h1>`)
var addbegin1=prompt('enter the 1st color name you want to add in the begining of array')
var addbegin2=prompt('enter the 2nd color name you want to add in the begining of array')
var addbegin3=prompt('enter the 3rs color name you want to add in the begining of array')
colors.unshift(addbegin1,addbegin2,addbegin3)
document.write(colors)
//d
colors.shift()
document.write(`<h1>(d)</h1>`)
document.write(colors)
//e
colors.pop()
document.write(`<h1>(e)</h1>`)
document.write(colors)
//f
document.write(`<h1>(f)</h1>`)
var colorindex=+prompt('enter the index number, where you want to add color')
var addcolor=prompt('enter the color name you want to add ')
colors.splice(colorindex,0,addcolor)
document.write(colors)
//g
document.write(`<h1>(g)</h1>`)
var deletindex=+prompt('enter the index number, from where you want to delet colors')
var deletcolor=+prompt('enter the total numbers of colors you want to delete  ')
colors.splice(deletindex,deletcolor)
document.write(colors)

//Q=10
document.write(`<h1>Question=10</h1>`)
var studentsScore=[]
for(var i=0;i<=4;i++){studentsScore[i]=+prompt('enter the score of student '+Number(i+1))
}
document.write(`scores of student : ${studentsScore}<br>`)
studentsScore.sort()
document.write(`ordered scores of students : ${studentsScore}`)

//Q=11
document.write(`<h1>Question=11</h1>`)
var citieslist=['karachi','lahore','islamabad','quetta','peshawar']
document.write(`cities list: ${citieslist}<br>`)
var selectedcitieslist=citieslist.slice(2,5)
document.write(`selected cities list: ${selectedcitieslist}<br>`)

//Q=12
document.write(`<h1>Question=12</h1>`)
var arrjoin = ['This ', 'is ', ' my ', ' cat']
var afterjoin=arrjoin.join(' ')
document.write(afterjoin)

//Q=13
document.write(`<h1>Question=13</h1>`)
var arrFIFO=[]
 for(var i=0;i<=4;i++){arrFIFO[i]=prompt('enter the name of computer device '+Number(i+1))
 }
document.write(`devices:${arrFIFO}<br><br>`)
var fifo=arrFIFO.shift()
document.write(`out:<br>${fifo}<br>`)
var fifo=arrFIFO.shift()
document.write(`out:<br>${fifo}<br>`)
var fifo=arrFIFO.shift()
document.write(`out:<br>${fifo}<br>`)
var fifo=arrFIFO.shift()
document.write(`out:<br>${fifo}<br>`)
var fifo=arrFIFO.shift()
document.write(`out:<br>${fifo}<br>`)

Q=14
document.write(`<h1>Question=14</h1>`)
var arrLIFO=[]
 for(var i=0;i<=4;i++){arrLIFO[i]=prompt('enter the name of computer device '+Number(i+1))
 }
document.write(`devices:${arrLIFO}<br><br>`)
var lifo=arrLIFO.pop()
document.write(`out:<br>${lifo}<br>`)
var lifo=arrLIFO.pop()
document.write(`out:<br>${lifo}<br>`)
var lifo=arrLIFO.pop()
document.write(`out:<br>${lifo}<br>`)
var lifo=arrLIFO.pop()
document.write(`out:<br>${lifo}<br>`)
var lifo=arrLIFO.pop()
document.write(`out:<br>${lifo}<br>`)

//Q=15
document.write(`<h1>Question=15</h1>`)
var brandnames=['apple','samsung','motorolla','nokia','huawei','oppo']
document.write(`<label>Choose a brand:<br></label>
<select>
<option value=""></option>
  <option value="${brandnames[0]}">${brandnames[0]}</option>
  <option value="${brandnames[1]}">${brandnames[1]}</option>
  <option value="${brandnames[2]}">${brandnames[2]}</option>
  <option value="${brandnames[3]}">${brandnames[3]}</option>
  <option value="${brandnames[4]}">${brandnames[4]}</option>
  <option value="${brandnames[5]}">${brandnames[5]}</option>
</select>
`)