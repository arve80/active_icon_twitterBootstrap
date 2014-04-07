/***************************************************************************************

Switching the icons based on the location.href, first case is for the root domain name 

*****************************************************************************************/

var href = location.href.toLowerCase();
  
switch(href){
     
     case 'http://residencia-geriatrica-ergos.com/':
       $('li a[href="index.html"]').prepend('<span><i class="icon-home"></i></span>'); //append active icon
       $('li:not(.active) a').prepend('<i class="icon-double-angle-right"></i>'); //append standard icons
     break;
     
     case 'http://residencia-geriatrica-ergos.com/index.html':
       $('li a[href="index.html"]').prepend('<span><i class="icon-home"></i></span>'); //append active icon
       $('li:not(.active) a').prepend('<i class="icon-double-angle-right"></i>'); //append standard icons
     break;
     
     case 'http://residencia-geriatrica-ergos.com/servi.html':
       $('li a[href="servi.html"]').prepend('<span><i class="icon-user-md"></i></span>'); //append active icon
      $('li:not(.active) a').prepend('<i class="icon-double-angle-right"></i>'); //append standard icons
     break;
     
     case 'http://residencia-geriatrica-ergos.com/acti.html':
       $('li a[href="acti.html"]').prepend('<span><i class="icon-group"></i></span>'); //append active icon
       $('li:not(.active) a').prepend('<i class="icon-double-angle-right"></i>'); //append standard icons
     break;
     
     case 'http://residencia-geriatrica-ergos.com/contact.html':
       $('li a[href="contact.html"]').prepend('<span><i class="icon-envelope"></i></span>'); //append active icon
       $('li:not(.active) a').prepend('<i class="icon-double-angle-right"></i>'); //append standard icons
     break;
     

}
