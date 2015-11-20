var arr = [{
'id' : '3',
'name' : 'pavan'
},
{
  'id' : '1',
  'name' : 'akhil'
},
{
  'id' : '2',
  'name' : 'kumar'
}
];
var arr1=[];
var keys = Object.keys(arr[0]);
var length=keys.length;
// function for printing tables.
function printtables(){
//console.log('hello');
var dvv = document.getElementById('mytable');
var tab = document.createElement('table');
tab.setAttribute('border','1');
var row = document.createElement('tr');
for( var i=0; i<length;i++){
  var head = document.createElement('th');
  var headText = document.createTextNode(keys[i]);
  head.setAttribute('onclick','mysort()');
  head.setAttribute('id','sort[i]');
  head.appendChild(headText);
  row.appendChild(head);
  tab.appendChild(row);
}
for(var i = 0; i <arr.length; i++) {
  var row1 = document.createElement('tr');
  for(var j=0; j<length; j++) {
    var col = document.createElement('td');
    var colText = document.createTextNode(arr[i][keys[j]]);
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
    console.log(arr[i]);
  for(var j=i+1; j<arr.length;j++){
    if(arr[i][keys[c]]>arr[j][keys[c]]){
      var temp = arr[i][keys[c]];
      arr[i][keys[c]] = arr[j][keys[c]];
      arr[j][keys[c]] = temp;
    }
  }
}
for(var i=0;i<arr.length;i++) {
  console.log(arr[i]);
}
printtables();
}

function myfilter(f){
  var x = (document.getElementById('search').value);
  for(var i=0;i<arr.length; i++) {
    for(var j=i+1; j.length;j++){
      if(arr[i][keys[f]]=x) {
        arr1.push(x);
      }
      else{
        console.log('noting found');
      }
    }
  }
  console.log('you entered the value:'+x);
  printtables();
  console.log(x);
}
