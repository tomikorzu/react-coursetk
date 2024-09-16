const redirectPage = (url) => {
  const body = document.querySelector("body");
  body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = url;
  }, 600);
  window.addEventListener("popstate", () => {
    const body = document.querySelector("body");
    body.classList.remove("fade-out");
  });
};

const redirectToExternalPage = (url) => {
  window.open(url, "_blank");
};

const goBack = (navigate, url) => {
  navigate(url);
};

export default { redirectPage, goBack, redirectToExternalPage };
