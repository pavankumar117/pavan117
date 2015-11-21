var arr = [{
'Id' : '72',
'Name' : 'Secendrabad',
'City' : 'Vijayawada'
},
{
'Id' : '91',
'Name' : 'H',
'City' : 'Hyderabad'
},
{
'Id' : '32',
'Name' : 'K',
'City' : 'Guntur'
},
{
  'Id' : '53',
  'Name' : 'P',
  'City' : 'Amaravathi'
},
{
  'Id' : '1',
  'Name' : 'Z',
  'City' : 'Warangal'
},
{
  'Id' : '67',
  'Name' : 'F',
  'City' : 'Secendrabad'
}
];
var arr1=[];
var keys = Object.keys(arr[0]);
var length=keys.length;

// function for printing tables.

function printtables(a){

var dvv = document.getElementById('mytable');
//document.getElementById('table12').innerHTML='';
var tab = document.createElement('table');
tab.setAttribute('border','1');
tab.setAttribute('id' , 'table12');
var row = document.createElement('tr');
for( var k=0; k<length;k++){
var head = document.createElement('th');
var headText = document.createTextNode(keys[k]);
head.setAttribute('onclick','mysort('+ k +')');
head.setAttribute('id','sort'+i);
head.appendChild(headText);
row.appendChild(head);
tab.appendChild(row);
}
for(var i = 0; i <a.length; i++) {
var row1 = document.createElement('tr');
for(var j=0; j<length; j++) {
var col = document.createElement('td');
var colText = document.createTextNode(a[i][keys[j]]);
col.appendChild(colText);
row1.appendChild(col);
}
tab.appendChild(row1);
}
dvv.appendChild(tab);
// End of creation of table
}

//Function for sorting the Elements.

function mysort(c){
for(var i=0; i<arr.length;i++){
for(var j=i+1; j<arr.length;j++){
if(arr[i][keys[c]]>arr[j][keys[c]]){
var temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
printtables(arr);
}

//function for filtering.

function myfilter() {
  var x = (document.getElementById('search').value);
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<length; j++){
      if(arr[i][keys[j]] === x) {
        var temp = arr[i];
        arr1.push(temp);
        console.log(arr1[0]);

      }
      else {
        console.log('element not found');
      }
    }
  }
  printtables(arr1);
    console.log('hello');
}
