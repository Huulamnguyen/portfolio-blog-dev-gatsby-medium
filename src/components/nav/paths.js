// Route matching for the nav surfaces. Gatsby links and location.pathname
// disagree about trailing slashes, so compare them stripped.

function normalise(value) {
  return String(value == null ? `` : value).replace(/\/+$/, ``) || `/`
}

function isSamePath(pathname, to) {
  return normalise(pathname) === normalise(to)
}

module.exports = { isSamePath, normalise }
