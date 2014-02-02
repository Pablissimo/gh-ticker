gh-ticker is a simplistic client-side ticker of your GitHub public activity that you can drop into your site.

## Getting started
You'll need to:

* Reference Handlebars.js, if you're not already
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
* The GitHub API