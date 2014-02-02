gh-ticker is a simplistic client-side ticker of your GitHub public activity that you can drop into your site.

## Getting started
You'll need to:

* Reference Handlebars.js, if you're not already
* Reference jQuery, if you're not already
* Reference js/gh-ticker.js
* Reference js/gh-templates.js
* Reference css/gh-ticker.css for basic styling

Then drop in a little markup:

    <div id="gh-ticker" data-user="pablissimo" data-interval-ms="5000" />

Set your username against data-user, and change the ticker interval as required.

## How it works
gh-ticker uses the GitHub public unauthenticated API to pull the event feed for a given user. Then, for each event, it looks for a Handlebars partial template with a name of the form gh-{EventName}. For example, when it encounters a CreateEvent it looks for the template gh-CreateEvent.

Templates are supplied pre-compiled in gh-templates.js, but the Handlebars source for each event-type template can be found in the /templates folder and compiled using the supplied build.sh script.

## Customising the templates
If you want to customise the templates used, first find the relevant template for the event type you want to modify in /templates.

You're given the whole event item, straight from the API, so can use any of the fields the API provides.

Once you've made your changes, be sure to run /templates/build.sh to compile the templates into /js/gh-ticker.js.

## Dependencies

gh-ticker relies upon:

* Handlebars for templating
* jQuery for element manipulation and AJAX calls (though this could be coded around easily)
* The GitHub API

## Licence

gh-ticker is offered under the BSD 3-Clause licence:

Copyright (c) 2014, Paul O'Neill, pablissimo.com
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of pablissimo.com nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.