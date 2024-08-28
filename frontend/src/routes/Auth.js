// import { logoutCall } from "./authService";

export const Auth = {
  getAuth() {
    let response = false;
    if (localStorage.getItem("accessToken")) {
      response = true;
    }
    return response;
  },
};

export function logout() {
  //   logoutCall();    
  localStorage.clear();
}
