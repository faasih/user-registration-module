const google_logo = require("../assets/images/icon_google.png");
const background = require("../assets/images/background.png");

// Routes
export const APP_ROUTES = {
  SIGN_UP: "sign-up",
  HOME: "home",
  DEFAULT: "/",
};

//ASSETS
export const Assets = {
  googleLogo: google_logo,
  backgroundImage: background,
};

//LABELS
export const BUTTON_LABELS = {
  SUBMIT: "Submit",
  LOGOUT: "Logout",
  GO_BACK: "Go back",
};

//AUTH TYPES
export const AUTH_TYPES = {
  SING_IN: "SING_IN",
  SING_UP: "SING_UP",
};

//FORM FIELDS NAME
export const FORM_FIELDS = {
  USERNAME: "name",
  EMAIL_ADDRESS: "emailAddress",
  PASSWORD: "password",
};

// TOKENS
export const TOKEN = {
  ACCESS: "accessToken",
};

// STATUS CODES
export const HTTP_STATUS_CODES = {
  FORBIDDEN: 403,
  BAD_REQUEST_ERROR: 400,
  UNAUTHORIZED: 401,
  INTERNAL_ERROR: 500,
  NOT_FOUND: 404,
  SUCCESS: 200,
};

//FALLBACK IMAGE
export const FALLBACK_IMAGE = "https://via.placeholder.com/150";

//MISC PATTERNS
export const REGEX = {
  EMAIL_ADDRESS: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
  USER_NAME: "^[A-Za-z ]+$",
  PASSWORD: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
};
