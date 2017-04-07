document.getElementById("toggle").addEventListener("click", function(){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    if(currentScroll > lastScrollTop){
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").style.opacity = 0;
    }else{
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        if(currentScroll<=3){
            document.getElementById("nav-header").classList.remove("solid");
            document.getElementById("nav-header").classList.remove("neader-in");
        }
    }
    lastScrollTop = currentScroll;
}, false);

function Student(nombre, urlFoto){
  this.nombre = nombre;
  this.urlFoto = urlFoto;
}

function loadImage(name, url) {
  var divGrid = document.createElement("div");
  divGrid.classList.add("grid");
  var figure = document.createElement("figure");
  var image = document.createElement("img");
  image.setAttribute("src", url);
  console.log(image);
  var figcaption = document.createElement("figcaption");
  var spanName = document.createElement("span");
  console.log(divGrid);
}

window.addEventListener("load", function(){
  // var   coder=[new Student("Fiorella Quispe", "../students/1.png"), new Student("Lourdes Vilchez", "../students/2.png"), new Student("Rosmery Maldonado", "../students/3.png"), new Student("Yessenia", "../assets/students/4.png"), new Student("Mirian Peralta", "../assets/students/5.png"), new Student("Elizabeth Condori", "../assets/students/6.png")];

  var coder=[{nombre: "Fiorella", urlFoto: "../students/1.png"}, {nombre: "Loudes", urlFoto: "../students/2.png"}]


  console.log(coder);
  for (var i = 0; i < coder.length; i++) {
    var divGrid = document.createElement("div");
    divGrid.classList.add("grid");
    var figure = document.createElement("figure");
    var image = document.createElement("img");
    image.setAttribute("src", coder.urlFoto );
    console.log(image);
    var figcaption = document.createElement("figcaption");
    var spanName = document.createElement("span");
    console.log(divGrid);
  }
});
