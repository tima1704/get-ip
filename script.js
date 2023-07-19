fetch("https://ipinfo.io/json?token=e110ced8720ca0")
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