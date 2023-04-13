const TOKID = "loletaJWT";
var token = localStorage.getItem(TOKID);
//var token = "ABC";

function flash(el, c, msg, withClose) {
  el.className = "";  // Remove all classes.
  el.classList.add("alert");
  el.classList.add(c);
  el.classList.add("d-block");
  if(withClose) {
    el.innerHTML = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    el.classList.add("alert-dismissible");
  } else {
    el.textContent = msg;
    setTimeout(() => { vToggle(el, "d-block", "d-none"); }, 5000);
  }
}

function vSwap(el, a, b) {
  if (el.classList.contains(a)) {
    el.classList.replace(a, b);
  }
}

function vToggle(el, a, b) {
  if (el.classList.contains(a)) {
    el.classList.replace(a, b);
  } else if (el.classList.contains(b)) {
    el.classList.replace(b, a);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function spinBtn(btn, cb) {
  btn.disabled = true;
  let oldContent = btn.innerHTML;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...';
  await cb();
  btn.innerHTML = oldContent;
  btn.disabled = false;
}

var msgAlertEl; // Globally declared flash variable.
document.addEventListener("DOMContentLoaded", function(event) {
  msgAlertEl = document.getElementById("msgAlert");
});
