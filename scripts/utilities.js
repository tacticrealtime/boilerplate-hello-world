/**
 * TACTIC™ Creative SDK - Utilities
 * Copyright (C) 2017 TACTIC™ Real-Time Marketing <https://tacticrealtime.com/>
 * Licensed under GNU GPL <https://tacticrealtime.com/license/sdk/>
 *
 * @author Anton Gorodnyanskiy
 * @date 12/02/2018
 */

/**
 * @namespace tactic
 */

/**
 * @namespace tactic.container
 */

/**
 * @typedef {Function} tactic.url
 * @typedef {Function} tactic.url.sanitize
 * @typedef {Function} tactic.url.package
 * @typedef {Function} tactic.url.size
 * @typedef {Function} tactic.container.ready
 * @typedef {Function} tactic.container.loadScript
 * @typedef {Function} tactic.container.goDebug
 * @typedef {Function} tactic.container.clickThrough
 * @typedef {Function} tactic.container.getClickTag
 * @typedef {Function} tactic.container.isPoliteReady
 * @typedef {Function} tactic.container.isAdapterReady
 * @typedef {Function} tactic.container.showFallback
 * @typedef {Function} tactic.container.one
 * @typedef {Function} tactic.container.on
 * @typedef {Function} tactic.container.off
 * @typedef {String} tactic.container.BRAND
 * @typedef {Object} tactic.container.BRAND_DATA
 * @typedef {Number} tactic.container.BRAND_ID
 * @typedef {Number} tactic.container.ADVERT_ID
 * @typedef {Number} tactic.container.ADVERT_VID
 * @typedef {Number} tactic.container.CHANNEL_ID
 * @typedef {Number} tactic.container.CHANNEL_VID
 * @typedef {Number} tactic.container.CREATIVE_ID
 * @typedef {Number} tactic.container.CAMPAIGN_ID
 * @typedef {String} tactic.container.NAME
 * @typedef {Number} tactic.container.WIDTH
 * @typedef {Number} tactic.container.HEIGHT
 * @typedef {String} tactic.container.MEDIA
 * @typedef {String} tactic.container.FALLBACK_URL
 * @typedef {String} tactic.container.FALLBACK_CLICKTAG
 * @typedef {String} tactic.container.HOST
 * @typedef {String} tactic.container.DEBUG
 * @typedef {String} tactic.container.EVT_ADAPTER_READY
 * @typedef {String} tactic.container.EVT_ADAPTER_POLITE
 * @typedef {String} tactic.container.EVT_BUNDLE_READY
 * @typedef {String} tactic.container.EVT_DATA_READY
 */

/**
 * @namespace tactic.advert
 */

/**
 * @typedef {Object} tactic.advert.data
 */

/**
 * @typedef {Object} tactic.bundle
 */

/**
 * @typedef {Object} tactic.url
 */

/**
 * @namespace tactic.utilities
 */

/**
 * @typedef {Function} tactic.utilities.noop
 * @typedef {Function} tactic.utilities.arrayLike
 * @typedef {Function} tactic.utilities.each
 * @typedef {Function} tactic.utilities.htmlDecode
 * @typedef {Function} tactic.utilities.generateSessionId
 * @typedef {Function} tactic.utilities.isWindow
 * @typedef {Function} tactic.utilities.isObject
 * @typedef {Function} tactic.utilities.isPlainObject
 * @typedef {Function} tactic.utilities.isElement
 * @typedef {Function} tactic.utilities.isBoolean
 * @typedef {Function} tactic.utilities.isUndefined
 * @typedef {Function} tactic.utilities.isArguments
 * @typedef {Function} tactic.utilities.isEmpty
 * @typedef {Function} tactic.utilities.isEmptyString
 * @typedef {Function} tactic.utilities.isUrl
 * @typedef {Function} tactic.utilities.isString
 * @typedef {Function} tactic.utilities.isInteger
 * @typedef {Function} tactic.utilities.isNumber
 * @typedef {Function} tactic.utilities.isFunction
 * @typedef {Function} tactic.utilities.isArray
 * @typedef {Function} tactic.utilities.isDescendant
 * @typedef {Function} tactic.utilities.send
 * @typedef {Function} tactic.utilities.get
 * @typedef {Function} tactic.utilities.generateGuid
 * @typedef {Function} tactic.utilities.extractHostname
 * @typedef {Function} tactic.utilities.extractRootDomain
 * @typedef {Function} tactic.utilities.escapeRegExpString
 * @typedef {Function} tactic.utilities.appendUrlParams
 * @typedef {Function} tactic.utilities.getObjectDeep
 * @typedef {Function} tactic.utilities.getObjectDeepDef
 * @typedef {Function} tactic.utilities.isEqualArray
 * @typedef {Function} tactic.utilities.cloneObject
 * @typedef {Function} tactic.utilities.mergeArrays
 * @typedef {Function} tactic.utilities.mergeObjects
 * @typedef {Function} tactic.utilities.arrayContains
 * @typedef {Function} tactic.utilities.objectContains
 * @typedef {Function} tactic.utilities.getQsParam
 * @typedef {Function} tactic.utilities.getQsParams
 * @typedef {Function} tactic.utilities.setQsParam
 */

