/* Like button (no backend signup) backed by Abacus counter API (CountAPI compatible) */
(function () {
  var NS = 'hdzs-zsk';
  var API = 'https://abacus.jasoncameron.dev';

  function postKey() {
    // Use article pathname, sanitized, only on post pages
    if (!/\/20\d\d\/\d\d\/\d\d\//.test(location.pathname)) return null;
    return 'post-' + encodeURIComponent(location.pathname.replace(/\//g, '_'));
  }

  function getJSON(url, cb) {
    var x = new XMLHttpRequest();
    x.open('GET', url, true);
    x.onload = function () { try { cb(JSON.parse(x.responseText)); } catch (e) { cb(null); } };
    x.onerror = function () { cb(null); };
    x.send();
  }

  function hit(key, cb) {
    var x = new XMLHttpRequest();
    x.open('GET', API + '/hit/' + NS + '/' + key, true);
    x.onload = function () { try { cb(JSON.parse(x.responseText)); } catch (e) { cb(null); } };
    x.onerror = function () { cb(null); };
    x.send();
  }

  function render() {
    var key = postKey();
    if (!key) return;
    var mount = document.querySelector('.post-title') || document.querySelector('h1');
    if (!mount || document.getElementById('like-btn')) return;

    var btn = document.createElement('button');
    btn.id = 'like-btn';
    btn.innerHTML = '<span class="like-icon">&#10084;</span> <span class="like-count">...</span>';
    btn.title = '\u559c\u6b22\u8fd9\u7bc7\u6587\u7ae0\u5c31\u70b9\u4e2a\u8d5e\u5427';
    mount.insertAdjacentElement('afterend', btn);

    var liked = localStorage.getItem('liked:' + key) === '1';
    if (liked) btn.classList.add('liked');

    getJSON(API + '/get/' + NS + '/' + key, function (r) {
      btn.querySelector('.like-count').textContent = r && r.value != null ? r.value : '0';
    });

    btn.addEventListener('click', function () {
      if (localStorage.getItem('liked:' + key) === '1') return;
      hit(key, function (r) {
        if (r && r.value != null) {
          btn.querySelector('.like-count').textContent = r.value;
          localStorage.setItem('liked:' + key, '1');
          btn.classList.add('liked');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
  // Support PJAX navigation if theme uses it
  document.addEventListener('pjax:complete', render);
})();
