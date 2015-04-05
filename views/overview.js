(function(){function overview(it) {
var out='This is the API Documentation for ArenaClash <i>(Codename: MFSH)</i><br /><br /><h2>Responses and Request</h2><p>It\'s defined by the standard that both data blocks are in <b>json only</b></p><p>This is by design not by performance or whatsoever reason.</p><br /><h2>Access-Key</h2><p>The Access-Key is an API-Key or Session-Key.</p><p>For the API-user it is actually irrelevant what kind of key it is. </p><p>Either it uses an existing on or creates on by logging in. It\'s obvious what kind of key you will get.</p><p>As an API-Key its lifetime is undefined bt usually it is unlimited. As an Session-Key however it will only live 10minutes (these 10minutes will refresh after an api-call however)</p><hr />';return out;
}var itself=overview, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {window.render=window.render||{};window.render['overview']=itself;}}());