/**
 * TACTIC Console utility will be available in the banner as core environment.
 * @namespace tactic.utilities.tactic.utilities.log
 */

/**
 * @typedef {Function} tactic.utilities.tactic.utilities.log.push
 * @typedef {Function} tactic.utilities.tactic.utilities.log.on
 */

(/**
 * @param {Window} win
 * @param {Document} doc
 * @param {tactic} tactic
 */
	function (win, doc, tactic) {

	// Lend TACTIC utility namespace.
	var container = tactic.container;

	// Lend TACTIC utility namespace.
	var utilities = tactic.utilities;

	// Lend TACTIC global utilities.
	var isBoolean        = utilities.isBoolean;
	var isString         = utilities.isString;
	var isObject         = utilities.isObject;
	var isArray          = utilities.isArray;
	var isUrl            = utilities.isUrl;
	var isElement        = utilities.isElement;
	var isNumber         = utilities.isNumber;
	var isFunction       = utilities.isFunction;
	var mergeObjects     = utilities.mergeObjects;
	var getObjectDeepDef = utilities.getObjectDeepDef;

	/**
	 * @function
	 * @param {Element|Node|Document|Window} target
	 * @param {String} type
	 * @param callback
	 * @description Add simple event.
	 */
	var addEventSimple = utilities.addEventSimple = function (target, type, callback) {
		if (target.addEventListener) {
			target.addEventListener(type, callback, false);
		}
		else if (target.attachEvent) {
			target.attachEvent('on' + type, callback);
		}
	};

	/**
	 * @function
	 * @param {Element|Node|Document|Window} target
	 * @param {String} type
	 * @param callback
	 * @description Remove simple event.
	 */
	var removeEventSimple = utilities.removeEventSimple = function (target, type, callback) {
		if (target.removeEventListener) {
			target.removeEventListener(type, callback, false);
		}
		else if (target.detachEvent) {
			target.detachEvent('on' + type, callback);
		}
	};

	/**
	 * @function
	 * @param {Element} target
	 * @param {String} styleName
	 * @param {String|Number} [defaultValue]
	 * @return {String}
	 * @description Finds indicated CSS style value in DOM object.
	 */
	var getStyle = utilities.getStyle = function (target, styleName, defaultValue) {

		try {
			if (isElement(target)) {
				if (target.currentStyle) {
					return target.currentStyle[styleName];
				}
				else if (doc.defaultView && doc.defaultView.getComputedStyle) {
					return doc.defaultView.getComputedStyle(target, '')[styleName];
				}
				else {
					return target.style[styleName];
				}
			}
		}
		catch (e) {}

		return defaultValue;
	};

	/**
	 * @function
	 * @param {Array} sources - Media sources.
	 * @param {Number} width - Container width.
	 * @param {Number} height - Container height.
	 * @return {String}
	 * @description Provides proper image or video source size finder based on holder width and height.
	 */
	var extractAssetSource = utilities.extractAssetSource = function (sources, width, height) {

		/**
		 * Define default source object.
		 * @type {Object}
		 */
		var source = {};

		// Check if sources are provided.
		if (sources) {

			// Sort sources by size, so the biggest size will be in front.
			sources.sort(function (a, b) {
				if (a.width < b.width) {
					return 1;
				}
				if (a.width > b.width) {
					return -1;
				}
				return 0;
			});

			source = sources[0];

			// Loop image sources descendingly to find out what source is the best match for holder size.
			for (var i = 0; i < sources.length; i++) {

				// Check if image source fits container without quality degradation, break loop if it does.
				if (width >= sources[i].width || height >= sources[i].height) {
					break;
				}

				// Set asset source.
				source = sources[i];

			}

		}

		return source;
	};

	/**
	 * @function
	 * @param {Object} source - Asset source object.
	 * @return {String}
	 * @description Provides proper image or video source size finder based on holder width and height.
	 */
	var extractAssetSourceUrl = utilities.extractAssetSourceUrl = function (source) {

		/**
		 * Define default source URL.
		 * @type {String}
		 */
		var url = isObject(source) ? isString(source['url']) ? source['url'] : '' : '';

		// Check if URL was identified.
		// Check if URL is valid, otherwise means it is possibly local.
		if (url != '' && url.indexOf('http') == -1 && url.slice(0, 2) != '//') {

			// Add absolute package URL before local URL.
			url = tactic.url.package + '/' + url;

		}

		return tactic.url.sanitize(url);
	};

	/**
	 * @function
	 * @param {Number} elementWidth - Element width.
	 * @param {Number} elementHeight - Element height.
	 * @param {Number} containerWidth - Container width.
	 * @param {Number} containerHeight - Container height.
	 * @param {Object} params
	 * @return {Object}
	 * @description Returns element scale depending on cropping and placement params.
	 */
	var calculateElementScale = utilities.calculateElementScale
		= function (elementWidth, elementHeight, containerWidth, containerHeight, params) {

		// Set default values.
		var

			/**
			 * @type {Number}
			 */
			width      = NaN,

			/**
			 * @type {Number}
			 */
			height     = NaN,

			/**
			 * @type {Number}
			 */
			left       = NaN,

			/**
			 * @type {Number}
			 */
			top        = NaN,

			/**
			 * @type {Number}
			 */
			offsetLeft = 1,

			/**
			 * @type {Number}
			 */
			offsetTop  = 1;

		// Validate parameters.
		params = params || {};

		// Validate parameter values;
		params = {

			/**
			 * @type {Array}
			 */
			align: params.align || ['center', 'middle'],

			/**
			 * @type {String}
			 */
			scale: params.scale || 'fill',

			/**
			 * @type {Array}
			 */
			crop: params.crop || [0, 0, 0, 0]

		};

		try {

			// Calculate offset position.
			offsetLeft = (1 - (elementWidth * (params.crop[1] + params.crop[3])) / elementWidth);
			offsetTop  = (1 - (elementHeight * ( params.crop[0] + params.crop[2])) / elementHeight);

			// Check if container is landscape.
			if (containerWidth >= containerHeight) {

				height = (containerWidth / elementWidth * elementHeight) / offsetLeft;
				width  = containerWidth / offsetLeft;

				// Check if image has to fill container area.
				if (params.scale == 'fill') {

					// Check if image is landscape.
					if (containerHeight / offsetTop > height) {

						width  = (containerHeight / elementHeight * elementWidth) / offsetTop;
						height = containerHeight / offsetTop;

					}

				}

				// In case if image has to fit container area.
				else {

					// Check if image is portrait.
					if (containerHeight / offsetTop <= height) {

						width  = (containerHeight / elementHeight * elementWidth) / offsetTop;
						height = containerHeight / offsetTop;

					}

				}

			}

			// In case if container is portrait.
			else {

				width  = (containerHeight / elementHeight * elementWidth) / offsetTop;
				height = containerHeight / offsetTop;

				// Check if image has to fill container area.
				if (params.scale == 'fill') {

					// Check if image is portrait.
					if (containerWidth / offsetLeft > width) {

						height = (containerWidth / elementWidth * elementHeight) / offsetLeft;
						width  = containerWidth / offsetLeft;

					}

				}

				// In case if image has to fit container area.
				else {

					// Check if image is landscape.
					if (containerWidth / offsetLeft <= width) {

						height = (containerWidth / elementWidth * elementHeight) / offsetLeft;
						width  = containerWidth / offsetLeft;

					}

				}

			}

			// Round image values
			width  = Math.ceil(width);
			height = Math.ceil(height);

			// Calculate horizontal position.
			switch (params.align[0]) {
				case 'left':
					left = (0 - width * params.crop[3]);
					break;
				case 'center':
					left = ((containerWidth - width * offsetLeft) / 2) + (0 - width * params.crop[3]);
					break;
				case 'right':
					left = (containerWidth - width + width * params.crop[1]);
					break;
			}

			left = Math.round(left);

			// Calculate vertical position.
			switch (params.align[1]) {
				case 'top':
					top = (0 - height * params.crop[0]);
					break;
				case 'middle':
					top = ((containerHeight - height * offsetTop) / 2) + (0 - height * params.crop[0]);
					break;
				case 'bottom':
					top = (containerHeight - height + height * params.crop[2]);
					break;
			}

			top = Math.round(top);

		}
		catch (e) {}

		return {width: width, height: height, left: left, top: top};
	};

	/**
	 * @function
	 * @param {Element} target - Target to fit into the container.
	 * @param {Number} containerWidth - Container width.
	 * @param {Number} containerHeight - Container height.
	 * @return {Number}
	 * @description Calculate optimal font size that will fit text in a container in pixels.
	 */
	var calculateFontSize = utilities.calculateFontSize = function (target, containerWidth, containerHeight) {

		var

			/**
			 * @type {Number}
			 */
			sizeInitial = NaN,

			/**
			 * @type {Number}
			 */
			sizeMatch   = NaN;

		// Check if target is valid.
		if (isElement(target)) {

			var adjust = function (size) {

				try {
					if (size > 1) {
						if (target.offsetWidth > containerWidth || target.offsetHeight > containerHeight) {
							size--;
							target.style.fontSize = size + 'px';
							size                  = adjust(size);
						}
					}
				}
				catch (e) {}

				return size;
			};

			try {
				target.style.visibility = 'hidden';
				sizeInitial             = parseInt(getStyle(target, 'fontSize', 24));
				sizeMatch               = adjust(sizeInitial);
				target.style.fontSize   = sizeInitial + 'px';
				target.style.visibility = '';
			}
			catch (e) {}

		}

		return sizeMatch;
	};

	/**
	 * @function
	 * @param {Array} props - List of props.
	 * @param {Number} filter - Property filter.
	 * @return {Object|Array}
	 * @description Select property from array depending on filter property.
	 */
	var selectProperty = utilities.selectProperty = function (props, filter) {

		var a = props.filter(function (object) {
			return object[0] <= filter;
		}).sort(function (a, b) {
			if (a[0] < b[0]) {
				return 1;
			}
			if (a[0] > b[0]) {
				return -1;
			}
			return 0;
		});

		return a[0][1];
	};

	/**
	 * @function
	 * @param {Number} width
	 * @param {Number} height
	 * @param {Object} [options]
	 * @return {String}
	 * @description Calculate object orientation property.
	 */
	var calculateOrientationProperty = utilities.calculateOrientationProperty = function (width, height, options) {

		var

			/**
			 * @type {String}
			 */
			name = '';

		// Check if values are valid.
		if (width > 0 && height > 0) {

			// Check if options are provided.
			options = isArray(options) ? options : [[0, 'portrait'], [0.714, 'square'], [1.5, 'landscape']];

			// Select orientation property.
			name = selectProperty(options, (width / height));

		}

		return name;
	};

	/**
	 * @function
	 * @param {Element} target - Element where image should be placed.
	 * @param {Object} data - Image data.
	 * @param {Number} [width] - Container width.
	 * @param {Number} [height] - Container height.
	 * @param {Function} [complete] - On complete handler.
	 * @param {String} [exception] - Parameter exception.
	 * @return {Element|Image}
	 * @description Places image into HTML element.
	 */
	var placeImage = utilities.placeImage = function (target, data, width, height, onComplete, exception) {

		var

			/**
			 * Create image element to track load progress.
			 * @type {Element|Image}
			 */
			image;

		// Check target and data.
		if (isElement(target) && isObject(data)) {

			// Check if target is a img tag.
			if (target.tagName.toLowerCase() == 'img') {

				// Make image same as target.
				image = target;

			}
			else {

				// Create new image element.
				image = doc.createElement('img');

			}

			// Validate image data.
			data = {

				/**
				 * @type {Object}
				 */
				params: getObjectDeepDef(data, 'params', {}, isObject),

				/**
				 * @type {Array}
				 */
				sources: getObjectDeepDef(data, 'sources', null, isArray)

			};

			// Check if image has exceptional parameters.
			if (isObject(data.params['excepts'])) {

				// Check if custom exception can be applied.
				if (!isObject(data.params['excepts'][exception])) {

					// Define orientation exception based on container width and height.
					exception = calculateOrientationProperty(width, height);

				}

				// Check if exception has to be applied again.
				if (isObject(data.params['excepts'][exception])) {

					// Merge exception into data.
					data.params = mergeObjects(data.params, data.params['excepts'][exception], false);

				}

			}

			// Validate container width.
			width = isNumber(width) ? width : target.offsetWidth;

			// Validate container height.
			height = isNumber(height) ? height : target.offsetHeight;

			// Check if data has sources available.
			if (isArray(data.sources) && data.sources.length > 0) {

				/**
				 * @function
				 * @description Places image into HTML element.
				 */
				function place() {

					var

						/**
						 * Calculate image scale and position depending on alignment and crop parameters.
						 * At this point we ignore required image size, we just need width and height ratios.
						 * @type {Object}
						 */
						scale = calculateElementScale(data.sources[0].width, data.sources[0].height, width, height, data.params);

					var

						/**
						 * Now, when we know actual image scale parameters, we can select appropriate size of the source.
						 * @type {String}
						 */
						url = extractAssetSourceUrl(extractAssetSource(data.sources, scale.width, scale.height));

					// Attache event listener.
					image.onload = function () {

						// Check if on complete callback exists.
						if (isFunction(onComplete)) {

							// Call on complete callback.
							onComplete.apply(this, [((image == target) ? image : target), url, scale]);

						}

					};

					// Check if target is an image tag.
					if (image == target) {

						// Apply image size.
						image.style.width  = scale.width + 'px';
						image.style.height = scale.height + 'px';

						// Apply image position.
						image.style.left = scale.left + 'px';
						image.style.top  = scale.top + 'px';

						// Apply image source and track load progress.
						image.src = target.src = url;

					}

					// Otherwise apply image as CSS background.
					else {

						/*
						 // Apply background image alignment.
						 // Replace TACTIC values with corresponding CSS style values.
						 target.style.backgroundPosition = data.params.align[1].split('middle').join('center') + ' ' + data.params.align[0];

						 // Apply background image scale.
						 // Replace TACTIC values with corresponding CSS style values.
						 target.style.backgroundSize = data.params.scale.split('fill').join('cover').split('fit').join('contain');
						 */

						// Apply background image position.
						target.style.backgroundPosition = scale.left + 'px' + ' ' + scale.top + 'px';

						// Apply background image scale.
						target.style.backgroundSize = scale.width + 'px' + ' ' + scale.height + 'px';

						// Track image load progress.
						image.src = url;

						// Place background image as CSS style.
						target.style.backgroundImage = 'url("' + url + '")';

					}

				}

				// Check if image has to be loaded politely.
				if (getObjectDeepDef(data, 'params.polite', false, isBoolean) == true && !container.isPoliteReady()) {

					// Wait for polite ready event to place image.
					container.one(container.EVT_ADAPTER_POLITE, place);

				}
				else {

					// Place image immediately.
					setTimeout(place, 0);

				}

			}

		}

		return ((image != target) ? image : target);
	};

	/**
	 * @function
	 * @param {Element} target - Element where video should be placed.
	 * @param {Object} data - Video data.
	 * @param {Number} [width] - Container width.
	 * @param {Number} [height] - Container height.
	 * @param {Function} [complete] - On complete handler.
	 * @param {String} [exception] - Parameter exception.
	 * @return {Element|Video}
	 * @description Places video into HTML element.
	 */
	var placeVideo = utilities.placeVideo = function (target, data, width, height, onComplete, exception) {

		var

			/**
			 * Create video element to track load progress.
			 * @type {Element|Video}
			 */
			video;

		// Check target and data.
		if (isElement(target) && isObject(data)) {

			// Check if target is a video tag.
			if (target.tagName.toLowerCase() == 'video') {

				// Make video same as target.
				video = target;

			}
			else {

				// Create new video element.
				video = doc.createElement('video');

				// Append video to placeholder.
				target.appendChild(video);

			}

			// Validate image data.
			data = {

				/**
				 * @type {Object}
				 */
				params: getObjectDeepDef(data, 'params', {}, isObject),

				/**
				 * @type {Array}
				 */
				sources: getObjectDeepDef(data, 'sources', null, isArray)

			};

			// Check if image has exceptional parameters.
			if (isObject(data.params['excepts'])) {

				// Check if custom exception can be applied.
				if (!isObject(data.params['excepts'][exception])) {

					// Define orientation exception based on container width and height.
					exception = calculateOrientationProperty(width, height);

				}

				// Check if exception has to be applied again.
				if (isObject(data.params['excepts'][exception])) {

					// Merge exception into data.
					data.params = mergeObjects(data.params, data.params['excepts'][exception], false);

				}

			}

			// Validate container width.
			width = isNumber(width) ? width : target.offsetWidth;

			// Validate container height.
			height = isNumber(height) ? height : target.offsetHeight;

			// Check if data has sources available.
			if (isArray(data.sources) && data.sources.length > 0) {

				/**
				 * @function
				 * @description Places video into HTML element.
				 */
				function place() {

					var

						/**
						 * Calculate video scale and position depending on alignment and crop parameters.
						 * At this point we ignore required video size, we just need width and height ratios.
						 * @type {Object}
						 */
						scale = calculateElementScale(data.sources[0].width, data.sources[0].height, width, height, data.params);

					var

						/**
						 * Now, when we know actual video scale parameters, we can select appropriate size of the source.
						 * @type {String}
						 */
						source = extractAssetSource(data.sources, scale.width, scale.height);

					var

						/**
						 * Extract video URL.
						 * @type {String}
						 */
						url = extractAssetSourceUrl(source);

					/**
					 * @function
					 * @description Complete video load placement.
					 */
					var onLoadedMetaHandler = function () {

						// Remove can play event as it has a double firing bug.
						// https://stackoverflow.com/questions/33831202/does-setting-currenttime-always-trigger-canplay
						removeEventSimple(video, 'loadedmetadata', onLoadedMetaHandler);

						// Go to desired video time.
						video.currentTime = getObjectDeepDef(data, 'params.start.from', 0, isNumber);

						// Check if on complete callback exists.
						if (isFunction(onComplete)) {

							// Call on complete callback.
							onComplete.apply(this, [video, url, scale]);

						}

					};

					// Define on video can play handler.
					addEventSimple(video, 'loadedmetadata', onLoadedMetaHandler);

					// Check if poster has to be picked from asset source as preview image.
					if (data.params.poster == 'preview') {

						//  Set video poster.
						video.poster = extractAssetSourceUrl(source, 'preview_url');

					}

					// Check if poster has to be picked from asset source as thumb image.
					else if (data.params.poster == 'thumb') {

						//  Set video poster.
						video.poster = extractAssetSourceUrl(source, 'thumb_url');

					}

					// Check if poster is an image URL.
					else if (isUrl(data.params.poster)) {

						//  Set video poster URL.
						video.poster = source.params.poster;

					}

					// Set controls attribute only on complete state (so they don't appear while video is waiting for polite load).
					video.controls = isBoolean(data.params.controls) ? data.params.controls : false;

					// Set preload attribute.
					video.preload = isString(data.params.preload) ? data.params.preload : 'metadata';

					// Set playsinline attribute.
					video.playsinline = isBoolean(data.params.inline) ? data.params.inline : true;

					// Set autoplay attribute.
					video.autoplay = isBoolean(data.params.autoplay) ? data.params.autoplay : false;

					// Set loop attribute.
					video.loop = isBoolean(data.params.loop) ? data.params.loop : true;

					// Set loop attribute.
					video.volume = isNumber(data.params.volume) ? data.params.volume : 0.6;

					// Set muted attribute.
					video.muted = isBoolean(data.params.muted) ? data.params.muted : true;

					// Apply video size.
					video.style.width  = scale.width + 'px';
					video.style.height = scale.height + 'px';

					// Apply video position.
					video.style.left = scale.left + 'px';
					video.style.top  = scale.top + 'px';

					//  Initiate video load process.
					video.src = url;

				}

				// Check if video has to be loaded politely.
				if (getObjectDeepDef(data, 'params.polite', false, isBoolean) == true && !container.isPoliteReady()) {

					// Wait for polite ready event to place video.
					container.one(container.EVT_ADAPTER_POLITE, place);

				}
				else {

					// Place video immediately.
					setTimeout(place, 0);

				}

			}

		}

		return video;
	};

	/**
	 * @function
	 * @param {Element} target
	 * @param {String} data
	 * @param {Number} [width] - Container width.
	 * @param {Number} [height] - Container height.
	 * @param {Function} [complete] - On complete handler.
	 * @return {Element}
	 * @description Places string into HTML element.
	 */
	var placeText = utilities.placeText = function (target, data, width, height, onComplete) {

		// Validate target and data.
		if (isElement(target) && isString(data)) {

			// Validate container width.
			width = isNumber(width) ? width : target.offsetWidth;

			// Validate container height.
			height = isNumber(height) ? height : target.offsetHeight;

			var

				/**
				 * Create text container, so it is easier to manipulate.
				 * @type {Element}
				 */
				text   = doc.createElement('span'),

				/**
				 * Modify text source.
				 * Split line breaks with '<br/>' tag.
				 * @type {String}
				 */
				source = data.split('\n').join('<br/>');

			// Place text data into span element.
			text.innerHTML = source;

			// Append text span into target.
			target.appendChild(text);

			// Let text to appear in DOM.
			setTimeout(function () {

				var

					/**
					 * Create text container, so it is easier to manipulate.
					 * @type {Number}
					 */
					size = calculateFontSize(text, width, height);

				// Apply updated size value.
				text.style.fontSize = size + 'px';

				// Check if on complete callback exists.
				if (isFunction(onComplete)) {

					// Call on complete callback.
					onComplete.apply(this, [text, source, size]);

				}

			}, 10);

		}

		return target;
	};

	/**
	 * @function
	 * @param {String} className
	 * @param {Function} callback
	 * @param {Number} [timeout]
	 * @description Watch font load state.
	 */
	var watchFont = utilities.watchFont = function (className, callback, timeout) {

		var

			/**
			 * @type {Number}
			 */
			interval,

			/**
			 * @type {Number}
			 */
			time    = new Date().getTime(),

			/**
			 * @type {Element}
			 */
			element = doc.createElement('span'),

			/**
			 * @type {Number}
			 */
			width,

			/**
			 * @type {Number}
			 */
			height;

		/**
		 * @function
		 * @param {Boolean} success - Success state.
		 */
		function complete(success) {

			// Clear check interval.
			clearInterval(interval);

			try {

				// Try to remove tester element.
				doc.body.removeChild(element);

			}
			catch (e) {}

			// Check if callback was defined.
			if (isFunction(callback)) {

				// Call callback.
				callback(className, success);

			}

		}

		/**
		 * @function
		 */
		function check() {

			// Check if we're out of time to wait for wont load.
			if ((new Date().getTime() - time) > (isNumber(timeout) ? timeout : 1000)) {

				// Complete operation with negative result.
				complete(false);

			}

			// Check if container dimensions changed. Means font loaded.
			else if (width != element.offsetWidth || height != element.offsetHeight) {

				// Complete operation with positive result.
				complete(true);

			}

		}

		try {

			var

				/**
				 * @type {Object}
				 */
				style = element.style;

			// Define CSS parameters.
			style.position   = 'absolute;';
			style.display    = 'block;';
			style.visibility = 'hidden;';
			style.top        = '-9999px';
			style.left       = '-9999px';
			style.fontSize   = '48px';
			style.lineHeight = 'normal';

			// Place text into element.
			element.innerHTML = 'QW@HhsXJ';

			// Append child to body.
			doc.body.appendChild(element);

			// Let text to append to DOM.
			setTimeout(function () {

				// Record element's initial width and height.
				width  = element.offsetWidth;
				height = element.offsetHeight;

				// Set font class to apply specific font.
				element.className += (' ' + isString(className) ? className : '');

				// Set font load check interval.
				interval = setInterval(check, 10);

			}, 10);

		}
		catch (e) {

			// Complete with negative result in case of error.
			complete(false);

		}

	};

})(window, document, tactic);