# [TACTIC™ Boilerplate](https://tacticrealtime.com/)
# Make Your Own Dynamic Creatives

TACTIC™ Boilerplate is a part of TACTIC™ Creative SDK. Boilerplate provides you with a set of instruments and creative examples that shows you how to put together custom Dynamic Creatives. You have full control of the layout, size and content. You can create your own creatives depending on your individual needs.

Boilerplate package is designed to help developers to create, test and debug custom dynamic creatives before they will be uploaded to TACTIC™ application. The package includes development environment which allows to emulate TACTIC™ application's content editor and creative's public methods.

The package can be also used as an example and guide for development of dynamic creatives in general. It will explain how to recursively build complex frames and layers, place various assets, open click tags and much more. Package will also give you a hint on how to create multiple banner sizes which use common styles, scripts and single data source. Note that you can edit existing example or make your own creative from scratch. You're not obliged to use suggested creative example or creative data (with the only limitation for JSON asset data structure that come from predefined application's image and video picker directives).

## Solution
TACTIC™ Boilerplate allows to set dynamic creative data structure and see how data affects banner appearance at the same time. Boilerplate emulates application content (data) editor, so that the developer can build data structure, analyse content editor behaviour and develop banners at the same time, without the need to compile whole TACTIC™ application.

Content editor provides basic data inputs, such as image or video uploaders, text inputs, drop downs, buttons etc. Use them to create content editor layout and data points. Boilerplate will provide this data for the banner, so you can change its appearance, behaviour, and place various assets into previously defined place holers.

After you are done with your dynamic creative, upload it to TACTIC™ Application. We will analyse, validate and perform quality assurance for you. If no issues will be found, creative will become available for the dedicated brand in the application, and can be used to create new adverts.

## Structure
You are free to use any kind of file structure within the package. Below is the description of various components for this particular Boilerplate package:

|    File    |   Description  |
|------------|----------------|
| editor.html | Creative content editor structure. |
| manifest.json | Describes package structure and indicates file relations. Includes default create data. |
| index.html | Emulates application's content editor environment with banner preview on the side. |
| tactic.js | TACTIC™ JS library. Script loads creative bundle, advert data and network adapter. This script is included automatically while running creative locally with index.html or when creative package is uploaded to application. |
| 300x250/index.html | Banner size wrapper that combines scripts, HTML and CSS. |
| 300x250/fallback.png | Static fallback image. |

## Installation
First of all, install necessary development dependencies by running
``` sh
npm install
```

Boilerplate uses a local server to run. To run local server execute command:
``` sh
npm run serve
```
This command launches server on some available port and opens editor page in browser.

## Validation
For running validation of creative run the following command:
``` sh
npm run validate
```

Validation consists of three parts: formats validation, security validation and preview validation.
If you found errors on some stages and fixed them you can run only specific validation by executing on of three commands:

`npm run validate-formats` for formats validation

`npm run validate-security` for security validation

`npm run validate-preview` for preview validation

