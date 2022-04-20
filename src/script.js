var divComponent,
	leftDiv,
	barDiv,
	wrapperDesc,
	imgLang,
	textLang,
	lineDiv,
	percentage;

var languages = [
	"HTML5",
	"CSS3",
	"JAVASCRIPT",
	"PHP",
	"MYSQL",
	"REACT",
	"JAVA",
	"C++"
];
var percentuali = [75, 60, 55, 50, 50, 45, 35, 35];

languages.forEach((element, index) => {
	divComponent = document.createElement("div");
	divComponent.className = "languageComponent";

	leftDiv = document.createElement("div");
	leftDiv.className = "leftDivStatus";

	barDiv = document.createElement("div");
	barDiv.className = "statusbar-lang";
	/*barDiv.style.width=percentuali[index]+"%";*/
	barDiv.style.width = "0%";
	barDiv.setAttribute("data", percentuali[index]);

	wrapperDesc = document.createElement("div");
	wrapperDesc.className = "wrapper-language-desc";

	imgLang = document.createElement("img");
	imgLang.src = "./images/" + element + ".webp";
	imgLang.className = "langImg";

	textLang = document.createElement("p");
	textLang.innerHTML = element;
	textLang.className = "language-text";

	wrapperDesc.append(imgLang);
	wrapperDesc.append(textLang);

	barDiv.append(wrapperDesc);

	leftDiv.append(barDiv);

	lineDiv = document.createElement("div");
	lineDiv.className = "status-line";
	lineDiv.style.width = "97%"; /*(98-percentuali[index])+"%";*/
	leftDiv.append(lineDiv);

	divComponent.append(leftDiv);

	percentage = document.createElement("p");
	percentage.className = "percentage count";
	percentage.setAttribute("value", percentuali[index]);
	/*percentage.innerHTML=percentuali[index]+"%";*/
	percentage.innerHTML = "0";

	divComponent.append(percentage);

	var a = document.createElement("span");
	a.innerHTML = "%";
	a.className = "percentage";
	divComponent.append(a);

	document.getElementById("wrapper-skills").append(divComponent);
});

var offsetTop = $("#skills").offset().top;
var raggiunto = false;

$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > offsetTop - 580 && !raggiunto) {
		$(".count").each(function () {
			var range = $(this)[0].attributes.value.nodeValue;
			var current = 0;
			var increment = 1;
			var stepTime = Math.abs(Math.floor(1500 / range));

			var timer = setInterval(() => {
				current += increment;
				$(this).html(current);
				if (current == range) {
					clearInterval(timer);
				}
			}, stepTime);
		});

		jQuery(".leftDivStatus").each(function () {
			jQuery(this)
				.find(".statusbar-lang")
				.animate(
					{
						width:
							jQuery(this).find(".statusbar-lang").attr("data") +
							"%",
						opacity: 1
					},
					1700
				);

			jQuery(this)
				.find(".status-line")
				.animate(
					{
						width:
							97 -
							jQuery(this).find(".statusbar-lang").attr("data") +
							"%"
					},
					1700
				);

			jQuery(this).find(".wrapper-language-desc").animate(
				{
					opacity: 1
				},
				1700
			);
			/*$('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });*/
		});
		raggiunto = true;
	}
});
