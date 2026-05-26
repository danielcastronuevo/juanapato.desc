(function () {
  function send() {
    var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    window.parent.postMessage({ juanapatosIframe: true, src: location.href, height: h }, '*');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', send);
  } else {
    send();
  }
  window.addEventListener('load', send);
  if (window.ResizeObserver) {
    new ResizeObserver(send).observe(document.body);
  }
})();
