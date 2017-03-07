		txt="Ez a tartalom biztonságos!";
		img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVDhPY/hPIqCmhl+vb95dM+vqpPV3b7z8DhXDreH1jvozxqEIFD//8Q+wBFYN3y/NOgtSNOvB0y+fPj15NL8KpKf1JMgerBoe9ABNrb/9Ccr9///L/daoM8Ytd4Ei2DS8vJUTeiZty2soFwTebgJaUnULKIRTQ87Ot1AuCCBp2NFyNjILDZ2xDD1jGQ9kXN7/HkMDyLm4Uc8ViIb//39++vTzF5AmWgMMDEYNS7PQFSFQ1IUdL6Hq4ABXWsIB/v8HAFKiY/3GtAg/AAAAAElFTkSuQmC";
		
		var node = document.createElement("DIV");
		var textnode = document.createTextNode(txt);
		
		node.appendChild(textnode);
		node.innerHTML='<img width="16" height="16" style="margin-top:-3px;margin-right:7px;vertical-align:middle;" src="'+img+'C" />'+node.innerHTML;
		node.setAttribute("style","text-align:left;vertical-align:middle;transition:.5s;z-index:9999998;color:#333333;display:block;position:fixed;top:-40px;left:0;right:0;height:36px;background-color:white;line-height:36px;padding:0 10px;font-size:13px;font-family:Arial;border-bottom-color:#aaaaaa;border-bottom-width:1px;border-bottom-style:solid;box-shadow:1px 1px 3px 0 rgba(0,0,0,.2);")
		node.id="LU_dialog";
		
		document.body.appendChild(node);
		
		setTimeout(function(){
			document.getElementById("LU_dialog").style.top="0px";
		},1);
		
		setTimeout(function(){
			document.getElementById("LU_dialog").style.top="-40px";
		},3000);
		
		setTimeout(function(){
			document.getElementById("LU_dialog").parentNode.removeChild(document.getElementById("LU_dialog"));
		},3500);
