if('serviceWorker' in navigator){
  navigator.serviceWorker.register("/offline.js")
  .then((reg) => console.log("service worker rigesterd",reg))
  .catch((err) => console.log("service worker didnt reg",err))
};