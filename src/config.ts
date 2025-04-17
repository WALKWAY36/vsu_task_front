const protocol = 'http:';
const hostname = window.location.hostname;
const host = `${hostname}:8000`;

const CONFIG = {
  apiBaseUrlAnalyzeText: `${protocol}//${host}/back`,
  apiTimeout: 15000,
};
console.log(CONFIG.apiBaseUrlAnalyzeText);
export { CONFIG };
