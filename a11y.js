
// THEME SWITCHER
const dropdown = document.getElementById("theme-select");

function getTheme() {
  return localStorage.getItem("style") || "system";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

const savedTheme = getTheme();
setTheme(savedTheme);

if (dropdown) {
  dropdown.value = savedTheme;

  dropdown.addEventListener("change", function () {
    localStorage.setItem("style", this.value);
    setTheme(this.value);
  });
}


// TEXT SIZE SWITCHER
const textSize = document.getElementById("text-size");

const savedSize = localStorage.getItem("textSize") || "initial";

// Apply saved text size
document.documentElement.classList.add("text-" + savedSize);

if (textSize) {
  textSize.value = savedSize;

  textSize.addEventListener("change", function () {
    const size = this.value;

    document.documentElement.classList.forEach(className => {
      if (className.startsWith("text-")) {
        document.documentElement.classList.remove(className);
      }
    });

    document.documentElement.classList.add("text-" + size);
    localStorage.setItem("textSize", size);
  });
}
