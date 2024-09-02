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
  localStorage.clear();
  window.location.reload();
}
