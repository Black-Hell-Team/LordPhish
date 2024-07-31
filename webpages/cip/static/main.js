/**
 * @param {string} url
 */
function proxy(url)
{
    var requestForm = document.getElementById('request');
    if (requestForm) {
        var requestUrlInput = document.getElementById('url');
        requestUrlInput.value = url;
        requestForm.submit();
    }
}

/**
 * @param {string} cookieString
 * @param {boolean} returnAsObject
 * @returns {any}
 */
function parseCookieGetString(cookieString, returnAsObject = true)
{
    var result = !returnAsObject ? new window.Array() : new window.Object();
    var cookies = cookieString.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cur = splitOnce('=', cookies[i]);
        if(1 in cur) {
            if (!returnAsObject) {
                result.push({name: cur[0].trim(), value: cur[1]});
            } else {
                result[cur[0].trim()] = cur[1];
            }
        }
    }
    return result;
}

/**
 * @param {Object} cookie
 * @returns {null|string}
 */
function createCookieSetString(cookie)
{
    var result = new window.Array();
    if(!('name' in cookie) || !cookie.name) {
        return null;
    }
    result.push(cookie.name + '=' + cookie.value);
    delete cookie.name;
    delete cookie.value;
    for (var k in cookie) {
        var v = cookie[k];
        if(v === true) {
            result.push(k);
        }
        else if(v !== false) {
            result.push(k + '=' + v);
        }
    }
    return result.join(';');
}

/**
 * @param {string} separator
 * @param {string} str
 * @returns {array}
 */
function splitOnce(separator, str)
{
    var i = str.indexOf(separator);
    return i >= 0 ? new window.Array(str.slice(0,i), str.slice(i+1)) : new window.Array(str);
}

/**
 * Add to manifest.json:
 * "web_accessible_resources": [ "images/test.png" ]
 *
 * Urls:
 * chrome-extension://<random-UUID>/images/test.png
 * moz-extension://<random-UUID>/images/test.png
 *
 * @param {string} extensionResourceUrl
 * @param {?Function} onErrorCallback
 */
function handleBrowserExtension(extensionResourceUrl, onErrorCallback) {
    var img;
    img = new Image();
    img.src = extensionResourceUrl;
    img.onload = function() {
        if (console) {
            console.log('^^^ Browser extension is already installed ^^^');
        }
    };
    img.onerror = onErrorCallback;
}

/**
 * @param {Node|Element|EventTarget} el
 * @param {string} tag
 * @returns {*}
 */
function findParentElementByTagName(el, tag) {

    do {
        if (el.tagName && el.tagName.toLowerCase() === tag.toLowerCase()) {
            return el;
        }
        el = el.parentNode;
    } while (el);
    return null;
}

