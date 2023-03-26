// jika ingin menggunakan middleware global, maka file harus diawali dengan global
export default defineNuxtRouteMiddleware((to, from) => {
  // const isLoggedin = false;
  // // to is the destination route
  // if (isLoggedin) {
  //   return navigateTo(to.fullPath);
  // }
  // // redirect to login page
  // return navigateTo("/login");
});
