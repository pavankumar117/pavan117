var arr =[
  {
    'username' : 'pavan',
    'password' : 'kumar'
  }];
  var keys = Object.keys(arr[0]);
  var length = keys.length;
  var dvv = document.getElementById('login');
    var but = document.createElement('BUTTON');
      for( var k = 0; k < length; k++) {
        var butText = document.createTextNode('Submit');
          but.setAttribute('onclick','compare('  + k +')');
          console.log(k);
        but.appendChild(butText);
        }
    dvv.appendChild(but);



function compare(c) {
  var x = document.getElementById('username').value;
  var y = document.getElementById('password').value;
  console.log(c);
  for(var i = 0; i < arr.length ; i++){
    for(var j = i+1; j < arr.length; j++) {
        console.log(x + "" + y);
      if(arr[i][keys[c]] == x && arr[j][keys[c]] == y){
        console.log('sucess');
      }
      else{
        console.log('failure');
      }
    }
  }
}
