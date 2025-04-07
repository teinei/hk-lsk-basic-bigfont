//==================== Start Standard Javascript Include ====================== 

 
function MM_swapImgRestore() { //v3.0 
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc; 
}MM_swapImgRestore 

 
function MM_preloadImages() { //v3.0 
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array(); 
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++) 
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}} 
}MM_preloadImages 

 
function MM_findObj(n, d) { //v4.01 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) { 
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);} 
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n]; 
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); 
  if(!x && d.getElementById) x=d.getElementById(n); return x; 
}//MM_findObj 

 
function MM_swapImage() { //v3.0 
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3) 
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];} 
}//MM_swapImage 

 
function getPage() 
  { 
  document.navForm.cmd.value = getPage.arguments[0]
  document.navForm.lang.value = getPage.arguments[1] 
  document.navForm.langDir.value = getPage.arguments[2] 
    document.navForm.id.value = getPage.arguments[3] 
  document.navForm.submit() 
  } 

 
function _loadAud(lang, fileName)
  { 
  fileName = "media/" + lang + "/" + fileName + ".mp3" 
  window.document.audPlayer.SetVariable("audFile", fileName); 
  } 

 
function w_open( url, ww, hh ) 
  { 
  var p = "toolbar=0, scrollbars=1, menubar=0, resizable=1, status=0, location=0, directories=0, width=" + ww + ", height=" + hh
  window.open(url,"_blank",p) 
  }//w_open 

//===================== End Standard Javascript Include ======================= 
//======================== Start LSK Javascript =============================== 
function xid( a ) 
{ 
return document.getElementById( a ) 
}//xid 

 
function get_HTML_comment(s) 
  { 
  return s.substring( s.indexOf('<!--')+6, s.indexOf('-->') ) 
  }//get_HTML_comment 

 
function set_global_var( name, val ) 
  {  
  eval( "window[name] = val" )  
  }   

 
function w_class() 
  { 
  var wr = "" 
  function ws() 
    {
    for (var i=0, n=arguments.length; i<n; i++) 
      wr += arguments[i] 
    } 
  function wl() 
    {  
    ws.apply( null, arguments ) 
    ws( String.fromCharCode(32, 13, 10) ) 
    } 
  function init() 
    {  
    wl( "var wr = ''"     ) 
    wl( ws.toString()     ) 
    wl( wl.toString()     ) 
    } 
  this.get_source = function() 
    { 
    return wr 
    } 
  init() 
  }//w_class 

 
var gv_pg = 0 
var cTbl = "" 
function nxt_pg() 
{ 
if(gv_pg < cTbl.length-1) 
  { 
  cTbl[gv_pg].style.display = "none" 
  gv_pg++ 
  cTbl[gv_pg].style.display = "inline" 
  xid( "id_prev_pg" ).style.visibility = "visible"
  xid( "id_prev_pgBtm" ).style.visibility = "visible" 
  document.pageForm.page.value = parseInt(document.pageForm.page.value)+1 
  eval('document.id_page.src="graphics/pg'+document.pageForm.page.value+'.gif"') 
  eval('document.id_pageBtm.src="graphics/pg'+document.pageForm.page.value+'.gif"') 
  if( gv_pg == cTbl.length-1 ) 
    { 
    xid( "id_next_pg" ).style.visibility = "hidden" 
    xid( "id_next_pgBtm" ).style.visibility = "hidden" 
    } 
  } 
} 
function prv_pg() 
{ 
if(gv_pg > 0)
  { 
  cTbl[gv_pg].style.display = "none" 
  gv_pg-- 
  cTbl[gv_pg].style.display = "inline" 
  xid( "id_next_pg" ).style.visibility = "visible" 
  xid( "id_next_pgBtm" ).style.visibility = "visible" 
  document.pageForm.page.value = parseInt(document.pageForm.page.value)-1 
  eval('document.id_page.src="graphics/pg'+document.pageForm.page.value+'.gif"') 
  eval('document.id_pageBtm.src="graphics/pg'+document.pageForm.page.value+'.gif"') 
  if( gv_pg == 0) 
    { 
    xid( "id_prev_pg" ).style.visibility = "hidden" 
    xid( "id_prev_pgBtm" ).style.visibility = "hidden" 
    } 
  } 
} 

 
window.onload = function() 
{ 
set_global_var( "gi_w_lib", new w_class() ) 
cTbl = xid('id_anc').getElementsByTagName( 'TABLE' ) 
cTbl[0].style.display = "inline" 
xid( "id_prev_pg" ).style.visibility = "hidden" 
xid( "id_prev_pgBtm" ).style.visibility = "hidden" 
xid( "id_next_pg" ).style.visibility = "hidden" 
xid( "id_next_pgBtm" ).style.visibility = "hidden" 
if( cTbl.length>1 ) 
  { 
  xid( "id_next_pg" ).style.visibility = "visible" 
  xid( "id_next_pgBtm" ).style.visibility = "visible" 
  } 
eval('document.id_pages.src="graphics/pg'+cTbl.length+'.gif"') 
eval('document.id_pagesBtm.src="graphics/pg'+cTbl.length+'.gif"') 
} 
//========================= End LSK Javascript ================================ 
 