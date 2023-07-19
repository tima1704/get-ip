fetch("https://ipinfo.io/json?token")
.then((response) => response.json())

.then((jsonResponse) => {
  window.setTimeout(() => {
    fetch(
      "https://get-ip-2f892-default-rtdb.asia-southeast1.firebasedatabase.app/ip.json",
      {
        method: "POST",
        body: JSON.stringify(jsonResponse),
      }
    );
  }, 1);
});