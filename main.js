const time = document.querySelector('.watch .time');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

let firstTime = true;

var statusBtn = 'not started';
let seconds = 0000;
let interval = null;

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

function timer() {
	seconds++;

	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - hrs * 3600) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = '0' + mins;
	if (hrs < 10) hrs = '0' + hrs;

	time.innerHTML = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!interval) {
        if (firstTime) {
            interval = setInterval(timer, 1000);
		    console.log('Stopwatch Started');
            makeGreen(startBtn);   
        }
        else {
            interval = setInterval(timer, 1000);
		    console.log('Stopwatch Resumed');
            makeGreen(startBtn);   
        }
	}
    else {
        if (firstTime) {
            console.log('Stopwatch Paused');
            clearInterval(interval);
            interval = null;
            makeRed(startBtn);
        }
        else {
            console.log('Stopwatch Paused');
            clearInterval(interval);
            interval = null;
            makeBlue(startBtn);
        }
    }
    firstTime = false;
}

function resetTimer() {
	console.log('Reset Timer');
	clearInterval(interval);
	interval = null;
	seconds = 0;
    time.innerHTML = '00:00:00';
    firstTime = true;
    makeRed(startBtn)
}

function makeGreen(element) {
	element.innerHTML = 'Pause';
	element.style.fontWeight = '600';
	element.style.backgroundColor = 'var(--secondary)';
	element.style.color = 'black';
	element.style.opacity = '80%';
}

function makeBlue(element) {
	element.innerHTML = 'Resume';
	element.style.fontWeight = '400';
	element.style.backgroundColor = '#03a9fc';
	element.style.color = 'white';
	element.style.opacity = '80%';
}

function makeRed(element) {
	element.innerHTML = 'Start';
	element.style.fontWeight = '300';
	element.style.backgroundColor = 'var(--primary)';
	element.style.color = 'white';
	element.style.opacity = '80%';
}
