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


window.addEventListener("load", function(){
  var divContainer = document.getElementById("lima-prom6");
  var   coder=[new Student("Fiorella Quispe", "assets/image/students/1.png"), new Student("Lourdes Vilchez", "assets/image/students/2.png"), new Student("Rosmery Maldonado", "assets/image/students/3.png"), new Student("Yessenia", "assets/image/students/4.png"), new Student("Mirian Peralta", "assets/image/students/5.png"), new Student("Elizabeth Condori", "assets/image/students/6.png")];

  for (var i = 0; i < coder.length; i++) {
    console.log(coder[i].urlFoto);
    var img = document.createElement("img");
    img.setAttribute("src", coder[i].urlFoto);
    img.classList.add("coder-img");
    console.log(img);
    var span = document.createElement("span");
    span.classList.add("text");
    span.append(coder[i].nombre);
    var figcaption = document.createElement("figcaption");
    figcaption.append(span);
    var figure = document.createElement("figure");
    figure.append(img);
    figure.append(figcaption);
    var div = document.createElement("div");
    div.classList.add("grid");
    div.append(figure);
    console.log(div);
    divContainer.append(div);
    console.log(divContainer);
  }
});
