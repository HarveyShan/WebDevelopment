var answer = 7;
var guess = prompt("Guess a number");
alert(guess);
if(guess > answer )
{
    alert("The number is too high");
}

else if(guess < answer)
{
    alert("the number is too small");
}

else if (guess == answer) //(Number)guess === answer
{
    alert("Correct");
}