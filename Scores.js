function get_Scores()
{
    var Sum_scores = 0;
    //填空题
    var one = document.getElementsByName("blanksOne");
    if(one[0].value==="统一建模语言")
        Sum_scores+= 5;

    one = document.getElementsByName("blanksTwo");
    if(one[0].value==="封装性")
        Sum_scores+=5;

    one = document.getElementsByName("blanksThree");
    if(one[0].value==="继承性")
        Sum_scores+=5;

    one = document.getElementsByName("blanksFour");
    if(one[0].value==="多态性")
        Sum_scores+=5;

    //单选题
    var two;
    two = document.getElementsByName("RadioA");
    if(two[1].checked===true)
    {
        Sum_scores+=10;
    }

    two = document.getElementsByName("RadioB");
    if(two[0].checked===true)
    {
        Sum_scores+=10;
    }

    //多选题
    one = document.getElementsByName("CheckBoxA");
    if(one[0].checked===true &&one[1].checked===true &&one[2].checked!==true && one[3].checked===true)
        Sum_scores+=10;
    one = document.getElementsByName("CheckBoxB");
    if(one[0].checked===true &&one[1].checked===true &&one[2]===true && one[3].checked!==true)
        Sum_scores+=10;

    //判断题
    one = document.getElementsByName("JudgeA");
    if(one[1].checked===true)
        Sum_scores+=10;
    one = document.getElementsByName("JudgeB");
    if(one[0].checked===true)
        Sum_scores+=10;

    //简答题
    one = document.getElementsByName("shortAnswer");
    if(one[0].innerText==="模型是对现实世界的简化和抽象,模型是对所研究的系统,过程,事物或概念的一种表达形式.可以是物理实体;可以是某种图形;或者是一种数学表达式.")
        Sum_scores+=20;

    var display = "得分："+Sum_scores.toString();

    alert(display);

}