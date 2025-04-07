var flash;
var quickTime;
//var langName = 'emirati';

function  loadAud (folder, fileName) {
	fileName = fileName.replace(/[^a-zA-Z 0-9 _]+/g,"");
	media = "media/" + folder + "/"+ fileName +".mp3";
		    var  audioPlayer = document.getElementById("html5Audio"); 
	//alert(media);
	if (flash)
		flashPlay(media); 
	 else if((audioPlayer) || (audioPlayer != null)) {
		
				 if (checkAudioFormatSupportByBrowsers() != "")  {
			audioPlayer.src=  media.split(".")[0] + checkAudioFormatSupportByBrowsers();
			//alert(audioPlayer.src);
			audioPlayer.load();
			audioPlayer.play(); 
				 } else  { 
			if (iPodBrowser()) {
				QT_Init(media);
				var player = document.getElementById("sound");
						 if((audioPlayer) || (audioPlayer != null)) {
					player.SetURL(media);
      							player.Play();
						 }
			} else { 
				if (quickTime) 
        			    							QT_Init(media);
						 						else	
				              						Win_Init(media); 
					        }
				 }
								
	} else  { 
		if (quickTime) 
        			    QT_Init(media);
		else	
				       Win_Init(media); 
	}
		  
}


function iPodBrowser() {
	var browser =  navigator.userAgent.toLowerCase();
	if (browser.indexOf("ipod") != -1)
    	 return true;
	else 
     	return false;

} // iPodBrowser




function xid( a ){
  			return window.document.getElementById( a );
}


	
function QT_Init(media) {
	var player = document.getElementById("audioPlayer"); 
	player.innerHTML = "<object "
								+ "classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" "
								+ "width=\"16\" height=\"200\" id=\"sound\" "
								+ "style=\"position:absolute;left:-1000px;top:-1000px\" "
								+ "codebase=\"http://www.apple.com/qtactivex/qtplugin.cab\">"
								+ "<param name=\"SRC\" value=\""+media+"\">"
								+ "<param name=\"AUTOPLAY\" value=\"true\">"
								+ "<param name=\"CONTROLLER\" value=\"false\">"
								+ "<param name=\"VOLUME\" value=\"100\">"
								+ "<param name=\"ENABLEJAVASCRIPT\" value=\"true\">"
								+ "<param name=\"TYPE\" value=\"audio/mpeg\">"
								+ "<embed classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" "  
								+ "name=\"sound\" "
								+ "id=\"sound\" " 
								+ "src=\""+media+"\" " 
								+ "pluginspage=\"http://www.apple.com/quicktime/download/\" "
								+ "volume=\"100\" " 
								+ "enablejavascript=\"true\" "
								+ "type=\"audio/mpeg\" "
								+ "height=\"16\" "
								+ "width=\"200\" "
								+ "autostart=\"true\""
								+ "> </embed>"
								+ "</object>";
					
    		
}
	
function Win_Init(media){
	var player = document.getElementById("audioPlayer"); 
	// player.innerHTML = '<object id="sound" ' 
	// 					+ 'classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" '
	// 					+ 'codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" '
	// 					+ 'standby="Loading Microsoft® Windows® Media Player components..." '  
	// 					+ 'type="application/x-oleobject" width="1" height="1">'                
	// 					+ '<param name="url" value="'+media+'">'      
	// 					+ '<param name="volume" value="100">'            
	// 					+ '<embed id="sound" type="application/x-mplayer2" src="'+media+'" ' 
	// 					+ 'classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" '
	// 					+ 'pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" '
	// 					+ 'type="application/x-mplayer2" '
	// 					+ 'url="'+media+'" ' 
	// 					+ 'volume="100" ' 
	// 					+ 'width="1" height="1">'               
	// 					+ '<\/embed>'
	// 					+ '<\/object>';
	player.innerHTML = "<audio autoplay  id=\"sound\">"									
 									+ "<source src=\""+media+"\" type=\"audio/mpeg\">" 
 									+ "Your browser does not support the audio element."
									+ "<\/audio>";
}
	
	
function flashPlay(media){
  				window.document.audPlayer.SetVariable("audFile", media); 
 	}
    
	
	
  	function QT_Installed(){
   			 var installed = false;
    		if (navigator.plugins && navigator.plugins.length){
     			 for (var i=0; i<navigator.plugins.length; i++)
        				if (navigator.plugins[i].name.indexOf("QuickTime") > -1)
         						 installed = true;
	} else {
     					 var obj = false;
     						 if (browserDetection() == "msie")
        								execScript("on error resume next: obj=IsObject(CreateObject(\"QuickTimeCheckObject.QuickTimeCheck.1\"))","VBScript");
      								installed = obj ? true : false;
      		}
   			 return installed;
}

function flashInstalled(version) {
			    var installVersion = getFlashVersion().split(",").shift();
	if ( installVersion > version)
				  		return true;
	else 
				 		return false;
    	} 
			
function getFlashVersion(){
  				// If it is IE Browser
  			try {
   					 try {
      						// avoid flash for IE6  minor version lookup issues
    						var obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
      						try { obj.AllowScriptAccess = "always"; }
     						catch(e) { return "6,0,0"; }
    					} catch(e) {}
    		         return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
  				  // else other browsers
 			} catch(e) {
   					    try {
      						 if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
       						 			return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      							}
    						} catch(e) {}
 			}
  			return "0,0,0";
}

	
function initFlash() {
 		      var so = new SWFObject("swf/audioPlayer.swf", "audPlayer", "320", "24",  "1"); 
	so.write("audioPlayer"); 
 
  	}
  
	
function initLoad(){
		 
	flash = flashInstalled(7);
	quickTime  = QT_Installed();
	var player = xid("audioPlayer");
		
	
		  //initial embed the object element in HTML if it is flash 
	if (flash) 
        		initFlash();
				
			 //create the audio element in HTML using HTML5
   		else { 
		
		//alert(!!(document.createElement('audio').canPlayType));
		//if (!!(document.createElement('audio').canPlayType)) {
			    var audioPlayer = document.createElement("audio");  
				   audioPlayer.id ="html5Audio";
		player.appendChild(audioPlayer); 
				
				
		//}
	}
			
		
} //initLoad()
	
	
function checkAudioFormatSupportByBrowsers() {

	    var html5AudioMimeTypes = new Array ("audio/mp3", "audio/mpeg", "audio/wav");
	   var html5AudioTypes = new Array (".mp3",".mp3",".wav"); 
	var audioPlayer =  document.getElementById("html5Audio"); 
	for (var i = 0; i < html5AudioMimeTypes.length; i++) { 
	        var canPlay = audioPlayer.canPlayType(html5AudioMimeTypes[i]); 
		if ((canPlay == "maybe") || (canPlay == "probably"))
				   return html5AudioTypes[i];
	   } 
	   
	   return "";
}
	
