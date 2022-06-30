let themes = ['../css/main.css', '../css/themes/dark.css', '../css/themes/tokyoNight.css'];

var color = themes.length;

function themePicker () {
    //random maken van color scheme
    var randomScheme = themes[Math.floor(Math.random() * color)]
    
    document.getElementById('colorSwitch').href= randomScheme  
};

    // cycling through array
    /*for (i = 0; i < themes.length; i++) {
        document.getElementById('colorSwitch').href
    }*/

    

