const ACCESS_TOKEN_KEY = "architectAccessToken";
const REFRESH_TOKEN_KEY = "architectRefreshToken";
const USER_NAME_KEY = "architectUserName";
const USER_EMAIL_KEY = "architectUserEmail";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY) || "";
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY) || "";
}

export function isAuthenticated() {
  return Boolean(getAccessToken());
}

export function setAuthSession({ accessToken, refreshToken, fullName, email }) {
  if (accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  if (fullName) {
    localStorage.setItem(USER_NAME_KEY, fullName);
  }

  if (email) {
    localStorage.setItem(USER_EMAIL_KEY, email);
  }
}

export function clearAuthSession() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(USER_EMAIL_KEY);
}
