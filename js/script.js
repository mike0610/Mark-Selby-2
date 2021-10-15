const nav = $('#menu')
const navToggle = $('#navToggle')

$(function () {
	navToggle.on('click', function (event) {
		// event.preventDefault()
		nav.toggleClass('show')
	})
})
