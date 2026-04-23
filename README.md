# Dynamic Creative

## Installation
To **install** development environment:
``` sh
npm install
```

To run **local server**:
``` sh
npm run serve
```

## Compilation
To **compile and minify everything**:
``` sh
npm run min
```
To compile **editor** only:
``` sh
npm run editor
```
To create JS files out of **SVG** files:
``` sh
npm run svg
```
To generate **fallback** images:
``` sh
npm run fallback
```

## Validation
Validation helps to determine if banner runs without errors.
For more information about validation service, go to [this page](https://github.com/tacticrealtime/creative-validator/blob/master/ERROR_LIST.md).

To run full validation:
``` sh
npm run validate
```

To run independent validators:

`npm run validate-formats` for formats validation

`npm run validate-security` for security validation

`npm run validate-preview` for preview validation

## Packaging
To pack the template into TACTIC application compatible *.zip package:
``` sh
npm run zip
```
To compile, minify and pack at once:
``` sh
npm run minzip
```

## Package Structure
You are free to use any kind of file structure within the package. Below is the description of various components for this particular Boilerplate package:

| File                                  | Description                                                                                    |
|---------------------------------------|------------------------------------------------------------------------------------------------|
| /manifest.json                        | Banner configuration, default data structure and size relations.                               |
| /html/*                               | Banner HTML source files.                                                                      |
| /banner.html                          | Banner HTML, usually one file for all banner sizes.                                            |
| /styles/*                             | Banner CSS files.                                                                              |
| /scripts/*                            | Banner JavaScript files.                                                                       |
| /scripts/banner.js                    | Banner initialisation scripts, event bindings and gesture logics.                              |
| /assets/*                             | Folder containing static banner assets. E.g. logotypes, fonts, icons, etc.                     |
| /fallback.html                        | Responsive HTML fallback that is used for automatic fallback generation.                       |
| /fallbacks/*                          | Folder containing static fallback images.                                                      |
| /editor/*                             | Content editor source code.                                                                    |
| /index.html                           | Application's content editor environment emulator with included banner preview.                |
| /preview.html                         | Multi-size banner preview environment, redirects to the external page.                         |
| //crv-sdk.trtm.io/.../builder-x.xx.js | TACTIC™ Builder scripts, image and video assets into banner DOM.                               |
| //crv-sdk.trtm.io/.../tactic.js       | TACTIC™ Library scripts. Loads creative bundle, advert data and network adapter.               |
| //crv-sdk.trtm.io/.../emulator.js     | Script emulates TACTIC™ Library if banner is accessed locally without boilerplate environment. |

## Manifest Declaration
Manifest file explains creative structure. It has to be located in creative's package root and named `manifest.json`. Define default content in `data` object and change it using content editor `editor.html`.
``` json
{
  "type": "MANIFEST",
  "version": "1.0",
  "author": "Author Name",
  "brand": "100",
  "name": "Template Name V1",
  "created": "26/03/2025",
  "updated": "26/03/2025",
  "editor": { "url": "editor/index.html", "version": "1.1" },
  "build": 2048,
  "data": {
    "editor": {
      "scope": { "frame": 0 },
      "mode": "simple",
      "pause": true,
      "jump": true,
      "grid": false
    },
    "banner": {
      "type": "BannerLayer",
      "layers": {
        "CV": {
            "type": "JointLayer",
            "layers": {
                ...
            }
          }
        }
      }
    }
  },
  "sizes": [
    {
      "type": "FIXED",
      "name": "580x400",
      "width": 580,
      "height": 400,
      "index": "banner.min.html",
      "fallback": { "static": "./fallbacks/580x400.png" }
    },
    {
      "type": "RESPONSIVE",
      "name": "RxR",
      "width": "100%",
      "height": "100%",
      "index": "banner.min.html",
      "fallback": { "static": "./fallbacks/0x0.png" }
    }
  ],
  "relations": [
    { "type": "TENSION", "id": "CV_tens_t3", "name": "T3", "min": 0, "max": 0.25 },
    { "type": "TENSION", "id": "CV_tens_t2", "name": "T2", "min": 0.25, "max": 0.4 },
    { "type": "TENSION", "id": "CV_tens_t1", "name": "T1", "min": 0.4, "max": 0.6 },
    { "type": "TENSION", "id": "CV_tens_t0", "name": "T0", "min": 0.6, "max": 0.8 },
    { "type": "TENSION", "id": "CV_tens_e0", "name": "E0", "min": 0.8, "max": 1.2 },
    { "type": "TENSION", "id": "CV_tens_w0", "name": "W0", "min": 1.2, "max": 1.8 },
    { "type": "TENSION", "id": "CV_tens_w1", "name": "W1", "min": 1.8, "max": 2.8 },
    { "type": "TENSION", "id": "CV_tens_w2", "name": "W2", "min": 2.8, "max": 6 },
    { "type": "TENSION", "id": "CV_tens_w3", "name": "W3", "min": 6, "max": null },
    { "type": "SCALE", "id": "CV_scale_xs", "name": "XS", "min": 0, "max": 32000 },
    { "type": "SCALE", "id": "CV_scale_s", "name": "S", "min": 32000, "max": 64000 },
    { "type": "SCALE", "id": "CV_scale_m", "name": "M", "min": 64000, "max": 128000 },
    { "type": "SCALE", "id": "CV_scale_l", "name": "L", "min": 128000, "max": 256000 },
    { "type": "SCALE", "id": "CV_scale_xl", "name": "XL", "min": 256000, "max": 512000 },
    { "type": "SCALE", "id": "CV_scale_xxl", "name": "XXL", "min": 512000, "max": null }
  ],
  "exports": {
    "config": [
      { "type": "html", "speed": 10, "time": 5000 },
      { "type": "gif", "speed": 10, "time": 5000 },
      { "type": "jpeg", "speed": 1, "time": 3000 },
      { "type": "png", "speed": 1, "time": 3000, "enabled": false }
    ]
  },
  "macros": [
    { "name": "${var_1}", "type": "text" }
  ]
}
```

## Content Editor
Creative content editor `editor.html` provides various data inputs that you can use to give application user ability to edit dynamic content.
For detailed content editor example please see [this page](https://github.com/tacticrealtime/creative-editor/).
### Base
Use `block`, `block-label` and `block-group` tags to create content editor structure.
``` html
<block title="Block">
    <block-label title="Group"></block-label>
    <block-group>
    	...
    </block-group>
</block>
```
### Text Field
Use `text-field` tag to give user ability to define single line text values.
``` html
<block-field title="My Text">
    <text-field placeholder="Value" model="$data.text"></text-field>
</block-field>
```
### Text Area
Use `text-field` tag to give user ability to define multi-line text values.
``` html
<block-field title="My Text">
    <text-area placeholder="Value" model="$data.text"></text-area>
</block-field>
```
### Switch Button
``` html
<block-field title="Switch">
    <switch-button model="$data.switch">
		<switch-button-option value="value1">Value 1</switch-button-option>
		<switch-button-option value="value2">Value 2</switch-button-option>
	</switch-button>
</block-field>
```
### Toggle Button
``` html
<block-field title="Toggle">
    <toggle-button model="$data.toggle" on="On" off="Off"></toggle-button>
</block-field>
```
### Dropdown Select
``` html
<block-field title="Select">
   <dropdown-select model="$data.dropdown">
		<optgroup label="Group">
			<option value="value1">Option 1</option>
		</optgroup>
		<option value="value2">Option 2</option>
	</dropdown-select>
</block-field>
```
### Image Picker
Use `image-picker` tag to give user ability to define image data. You are able to disable any kind of available image settings and define default parameters.
``` html
<block-field title="My Image">
    <image-picker model="$data.image"
			settings="{'defaults': {'params': {'scale': 'fill', 'polite': true}}, 'cropping': { 'ratios': {'300x250': {'label': '300x250', 'value': '300x250'}}}}"
			no-crop="false" no-align="false" no-cover="false" no-load="false"></image-picker>
</block-field>
```
### Video Picker
Use `video-picker` tag to give user ability to define video data. You are able to disable any kind of available image settings and define default parameters.
``` html
<block-field title="My Video">
    <image-picker model="$data.video"
			settings="{'defaults': {'params': {'scale': 'fill', 'polite': true, 'mute': true, 'controls': false, 'autoplay': true}}, 'cropping': { 'ratios': {'300x250': {'label': '300x250', 'value': '300x250'}}}}"
			no-crop="false" no-align="false" no-cover="false" no-load="false" no-autoplay="true" no-controls="true" no-mute="true" no-loop="false"></image-picker>
</block-field>
```
### Color Picker
Use `color-picker` tag to give user ability to define color.
``` html
<block-field title="My Color">
    <color-field placeholder="HEX / RGB / RGBA" model="$data.color"></color-field>
</block-field>
```

## API Methods
JavaScript `tactic` namespace with container external methods is always available in the banner. Use it to open click tags, track events or perform any other ad vendor related actions without thinking about ad vendors API differences.
### tactic.container.ready(callback : Function)
``` js
// Wait for TACTIC Container initialisation ready state.
tactic.container.ready(function (data) {

    var
		/**
		 * Initialise your banner as soon as you get data.
		 * @type {Creative}
		 */
		banner = new YourBannerInitialiser(data);

});
```
### tactic.container.clickThrough(url : String, [vars : Object], [params : Object])
Open landing page destination with or without additional parameters. Ad network click tag URL will be merged with requested URL automatically.
``` js
tactic.container.clickThrough('https://www.yourdestination.com/', {

	/**
	 * Indicate URL variables to be added to destination URL.
	 * @type {String}
	*/
	utm_campaign: 'campaignName'

}, {

	/**
	 * Indicate window target.
	 * @type {String}
	*/
	target: '_blank',

	/**
	 * Indicate if URL variables have to be encoded. Default value is 'false'.
	 * @type {Boolean}
	 */
	encode: true,

	/**
	 * Indicate if requested URL variables have to be merged with initial ad vendor variables. Default value is 'true'.
	 * @type {Boolean}
	 */
	merge: true

});
```
To open default ad network click tag.
``` js
tactic.container.clickThrough(null);
```
#### tactic.container.requestResize(width : Number, height : Number, [x : Number], [y : Number]) : Boolean
Resize banner window (if supported by ad vendor). Will return 'true' on success.
``` js
tactic.container.requestResize(300, 600);
```
#### tactic.container.requestExpand() : Boolean
Request banner expand (if supported by ad vendor). Will return 'true' on success.
``` js
tactic.container.requestExpand();
```
#### tactic.container.requestCollapse() : Boolean
Request banner collapse (if supported by ad vendor). Will return 'true' on success.
``` js
tactic.container.requestCollapse();
```
#### tactic.container.requestClose() : Boolean
Close banner (if supported by ad vendor). Will return 'true' on success.
``` js
tactic.container.requestClose();
```
#### tactic.container.one(event : String, callback : Function) : Boolean
Ad event listeners to API events.
``` js
tactic.container.one(tactic.container.EVT_ADAPTER_POLITE, function() {
    // Place heavy content into the banner on polite load ready event.
});
```
#### tactic.url.sanitize(url : String) : String
Sanitize your URL to get correct protocol.
``` js
tactic.url.sanitize('//crv-res.trtm.io/samples/images/table-laptop-coffee-640.jpg');
// Will return 'https://crv-res.trtm.io/samples/images/table-laptop-coffee-640.jpg?__tbi=0'
```

## Creative Layers
To ease work with assets, we created common elements that will utilise all content editor features.
#### tactic.layers.BannerLayer(key : String, data : Object, [callback : Function], [overrides : Object]) : void
Creates banner instance, will try to parse and build layers identified in advert data automatically.
``` html
<body></body>
```
``` js
var

	/**
	 * Define banner data.
	 * @type {Object}
	 */
	data       = {

		/**
		 * @type {String}
		 */
		type: "BannerLayer",

		/**
		 * Indicate banner click tag parameters.
		 * Use "BannerLayer.getClickTag()" method later to get clicktag value and URL variables.
		 *
		 * @type {Object}
		 */
		clicktag: {

			/**
			 * @type {Boolean}
			 */
			override: true,

			/**
			 * Indicate if requested URL variables have to be merged with initial network variables. Default value is 'true'.
			 *
			 * @type {Boolean}
			 */
			synchronise: true,

			/**
			 * Indicate if URL variables have to be encoded. Default value is 'true'.
			 *
			 * @type {Boolean}
			 */
			encode: true,

			/**
			 * Indicate redirect URL value.
			 *
			 * @type {String}
			 */
			url: "https://www.tacticrealtime.com/",

			/**
			 * Indicate alternative click tags (e.g. if you need different click tag per banner frame).
			 *
			 * @type {Array}
			 */
			options: [
				{

					/**
					 * @type {String}
					 */
					url: "https://www.tacticrealtime.com/platform/"

				}
			]
		},

		/**
		 * Indicate banner UTM definition values.
		 * Will be added as URL variables to destination URL on BannerLayer.getClickTag() method call.
		 *
		 * @type {Object}
		 */
		definition: {

			/**
			 * @type {String}
			 */
			utm_campaign: "",

			/**
			 * @type {String}
			 */
			utm_content: "",

			/**
			 * @type {String}
			 */
			utm_medium: "",

			/**
			 * @type {String}
			 */
			utm_source: "",

			/**
			 * @type {String}
			 */
			utm_term: ""

		},

		/**
		 * Define banner parameters.
		 * @type {Object}
		 */
		params: {

			/**
			 * @type {Object}
			 */
			wait: {

				/**
				 * Indicate if banner has to wait for font load complete event.
				 * @type {Array}
				 */
				fonts: [

					/**
					 * Indicate font face to wait for.
					 *
					 * @type {String}
					 */
					"OpenSans"

				]

			}
		},

		/**
		 * @type {Object}
		 */
		layers: {

			// Recursive layer structure.

		}

	};

