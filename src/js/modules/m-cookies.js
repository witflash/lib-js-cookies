function mCookies(userSet) {
  const settings = {
    text:
      'We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.',
    btnOk: 'Ok',
    btnMore: 'More Info',
    hrefMore: '#',
    trigger: {
      scroll: true,
      time: false,
    },
  };

  if (userSet) {
    Object.assign(settings, userSet);
  }

  function createNode(elem) {
    const newNode = document.createElement(elem.tagName);
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

  const localKey = 'cookiesAgreed';
  const visibleClass = 'visible';

  const body = document.querySelector('body');
  const nodeMain = createNode({ tagName: 'div', className: 'm-cookies' });
  const nodeText = createNode({
    tagName: 'div',
    className: 'm-cookies__text',
    innerText: settings.text,
  });
  const nodeBtns = createNode({ tagName: 'div', className: 'm-cookies__btns' });
  const nodeBtnOk = createNode({
    tagName: 'button',
    className: 'm-cookies__btn m-cookies__btn_primary',
    type: 'button',
    innerText: settings.btnOk,
  });
  const nodeBtnMore = createNode({
    tagName: 'a',
    className: 'm-cookies__btn m-cookies__btn_secondary',
    href: settings.hrefMore,
    innerText: settings.btnMore,
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
