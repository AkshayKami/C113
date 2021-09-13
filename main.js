function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
 image(video, 0, 0, 650, 500);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name.value");
}