var

	/**
	 * Create new Banner layer.
	 * @type {tactic.layers.BannerLayer}
	 */
	banner = new tactic.layers.BannerLayer('BN', data, function (event) {

		// Look for event type.
		switch (event.type) {

			case 'init':

				// Load text on init.
				this.load();

				break;

			case 'load':

				// Do something on load complete event.
				// For example output created image object to console.
				console.log(this);

				break;

		}

	});
```


#### tactic.layers.TextLayer(key : String, data : Object, [callback : Function], [parent : Object], [overrides : Object]) : void
Inject text into banner's DOM element. Method will automatically resize text if it doesn't fit container bounds.
``` html
<body>
    <div data-key="TXT_WRAPPER" style="width: 240px; height: 120px;">
    	<table>
    		<tr>
    			<td data-key="TXT_HOLDER">
					<div data-ket="TXT"></div>
    			</td>
    		</tr>
    	</table>
    </div>
</body>
```
``` js
var

	/**
	 * Define text data.
	 * @type {Object}
	 */
	data       = {

		/**
		 * @type {String}
		 */
		type: "TextLayer",

		/**
		 * Define layer parameters.
		 * @type {Object}
		 */
		params: {

			/**
			 * Identify text holder, it will be used to apply font size value while automatic text size adjustment.
			 * @type {String}
			 */
			holder: 'TXT_HOLDER',

			/**
			 * Identify text wrapper, it will be used as text area size indicator while automatic text size adjustment.
			 * @type {String}
			 */
			wrapper: 'TXT_WRAPPER',

			/**
			 * Identify if text element has to be wrapper in additional HTML tags.
			 * @type {Array}
			 */
			tags: [
				'p'
			],

			/**
			 * Identify line break params.
			 * @type  {Object}
			 */
			line: {

				/**
				 * Identify HTML element before line break.
				 * @type  {String}
				 */
				before: '',

				/**
				 * Identify HTML element after line break.
				 * @type  {String}
				 */
				after: '<br/>'

			}

		},

		/**
		 * Identify text source options.
		 * Text with smaller length will be selected if application will identify that big text can't fit container.
		 * @type {Array}
		 */
		sources: [
			{
				text: 'Hello World! Text option with long text here.'
			},
			{
				text: 'Hello World!'
			}
		]

	};

