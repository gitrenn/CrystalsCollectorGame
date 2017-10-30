$(document).ready(function(){

    var rand_num; 
    var wins = 0;
    var losses = 0;
    var user_total = 0;
    var isEqual = false;

    restartGame();

    function restartGame(){
        wins = 0;
        losses = 0;
        $(".winNum").text(wins);
        $(".lossNum").text(losses);
        $(".card-stats").text("Stats");
        clearResult();
    }

    function clearResult(){
        user_total = 0;
        $(".user-number").text(0);
        getRandomNum();
        getCrystalNum();
    }

    //generate a random number between 19 and 120
    function getRandomNum(){
        rand_num = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $(".numText").text(rand_num);
    }

    //generate a random number between 1 and 12;
    function getCrystalNum(){
        var redNum = Math.ceil(Math.random() * 12);
        $(".crystal-red").attr("value", redNum);
        var blueNum = Math.ceil(Math.random() * 12);
        $(".crystal-blue").attr("value", blueNum);
        var yellowNum = Math.ceil(Math.random() * 12);
        $(".crystal-yellow").attr("value", yellowNum);
        var greenNum = Math.ceil(Math.random() * 12);
        $(".crystal-green").attr("value", greenNum);
        
    }

    
    function setStats(){
        if(isEqual){
            $(".card-stats").text("You win!");
            wins++;
            $(".winNum").text(wins);
        }
        else{
            $(".card-stats").text("You lost!");
            losses++;
            $(".lossNum").text(losses);
        }
    }

  

    $(".crystal").on("click", function(){
        user_total += parseInt($(this).attr("value"));
        //  console.log($(this).attr("value"));
        if(user_total < rand_num){
            $(".user-number").text(user_total);
            isEqual = false;
        }
        else if(user_total === rand_num){
            console.log(user_total);
            console.log(rand_num);
            clearResult();
            isEqual = true;
            setStats();
        }
        else if(user_total > rand_num){
            clearResult();
            isEqual = false;
            setStats();
        }
        
    });

    $(".restart").on("click", function(){
        restartGame();
    });
});