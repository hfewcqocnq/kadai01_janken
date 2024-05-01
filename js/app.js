
var select = document.querySelector('[name="todays"]');

select.onchange = event => { 
  console.log(select.selectedIndex);
};

$("#checkButton").on('click', function(){
	if(select.selectedIndex === 1){
		var random = Math.floor(Math.random() * 5);

  if(random === 0){
    console.log('水色');
		$("#output").html('☁ 水色 ☁');
    $("#output").css('color', '#AAFFFF');
  }else if(random === 1){
    console.log('ピンク');
    $("#output").html('🌸 ピンク 🌸');
    $("#output").css('color', '#FFAAFF');
  }else if(random === 2){
    console.log('オレンジ');
    $("#output").html('🍊 オレンジ 🍊');
    $("#output").css('color', '#FF8856');
  }else if(random === 3){
    console.log('緑');
    $("#output").html('🍃 緑 🍃');
    $("#output").css('color', '#4DF9B9');
  }else if(random === 4){
    console.log('紫');
    $("#output").html('🍠 紫 🍠');
    $("#output").css('color', '#C299FF');
  };

	}else if(select.selectedIndex === 2){
		var random = Math.floor(Math.random() * 5);

		if(random === 0){
			console.log('大吉');
			$("#output").html('大吉 🎉🎉🎉🎉🎉');
			$("#output").css('color', '#AAFFFF');
		}else if(random === 1){
			console.log('中吉');
			$("#output").html('中吉 🎉🎉🎉🎉');
			$("#output").css('color', '#FFAAFF');
		}else if(random === 2){
			console.log('小吉');
			$("#output").html('小吉 🎉🎉');
			$("#output").css('color', '#FF8856');
		}else if(random === 3){
			console.log('吉');
			$("#output").html('吉 🎉');
			$("#output").css('color', '#4DF9B9');
		}else if(random === 4){
			console.log('末吉');
			$("#output").html('末吉 🎉');
			$("#output").css('color', '#C299FF');
		};

	}else if(select.selectedIndex === 3){
		var random = Math.floor(Math.random() * 5);

		if(random === 0){
			console.log('ごはん');
			$("#output").html('🍚 ごはん 🍚');
			$("#output").css('color', '#AAFFFF');
		}else if(random === 1){
			console.log('ラーメン');
			$("#output").html('🍜 ラーメン 🍜');
			$("#output").css('color', '#FFAAFF');
		}else if(random === 2){
			console.log('うどん');
			$("#output").html('🥢 🥢うどん 🥢');
			$("#output").css('color', '#FF8856');
		}else if(random === 3){
			console.log('パスタ');
			$("#output").html('🍝 パスタ 🍝');
			$("#output").css('color', '#4DF9B9');
		}else if(random === 4){
			console.log('パン');
			$("#output").html('🍞 パン 🍞');
			$("#output").css('color', '#C299FF');
		};

	}
});