var

	/**
	 * Create new Text layer.
	 * @type {Text}
	 */
	layer = new tactic.layers.TextLayer('TXT', data, function () {

		// Look for event type.
		switch (event.type) {

			case 'init':

				// Load text on init.
				this.load();

				break;

			case 'load':

				// Do something on load complete event.
				// For example output created image object to console.
				console.log(this);

				break;

		}

	});
```
#### tactic.layers.ImageLayer(key : String, data : Object, [callback : Function], [parent : Object], [overrides : Object]) : void
Inject image into banner's DOM element.
``` html
<body>
    <div data-key="IMG" style="width: 240px; height: 120px;">
    	<div data-key="IMG_AREA"></div>
    	<div data-key="IMG_HOLDER">
			<div data-ket="IMG"></div>
    	</div>
    </div>
</body>
```
``` js
var

	/**
	 * Define image data.
	 * @type {Object}
	 */
	data  = {

		/**
		 * @type {String}
		 */
		type: "ImageLayer",

		/**
		 * Define layer parameters.
		 * @type {Object}
		 */
		params: {

			/**
			 * Identify image holder.
			 * @type {String}
			 */
			holder: 'IMG_HOLDER',

			/**
			 * Identify image area.
			 * @type {String}
			 */
			wrapper: 'IMG_AREA',

			/**
			 * Identify if image element has to be wrapper in additional HTML tags.
			 * @type {Array}
			 */
			tags: [
				'div'
			],

			/**
			 * Identify cropping settings in percent from edges (top, right, bottom, left).
			 * @type {Array}
			 */
			crop: [
				0,
				0.2,
				0,
				0.2
			],

			/**
			 * Identify alignment settings.
			 * @type {Array}
			 */
			align: [

				/**
				 * Possible values: 'left', 'center', 'right'.
				 * @type {String}
				 */
				'center',

				/**
				 * Possible values: 'top', 'middle', 'bottom'.
				 * @type {String}
				 */
				'middle'

			],

			/**
			 * Identify if image has to fill or fit container.
			 * Possible values:  'fill', 'fit'.
			 * @type {String}
			 */
			scale: 'fit',

			/**
			 * Set image format to be delivered by image processor.
			 * Possible values:  'webp', 'png', 'jpeg'.
			 * @type {String}
			 */
			format: 'webp',

			/**
			 * Identify if image has to be loaded politely.
			 * @type {Boolean}
			 */
			polite: true,

			/**
			 * Identify if image has to be placed as background image.
			 * @type {Boolean}
			 */
			background: false,

			/**
			 * Identify if image has to be resized, cropped and aligned.
			 * @type {Boolean}
			 */
			resize: true,

			/**
			 * Identify image upscale density.
			 * @type {Object}
			 */
			ratio: {
			
                /**
                 * Image upscale density.
                 * @type {Number}
                 */
			    level: 2,
			    
                /**
                 * Image upscale velocity.
                 * @type {Number}
                 */
			    velocity: 0
			
			},

			/**
			 * Identify image quality.
			 * @type {Object}
			 */
			quality: {
			
                /**
                 * Image quality.
                 * @type {Number}
                 */
			    level: 80,
			    
                /**
                 * Image quality velocity.
                 * @type {Number}
                 */
			    velocity: 0
			
			},

			/**
			 * Identify image processing parameters.
			 * @type {Object}
			 */
			resize: {
			
                /**
                 * Image cropping method ('none', 'select', 'canvas', 'holder').
                 * @type {String}
                 */
			    method: "selection",
			    
                /**
                 * Image extension in pixles.
                 * @type {Number}
                 */
			    extend: 0
			
			},

			/**
			 * Identify image bluriness.
			 * @type {Number}
			 */
			blur: 0,

			/**
			 * Identify image sharpness.
			 * @type {Number}
			 */
			sharpen: 0

		},

		/**
		 * Identify image source options.
		 * @type {Array}
		 */
		sources: [
			{
				width:  640,
				height: 427,
				url:    'http://crv-res.trtm.io/samples/images/table-laptop-coffee-640.jpg'
			},
			{
				width:  320,
				height: 214,
				url:    'http://crv-res.trtm.io/samples/images/table-laptop-coffee-320.jpg'
			}
		]

	};

