var eat = function()
{
  console.log('eating')
}

var print = function(item)
{
  console.log(item)
}

var func2 = function(funcParam)
{
    funcParam();
}
func2(print)
