const thanksElement = document.getElementById("thanks");

const intersection = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    alert(
      `Thank you so much for taking the time to read my resume. 
      I'm looking forward to the possibility of working together and creating something amazing in the future!`
    );

    intersection.disconnect();
  }
});

intersection.observe(thanksElement);
