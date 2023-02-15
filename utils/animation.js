function animateOnScroll() {
  const aboutMe = document.getElementById("about-me");
  const aboutMePosition = aboutMe.getBoundingClientRect().top;
  const skills = document.getElementById("skills");
  const skillsPosition = skills.getBoundingClientRect().top;
  const special = document.getElementById("special");
  const specialPosition = special.getBoundingClientRect().top;
  const portfolio = document.getElementById("portfolio");
  const portfolioPosition = portfolio.getBoundingClientRect().top;
  const contact = document.getElementById("contact");
  const contactPosition = contact.getBoundingClientRect().top;
  const footer = document.getElementById("footer");
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight / 1.5;
  if (aboutMePosition < windowHeight) {
    aboutMe.classList.add("animated");
  }
  if (skillsPosition < windowHeight) {
    skills.classList.add("animated");
  }
  if (specialPosition < windowHeight) {
    special.classList.add("animated");
  }
  if (portfolioPosition < windowHeight) {
    portfolio.classList.add("animated");
  }
  if (contactPosition < windowHeight) {
    contact.classList.add("animated");
  }
  if (footerPosition < windowHeight) {
    footer.classList.add("animated");
  }
}

export default animateOnScroll;
