// CSS reload console-snippet:
var styles = document.querySelectorAll('[rel=stylesheet]'), i = 0; while (i < styles.length) { styles[i].href = styles[i].href + '?x=' + Math.random(); i++; }