var

	/**
	 * Create new Image layer.
	 * @type {Text}
	 */
	layer = new tactic.layers.ImageLayer('IMG', data, function (event) {

		// Look for event type.
		switch (event.type) {

			case 'init':

				// Load image on init.
				this.load();

				break;

			case 'load':

				// Do something on load complete event.
				// For example output created image object to console.
				console.log(this);

				break;

		}

	});
```
#### tactic.layers.VideoLayer(key : String, data : Object, [callback : Function], [parent : Object], [overrides : Object]) : void
Inject video into banner's DOM element.
``` html
<body>
    <div date-key="VIDEO" style="width: 640px; height: 480px;"></div>
</body>
```
``` js
var

	/**
	 * Define video data.
	 * @type {Object}
	 */
	data  = {

		/**
		 * @type {String}
		 */
		type: "VideoLayer",

		/**
		 * Define layer parameters.
		 * @type {Object}
		 */
		params: {

			/**
			 * Identify if image element has to be wrapper in additional HTML tags.
			 * @type {Array}
			 */
			tags: [
				'div'
			],

			/**
			 * Identify cropping settings in percent from edges (top, right, bottom, left).
			 * @type {Array}
			 */
			crop: [
				0,
				0.2,
				0,
				0.2
			],

			/**
			 * Identify alignment settings.
			 * @type {Array}
			 */
			align: [

				/**
				 * Possible values: 'left', 'center', 'right'.
				 * @type {String}
				 */
				'center',

				/**
				 * Possible values: 'top', 'middle', 'bottom'.
				 * @type {String}
				 */
				'middle'

			],

			/**
			 * Identify if image has to fill or fit container.
			 * Possible values:  'fill', 'fit'.
			 * @type {String}
			 */
			scale: 'fill',

			/**
			 * Identify if image has to be loaded politely.
			 * @type {Boolean}
			 */
			polite: true,

			/**
			 * Define if video controls have to be displayed.
			 * @type {Boolean}
			 */
			controls: true,

			/**
			 * Define preload mode.
			 * Same as defaults for video HTML element (https://www.w3schools.com/tags/att_video_preload.asp).
			 * Possible values:  'auto', 'metadata', 'none'.
			 * @type {String}
			 */
			preload: 'metadata',

			/**
			 * Identify if video has to be played inline.
			 * @type {Boolean}
			 */
			inline: true,

			/**
			 * Identify if video has to be played automatically.
			 * @type {Boolean}
			 */
			autoplay: true,

			/**
			 * Identify if video will proceed playing after it ends.
			 * @type {Boolean}
			 */
			loop: true,

			/**
			 * Define video volume.
			 * @type {Number}
			 */
			volume: 0.6,

			/**
			 * Identify if video has to be muted.
			 * @type {Boolean}
			 */
			muted: true

		},

		/**
		 * @type {Array}
		 */
		sources: [
			{
				width:  640,
				height: 360,
				url:    'http://crv-res.trtm.io/samples/videos/bbb-640.mp4'
			},
			{
				width:  320,
				height: 180,
				url:    'http://crv-res.trtm.io/samples/videos/bbb-320.mp4'
			}
		]

	};

