finicky.setDefaultBrowser('com.google.Chrome')

finicky.onUrl(function(url, opts) {
	if(opts.flags.shift == true) {

		// Medium
	    if (url.match(/^https?:\/\/medium\.com/)) {
	        return {
	            bundleIdentifier: 'br.com.guilhermerambo.Mediunic'
	        }
	    }

	}
});
