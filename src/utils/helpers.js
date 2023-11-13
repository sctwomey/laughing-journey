export function validateEmail(email) {
  var regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(String(email).toLowerCase());
}
