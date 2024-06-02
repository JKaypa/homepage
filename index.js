const thanksElement = document.getElementById("thanks");
const observer = document.getElementById("observer");

const intersection = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const classes = thanksElement.classList;
    setTimeout(() => {
      classes.replace("hidden", "visible");
    }, 4000);

    setTimeout(() => {
      classes.replace("visible", "hidden");
    }, 12500);

    intersection.disconnect();
  }
});

intersection.observe(observer);
