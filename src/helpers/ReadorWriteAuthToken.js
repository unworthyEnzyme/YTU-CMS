export function readAuthToken(){
  const jwt = localStorage.getItem('jwt');
  return jwt
}

export function writeAuthToken(token) {
  localStorage.setItem('jwt', JSON.stringify(token))
}