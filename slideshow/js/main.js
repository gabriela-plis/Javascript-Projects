function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    head.appendChild(script);
}

loadScript("js/utility.js");
loadScript("js/onStart.js");
loadScript("js/btnFunctionality.js");
loadScript("js/dotFunctionality.js");
