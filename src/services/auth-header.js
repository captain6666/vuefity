export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.access) {
    console.log(JSON.stringify(user.access))
    return { Authorization: 'Bearer ' + user.access }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}