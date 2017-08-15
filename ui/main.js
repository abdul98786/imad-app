console.log('Loaded!');
// Change the text by div id mainn-text
var element = document.getElementById('main-text'
    );
element.innerHTML = 'New Value';
//move the image
var img = document.getElementById('img');
img.onClick = function() {
img.style.marginleft= '100px';    
};
