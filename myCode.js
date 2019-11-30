
window.onload = function(){

	//const cursor = document.querySelector('.cursor');
	//console.log("loaded");

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

	// var fade = new Audio("fade.mp3");
	// fade.loop = false;
	// fade.play();
	//
	// var audio = $("fade.mp3")[0];
	// $("cf").mouseenter(function(){
	// fade.play();
	// });

	let myPostImage = document.getElementById('postImage');
	let postImageArray = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png","40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png","50.png","51.png","52.png","53.png","54.png","55.png","56.png","57.png","58.png","59.png","60.png","61.png","62.png","63.png","64.png","65.png","66.png","67.png","68.png","69.png","70.png","71.png","72.png","73.png","74.png","75.png","76.png","77.png","78.png","79.png","80.png","81.png","82.png","83.png","84.png","85.png","86.png","87.png","88.png","89.png","90.png","91.png","92.png","93.png","94.png","95.png","96.png","97.png","98.png","99.png","100.png","101.png","102.png","103.png","104.png","105.png","106.png","107.png","108.png","109.png","110.png","111.png","112.png","113.png","114.png","115.png","116.png","117.png","118.png","119.png","120.png","121.png","122.png","123.png","124.png","125.png","126.png","127.png","128.png","129.png","130.png","131.png","132.png","133.png","134.png","135.png","136.png","137.png","138.png","139.png","140.png","141.png","142.png","143.png","144.png","145.png","146.png","147.png","148.png","149.png","150.png","151.png","152.png","153.png","154.png","155.png","156.png","157.png","158.png","159.png","160.png","161.png","162.png","163.png","164.png","165.png","166.png","167.png","168.png","169.png","170.png","171.png","172.png","173.png","174.png","175.png","176.png","177.png","178.png","179.png","180.png","181.png","182.png","183.png","184.png","185.png","186.png","187.png","188.png","189.png","190.png","191.png","192.png","193.png","194.png","195.png","196.png","197.png","198.png","199.png","200.png",];

	var firstPostImageValue = Math.random() * 50;
	var theFirstPostImage = Math.ceil(firstPostImageValue);
	let postImageIndex = theFirstPostImage;


	let myImage = document.getElementById('mainImage');
	let imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg","img5.jpg", "img6.jpg","img7.jpg", "img8.jpg","img9.jpg", "img10.jpg","img11.jpg", "img12.jpg","img13.jpg", "img14.jpg","img15.jpg", "img16.jpg","img17.jpg", "img18.jpg","img19.jpg", "img20.jpg","img21.jpg", "img22.jpg","img23.jpg", "img24.jpg", "img25.jpg", "img26.jpg", "img27.jpg", "img28.jpg","img29.jpg", "img30.jpg","img31.jpg", "img32.jpg","img33.jpg", "img34.jpg","img35.jpg", "img36.jpg","img37.jpg", "img38.jpg","img39.jpg", "img40.jpg","img41.jpg", "img42.jpg","img43.jpg", "img44.jpg","img45.jpg", "img46.jpg","img47.jpg", "img48.jpg", "img49.jpg","img50.jpg", "img51.jpg", "img52.jpg", "img53.jpg", "img54.jpg", "img55.jpg","img56.jpg", "img57.jpg","img58.jpg", "img59.jpg","img60.jpg", "img61.jpg","img62.jpg", "img63.jpg","img64.jpg", "img65.jpg","img66.jpg", "img67.jpg","img68.jpg", "img69.jpg","img70.jpg", "img71.jpg","img72.jpg", "img73.jpg","img74.jpg", "img75.jpg", "img76.jpg", "img77.jpg", "img78.jpg", "img79.jpg","img80.jpg", "img81.jpg","img82.jpg", "img83.jpg","img84.jpg", "img85.jpg","img86.jpg", "img87.jpg","img88.jpg", "img89.jpg","img90.jpg", "img91.jpg","img92.jpg", "img93.jpg","img94.jpg", "img95.jpg","img96.jpg", "img97.jpg","img98.jpg", "img99.jpg", "img100.jpg","img101.jpg", "img102.jpg", "img103.jpg","img104.jpg", "img105.jpg", "img106.jpg","img107.jpg", "img108.jpg", "img109.jpg","img110.jpg", "img111.jpg", "img112.jpg","img113.jpg", "img114.jpg", "img115.jpg","img116.jpg", "img117.jpg", "img118.jpg","img119.jpg", "img120.jpg", "img121.jpg","img122.jpg", "img123.jpg","img124.jpg","img125.jpg", "img126.jpg", "img127.jpg","img128.jpg", "img129.jpg", "img130.jpg","img131.jpg", "img132.jpg", "img133.jpg","img134.jpg", "img135.jpg", "img136.jpg","img137.jpg", "img138.jpg", "img139.jpg","img140.jpg","img141.jpg","img142.jpg","img143.jpg","img144.jpg","img145.jpg","img146.jpg","img147.jpg","img148.jpg", "img149.jpg","img150.jpg","img151.jpg","img152.jpg","img153.jpg","img154.jpg","img155.jpg","img156.jpg","img157.jpg","img158.jpg","img159.jpg","img160.jpg","img161.jpg","img162.jpg","img163.jpg","img164.jpg","img165.jpg","img166.jpg","img167.jpg","img168.jpg","img169.jpg","img170.jpg","img171.jpg","img172.jpg","img173.jpg","img174.jpg","img175.jpg","img176.jpg","img177.jpg","img178.jpg","img179.jpg","img180.jpg","img181.jpg","img182.jpg","img183.jpg","img184.jpg","img185.jpg","img186.jpg","img187.jpg","img188.jpg","img189.jpg","img190.jpg","img191.jpg","img192.jpg","img193.jpg","img194.jpg","img195.jpg","img196.jpg", "img197.jpg","img198.jpg","img199.jpg","img200.jpg",];


	var firstImageValue = Math.random() * 200;
	var theFirstImage = Math.ceil(firstImageValue);
	let imageIndex = theFirstImage;


	let button = document.getElementById("postButton");
	button.addEventListener('click', () => {
		//console.log("clicked");
		myImage.classList.add("mainImageOn");
		myImage.classList.remove("mainImageOff");
		changeImage();
		random();
		//roundCounter();
		//changeImageValue();
	});

	let pButton = document.getElementById("postButton");
	pButton.addEventListener('click', () => {
		//console.log("clicked");
		myPostImage.classList.add("postImageOn");
		myPostImage.classList.remove("postImageOff");
		changePostImage();
		random();
		//roundCounter();
		//changeImageValue();
		var sweep = document.getElementById("foobar");
		sweep.play();
	});

	button.addEventListener('mouseover', () => {
		PlaySound('mySound');
	});
	$("#cf").on("mouseover", function(){
		$('#cf').fadeOut(1500 ,function(){
			$('#cf').remove();
		});
	});
	// $("#cf.top").on("mouseover", function(){
	// 	var audio = $("fade.mp3")[0];
	// 	fade.play();
	// });

	function changeImage(){
		//console.log("changed");
		var value = Math.random() * 200;
		var imageValue = Math.ceil(value);
		console.log(imageValue+" imageValue");
		myImage.setAttribute("src", imageArray[imageIndex]);
		imageIndex = imageValue;
		if (imageIndex > 199) {imageIndex = 0;}

	}

	function changePostImage(){
		//console.log("post changed");
		var pValue = Math.random() * 200;
		var postImageValue = Math.ceil(pValue);
		console.log(postImageValue+" postValue");
		myPostImage.setAttribute("src", postImageArray[postImageIndex]);
		postImageIndex = postImageValue;
		if (postImageIndex > 199) {postImageIndex = 0;}
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

	function changeImageValue(){
		// var value = Math.random() * 200;
		// var imageValue = Math.ceil(value);
		// console.log(imageValue);
	}
}

function increaseValue() {
	var value = parseInt(document.getElementById('numberIn').value, 10);
	value = isNaN(value) ? 0 : value;
	value >6 ? value = 6 : '';
	value++;
	document.getElementById('numberIn').value = value;
	// console.log(value);
	var point = document.getElementById("foobar2");
	point.play();
}

function decreaseValue() {
	var value = parseInt(document.getElementById('numberIn').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	//console.log(document.getElementById('numberIn'))
	document.getElementById('numberIn').value = value;
	// console.log(value);
}

function increaseValue2() {
	var value = parseInt(document.getElementById('numberIn2').value, 10);
	value = isNaN(value) ? 0 : value;
	value >3 ? value = 3 : '';
	value++;
	document.getElementById('numberIn2').value = value;
	// console.log(value);
	var point = document.getElementById("foobar2");
	point.play();
}

function decreaseValue2() {
	var value = parseInt(document.getElementById('numberIn2').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	//console.log(document.getElementById('numberIn'))
	document.getElementById('numberIn2').value = value;
	// console.log(value);
}

function random(){
	//document.getElementById("number").innerHTML = Math.floor(Math.random()*4+2)+" Players!";
	var determineChance = Math.floor(Math.random() * 100);
	//console.log(determineChance);

	if (determineChance < 20){
		document.getElementById("number").innerHTML = 2 +" Players!"
	}
	else if (determineChance < 50){
		document.getElementById("number").innerHTML = 3 +" Players!"
	}
	else if (determineChance > 50){
		document.getElementById("number").innerHTML = 4 +" Players!"
	}
	if (determineChance > 80){
		document.getElementById("number").innerHTML = 5 +" Players!"
	}
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
