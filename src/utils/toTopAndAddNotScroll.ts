export function toTopAndAddNotScroll(isHidden: boolean, toTop = false) {
  const body = document.querySelector("body");

  if (!body) return;

  if (toTop) {
    body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  body.style.overflowY = isHidden ? "hidden" : "scroll";
}