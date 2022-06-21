
jQuery(document).ready(function ($) {

	var onClose = 0;

	var firstMessage = 0;

	jQuery(document).on('click', '.chatStart', function (e) {

		$('.botIcon').addClass('showBotSubject');

		$("[name='msg']").focus();
		if (onClose == 0) {
			waitChat();

			const myTimeout = setTimeout(continueChat, 2000);

			function continueChat() {
				$('.message.loading').remove();
				$('.Messages_list').append('<div class="msg lastMsg "><span class="avtr"> ' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span>' +
					'<span class="responsText systemMsg">Merhaba, Adını benimle paylaşır mısın?</span></div>');
				$(".Input_field").removeAttr("disabled");

			};
		}

		onClose = 1;

	});

	
	jQuery(document).on('click', '.closeBtn, .chat_close_icon', function (e) {
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
		$(".Messages_list").html("");
		onClose = 0;
		firstMessage = 0;
	});
	
	jQuery(document).on('click', '.chat_hide_icon', function (e) {
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
	});

	jQuery(document).on('submit', '#botSubject', function (e) {
		e.preventDefault();

		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').addClass('showMessenger');
	});


	function waitChat() {
		
		$(".Input_field").attr("disabled", 'disabled');
		$('<div class="message loading new"><div class="msg lastMsg"><span class="avtr"> ' +
			' <figure style="background-image: url(/img/avatar.png)"></figure></di> ' +
			'<img style="height:30px; margin-top:-75px; margin-left:25px" src="/img/texting.gif"/></figure> ' +
			'<span></span></div>').appendTo($('.Messages_list'));
		messageTop();

	}

	function messageTop() {
		var lastMsg = $('.Messages_list').find('.lastMsg').last().offset().top;
		$('.Messages').animate({ scrollTop: 10000 }, 'slow');

	};
	

	/* Chatboat Code */
	$(document).on("submit", "#messenger", function (e) {
		e.preventDefault();

		var val = $("[name=msg]").val().toLowerCase();
		var mainval = $("[name=msg]").val();

		function userMsg(msg) {
			
			$('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
				'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
				'<span class="responsText userMsg">' + mainval + '</span></div>');
			messageTop();

		};

		userMsg(mainval);

		waitChat();

		function appendMsg(msg) {

			const myTimeout = setTimeout(continueChat, 2000);

			function continueChat() {
				$('.message.loading').remove();
				
				$('.Messages_list').append('<div class="msg lastMsg "><span class="avtr"> ' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText systemMsg">' + msg + '</span></div>');
				$(".Input_field").removeAttr("disabled");
				messageTop();

			}


			$("[name='msg']").val("");
		};

		var name = mainval;


		if (firstMessage == 2) {
			appendMsg("Lütfen Seçeneklerden Birini Seçiniz");
			homeMenu();


		}

		if (firstMessage == 0) {

			appendMsg("hi " + name + ", how can i help you?");
			firstMessage = 1;
		}



		//SORULAR BU ALANA

		function homeMenu() {

			appendMsg(
				'<button id="btnQuestion1" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
				'Soru 1 asd sad asda das asd as  ' +
				'<div></div></button>' +

				'<button id="btnQuestion2" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
				'Soru 2 asd asd sa sa asd sa as s ' +
				'<div></div></button>' +

				'<button id="btnQuestion3" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
				'Soru 3 asd asd sa sa asd sa as s ' +
				'<div></div></button>' +

				'<div class=""><button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
				'Finished ' +
				'</button></div>'


			);
		}


		if (firstMessage == 1) {
			
			homeMenu();
			firstMessage = 2;


			//#region Selected 1 - Click


			$(document).on("click", '#btnQuestion1',
				function (event) {
					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1 SEÇİLDİ</span></div>');

					question1Menu();

				});



			function question1Menu() {



				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'<button id="btnQuestion1_1" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 - 1 asd sad asda das asd as  ' +
					'<div></div></button>' +

					'<button id="btnQuestion1_2" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 - 2 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button id="btnQuestion1_3" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 -  3 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
					'Home ' +
					'</button>' +

					'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
					'Finished ' +
					'</button></div>'


				);

			}


			$(document).on("click", '#btnQuestion1_1',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1  - 1 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 1 - 1 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion1Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion1_2',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1  - 2 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 1 - 2 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion1Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion1_3',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1  - 3 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 1 - 3 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						' <button id="btnQuestion1Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});



			$(document).on("click", '#btnQuestion1Back',
				function (event) {

					$('.Messages_list').append('<div class="msg user "><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">Back</span></div>');



					$("#btnQuestion1Back").attr("disabled", "disabled");
					question1Menu();

				});


			//#endregion


			//#region Selected 2 - Click


			$(document).on("click", '#btnQuestion2',
				function (event) {
					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1 SEÇİLDİ</span></div>');

					question2Menu();

				});



			function question2Menu() {



				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'<button id="btnQuestion2_1" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 - 1 asd sad asda das asd as  ' +
					'<div></div></button>' +

					'<button id="btnQuestion2_2" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 - 2 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button id="btnQuestion2_3" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 1 -  3 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
					'Home ' +
					'</button>' +

					'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
					'Finished ' +
					'</button></div>'


				);

			}


			$(document).on("click", '#btnQuestion2_1',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 2  - 1 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 2 - 1 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion2Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion2_2',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 2  - 2 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 2 - 2 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion2Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion2_3',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 2  - 3 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 2 - 3 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion2Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});



			$(document).on("click", '#btnQuestion2Back',
				function (event) {

					$('.Messages_list').append('<div class="msg user "><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">Back</span></div>');



					$("#btnQuestion2Back").attr("disabled", "disabled");
					question2Menu();

				});


			//#endregion


			//#region Selected 3 - Click


			$(document).on("click", '#btnQuestion3',
				function (event) {
					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 1 SEÇİLDİ</span></div>');

					question3Menu();

				});



			function question3Menu() {



				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'<button id="btnQuestion2_1" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 3 - 1 asd sad asda das asd as  ' +
					'<div></div></button>' +

					'<button id="btnQuestion2_2" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 3 - 2 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button id="btnQuestion2_3" type="button" href="#" class="btn btn-outline-success m-1 btnClicked">' +
					'Soru 3 -  3 asd asd sa sa asd sa as s ' +
					'<div></div></button>' +

					'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
					'Home ' +
					'</button>' +

					'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
					'Finished ' +
					'</button></div>'


				);

			}


			$(document).on("click", '#btnQuestion3_1',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 3  - 1 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 3 - 1 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion3Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion3_2',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 2  - 2 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 3 - 2 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion3Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});


			$(document).on("click", '#btnQuestion3_3',
				function (event) {

					$('.Messages_list').append('<div class="msg user"><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">SORU 2  - 3 SEÇİLDİ</span></div>');



					$(".btnClicked").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'SORU 3 - 3 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +

						'<div class="btn-group" style="width:max-content"> ' +
						'<button  id="btnQuestion3Back" type="button" href="#" class="btn btn-primary m-1">' +
						'Back ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-success m-1 homeMenu ">' +
						'Home ' +
						'</button>' +

						'<button type="button" href="#" class="btn btn-danger m-1 chatFinish">' +
						'Finished ' +
						'</button></div>'

					);


				});



			$(document).on("click", '#btnQuestion3Back',
				function (event) {

					$('.Messages_list').append('<div class="msg user "><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">Back</span></div>');



					$("#btnQuestion3Back").attr("disabled", "disabled");
					question3Menu();

				});


		//#endregion




			$(document).on("click", '.homeMenu',
				function (event) {

					$('.Messages_list').append('<div class="msg user "><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">Home Menu</span></div>');



					$(".btn").attr("disabled", "disabled");

					waitChat();

					homeMenu();


				});


			$(document).on("click", '.chatFinish',
				function (event) {

					$('.Messages_list').append('<div class="msg user "><span class="avtr">' +
						'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
						'<span class="responsText userMsg">Finshed</span></div>');


					$(".btn").attr("disabled", "disabled");

					waitChat();

					appendMsg(
						'<div class="">Yardımcı olabildiğime sevindim. İyi Günler.</div>'

					);

					firstMessage = 0;

				});



		}

		
		// Chat END


		
		messageTop();
		//$('.Messages_list').find('.lastMsg').removeClass("lastMsg");

	});
	/* Chatboat Code */
	$(document).on("click", '.btn',
		function (event) {

			$(".btn").attr("disabled", "disabled");


		});
	
})