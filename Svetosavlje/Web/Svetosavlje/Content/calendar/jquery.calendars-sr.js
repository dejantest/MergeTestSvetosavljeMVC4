﻿/* http://keith-wood.name/calendars.html
   Serbian localisation for Gregorian/Julian calendars for jQuery.
   Written by Dejan Dimić. */
(function($) {
	$.calendars.calendars.gregorian.prototype.regional['sr'] = {
		name: 'Gregorian',
		epochs: ['BCE', 'CE'],
        prevText: '&#x3c;zurück',
		monthNames: ['Јануар','Фебруар','Март','Април','Мај','Јун',
		'Јул','Август','Септембар','Октобар','Новембар','Децембар'],
		monthNamesShort: ['Јан','Феб','Мар','Апр','Мај','Јун','Јул','Авг','Сеп','Окт','Нов','Дец'],
		dayNames: ['Недеља','Понедељак','Уторак','Среда','Четвртак','Петак','Субота'],
		dayNamesShort: ['Нед','Пон','Уто','Сре','Чет','Пет','Суб'],
		dayNamesMin: ['Не','По','Ут','Ср','Че','Пе','Су'],
		dateFormat: 'dd/mm/yyyy',
		firstDay: 7,
		isRTL: false
	};
	if ($.calendars.calendars.julian) {
		$.calendars.calendars.julian.prototype.regional['sr'] =
			$.calendars.calendars.gregorian.prototype.regional['sr'];
	}
})(jQuery);
