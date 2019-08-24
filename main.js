class Project {
    constructor(name, image, text, link) {
        this.name = name;
        this.image = image;
        this.text = text;
        this.link = link
    }

    getname() {
        return this.name;
    }

    getimage() {
        return this.image;
    }

    gettext() {
        return this.text;
    }

    getlink() {
        return this.link;
    }
}

var description = 'Binary Search Tree that takes intergers and strings as input. No GUI available at the moment.';
var first = new Project('Binary Search Tree', 'RoughDraft/bst.gif', description, 'RoughDraft/BSTUser.exe');
description = 'This program creates a checkers board image in BMP format. No GUI available at the moment.';
var second = new Project('Checkers Board', 'RoughDraft/red.gif', description, 'RoughDraft/checkers_board.py');
description = 'Encodes and decodes messages within the pixels of a BMP image. GUI is available currently.';
var third = new Project('Steganography', 'RoughDraft/steganography.gif', description, 'RoughDraft/Steganography.py');
description = 'This program creates a Sierpinski Triangle in BMP format. No GUI available at the moment.';
var fourth = new Project('Sierpinski Triangle', 'RoughDraft/triangle.gif', description, 'RoughDraft/triangles.py');
description = 'This program combines the previous ones into a single package. GUI is available currently.';
var fifth = new Project('Main', 'RoughDraft/main.gif', description, 'RoughDraft/Main.py');

var programs = [first, second, third, fourth, fifth]

$('.anchor').click(function(e){
    e.preventDefault();
  var jumpId = $(this).attr('href');
  $('body, html').animate({scrollTop: $(jumpId).offset().top}, 'slow');
});