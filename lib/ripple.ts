export function createRipple(
  event: React.MouseEvent<HTMLElement>
) {
  const element = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - element.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    event.clientY - element.getBoundingClientRect().top - radius
  }px`;

  circle.className = "ripple";

  const ripple = element.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  element.appendChild(circle);
}