For detailed description of validation errors please see [this page](https://github.com/tacticrealtime/creative-validator/blob/master/ERROR_LIST.md).

## Packaging
For packaging your creative into .zip file before uploading to Tactic run the following command:
``` sh
npm run zip
```

## Minification
Loading size is usually limited by advertising networks. Minification helps to fulfill these requirments and decrease traffic.
By default minification is disabled in this boilerplate. To enable it please replace links to indexes in `manifest.json` to `.min.html` versions. For example `"index": "140x350/index.html",` should become `"index": "140x350/index.min.html",`.
Now you can run `npm run min` to generate minified versions of html, css and js files in creative. If you are using minified `manifest.json` please remember to run `npm run min` before testing your advert after any changes.
If you are enabled minification you can run `npm run minzip` command to minify and package your creative at once.
It is advised to enable minification only before uploading your creative to Tactic because during development it is easier to work without minification.
If you enabled minification you can change links in `manifest.json` back to not minified versions of indexes and continue work with them.

## Manifest Declaration
Manifest file explains creative structure. It has to be located in creative's package root and named `manifest.json`. Define default content in `data` object and change it using content editor `editor.html`.
``` json
{
  "type": "MANIFEST",
  "version": "1.0",
  "author": "Anton Gorodnyanskiy",
  "brand": "TACTIC",
  "name": "Boilerplate",
  "created": "08/11/2017",
  "updated": "15/11/2017",
  "editor": {
    "url": "editor.html",
    "version": "1.1"
  },
  "sizes": [
    {
      "type": "STATIC",
      "name": "140x350",
      "width": 140,
      "height": 350,
      "index": "140x350/index.html",
      "fallback": {
        "static": "140x350/fallback.png"
      }
    }
  ],
  "data": {
    "your": "data here."
  }
}
```

## Content Editor
Creative content editor `editor.html` provides various data inputs that you can use to give application user ability to edit dynamic content.
For detailed content edtior example please see [this page](https://github.com/tacticrealtime/creative-editor/).
#### Base
Use `block`, `block-label` and `block-group` tags to create content editor structure.
``` html
<block title="Block">
    <block-label title="Group"></block-label>
    <block-group>
    	...
    </block-group>
</block>
```
#### Text Field
Use `text-field` tag to give user ability to define single line text values.
``` html
<block-field title="My Text">
    <text-field placeholder="Value" model="$data.text"></text-field>
</block-field>
```
#### Text Area
Use `text-field` tag to give user ability to define multi-line text values.
``` html
<block-field title="My Text">
    <text-area placeholder="Value" model="$data.text"></text-area>
</block-field>
```
#### Switch Button
``` html
<block-field title="Switch">
    <switch-button model="$data.switch">
		<switch-button-option value="value1">Value 1</switch-button-option>
		<switch-button-option value="value2">Value 2</switch-button-option>
	</switch-button>
</block-field>
```
#### Toggle Button
``` html
<block-field title="Toggle">
    <toggle-button model="$data.toggle" on="On" off="Off"></toggle-button>
</block-field>
```
#### Dropdown Select
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
#### Image Picker
Use `image-picker` tag to give user ability to define image data. You are able to disable any kind of available image settings and define default parameters.
``` html
<block-field title="My Image">
    <image-picker model="$data.image"
			settings="{'defaults': {'params': {'scale': 'fill', 'polite': true}}, 'cropping': { 'ratios': {'300x250': {'label': '300x250', 'value': '300x250'}}}}"
			no-crop="false" no-align="false" no-cover="false" no-load="false"></image-picker>
</block-field>
```
#### Video Picker
Use `video-picker` tag to give user ability to define video data. You are able to disable any kind of available image settings and define default parameters.
``` html
<block-field title="My Video">
    <image-picker model="$data.video"
			settings="{'defaults': {'params': {'scale': 'fill', 'polite': true, 'mute': true, 'controls': false, 'autoplay': true}}, 'cropping': { 'ratios': {'300x250': {'label': '300x250', 'value': '300x250'}}}}"
			no-crop="false" no-align="false" no-cover="false" no-load="false"
			no-autoplay="true" no-controls="true" no-mute="true"></image-picker>
</block-field>
```
#### Color Picker
Use `color-picker` tag to give user ability to define color.
``` html
<block-field title="My Color">
    <color-field placeholder="HEX / RGB / RGBA" model="$data.color"></color-field>
</block-field>
```

## API Methods
JavaScript `tactic` namespace with container external methods is always available in the banner. Use it to open click tags, track events or perform any other ad network related actions without thinking about ad networks API differences.
#### tactic.container.ready(callback : Function) : void
``` js
// Wait for TACTIC Container initialisation ready state.
tactic.container.ready(function (data) {

    var
		/**
		 * Initialise your creative object as soon as you get data.
		 * @type {Creative}
		 */
		creative = new YourCreativeInitialiser(data);

});
```
#### tactic.container.clickThrough(url : String, [vars : Object], [params : Object]) : String
Open specific destination with additional parameters. Ad netwrok click tag URL (tracker) will be merged with requested URL automatically.
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
	 * Indicate if requested URL variables have to be merged with initial network variables. Default value is 'true'.
	 * @type {Boolean}
	 */
	merge: true

});
```
Open initial ad network click tag.
``` js
tactic.container.clickThrough(null);
```
#### tactic.container.requestResize(width : Number, height : Number, [x : Number], [y : Number]) : Boolean
Resize banner window (if supported by ad network). Will return 'true' on success.
``` js
tactic.container.requestResize(300, 600);
```
#### tactic.container.requestExpand() : Boolean
Request banner expand (if supported by ad network). Will return 'true' on success.
``` js
tactic.container.requestExpand();
```
#### tactic.container.requestCollapse() : Boolean
Request banner collapse (if supported by ad network). Will return 'true' on success.
``` js
tactic.container.requestCollapse();
```
#### tactic.container.requestClose() : Boolean
Close banner (if supported by ad network). Will return 'true' on success.
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
// Will return 'http://crv-res.trtm.io/samples/images/table-laptop-coffee-640.jpg?__tactic_brand={{BRAND}}'
```

