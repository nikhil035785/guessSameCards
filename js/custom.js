$(document).ready(function(){
	let cardsArray = [
		{
			"img":"img/iron_man.jpg",
			"visible":"hide",
			"value":"1"
		},
		{
			"img":"img/black_widow.jpg",
			"visible":"hide",
			"value":"2"
		},
		{
			"img":"img/captian_america.jpg",
			"visible":"hide",
			"value":"3"
		},
		{
			"img":"img/iron_man.jpg",
			"visible":"hide",
			"value":"1"
		},
		{
			"img":"img/spider_man.jpg",
			"visible":"hide",
			"value":"4"
		},
		{
			"img":"img/black_widow.jpg",
			"visible":"hide",
			"value":"2"
		},
		{
			"img":"img/spider_man.jpg",
			"visible":"hide",
			"value":"4"
		},
		{
			"img":"img/captian_america.jpg",
			"visible":"hide",
			"value":"3"
		}
	]
	let arrayCopy = cardsArray;

	function shuffleCards(cardsArray){
		let temp;
		for (let i = cardsArray.length-1; i >= 0; i--) {
			let j = Math.floor((Math.random() * i) + 1);
			temp = cardsArray[j];
			cardsArray[j] = cardsArray[i];
			cardsArray[i] = temp;
		}
		$('#cards').empty();
		cardsArray.forEach(function(card){
			$('#cards').append(`<div class="card" style="background-image: url('${card.img}');" data-value="${card.value}"><div class="overlay overlays"></div></div>`);
		});
	}
	shuffleCards(cardsArray);

	let val1 = null,val2 = null;
	let score = 0;
	let lifes = 3;
	$('.overlay').click(function(){
		$('#middle-bottom').fadeIn(1000);
		$(this).fadeOut();
		if((val1 == null) && (lifes > 0)){
			val1 = $(this).parent().attr('data-value');
		}
		else{
			val2 = $(this).parent().attr('data-value');

			if ((val1 === val2) && (lifes > 0)) {
				score++;
				$('#score').text(score);
				val1 = null;
				val2 = null;
				if (score === 4) {
					$('#exampleModal').modal('show');
					$('#resultmsg').text('You Won');
					$('#score2').text(score);
					$('#chances').text(lifes);
				}
			} 
			else {
				val1 = null;
				val2 = null;
				$(this).fadeIn();
				$('.overlay').fadeIn(1100);
				lifes = lifes - 1;
				$('#lifes').empty();
				if (lifes > 0) {
					for (let i = 1; i <= lifes; i++) {
						$('#lifes').append(`<i class='fa fa-heart'></i>`);
					}
					score = 0;
					$('#score').text(score);
				}
				else{
					$('#score2').text(score);
					score = 0;
					$('#score').text(score);
					$('#exampleModal').modal('show');
					$('#resultmsg').text('You Lose');
					$('#ok').parent('div').css('justify-content','center');
					$('#ok').hide();
					$('#chances').text('0');
					// blockcards();
				}
			}
		}
	});

	$('#playagain').click(function(){
		window.location.reload();
	});

	// function blockcards(){
		// $('#cards').children('div').children('div').removeClass('overlay').addClass('blockOverlay');
	// 	$('.overlay').parent().addClass('blockOverlay');
	// 	$('#cards').children('div').children('div').remove();
	// }

	// $('.blockOverlay').click(function(){
	// 	$('#exampleModal').modal('show');
	// 	$('#resultmsg').text('You Lose');
	// 	$('#ok').parent('div').css('justify-content','center');
	// 	$('#ok').hide();

	// 	$('#cards').fadeOut(1000);
	// 	$('#middle-bottom').addClass('h-100');
	// });
});