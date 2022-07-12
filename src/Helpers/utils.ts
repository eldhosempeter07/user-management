export function checkIfValidEmail(str: string) {
  const EMAIL_REGEX = /^[^@]+@\w+(\.\w+)+\w$/;
  return EMAIL_REGEX.test(str);
}
