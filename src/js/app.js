(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _mCookies = require('./m-cookies');

var _mCookies2 = _interopRequireDefault(_mCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mCookies2.default)({
  hrefMore: 'google.com',
  trigger: {
    scroll: true,
    time: 1000
  }
}); /*
      Project Name: Modal JS Cookies
      Author: Andrew Mambyk
      Start Date: 12.10/18
     */

},{"./m-cookies":2}],2:[function(require,module,exports){
'use strict';

function mCookies(userSet) {
  var settings = {
    text: 'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
    btnOk: 'Ok',
    btnMore: 'More Info',
    hrefMore: '#',
    trigger: {
      scroll: true,
      time: false
    }
  };

  if (userSet) {
    Object.assign(settings, userSet);
  }

  function createNode(elem) {
    var newNode = document.createElement(elem.tagName);
    newNode.className = elem.className;
    if (elem.href) {
      newNode.setAttribute('href', elem.href);
    }
    if (elem.type) {
      newNode.setAttribute('type', elem.type);
    }
    if (elem.innerText) {
      newNode.innerText = elem.innerText;
    }
    return newNode;
  }

  var localKey = 'cookiesAgreed';
  var visibleClass = 'visible';

  var body = document.querySelector('body');
  var nodeMain = createNode({ tagName: 'div', className: 'm-cookies' });
  var nodeText = createNode({
    tagName: 'div',
    className: 'm-cookies__text',
    innerText: settings.text
  });
  var nodeBtns = createNode({ tagName: 'div', className: 'm-cookies__btns' });
  var nodeBtnOk = createNode({
    tagName: 'button',
    className: 'm-cookies__btn m-cookies__btn_primary',
    type: 'button',
    innerText: settings.btnOk
  });
  var nodeBtnMore = createNode({
    tagName: 'a',
    className: 'm-cookies__btn m-cookies__btn_secondary',
    href: settings.hrefMore,
    innerText: settings.btnMore
  });

  function showModal() {
    if (localStorage.getItem(localKey)) {
      document.removeEventListener('scroll', showModal);
      return;
    }
    nodeMain.classList.add(visibleClass);
  }

  function hideModal() {
    localStorage.setItem(localKey, true);
    nodeMain.classList.remove(visibleClass);
  }

  function triggerModal() {
    if (settings.trigger.scroll) {
      document.addEventListener('scroll', showModal);
    }
    if (settings.trigger.time) {
      setTimeout(showModal, settings.trigger.time);
    } else {
      showModal();
    }
  }

  nodeBtns.appendChild(nodeBtnOk);
  nodeBtns.appendChild(nodeBtnMore);
  nodeMain.appendChild(nodeText);
  nodeMain.appendChild(nodeBtns);
  body.appendChild(nodeMain);

  nodeBtnOk.addEventListener('click', hideModal);
  nodeBtnMore.addEventListener('click', hideModal);

  triggerModal();
}

module.exports = mCookies;

},{}]},{},[1]);
