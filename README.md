# [TACTIC™ Boilerplate](https://tacticrealtime.com/)
# Make Your Own Dynamic Creatives

TACTIC™ Boilerplate is a part of TACTIC™ Creative SDK. Boilerplate provides you with a set of instruments and creative examples that shows you how to put together custom Dynamic Creatives. You have full control of the layout, size and content. You can create your own creatives depending on your individual needs.

## Preamble
Boilerplate package is designed to help developers to create, test and debug custom dynamic creatives before they will be uploaded to TACTIC™ application. The package includes development environment which allows to emulate TACTIC™ application's content editor and creative's public methods.

The package can be also used as an example and guide for development of dynamic creatives in general. It will explain how to recursively build complex frames and layers, place various assets, open click tags and much more. Package will also give you a hint on how to create multiple banner sizes which use common styles, scripts and single data source. Note that you can edit existing example or make your own creative from scratch. You're not obliged to use suggested creative example or creative data (with the only limitation for JSON asset data structure that come from predefined application's image and video picker directives).

## Solution
TACTIC™ Boilerplate allows to set dynamic creative data structure and see how data affects banner appearance at the same time. Boilerplate emulates application content (data) editor, so that the developer can build data structure, analyse content editor behaviour and develop banners at the same time, without the need to compile whole TACTIC™ application.

Content editor provides basic data inputs, such as image or video uploaders, text inputs, drop downs, buttons etc. Use them to create content editor layout and data points. Boilerplate will provide this data for the banner, so you can change its appearance, behaviour, and place various assets into previously defined place holers.

After you are done with your dynamic creative, upload it to TACTIC™ Application. We will analyse, validate and perform quality assurance for you. If no issues will be found, creative will become available for the dedicated brand in the application, and can be used to create new adverts.

## Structure
You are free to use any kind of file structure within the package. Below is the description of various components for this particular Boilerplate package:
| File | Description |
| ------ | ------ |
| editor.html | Creative content editor master file with AngularJS directives. |
| manifest.json | Describes package structure and indicates file relations. It also includes default data for the content editor. |
| preview.html | Emulates application's content editor environment with banner preview on the side. |
| tactic.js | Core script that load creative bundle, advert data and media adapter. This script is added automatically while running creative locally with preview.html or when creative package is uploaded to application. |
| 300x250/index.html | Banner size wrapper that combines scripts, HTML and CSS. |
| 300x250/fallback.png | Static banner size fallback image. |
JavaScript "tactic" namespace with container external methods is always available in the banner. Use it to open click tags, track events or perform any other ad network related actions without thinking about media networks API differences.

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

## Installation
Boilerplate requires a local server to run. To install local server:
```sh
$ sudo npm i -g http-server && ./serve.sh
```

Toerify the deployment, navigate to your server address in your preferred browser:
```sh
http://127.0.0.1:8000/
```

## To-dos
 - Make JSON schema and validator for creative data.

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
