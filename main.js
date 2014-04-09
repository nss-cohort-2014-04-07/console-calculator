var response = query();

while(!isQuit(response)){
  if(response === 'a' || response === 's' || response === 'm' || response === 'd' || response === 'e'){
    var x = getInput();
    var y = getInput();
    var out, operation;

    switch(response){
      case 'a':
        out = add(x, y);
        operation = 'sum';
        break;
      case 's':
        out = sub(x, y);
        operation = 'difference';
        break;
      case 'm':
        out = mul(x, y);
        operation = 'product';
        break;
      case 'd':
        out = div(x, y);
        operation = 'division';
        break;
      case 'e':
        out = exp(x, y);
        operation = 'power';
    }

    var string = getString(x, y, out, operation);
  } else {
    var x = getInput();
    var out, operation;

    switch(response){
      case 'r':
        out = root(x);
        operation = 'square root';
        break;
      case 'f':
        out = fact(x);
        operation = 'factorial';
    }

    var string = getString(x, null, out, operation);
  }

  console.log(string);
  response = query();
}

function query(){
  var response = prompt('(a)dd, (s)ub, (m)ul, (d)iv, (e)xp, (r)oot, (f)act, (q)uit');
  return response.toLowerCase();
}

function isQuit(letter){
  return letter === 'q';
}

function getInput(){
  var value = prompt('Enter value');
  return value * 1;
}

function add(x, y){
  return x + y;
}

function sub(x, y){
  return x - y;
}

function mul(x, y){
  return x * y;
}

function div(x, y){
  return x / y;
}

function exp(x, y){
  return Math.pow(x, y);
}

function root(x){
  return Math.sqrt(x);
}

function fact(x){
  var total = 1;

  for(var i = 1; i <= x; i++){
    total *= i;
  }

  return total;
}

function getString(x, y, out, operation){
  if(y){
    return 'The ' + operation + ' of ' + x + ' and ' + y + ' is ' + out;
  } else {
    return 'The ' + operation + ' of ' + x + ' is ' + out;
  }
}
