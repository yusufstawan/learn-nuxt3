export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedin = false;
  // to is the destination route
  if (isLoggedin) {
    // make to "/"
    return navigateTo(to.fullPath);
  } else {
    // redirect to login page
    return navigateTo("/login");
  }
});
