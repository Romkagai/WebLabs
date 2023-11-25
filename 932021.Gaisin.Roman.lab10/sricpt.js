let frame_time = 20;
let isRabbit = false;
let trickGoingOn = false;
let objectMoving = false;
let statusLamp = false;

function moveFromBottom(new_height, animation_time, element_id) {
    if (objectMoving) return;
    objectMoving = true;

    let elem = document.getElementById(element_id);
    let current_height = parseInt(elem.style.bottom) || 0;

    let difference = new_height - current_height;
    let number_of_frames = animation_time / frame_time;
    let step_height = difference / number_of_frames;

    let frame_counter = 0;

    let timer = setInterval(function () {
        current_height += step_height;
        elem.style.bottom = current_height + 'vh';

        frame_counter++;
        if (frame_counter >= number_of_frames) {
            clearInterval(timer);
            objectMoving = false;
        }
    }, frame_time);
}

function switchLamp(time, ropeHeight, opacityLight) {
    let lampElem = document.getElementById("lamp_rope");
    let lightElem = document.getElementById("light");
    let wizardElem = document.getElementById("wizard");
    let hatElem = document.getElementById("hat");
    let triggerElem = document.getElementById("trigger");

    let start = Date.now();

    let number_of_frames = time / frame_time;
    let step_height = ropeHeight / number_of_frames;
    let stepLight = opacityLight / number_of_frames;
    let stepOpacityObject = 0;
    if (opacityLight != 0)
        stepOpacityObject = 1 / number_of_frames;
    if (statusLamp) {
        stepLight *= -1;
        stepOpacityObject *= -1;
    }

    let frame_counter = 0;
    let timer = setInterval(function () {
        addTop(lampElem, step_height);
        changeOpacity(lightElem, stepLight);
        changeOpacity(wizardElem, stepOpacityObject);
        changeOpacity(hatElem, stepOpacityObject);
        changeOpacity(triggerElem, stepOpacityObject);
        frame_counter++;

        if (frame_counter >= number_of_frames) {
            clearInterval(timer);
            return;
        }
    }, frame_time);

    if (opacityLight != 0)
        statusLamp = !statusLamp;
}

function makeTrick() {
    if (trickGoingOn)
        return;

    trickGoingOn = true;
    moveFromBottom(12, 200, 'trigger');

    setTimeout(function () {
        if (isRabbit)
            document.getElementById('trigger').src = "images/dove.png";
        else
            document.getElementById('trigger').src = "images/rabbit.png";

        isRabbit = !isRabbit;
        moveFromBottom(25, 200, 'trigger');

        trickGoingOn = false;
    }, 300);
}

function changeOpacity(elem, num) {
    let opacityStr = elem.style.opacity;
    let opacityNum = 0;
    if (opacityStr.length != 0) {
        opacityNum = parseFloat(opacityStr);
    }
    opacityNum += num;

    elem.style.opacity = opacityNum;
}

function addTop(elem, num) {
    let topStr = elem.style.top;
    let topNum = 0;
    if (topStr.length != 0) {
        topStr.replace('vh', '');
        topNum = parseFloat(topStr);
    }
    topNum += num;
    elem.style.top = topNum + 'vh';
}