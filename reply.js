function reply(){var t=document.querySelectorAll(".button-reply"),e=0,n=t.length;for(e;n>e;e++)t[e].addEventListener("click",function(){var t=this.closest(".post-status-button-div"),e=this.parentNode.nextElementSibling;e.toggle(),t.toggle()})}document.addEventListener("DOMContentLoaded",reply);