document.addEventListener("DOMContentLoaded", () => {

    // email addresses handling

    var emails = document.querySelectorAll('.em');
    for (var email of emails) {
        email.innerHTML =
            email.getAttribute('data-name') + '@' +
            email.getAttribute('data-domain') + '.' +
            email.getAttribute('data-tld');
    }

    // extension section handler

    var browserExtensionDiv = document.querySelector('#browserExtension');
    if (browserExtensionDiv && !window.bowser.mobile && !window.bowser.tablet) {
        if (window.bowser.chrome || window.bowser.chromium) {
            // check for web store extension
            var extensionId = 'lmmpgfjnchldhcieiiegcpdmaidkaanb';
            handleBrowserExtension(
                'chrome-extension://' + extensionId + '/images/test.png',
                () => {
                    // check for crx extension
                    handleBrowserExtension(
                        'chrome-extension://ckjnnmdnpicjmpmcheonhjhbhamjclhi/images/test.png',
                        () => {
                            if (console) {
                                console.log('^^^ Browser extension is not installed ^^^');
                            }
                            browserExtensionDiv.innerHTML =
                                '<span class="highlighted">' +
                                '<i class="fa fa-plug" aria-hidden="true"></i> ' +
                                'Install CroxyProxy browser extension for ' + window.bowser.name + ' ' +
                                '<a rel="nofollow" itemprop="instalUrl" id="browserExtensionLink" target="_blank" href="https://chrome.google.com/webstore/detail/croxyproxy-free-web-proxy/' + extensionId + '">' +
                                'from Chrome web store' +
                                '</a> ' +
                                'or <a rel="nofollow" target="_blank" href="https://github.com/croxy-proxy-official/extension">manually</a>. ' +
                                'Access websites with just one click!' +
                                '</span>';
                            browserExtensionDiv.style.display = 'table';
                        }
                    );
                }
            );
        }
    }

    // quick link handler

    var proxyLinks = document.querySelectorAll('.proxyLink');
    for (var proxyLink of proxyLinks) {
        proxyLink.addEventListener('click', function (event) {
            if (event.target.hasAttribute('data-href')) {
                proxy(event.target.getAttribute('data-href'));
            }
            event.preventDefault();
        });
    }

    // links confirmation handler

    document.body.addEventListener('click', function (event) {
        var targetElement = findParentElementByTagName(event.target, 'a');
        if (targetElement && targetElement.getAttribute('data-confirm')) {
            if (!confirm(targetElement.getAttribute('data-confirm'))) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return false;
            }
        }
        return true;
    });

    // modal content

    $('#accountModal').on('show.bs.modal', () => {
        var modal = document.getElementById('accountModal');
        var modalContent = document.getElementById('accountModalContent');
        modalContent.innerHTML = '<div class="accountModalMessage"><span class="fa fa-spinner fa-spin"></span> Loading...</div>';
        var handleError = (msg = null) => {
            modalContent.innerHTML = '<div class="accountModalMessage">Network connection error. Please try later or contact support' + (msg ? '. ' + msg : '') + '</div>';
        };
        fetch(modal.getAttribute('data-modal-url'), { mode: 'cors', credentials: 'include' }).then((response) => {
            if (response.ok) {
                response.text().then((body) => {
                    modalContent.innerHTML = body;
                });
            } else {
                handleError();
            }
        }).catch((e) => {
            handleError(e.message);
        });
    });

    // default url

    var proxyUrlField = document.querySelector('#proxyForm #url');
    if (proxyUrlField) {
        var cookies = parseCookieGetString(document.cookie);
        if (cookies['__cpd']) {
            setTimeout(() => {
                proxyUrlField.value = atob(cookies['__cpd']);
            }, 500);
            document.cookie = createCookieSetString({
                name: '__cpd',
                value: '',
                expires: 'Thu, 01 Jan 1970 00:00:01 GMT',
                path: '/',
                domain: location.host
            });
        }
    }

    // feedback tab

    var feedbackTab = document.querySelector('#feedbackTab');
    if (feedbackTab) {
        feedbackTab.addEventListener('click', (event) => {
            _urq.push(['Feedback_Open']);
            event.stopImmediatePropagation();
            event.preventDefault();
        });
    }

    // google analytics goal events

    if (ga) {
        var proxyRequestForm = document.querySelector('form#request');
        if (proxyRequestForm) {
            proxyRequestForm.addEventListener('submit', (event) => {
                ga('send', 'event', {
                    'eventCategory': 'proxy',
                    'eventAction': 'request',
                    'eventLabel': 'Proxy request',
                    'hitCallback': () => {
                        proxyRequestForm.submit();
                    },
                    'hitCallbackFail' : () => {
                        proxyRequestForm.submit();
                    }
                });
                event.stopImmediatePropagation();
                event.preventDefault();
            });
        }
        var registrationForm = document.querySelector('form#registration');
        if (registrationForm) {
            registrationForm.addEventListener('submit', (event) => {
                ga('send', 'event', {
                    'eventCategory': 'premium',
                    'eventAction': 'registrationCheckout',
                    'eventLabel': 'Premium registration checkout',
                    'hitCallback': () => {
                        registrationForm.submit();
                    },
                    'hitCallbackFail' : () => {
                        registrationForm.submit();
                    }
                });
                event.stopImmediatePropagation();
                event.preventDefault();
            });
        }
        var paymentForm = document.querySelector('form#payment');
        if (paymentForm) {
            paymentForm.addEventListener('submit', (event) => {
                ga('send', 'event', {
                    'eventCategory': 'premium',
                    'eventAction': 'accountCheckout',
                    'eventLabel': 'Premium account checkout',
                    'hitCallback': () => {
                        paymentForm.submit();
                    },
                    'hitCallbackFail' : () => {
                        paymentForm.submit();
                    }
                });
                event.stopImmediatePropagation();
                event.preventDefault();
            });
        }
    }

    // top info bar

    var infoBar = document.querySelector('#infoBar');
    if (infoBar) {
        var style = window.getComputedStyle(infoBar);
        var styleElement = document.createElement("style");
        styleElement.appendChild(document.createTextNode(""));
        document.head.appendChild(styleElement);
        styleElement.sheet.insertRule(
            "body:before {content: ' '; display: block; visibility: hidden; padding: 0; margin: 0; height: " + style.height + "}"
        );
    }

    // disable form elements after submission

    var forms = document.querySelectorAll('form');
    for (var form of forms) {
        ((defaultSubmit) => {
            form.submit = function () {
                for (var element of form.elements) {
                    element.readOnly = true;
                }
                for (var button of form.querySelectorAll('button[type=submit], input[type=submit]')) {
                    button.disabled = true;
                }
                defaultSubmit.call(this);
            };
        })(form.submit);
        form.addEventListener('submit', function () {
            this.submit();
        });
    }
});
