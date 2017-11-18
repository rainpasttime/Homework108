window.onload = function(){
    document.getElementById("submit").onclick = function(){
        getScores();
    };
};
let sumScores = 0;
function getScores()
{
    fillBlanks();
    signalChoise();
    multipleChoise();
    trueOrFalse();
    shortAnswer();

    //alert("总得分："+sumScores.toString());
    document.getElementById("scores").innerHTML = "得分："+sumScores.toString();

}

function fillBlanks()
{
    let rightAnswer = ["统一建模语言","封装性","多态性","继承性"];
    let blanks = document.getElementsByName("fillBlanks");
    for(let i =0;i<blanks.length;i++)
    {
        if(i===0 && blanks[i]===rightAnswer[0])
        {
            sumScores+=5;
        }
        else
        {
            let answer = blanks[i].value;
            if(rightAnswer.indexOf(answer)!==-1&&rightAnswer.indexOf(answer)!==0)
            {
                sumScores+=5;
            }
        }
    }
}

function signalChoise()
{
    let radioOne = document.getElementsByName("RadioOne");
    if(radioOne[1].checked)
    {
        sumScores+=10;
    }
    let radioTwo = document.getElementsByName("RadioTwo");
    if(radioTwo[0].checked)
    {
        sumScores+=10;
    }
}

function multipleChoise()
{
    let multipleOne = document.getElementsByName("multipleOne");
    if((multipleOne[0].checked) && (multipleOne[1].checked) &&(multipleOne[2].checked===false) && (multipleOne[3].checked))
    {
        sumScores+=10;
    }
    let multipleTwo = document.getElementsByName("multipleTwo");
    if((multipleTwo[0].checked) && (multipleTwo[1].checked) && (multipleTwo[2].checked) && (multipleTwo[3].checked===false))
    {
        sumScores+=10;
    }
}

function trueOrFalse()
{
    let judgeOne = document.getElementsByName("judgeOne");
    if(judgeOne[1].checked)
    {
        sumScores+=10;
    }
    let judgeTwo = document.getElementsByName("judgeTwo");
    if(judgeTwo[0].checked)
    {
        sumScores+=10;
    }
}

function shortAnswer()
{
    let answer = document.getElementById("shortAnswer").value;
    if(answer==="模型是对现实世界的简化和抽象,模型是对所研究的系统,过程,事物或概念的一种表达形式.可以是物理实体;可以是某种图形;或者是一种数学表达式.")
    {
        sumScores+=20;
    }
}