## API Utilities
We provide a set of utilities that you are able to use to ease development of your creative.
#### tactic.utilities.placeText(target : Element, data : String, [width: Number], [height: Number], [callback: Function]) : Element
Inject text into creative's DOM element. Method will automatically resize text if it doesn't fit container bounds.
``` js
var

	/**
	 * Find text container in DOM.
	 * @type {Element}
	 */
	text = document.getElementById('myText'),

	/**
	 * Define image data.
	 * @type {Object}
	 */
	data = 'Hello World!';

// Inject text DOM.
tactic.utilities.placeText(text, data, text.offsetWidth, text.offsetHeight, function (target, source, scale) {
	// Do something on text append complete event.
});
```
#### tactic.utilities.placeImage(target : Element, data : Object, [width: Number], [height: Number], [callback: Function]) : Element
Inject video into creative's DOM element.
``` js
var

	/**
	 * Find image container in DOM.
	 * @type {Element}
	 */
	image = document.getElementById('myImage'),

	/**
	 * Define image data.
	 * @type {Object}
	 */
	data  = {

		/**
		 * @type {Object}
		 */
		params:  {

			/**
			 * Identify cropping settings in percent from edges (top, right, bottom, left).
			 * @type {Array}
			 */
			crop:       [
				0,
				0.2,
				0,
				0.2
			],

			/**
			 * Identify alignment settings.
			 * @type {Array}
			 */
			align:      [

				/**
				 * Possbile values: 'left', 'center', 'right'.
				 * @type {String}
				 */
				'center',

				/**
				 * Possbile values: 'top', 'middle', 'bottom'.
				 * @type {String}
				 */
				'middle'

			],

			/**
			 * Identify if image has to fill or fit container.
			 * Possbile values:  'fill', 'fit'.
			 * @type {String}
			 */
			'scale':    'fill',

			/**
			 * Identify if image has to be loaded politely.
			 * @type {Boolean}
			 */
			'polite':   true

		},

		/**
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

// Inject image to DOM.
tactic.utilities.placeImage(image, data, image.offsetWidth, image.offsetHeight, function (target, source, scale) {
	// Do something on image load complete event.
});
```
#### tactic.utilities.placeVideo(target : Element, data : Object, [width: Number], [height: Number], [callback: Function]) : Element
Inject video into creative's DOM element.
``` js
var

	/**
	 * Find video container in DOM.
	 * @type {Element}
	 */
	video = document.getElementById('myVideo'),

	/**
	 * Define video data.
	 * @type {Object}
	 */
	data  = {

		/**
		 * @type {Object}
		 */
		params:  {

			/**
			 * Identify cropping settings in percent from edges (top, right, bottom, left).
			 * @type {Array}
			 */
			crop:       [
				0,
				0.2,
				0,
				0.2
			],

			/**
			 * Identify alignment settings.
			 * @type {Array}
			 */
			align:      [

				/**
				 * Possbile values: 'left', 'center', 'right'.
				 * @type {String}
				 */
				'center',

				/**
				 * Possbile values: 'top', 'middle', 'bottom'.
				 * @type {String}
				 */
				'middle'

			],

			/**
			 * Identify if image has to fill or fit container.
			 * Possbile values:  'fill', 'fit'.
			 * @type {String}
			 */
			'scale':    'fill',

			/**
			 * Identify if image has to be loaded politely.
			 * @type {Boolean}
			 */
			'polite':   true,

			/**
			 * Define if video controls have to be displayed.
			 * @type {Boolean}
			 */
			'controls': true,

			/**
			 * Define preload mode.
			 * @type {String}
			 */
			'preload':  'metadata',

			/**
			 * Identify if video has to be played inline.
			 * @type {Boolean}
			 */
			'inline':   true,

			/**
			 * Identify if video has to be played automatically.
			 * @type {Boolean}
			 */
			'autoplay': true,

			/**
			 * Identify if video will proceed playing after it ends.
			 * @type {Boolean}
			 */
			'loop':     true,

			/**
			 * Define video volume.
			 * @type {Number}
			 */
			'volume':   0.6,

			/**
			 * Identify if video has to be muted.
			 * @type {Boolean}
			 */
			'muted':    true

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

// Inject video to DOM.
tactic.utilities.placeVideo(video, data, video.offsetWidth, video.offsetHeight, function (target, source, scale) {
	// Do something on video load complete event.
});
```
#### tactic.utilities.watchFont(className : String, callback: Function, [timeout : Number]) : void
Wait for font load.
``` css
@font-face {
	font-family: 'OpenSansRegular';
	src:         url('../assets/fonts/opensans-regular.eot');
	src:         url('../assets/fonts/opensans-regular.eot?#iefix') format('embedded-opentype'),
	             url('../assets/fonts/opensans-regular.woff2') format('woff2'),
                 url('../assets/fonts/opensans-regular.woff') format('woff'),
	             url('../assets/fonts/opensans-regular.ttf') format('truetype');
	font-weight: normal;
	font-style:  normal;
}

*.OpenSansRegular {
	font-family: 'OpenSansRegular', sans-serif;
}
```
``` js
tactic.utilities.watchFont('OpenSansRegular', function(className, success) {
    if (success) {
        // Font is loaded.
    }
}, 1000);
```

