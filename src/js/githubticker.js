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

    // http://stackoverflow.com/a/21072419/677173
    Handlebars.registerHelper('ifeq', function (a, b, options) {
        if (a === b) {
            return options.fn(this);
        }
        else {
            return options.inverse(this);
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

    Handlebars.registerHelper('capitalise', function (a, options) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    });

    Handlebars.registerHelper('repoUrl', function (a, options) {
        return 'https://github.com/' + a;
    });

    Handlebars.registerHelper('tagUrl', function (a, b, options) {
        return 'https://github.com/' + a + '/tree/' + b;
    });

    Handlebars.registerHelper('branchUrl', function (a, b, options) {
        return 'https://github.com/' + a + '/tree/' + b;
    });

    Handlebars.registerHelper('wikiUrl', function (a, options) {
        return 'https://github.com/' + a + '/wiki';
    });

    Handlebars.registerHelper('commitIdShort', function (a, options) {
        return a.substring(0, 7);
    });

    Handlebars.registerHelper('dateAndTime', function (a, options) {
        var date = new Date(a);
        return date.toLocaleDateString() + " @ " + date.toLocaleTimeString();
    });

    var partials =
    [
        'CommitCommentEvent',
        'CreateEvent',
        'DeleteEvent',
        'FollowEvent',
        'ForkEvent',
        'GollumEvent',
        'IssueCommentEvent',
        'IssuesEvent',
        'MemberEvent',
        'PublicEvent',
        'PullRequestEvent',
        'PullRequestReviewCommentEvent',
        'PushEvent',
        'ReleaseEvent',
        'WatchEvent',
    ];

    partials.forEach(function (partial) {
        var p = $('#gh-ticker-' + partial + '-partial').html();
        Handlebars.registerPartial(partial, Handlebars.compile(p));
    });

    Handlebars.registerHelper('partialFor', function (a, options) {
        var partial = Handlebars.partials[a];
        if (!partial) {
            return 'NO PARTIAL for ' + a;
        }
        else {
            return new Handlebars.SafeString(partial(this));
        }
    });

    var template = Handlebars.compile($('#gh-ticker-template').html());

    var data = {
        items: [
      {
          "id": "1929111048",
          "type": "IssuesEvent",
          "actor": {
              "id": 1470336,
              "login": "Pablissimo",
              "gravatar_id": "c8f1d614927bdeea8ce8d43523ae66f1",
              "url": "https://api.github.com/users/Pablissimo",
              "avatar_url": "https://gravatar.com/avatar/c8f1d614927bdeea8ce8d43523ae66f1?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&r=x"
          },
          "repo": {
              "id": 7426932,
              "name": "Pablissimo/nrconfig",
              "url": "https://api.github.com/repos/Pablissimo/nrconfig"
          },
          "payload": {
              "action": "closed",
              "issue": {
                  "url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3",
                  "labels_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/labels{/name}",
                  "comments_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/comments",
                  "events_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/events",
                  "html_url": "https://github.com/Pablissimo/nrconfig/issues/3",
                  "id": 23712205,
                  "number": 3,
                  "title": "Failed to process instrumentation: Unable to load one or more of the requested types",
                  "user": {
                      "login": "craigedmunds",
                      "id": 1453591,
                      "avatar_url": "https://gravatar.com/avatar/daebb17822bcb9ff3bb6b4a9f7e7437d?d=https%3A%2F%2Fidenticons.github.com%2F326852254538e6dd6731021ef7c68f26.png&r=x",
                      "gravatar_id": "daebb17822bcb9ff3bb6b4a9f7e7437d",
                      "url": "https://api.github.com/users/craigedmunds",
                      "html_url": "https://github.com/craigedmunds",
                      "followers_url": "https://api.github.com/users/craigedmunds/followers",
                      "following_url": "https://api.github.com/users/craigedmunds/following{/other_user}",
                      "gists_url": "https://api.github.com/users/craigedmunds/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/craigedmunds/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/craigedmunds/subscriptions",
                      "organizations_url": "https://api.github.com/users/craigedmunds/orgs",
                      "repos_url": "https://api.github.com/users/craigedmunds/repos",
                      "events_url": "https://api.github.com/users/craigedmunds/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/craigedmunds/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "labels": [
                    {
                        "url": "https://api.github.com/repos/Pablissimo/nrconfig/labels/enhancement",
                        "name": "enhancement",
                        "color": "84b6eb"
                    }
                  ],
                  "state": "closed",
                  "assignee": null,
                  "milestone": null,
                  "comments": 2,
                  "created_at": "2013-12-04T12:29:26Z",
                  "updated_at": "2013-12-27T15:35:23Z",
                  "closed_at": "2013-12-27T15:35:23Z",
                  "pull_request": {
                      "html_url": null,
                      "diff_url": null,
                      "patch_url": null
                  },
                  "body": "I'm trying to run this on a nymber of open source libraries we use (I've packaged them up in a zip here https://www.dropbox.com/s/gdo9cnkm41l7a42/NewRelicInstrumentationTesting.rar)\r\n\r\nOn running the tool:\r\nnrconfig /i ~/Source/n2PerfAnalysis/NewRelicInstrumentationTesting/*.dll /debug /v\r\n\r\nI get:\r\nFailed to process instrumentation: Unable to load one or more of the requested types. Retrieve the LoaderExceptions property for more information.\r\n\r\nI've added the /v and /debug flags to try to get more info out, but no joy!"
              }
          },
          "public": true,
          "created_at": "2013-12-27T15:35:23Z"
      },
      {
          "id": "1929111046",
          "type": "IssueCommentEvent",
          "actor": {
              "id": 1470336,
              "login": "Pablissimo",
              "gravatar_id": "c8f1d614927bdeea8ce8d43523ae66f1",
              "url": "https://api.github.com/users/Pablissimo",
              "avatar_url": "https://gravatar.com/avatar/c8f1d614927bdeea8ce8d43523ae66f1?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&r=x"
          },
          "repo": {
              "id": 7426932,
              "name": "Pablissimo/nrconfig",
              "url": "https://api.github.com/repos/Pablissimo/nrconfig"
          },
          "payload": {
              "action": "created",
              "issue": {
                  "url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3",
                  "labels_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/labels{/name}",
                  "comments_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/comments",
                  "events_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3/events",
                  "html_url": "https://github.com/Pablissimo/nrconfig/issues/3",
                  "id": 23712205,
                  "number": 3,
                  "title": "Failed to process instrumentation: Unable to load one or more of the requested types",
                  "user": {
                      "login": "craigedmunds",
                      "id": 1453591,
                      "avatar_url": "https://gravatar.com/avatar/daebb17822bcb9ff3bb6b4a9f7e7437d?d=https%3A%2F%2Fidenticons.github.com%2F326852254538e6dd6731021ef7c68f26.png&r=x",
                      "gravatar_id": "daebb17822bcb9ff3bb6b4a9f7e7437d",
                      "url": "https://api.github.com/users/craigedmunds",
                      "html_url": "https://github.com/craigedmunds",
                      "followers_url": "https://api.github.com/users/craigedmunds/followers",
                      "following_url": "https://api.github.com/users/craigedmunds/following{/other_user}",
                      "gists_url": "https://api.github.com/users/craigedmunds/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/craigedmunds/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/craigedmunds/subscriptions",
                      "organizations_url": "https://api.github.com/users/craigedmunds/orgs",
                      "repos_url": "https://api.github.com/users/craigedmunds/repos",
                      "events_url": "https://api.github.com/users/craigedmunds/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/craigedmunds/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "labels": [
                    {
                        "url": "https://api.github.com/repos/Pablissimo/nrconfig/labels/enhancement",
                        "name": "enhancement",
                        "color": "84b6eb"
                    }
                  ],
                  "state": "closed",
                  "assignee": null,
                  "milestone": null,
                  "comments": 2,
                  "created_at": "2013-12-04T12:29:26Z",
                  "updated_at": "2013-12-27T15:35:23Z",
                  "closed_at": "2013-12-27T15:35:23Z",
                  "pull_request": {
                      "html_url": null,
                      "diff_url": null,
                      "patch_url": null
                  },
                  "body": "I'm trying to run this on a nymber of open source libraries we use (I've packaged them up in a zip here https://www.dropbox.com/s/gdo9cnkm41l7a42/NewRelicInstrumentationTesting.rar)\r\n\r\nOn running the tool:\r\nnrconfig /i ~/Source/n2PerfAnalysis/NewRelicInstrumentationTesting/*.dll /debug /v\r\n\r\nI get:\r\nFailed to process instrumentation: Unable to load one or more of the requested types. Retrieve the LoaderExceptions property for more information.\r\n\r\nI've added the /v and /debug flags to try to get more info out, but no joy!"
              },
              "comment": {
                  "url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/comments/31266840",
                  "html_url": "https://github.com/Pablissimo/nrconfig/issues/3#issuecomment-31266840",
                  "issue_url": "https://api.github.com/repos/Pablissimo/nrconfig/issues/3",
                  "id": 31266840,
                  "user": {
                      "login": "Pablissimo",
                      "id": 1470336,
                      "avatar_url": "https://gravatar.com/avatar/c8f1d614927bdeea8ce8d43523ae66f1?d=https%3A%2F%2Fidenticons.github.com%2F0855ede5d1ed3e3b2dde5a126b9c19f7.png&r=x",
                      "gravatar_id": "c8f1d614927bdeea8ce8d43523ae66f1",
                      "url": "https://api.github.com/users/Pablissimo",
                      "html_url": "https://github.com/Pablissimo",
                      "followers_url": "https://api.github.com/users/Pablissimo/followers",
                      "following_url": "https://api.github.com/users/Pablissimo/following{/other_user}",
                      "gists_url": "https://api.github.com/users/Pablissimo/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/Pablissimo/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/Pablissimo/subscriptions",
                      "organizations_url": "https://api.github.com/users/Pablissimo/orgs",
                      "repos_url": "https://api.github.com/users/Pablissimo/repos",
                      "events_url": "https://api.github.com/users/Pablissimo/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/Pablissimo/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "created_at": "2013-12-27T15:35:23Z",
                  "updated_at": "2013-12-27T15:35:23Z",
                  "body": "This should now have been fixed in 1.4.0.0, where the whole back-end was replaced with a modular system and Microsoft's Common Compiler Infrastructure library drafted in as the default provider for type and method discovery - this handles situations where you don't have all the dependencies nearby for an assembly, but is a slower discovery method.\r\n\r\nTo get legacy (i.e. reflection-based) behavior, the /l (lower-case L) flag has been introduced but as a number of minor bugs were fixed during implementation output may not match between 1.4.0.0 and earlier versions. However - I believe the output's now more correct than it was.\r\n\r\nThere're some issues still with the CCI version - notably sometimes method parameters in certain situations seem to be being reported as 'Microsoft.Cci.DummyType' which isn't great news and didn't show up in automated testing, but for the majority case it seems pretty stable."
              }
          },
          "public": true,
          "created_at": "2013-12-27T15:35:23Z"
      },
      {
          "id": "1929087084",
          "type": "PushEvent",
          "actor": {
              "id": 1470336,
              "login": "Pablissimo",
              "gravatar_id": "c8f1d614927bdeea8ce8d43523ae66f1",
              "url": "https://api.github.com/users/Pablissimo",
              "avatar_url": "https://gravatar.com/avatar/c8f1d614927bdeea8ce8d43523ae66f1?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&r=x"
          },
          "repo": {
              "id": 7426932,
              "name": "Pablissimo/nrconfig",
              "url": "https://api.github.com/repos/Pablissimo/nrconfig"
          },
          "payload": {
              "push_id": 282715357,
              "size": 1,
              "distinct_size": 1,
              "ref": "refs/heads/gh-pages",
              "head": "d931261aa832e9608c6ca757d8b68f0b759f2564",
              "before": "7e9a15505f1a152aaf6c6dc478c40f4541d967a6",
              "commits": [
                {
                    "sha": "d931261aa832e9608c6ca757d8b68f0b759f2564",
                    "author": {
                        "email": "turnacre@hotmail.com",
                        "name": "Paul O'Neill"
                    },
                    "message": "Create gh-pages branch via GitHub",
                    "distinct": true,
                    "url": "https://api.github.com/repos/Pablissimo/nrconfig/commits/d931261aa832e9608c6ca757d8b68f0b759f2564"
                }
              ]
          },
          "public": true,
          "created_at": "2013-12-27T14:59:57Z"
      }
        ]
    };

    var onSuccess = function (data)
    {
        itemCount = data.data.length;
        var tickerElement = $('#gh-ticker');

        tickerElement
            .html(template({ items: data.data }))
            .mouseover(function () {
                mouseOver = true;
            })
            .mouseout(function () {
                mouseOver = false;
            });

        window.setInterval(function ()
        {
            if (!mouseOver) {
                currentItemIndex = (currentItemIndex + 1) % itemCount;
                ShowItem(currentItemIndex);
            }
        }, intervalMs);
    };

    BeginGetActivityForUser($('#gh-ticker').data('user'), onSuccess);
});