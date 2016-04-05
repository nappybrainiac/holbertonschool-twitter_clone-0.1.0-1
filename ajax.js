function ajaxGet(url,onSuccess){var buttonId=document.getElementById("button-load");buttonId.disabled="true";buttonId.style.cursor="text";buttonId.style.background="#CDFFCB";xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function()
																									       {if(xmlhttp.readyState==4&&xmlhttp.status==200)
																										       {onSuccess(xmlhttp.responseText);reply();}}
    xmlhttp.open('GET',url,true);setTimeout(function(){xmlhttp.send();buttonId.disabled=false;buttonId.style.cursor="default";},2000);}