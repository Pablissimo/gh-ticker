Handlebars.registerHelper('branchUrl', function (a, b, options) {
    return 'https://github.com/' + a + '/tree/' + b;
});

Handlebars.registerHelper('capitalise', function (a, options) {
    return a.charAt(0).toUpperCase() + a.slice(1);
});

Handlebars.registerHelper('commitIdShort', function (a, options) {
    return a.substring(0, 7);
});

Handlebars.registerHelper('dateAndTime', function (a, options) {
    var date = new Date(a);
    return date.toLocaleDateString() + " @ " + date.toLocaleTimeString();
});

// http://stackoverflow.com/a/21072419/677173
Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a === b) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('partialFor', function (a, options) {
    var partial = Handlebars.partials['gh-' + a];
    if (!partial) {
        return 'NO PARTIAL for ' + a;
    }
    else {
        return new Handlebars.SafeString(partial(this));
    }
});

Handlebars.registerHelper('pluralise', function (a, singular, plural, options) {
    if (a == 1) {
        return singular;
    }
    else {
        return plural;
    }
});

Handlebars.registerHelper('repoUrl', function (a, options) {
    return 'https://github.com/' + a;
});

Handlebars.registerHelper('tagUrl', function (a, b, options) {
    return 'https://github.com/' + a + '/tree/' + b;
});

Handlebars.registerHelper('wikiUrl', function (a, options) {
    return 'https://github.com/' + a + '/wiki';
});

$(function () {
    // Default interval 5s
    var intervalMs = parseInt($('#gh-ticker').data('interval-ms'), 10) || 5000;
    var mouseOver = false;

    var itemCount;
    var currentItemIndex = 0;

    function BeginGetActivityForUser(username, onSuccess, onError) {
        var url = 'https://api.github.com/users/' + username + '/events';

        $.ajax(url,
        {
            async: true,
            cache: true,
            contentType: 'application/json',
            dataType: 'jsonp',
            error: onError,
            jsonpCallback: 'handleGitHubResponse',
            success: function (data, status, xhr) { onSuccess(data); },
            timeout: 5000,
            type: 'GET'
        });
    };

    function ShowItem(id) {
        var currentItemIdx = (itemCount + id - 1) % itemCount;

        var currentItem = $('#gh-ticker-item-' + currentItemIdx);
        if (currentItem.length) {
            currentItem.hide();
        }

        $('#gh-ticker-item-' + id).show();
    }

    var onSuccess = function (data) {
        itemCount = data.data.length;
        var tickerElement = $('#gh-ticker');

        tickerElement
            .html(Handlebars.partials['gh']({ items: data.data }))
            .mouseover(function () {
                mouseOver = true;
            })
            .mouseout(function () {
                mouseOver = false;
            });

        window.setInterval(function () {
            if (!mouseOver) {
                currentItemIndex = (currentItemIndex + 1) % itemCount;
                ShowItem(currentItemIndex);
            }
        }, intervalMs);
    };

    BeginGetActivityForUser($('#gh-ticker').data('user'), onSuccess);
});