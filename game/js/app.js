onStart("Malborogame4v22"); //folder game name

function onStart(project_name) {
    $("#body").css("margin", "0");
    $("#loading_content").css("display", "grid");
    $("#gameContainer").css("display", "none");
    $("#progress-value").html("0%");

    gameInstance = UnityLoader.instantiate("gameContainer", "Build/" + project_name + ".json", {
        onProgress: UnityProgress
    });
}

function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module) {
        return;
    }
    var progress_raw = progress * 100;
    var progress_int = Number((progress_raw).toFixed(0));

    $("#progress-value").html(progress_int + "%");
    $("#progress").css("width", progress_int + "%");

    if (progress === 1 && !gameInstance.removeTimeout) {
        gameInstance.removeTimeout = setTimeout(function() {
            console.log("Time out");
            $("#loading_content").css("display", "none");
            $("#gameContainer").css("display", "block");
        }, 1000);
    }
}

function submitScore(score) {
    //do some code here while user submitting  score
    //postMessage //submit district
    console.log("Score Masuk : " + score);
    postMessage("district2_game_1");
}

function exit() {
    //do some code here while user requests quit from game / change the game
    //postMessage //close
    postMessage("closeMission1");
}

function play() {
    //do some code here while user starting to play
}

function getPoint() {
    var pointStatus = localStorage.getItem("point", 0);
    if (pointStatus == null || pointStatus == 0) {
        return 0;
    } else {
        return pointStatus;
    }
}

function getCar() {
    var carCode = localStorage.getItem("car", 0);
    if (carCode == null || carCode == 0) {
        return 0;
    } else {
        return carCode;
    }
}