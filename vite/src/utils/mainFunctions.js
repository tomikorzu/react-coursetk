const body = document.querySelector("body");
const redirectPage = (url) => {
  body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = url;
  }, 600);
};

const goBack = (navigate, url) => {
  navigate(url);
};

export default { redirectPage, goBack };
