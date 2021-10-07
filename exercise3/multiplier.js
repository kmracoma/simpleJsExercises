//simple function to get the count of the multipliers of a certain number
//as long as it is less than or equal to the other number
function multiplier(x, y)
{
    var ans=0;
    var count=0
    var i=1
    
    while(ans<x)
    {
    ans = i*y
    if(ans>x)
    break
    count++
    i++
    }
    return count
}

var x = 10
var y = 3
var count = multiplier(x, y)
console.log(count)