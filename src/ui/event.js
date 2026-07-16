function searchLocationEvent() {
  const form = document.querySelector(".location-form");
  const input = document.querySelector("#location-search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = input.value.trim();

    if (!location) return;

    console.log(location);
  });
}

export { searchLocationEvent };
