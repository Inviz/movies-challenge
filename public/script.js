document.addEventListener('DOMContentLoaded', function() {
	var field = document.getElementById('search-query');

	var timeout, xhr;
	if (field)
	field.addEventListener('input', function() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if (xhr)
				xhr.abort()
			xhr = new XMLHttpRequest;
			xhr.responseType = 'document'
			xhr.open('GET', '/?query=' + encodeURIComponent(field.value));;
			xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == 4) {
					var response = xhr.response.querySelector('#content');
					var content = document.querySelector('#content');
					content.innerHTML = response.innerHTML
					xhr = undefined
				}
			}
			xhr.send()

		}, 300)
	})
})