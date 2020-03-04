(function() {
	if (!$sys.feature.SYSTEM_FEATURE_ES6) {
		$sys.api.import('js/components/components.js', 'text/babel');

		// noinspection JSUnresolvedVariable
		if (typeof Babel !== 'undefined') {
			// noinspection JSUnresolvedVariable,ES6ModulesDependencies
			if (typeof Babel.transformScriptTags === 'function') {
				// noinspection JSUnresolvedVariable,ES6ModulesDependencies
				Babel.transformScriptTags();
			}
		}

		$sys.api.get('body').innerHTML = '<emuos-desktop></emuos-desktop>';
	} else {
		$sys.api.import('js/components/components.js', function() {
			$sys.api.get('body').innerHTML = '<emuos-desktop></emuos-desktop>';
		});
	}
})();