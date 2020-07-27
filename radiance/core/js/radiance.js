/*Radiance Default Js*/

$(document).ready(function(){

        var $body = $('body');
        

        // to get the OS
        setUserOS($body);
        // to get device
        setUserAgent($body);
});


    function setUserOS($body) {
        var OSName = "";
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "windows";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "mac";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "unix";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "linux";

        $('body').addClass(OSName);

    }

    function setUserAgent($body) {
        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
            $body.addClass('mobile');
        } else {
            $body.addClass('desktop');
            if (navigator.userAgent.match(/MSIE 9.0/)) {
                $body.addClass('ie9');
            }
        }
    }