var

	/**
	 * Create new Video layer.
	 * @type {Text}
	 */
	layer = new tactic.layers.VideoLayer('VIDEO', data, function (event) {

		// Look for event type.
		switch (event.type) {

			case 'init':

				// Load video on init.
				this.load();

				break;

			case 'load':

				// Play video on load complete event.
				this.play();

				break;

		}

	});
```

## Common Functions
We provide a set of utilities that you are able to use to ease development of your banner.
#### tactic.utils.watchFont(font : String, callback: Function, [timeout : Number]) : void
Wait for font load.
``` css
@font-face {
	font-family: 'font_light';
	src:         url('../assets/fonts/opensans-regular.eot');
	src:         url('../assets/fonts/opensans-regular.eot?#iefix') format('embedded-opentype'),
	             url('../assets/fonts/opensans-regular.woff2') format('woff2'),
                 url('../assets/fonts/opensans-regular.woff') format('woff'),
	             url('../assets/fonts/opensans-regular.ttf') format('truetype');
	font-weight: normal;
	font-style:  normal;
}

*.font_light {
	font-family: 'font_light', sans-serif;
}
```
``` js
tactic.utils.watchFont('font_light', function(font, success) {
    // Check if load was successful.
    if (success) {
        // Output successful status to console.
        console.log('Font "' + font + '" is loaded.');
    }
}, 1000);
```
#### tactic.utils.replaceMacros(object : (Object|Array|String), macros: Object, [depth : Number]) : (Object|Array|String)
Utility replaces text macros in strings and objects recursively. Will return same object, but with replaced macros.
``` js
var

	/**
	 * @type {String}
	 */
    raw_text = 'The quick {foxColor} fox jumps overlay the lazy dog.',

	/**
	 * @type {Object}
	 */
    macros = {

    	/**
    	 * @type {Object}
    	 */
        foxColor: {
        
            /**
             * @type {String}
             */
            value: 'brown'
            
        }

    };

var

	/**
	 * Execute utility and replace raw text with available macros.
	 * @type {String}
	 */
    replaced_text = tactic.utils.replaceMacros(raw_text, macros);

// Log updated text to console, will output 'The quick brown fox jumps overlay the lazy dog.'.
console.log(replaced_text);
```


## Licence
https://tacticrealtime.com/license/sdk/

Copyright (c) 2025 TACTIC™ Real-Time Marketing
