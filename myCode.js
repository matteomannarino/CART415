
window.onload = function(){
//const cursor = document.querySelector('.cursor');
console.log("loaded");

// 	document.addEventListener('mousemove', e => {
// 		cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () => {
// 	cursor.classList.add("expand");
//
// 	setTimeout(() => {
// 		cursor.classList.remove("expand");
// 	}, 500)
// })

let myImage = document.getElementById('mainImage');
let imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg","img5.jpg", "img6.jpg","img7.jpg", "img8.jpg","img9.jpg", "img10.jpg","img11.jpg", "img12.jpg","img13.jpg", "img14.jpg","img15.jpg", "img16.jpg","img17.jpg", "img18.jpg","img19.jpg", "img20.jpg","img21.jpg", "img22.jpg","img23.jpg", "img24.jpg", "img25.jpg", "img26.jpg", "img27.jpg", "img28.jpg","img29.jpg", "img30.jpg","img31.jpg", "img32.jpg","img33.jpg", "img34.jpg","img35.jpg", "img36.jpg","img37.jpg", "img38.jpg","img39.jpg", "img40.jpg","img41.jpg", "img42.jpg","img43.jpg", "img44.jpg","img45.jpg", "img46.jpg","img47.jpg", "img48.jpg", "img49.jpg","img50.jpg", "img51.jpg", "img52.jpg", "im53.jpg", "img54.jpg", "img55.jpg","img56.jpg", "img57.jpg","img58.jpg", "img59.jpg","img60.jpg", "img61.jpg","img62.jpg", "img63.jpg","img64.jpg", "img65.jpg","img66.jpg", "img67.jpg","img68.jpg", "img69.jpg","img70.jpg", "img71.jpg","img72.jpg", "img73.jpg","img74.jpg", "img75.jpg", "img76.jpg", "img77.jpg", "img78.jpg", "img79.jpg","img80.jpg", "img81.jpg","img82.jpg", "img83.jpg","img84.jpg", "img85.jpg","img86.jpg", "img87.jpg","img88.jpg", "img89.jpg","img90.jpg", "img91.jpg","img92.jpg", "img93.jpg","img94.jpg", "img95.jpg","img96.jpg", "img97.jpg","img98.jpg", "img99.jpg", "img100.jpg","img101.jpg", "img102.jpg", "img103.jpg","img104.jpg", "img105.jpg", "img106.jpg","img107.jpg", "img108.jpg", "img109.jpg","img110.jpg", "img111.jpg", "img112.jpg","img113.jpg", "img114.jpg", "img115.jpg","img116.jpg", "img117.jpg", "img118.jpg","img119.jpg", "img120.jpg", "img121.jpg","img122.jpg", "img123.jpg","img124.jpg","img125.jpg", "img126.jpg", "img127.jpg","img128.jpg", "img129.jpg", "img130.jpg","img131.jpg", "img132.jpg", "img133.jpg","img134.jpg", "img135.jpg", "img136.jpg","img137.jpg", "img138.jpg", "img139.jpg","img140.jpg"];
let imageIndex = 1;

let button = document.getElementById("postButton");
button.addEventListener('click', () => {
	console.log("clicked");
	myImage.classList.add("mainImageOn");
	myImage.classList.remove("mainImageOff");
	changeImage();
	random();
	roundCounter();
});

button.addEventListener('mouseover', () => {
	console.log("mouseover");
	PlaySound('mySound');
});
$("#cf").on("mouseover", function(){
	console.log("over");
	$('#cf').fadeOut(1500 ,function(){
		console.log("done");
		$('#cf').remove();
	});
});



function changeImage(){
	console.log("changed");
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex > 139) {imageIndex = 0;}
}


function PlaySound(soundobj) {
		var thissound=document.getElementById(soundobj);
		thissound.play();
}

function StopSound(soundobj) {
		var thissound=document.getElementById(soundobj);
		thissound.pause();
		thissound.currentTime = 0;
}

function random(){
	document.getElementById("number").innerHTML = Math.floor(Math.random()*4+2)+" Players!";
}
}
