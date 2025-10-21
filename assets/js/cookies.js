function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

/**
 * options: { maxAge: number (s), path: string, expires: Date }
 */
function setCookie(name, value, options = {}) {
  const defaults = { path: "/" };
  const opts = Object.assign({}, defaults, options);

  let cookie = `${name}=${value}`;

  if (typeof opts.maxAge !== "undefined") cookie += `; max-age=${opts.maxAge}`;
  if (opts.path) cookie += `; path=${opts.path}`;
  if (opts.expires instanceof Date) cookie += `; expires=${opts.expires.toUTCString()}`;

  document.cookie = cookie;
}

function setCookieStart() {
  let start = getCookie("start");
  if (!start) {
    start = Date.now();
    setCookie("start", start, { path: "/", maxAge: 3600 });
  }
  return Number(start);
}

function deleteCookie(name, path = "/") {
  setCookie(name, "", { path: path, maxAge: 0 });
}

function deleteCookies() {
  const keys = ["enigmesDone", "start", "teamName"];
    for (const key of keys) {
      deleteCookie(key);
  }
}

function getTimefromStart() {
  const start = getCookie("start");
  if (!start) return null;
  return Date.now() - Number(start);
}

function getMMSS4Display(elapsed) {
  if (elapsed === null) return "00:00";
  const minutes = Math.floor(elapsed / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function getTotalDuration() { return getMMSS4Display(getTimefromStart()) } ;