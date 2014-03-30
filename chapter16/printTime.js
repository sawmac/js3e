function printTime(secs) {
	var sep = ':'; //seperator character
	var hours,minutes,seconds,time;
	var now = new Date();
	hours = now.getHours();
	if (hours < 12) {
		meridiem = 'am';
	} else {
		meridiem = 'pm';
	}
	hours = hours % 12;
	if (hours==0) {
		hours = 12;
	} 
	time = hours
	minutes = now.getMinutes();
	if (minutes<10) {
		minutes = '0' + minutes;
	}
	time += sep + minutes;
	if (secs) {
		seconds = now.getSeconds();
		if (seconds<10) {
			seconds = '0' + seconds;
		}
		time += sep + seconds
	} 
	return time + ' ' + meridiem;
}