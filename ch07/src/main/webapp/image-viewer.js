imageViewer = {
	init: function() {
		$(imageViewer._initialize);
	},
	_initialize: function() {
		$('#btn-change').click(imageViewer._changeImage);
		$('#btn-slideshow').click(imageViewer._slideShow);
	},
	_changeImage: function() {
		var index = Math.floor(Math.random()*imageViewer._images.length);

		//while($("img").attr("title")===imageViewer._images[index].name) {
		//	index = Math.floor(Math.random()*imageViewer._images.length);
		//}
		
		$("img").attr({
			src: "images/" + imageViewer._images[index].file,
			title: imageViewer._images[index].name
		});
	},
	_slideShow: function() {
		if(imageViewer._intervalId == null) { // intervalId가 null이면 실행
			imageViewer._intervalId = setInterval(imageViewer._changeImage, 1000);
			$('#btn-slideshow').text("슬라이드쇼 끝");
		} else {
			clearInterval(imageViewer._intervalId); // 멈추기
			imageViewer._intervalId = null; // intervalId를 null로 만들어야 다시 시작할 수 있음
			$('#btn-slideshow').text("슬라이드쇼 시작");
		}
	},
	_intervalId : null,
	_images: [{
		name: '국화', 
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막', 
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'	
	}, {
		name: '젤리피쉬', 
		file: 'Jellyfish.jpg'	
	}, {
		name: '코알라', 
		file: 'Koala.jpg'	
	}, {
		name: '등대', 
		file: 'Lighthouse.jpg'	
	}, {
		name: '펭귄', 
		file: 'Penguins.jpg'	
	}, {
		name: '튤립', 
		file: 'Tulips.jpg'	
	}]
}