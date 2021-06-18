let Links = {
  setColor: function (color) {
    const alist = document.querySelectorAll("a");
    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};
let Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackGroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightdayhandler(self) {
  const target = document.querySelector("body");
  if (self.value === "night") {
    Body.setColor("white");
    Body.setBackGroundColor("black");
    self.value = "day";

    Links.setColor("yellow");
  } else {
    Body.setColor("black");
    Body.setBackGroundColor("white");
    self.value = "night";

    Links.setColor("blue");
  }
}
