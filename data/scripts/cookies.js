function setCookie(cookieName, cookieValue, cookieTime = (5 * 365 * 24 * 60 * 60 * 1000)) {	//years*days*hours*minutes*seconds*milliseconds
  	var tempDate = new Date()
  	tempDate.setTime(tempDate.getTime() + cookieTime)
  	document.cookie = cookieName + '=' + cookieValue + ';expires=' + tempDate.toUTCString() + ';path=/'
}
function getCookie(cookieName) {
  	var name = cookieName + '='
  	var cookieArray = document.cookie.split(';')
  	for(var i = 0; i < cookieArray.length; i++) {
    	var tempCookie = cookieArray[i]
    	while (tempCookie.charAt(0) == ' ') {
      		tempCookie = tempCookie.substring(1)
    	}
    	if (tempCookie.indexOf(name) == 0) {
     		return tempCookie.substring(name.length, tempCookie.length)
    	}
  	}
  	return ''
}
function checkCookies() {
	if (getCookie('colorPalette') != undefined) {
		loadScript('data/scripts/' + getCookie('colorPalette') + '.js')
	}
}