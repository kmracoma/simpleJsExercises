function getAverage(x)
{
    var total = 0;
    var count=0
    for(var i in x)
    {
        count++
        total += x[i]
    }
    var avg = total/count
    console.log(Math.ceil(avg))
}

var x = [1, 4, 5];
getAverage(x)