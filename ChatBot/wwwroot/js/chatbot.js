
jQuery(document).ready(function ($) {

	var onClose = 0;

	var firstMessage = 0;

	jQuery(document).on('click', '.iconInner', function (e) {

		jQuery(this).parents('.botIcon').addClass('showBotSubject');
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

	jQuery(document).on('click', '#chatStart', function (e) {
		jQuery(this).parents('.botIcon').addClass('showBotSubject');
		$("[name='msg']").focus();
	});

	jQuery(document).on('click', '.closeBtn, .chat_close_icon', function (e) {
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
		$(".Messages_list").html("");
		onClose = 0;
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

	}

	function messageTop() {
		var lastMsg = $('.Messages_list').find('.lastMsg').last().offset().top;
		$('.Messages').animate({ scrollTop: lastMsg }, 'slow');

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


		}

		if (firstMessage == 0) {
			appendMsg("hi " + name + ", how can i help you?");
			firstMessage = 1;
		}



		//SORULAR BU ALANA

		if (firstMessage == 1) {
			appendMsg(
				'<button id="btnQuestion1" type="button" href="#" class="btn btn-outline-info m-1 btnClicked">' +
				'Soru 1 asd sad asda das asd as  ' +
				'<div></div></button>' +

				'<button id="btnQuestion2" type="button" href="#" class="btn btn-outline-info m-1 btnClicked">' +
				'Soru 2 asd asd sa sa asd sa as s ' +
				'<div></div></button>' +

				'<button id="btnQuestion3" type="button" href="#" class="btn btn-outline-info m-1 btnClicked">' +
				'Soru 3 asd asd sa sa asd sa as s ' +
				'<div></div></button>' +

				'<button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
				'Finished ' +
				'<div></div></button>'


			);

			firstMessage = 2;

		}


		//#region Selected 1 - Click



		$(document).on("click", '#btnQuestion1',
			function (event) {

				$('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText userMsg">SORU 1 SEÇİLDİ</span></div>');

				messageTop();

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

					'<button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
					'Finished ' +
					'<div></div></button>'


				);


			});


		

		$(document).on("click", '#btnQuestion1_1',
			function (event) {

				$('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText userMsg">SORU 1  - 1 SEÇİLDİ</span></div>');

				messageTop();

				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'SORU 1 - 1 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' + 
					
					'<button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
					'Finished ' +
					'<div></div></button>'

				);

			});
		
		

		$(document).on("click", '#btnQuestion1_2',
			function (event) {

				$('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText userMsg">SORU 1  - 2 SEÇİLDİ</span></div>');

				messageTop();

				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'SORU 1 - 2 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +
					
					'<button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
					'Finished ' +
					'<div></div></button>'

				);


			});
		

		

		$(document).on("click", '#btnQuestion1_3',
			function (event) {

				$('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText userMsg">SORU 1 - 3 SEÇİLDİ</span></div>');

				messageTop();

				$(".btnClicked").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'SORU 1 - 3 AÇIKLAMA  - - - - Buraya Gerekli Açıklama' +
					
					'<button type="button" href="#" class="btn btn-outline-danger m-1 chatFinish">' +
					'Finished ' +
					'<div></div></button>'

				);


			});


		//#endregion

		
		// Chat END
		$(document).on("click", '.chatFinish',
			function (event) {
				
				 $('.Messages_list').append('<div class="msg user lastMsg"><span class="avtr">' +
					'<figure style="background-image: url(/img/avatar.png)"></figure></span> ' +
					'<span class="responsText userMsg">Finshed</span></div>');

				messageTop();

				$(".chatFinish").attr("disabled", "disabled");

				waitChat();

				appendMsg(
					'Yardımcı olabildiğime sevindim. İyi Günler.'

				);


			});

		messageTop();
		//$('.Messages_list').find('.lastMsg').removeClass("lastMsg");

	});
	/* Chatboat Code */

	
})