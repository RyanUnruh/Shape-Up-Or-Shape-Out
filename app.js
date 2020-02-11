const square = document.getElementById('btn-S'), 
circle = document.getElementById('btn-C'), 
rec = document.getElementById('btn-R'), 
triangle = document.getElementById('btn-T'), 
shapeContainer = document.getElementById('shapeContainer');


let sqLength = document.getElementById('sqLength')
let radius = document.getElementById('radius')
let border = document.getElementById('border')

// Rectangle
let recWidth = document.getElementById('rec-width')
let recHeight = document.getElementById('rec-height')


// Buttons
square.addEventListener('click', () => {
  new Square(sqLength.value);
});

circle.addEventListener('click', () => {
  new Circle(radius.value);
});

rec.addEventListener('click', () => {
  new Rectangle(recHeight.value, recWidth.value);
});

triangle.addEventListener('click', () => {
  new Triangle(border.value);
});
     

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.div = document.createElement('div');

  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
    this.div.className = 'square';
    this.div.style.height = `${this.length}px`;
    this.div.style.width = `${this.length}px`;
    shapeContainer.appendChild(this.div);
  }
}

class Circle extends Square {
  constructor(radius) {
    super()
    this.radius = radius;
    this.div.className = 'circle';
    this.div.style.height = `${this.radius}px`;
    this.div.style.width = `${this.radius}px`;
    shapeContainer.appendChild(this.div);
  }
}
class Rectangle extends Shape {
  constructor(recHeight, recWidth) {
    super()
    this.recHeight = recHeight;
    this.recWidth = recWidth;
    this.div.className = 'rectangle';
    this.div.style.height = `${this.recHeight}px`;
    this.div.style.width = `${this.recWidth}px`;
    shapeContainer.appendChild(this.div);
  }
}
class Triangle {
  constructor(border) {
    this.border = border;
    this.border = border;
    this.div = document.createElement('div');
    this.div.className = 'triangle';        
    this.div.style.borderBottom= `${this.border}px solid red`;        
    this.div.style.borderRight = `${this.border}px solid transparent`;        
    shapeContainer.appendChild(this.div);
  }
}


