const size = 8;
var output = '';
for ( let y = 0; y < size; y++){
    for (let x = 0; x < size; x++) {
        if((x+y)%2==0){
            output += ' ';
        }
        else {
            output += '#';
        }
    }
    output += '\n';
}
console.log(output);