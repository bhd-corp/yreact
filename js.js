document.getElementById('start').onclick = function() {
	let y = document.getElementById('y');
	y.style.display = 'block';
	let y2 = document.getElementById('menu');
	y2.style.display = 'none';
let h1 = document.getElementById('h1');
let x = 0;
let h1r = document.getElementById('h1r');
setInterval( function(){
	let rand = Math.random() * 5;
	rand = Math.ceil(rand);
	if (rand == 1) {
		x=0;
		h1.innerHTML = 'КРАСНЫЙ';
		h1.style.color = 'green';
		h1.style.left = '130px';
		h1r.innerHTML = 'КРАСНЫЙ';
		h1r.style.color = 'green';
		h1r.style.left = '130px';
	}
	if (rand == 2) {
		x=0;
		h1.innerHTML = 'ЧЕРНЫЙ';
		h1.style.color = 'white';
		h1.style.left = '180px';
		h1r.innerHTML = 'ЧЕРНЫЙ';
		h1r.style.color = 'white';
		h1r.style.left = '180px';
	}
	if (rand == 3) {
		h1.innerHTML = 'СИНИЙ';
		x=1;
		h1.style.color = 'blue';
		h1.style.left = '240px';
		h1r.innerHTML = 'СИНИЙ';
		h1r.style.color = 'blue';
		h1r.style.left = '240px';
	}
	if (rand == 4) {
		x=2;
		h1.innerHTML = 'ЖЕЛТЫЙ';
		h1.style.color = 'yellow';
		h1.style.left = '180px';
		h1r.innerHTML = 'ЖЕЛТЫЙ';
		h1r.style.color = 'yellow';
		h1r.style.left = '180px';
	}
	if (rand == 5) {
		x=0;
		h1.innerHTML = 'БЕЛЫЙ';
		h1.style.color = 'purple';
		h1.style.left = '230px';
		h1r.innerHTML = 'БЕЛЫЙ';
		h1r.style.color = 'purple';
		h1r.style.left = '230px';
	}
}, 1500);
let v = 0;
let k = document.getElementById('q1');
let p1 = document.getElementById('p1');
p1.addEventListener('click', function(){
	if (x == 1) {
		v+=1;
		q1.innerHTML = v;
	}
	else if (x == 2) {
		v+=1;
		q1.innerHTML = v;
	}
	else {
		v-=1;
		q1.innerHTML = v;
		if (v==-1) {
			location.reload();
		}
	}
});

let v2 = 0;
let k2 = document.getElementById('q2');
let p2 = document.getElementById('p2');
p2.addEventListener('click', function(){
	if (x == 1) {
		v2+=1;
		k2.innerHTML = v2;
	}
	else if (x == 2) {
		v2+=1;
		k2.innerHTML = v2;
	}
	else {
		v2-=1;
		k2.innerHTML = v2;
		if (v2==-1) {
			location.reload();
		}
	}
});
};