const container = document.querySelector("#latest");

var myHeaders = new Headers();
myHeaders.append("token", "EBF64296-1ED04754-AD318ABB-354071CE");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://developer.sepush.co.za/business/2.0/area?id=eskde-10-fourwaysext10cityofjohannesburggauteng",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {
    const { start } = result.events;

    container.textContent = `${start}`;
  })
  .catch((error) => console.log("error", error));