## Technologies
Boilerplate uses a number of open source projects and languages to work properly:
- [HTML](https://www.w3schools.com/html/html_intro.asp) - creative markup.
- [CSS](https://www.w3schools.com/css/) - creative styling and animation.
- [JavaScript](https://www.javascript.com) - creative core and functionality.
- [AngularJS](https://angularjs.org) - creative content editor.
- [JSON](https://json.org) - creative data format.

## Limitations
The Boilerplate package limitations are as follows:
- You are limited to use HTML, CSS and JavaScript languages only.
- Scripts, styles, static assets and any other includes have to be stored within the package. You are not able to use external requests (except trtm.io domain).
- Boilerplate package structure has to be described in "manifest.json".
- Creative content editor has to be assembled in "editor.html".
- Do not include "node_modules" and system files like ".DS_Store" or "Thumbs.db" into package when uploading creative to application.
- Maximum package size is limited to 10MB.

## To-dos
 - Make JSON schema

## Licence
https://tacticrealtime.com/license/sdk/

## Hints
The main challenge of designing a template is fitting banner elements into all formats and saving their aspect ratio at the same time. By keeping creative simple, you are facilitating the accomplishment of a task.
#### Save Production Time
There are several practices of optimised banner production process. One of those lies in dividing all banner formats into several basic ones – square (480x400), tall (120x600), and wide (980x120). Use those sizes to do wire framing and layout of required banner elements. It will be much easier to design the rest of the formats when you have basic ones ready.
#### Keep It Small
The weight of the banner is one of the most important characteristics. The majority of advertisers require single banner size to be less than hundred kilobytes. To achieve this and increase banner load speed, avoid using special web fonts and try to go for HTML/CSS rendering instead of images.
#### Text Asset Specifics
Text is one of most problematic elements of the banner. Narrow formats have a lack of space for long words and it is barely possible to adjust those when text is dynamic. As a best practice, set maximum text length and use it in all formats, so it looks natural and easy to read. Please note that TACTIC™ offers automatic text adjustment feature that helps to fit text within marked area by reducing font size.
#### Image Asset Specifics
Huge amount of various banner formats creates several problems for pixel-perfect fitment of dynamic images. While designing a template, you have to keep in mind that TACTIC™ offers several features for image positioning and cropping. Every image can be cropped and aligned for square, portrait and landscape formats independently.
#### Animation
Animation becomes very sensitive case for mobile devices because of high CPU usage. Some advertisers have strict limitations which have to be analysed before designing a template. Avoiding unnecessary animation will help to fit most of advertiser guidelines and increase user experience.
#### Frames
It is possible to use frames for any banner element in the creative. Frames can be switched automatically, by interaction with user, or both. We offer ready-made solution for frame controls in the Boilerplate package example.

For more information, see TACTIC™ [help page](https://help.tacticrealtime.com/) or contact [creative development team](https://tacticrealtime.com/?r=company-tallinn).

Copyright (C) 2017 TACTIC™ Real-Time Marketing
