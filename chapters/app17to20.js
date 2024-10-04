//Q=1
var arr=[[]]
console.log(array)
//Q=2
var array = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
console.log(array)
document.write(`<h1>Question 1 and 2 are on console screen</h1> <br><br>`)

//Q=3
document.write(`<h1>Question=3</h1>`)
for(i=1;i<=10;i++){document.write(`${i}<br>`)}

//Q=4
document.write(`<h1>Question=4</h1>`)
var tablenum=+prompt('enter the number of which you want count table')
var tableLength=+prompt('enter the length of table')
for(i=1;i<=tableLength;i++){document.write(`${tablenum}x${i}=${tablenum*i}<br>`)}

//Q=5
document.write(`<h1>Question=5</h1>`)
var fruits=['apple','banana','mango','orange','strawberry']
for(i=0;i<fruits.length;i++){document.write(fruits[i]+'<br>')}
for(i=0;i<fruits.length;i++){document.write('element at index ' +i+ ' is '+ fruits[i]+ '<br>')}

//Q=6
document.write(`<h1>Question=6</h1>`)
document.write(`<h1>COUNTING</h1>`)
for(var i=1;i<=15;i++){document.write(i+',')}
document.write(`<h1>REVERSE COUNTING</h1>`)
for(var i=10;i>=1;i--){document.write(i+',')}
document.write(`<h1>EVEN NUMBERS</h1>`)
for(var i=0;i<=20;i++){if(i%2===0){document.write(`${i},`)}}
document.write(`<h1>ODD NUMBERS</h1>`)
for(var i=0;i<=20;i++){if(i%2!=0){document.write(`${i},`)}}
document.write(`<h1>SERIES</h1>`)
for(var i=1;i<=20;i++){if(i%2===0){document.write(`${i}k,`)}}

Q=7
document.write(`<h1>Question=7</h1>`)
var bakeryitems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var demand=prompt('welcome to ABC bakery what do you want to order sie/ma,am')
var found=false
for(i=0;i<bakeryitems.length;i++){if(demand===bakeryitems[i]){found=true;break}}
if(found===true){document.write(`${demand} is available at index ${i} in our bakery`)}
else{document.write(`we are sorry ${demand} is not available at ABC bakery`)}

//Q=8
document.write(`<h1>Question=8</h1>`)
 var arr1=[24,53,78,91,12]
 var largestnum=arr1[0]
 for(var i=0; i<arr1.length-1; i++)
 {if(largestnum>arr1[i+1]){largestnum=largestnum}
 else{largestnum=arr1[i+1]}}
 document.write(`array item ${arr1}<br>`)
 document.write(`the largest number is ${largestnum}`)

//Q=9
document.write(`<h1>Question=9</h1>`)
 var arr2=[24,53,78,91,12]
 var smallestnum=arr2[0]
 for(var i=0; i<arr2.length-1; i++)
 {if(smallestnum<arr2[i+1]){smallestnum=largestnum}
 else{smallestnum=arr2[i+1]}}
 document.write(`array item ${arr2}<br>`)
 document.write(`the smallest number is ${smallestnum}`)

//Q=10
document.write(`<h1>Question=10</h1>`)
for(var i=1;i<=100;i++){if(i%5===0){document.write(`${i}, `)}}