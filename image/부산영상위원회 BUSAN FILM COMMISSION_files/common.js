$(function(){
	//datepicker
	ncom.consts.datepickerSetting.yearRange = "c-5:c+1";
	$("input[ncType='date']").each(function(index) {
	    $(this).removeClass('hasDatepicker');
	    $(this).datepicker(ncom.consts.datepickerSetting);
	});
	$("input[ncType='date3']").each(function(index) {
	    $(this).removeClass('hasDatepicker');
	    $(this).datepicker(ncom.consts.datepickerSetting3);
	});
	//생일 datepicker
	ncom.consts.datepickerSetting.yearRange = "c-100:c";
	$("input[ncType='birthday']").each(function(index) {
		$(this).removeClass('hasDatepicker');
	    $(this).datepicker(ncom.consts.datepickerSetting);
	});
	
	//datetimepicker
	$.datetimepicker.setLocale('kr');
	$("input[ncType='datetime1']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet1);
	});
	//지난날짜X
	$("input[ncType='datetime2']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet2);
	});
	//특정요일(금)만 선택
	$("input[ncType='datetime3']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet3);
	});
	//날짜+시간(30분간격)
	$("input[ncType='datetime4']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet4);
	});
	//날짜+시간(10분간격)
	$("input[ncType='datetime5']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet5);
	});
	//날짜+시간(범위지정)
	$("input[ncType='datetime6']").each(function(index) {
	    $(this).datetimepicker(ncom.consts.datetimepickerSet6);
	});
});

//지역 전화번호
var koAreaNumber = [
	{areaNum:"010"}
	,{areaNum:"011"}
	,{areaNum:"016"}
	,{areaNum:"017"}
	,{areaNum:"018"}
	,{areaNum:"019"}
	,{areaNum:"02"}
	,{areaNum:"031"}
	,{areaNum:"032"}
	,{areaNum:"033"}
	,{areaNum:"041"}
	,{areaNum:"042"}
	,{areaNum:"043"}
	,{areaNum:"044"}
	,{areaNum:"0502"}
	,{areaNum:"0503"}
	,{areaNum:"0504"}
	,{areaNum:"0505"}
	,{areaNum:"0506"}
	,{areaNum:"0507"}
	,{areaNum:"0508"}
	,{areaNum:"0509"}
	,{areaNum:"051"}
	,{areaNum:"052"}
	,{areaNum:"053"}
	,{areaNum:"054"}
	,{areaNum:"055"}
	,{areaNum:"061"}
	,{areaNum:"062"}
	,{areaNum:"063"}
	,{areaNum:"064"}
	,{areaNum:"061"}
	,{areaNum:"070"}
]

//이메일 주소 뒷자리(도메인)
var emailLastAddr = [
	 {addrVal:"naver.com", addrTxt:"네이버"}
	,{addrVal:"hanmail.net", addrTxt:"한메일"}
	,{addrVal:"gmail.com", addrTxt:"지메일"}
	,{addrVal:"hotmail.com", addrTxt:"핫메일"}
	,{addrVal:"nate.com", addrTxt:"네이트"}
	,{addrVal:"yahoo.co.kr", addrTxt:"야후"}
]

//브라우저/모바일 체크
function browerPlatform() {
	var openType1 = "";
	var filter = "win16|win32|win64|mac|macintel";
	if(navigator.platform) {
		if(0 > filter.indexOf(navigator.platform.toLowerCase())) {
			openType1 = "MOBILE";
		}
	}	
	
	if(openType1 == "MOBILE") {
		document.location.href="/";
	}
} 

//url parameter value 가져오기
function fGetUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
 	  
//브라우저 체크
function browserChk() {
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		return "IE";
	}
	else {
		if(agent.indexOf("firefox") != -1) {
			return "FIREFOX";
		} else if(agent.indexOf("safari") != -1) {
			if(agent.indexOf("chrome") != -1) {
				return "CHROME";
			} else {
				return "SAFARI";
			}
		} 
		else {
			return "NOTIE";
		}
	}
}
//이벤트키코드 방지
function keyEventChk(page, release) {
	if(browserChk() != "FIREFOX" && browserChk() != "SAFARI") {
		document.onkeydown = function(){
			if(event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") {
				if(event.keyCode == 8) {
					return false;
				}
			}
			if(event.keyCode == 116) {
				event.keyCode = 2;
				return false;
		 	}
			if(event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) {
				return false;
		 	}
		}
		document.oncontextmenu = function(){
			if(event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password"){
				return false;
			}
		}
	} else { 
		document.onkeydown = function(event) { 
			var tar = event.srcElement || event.target;
			var keyCode = event.which || event.keyCode; 
			if(tar.type != "text" && tar.type != "textarea" && tar.type != "password") {
				if(keyCode == 8) {
					return false;
				}
			}
			if(keyCode == 116) { 
	        	keyCode = 2;
				return false;
	        } 
			if(event.ctrlKey == true && (keyCode == 78 || keyCode == 82)) {
				return false;
			}
		}
		document.oncontextmenu = function(event){
			var tar = event.srcElement || event.target;
			if(tar.type != "text" && tar.type != "textarea" && tar.type != "password"){
				return false;
			}
		}
	}
}

//접속 브라우저 랭귀지 리턴
function fBrowserLang() {
	var rtn = "";
	var lang = "un"; 
	if (navigator.language != null) { //chrome, firefox
	    lang = navigator.language;
	} else if (navigator.userLanguage != null) { //ie
	    lang = navigator.userLanguage;
	} else if (navigator.systemLanguage != null) { 
	    lang = navigator.systemLanguage;
	} else { 
	    lang="un";
	}

	lang = lang.toLowerCase(); 
	lang = lang.substring(0, 2); 

	 if (lang=="ko") { 
		 rtn = "ko";
	 } else if (lang=="cn" || lang=="tw" || lang=="zh") { 
		 rtn = "cn";
	 } else if (lang=="ja" || lang=="jp") { 
		 rtn = "jp";
	 } else {
		 rtn = lang;
	 }
	 return rtn;
}

/*
화면 정가운데에 팝업창을 띄운다
openWindow("test.html", "open_win", "scrollbars=yes,resizable=no,status=no", 400, 300);
*/
function openWindow(theURL,winName,features,winWidth,winHeight)
{
	winLeft = (screen.width-winWidth)/2;
	winTop = (screen.height-winHeight)/2;

	if(features){
		winFeatures = features+',width='+winWidth+',height='+winHeight+',left='+winLeft+',top='+winTop;
	}
	else{
		winFeatures = 'width='+winWidth+',height='+winHeight+',left='+winLeft+',top='+winTop;
	}

	winName = window.open(theURL, winName, winFeatures);
	winName.focus();
}

//이미지 새창 띄우기
function fImgPop(img){ 
    var imgTmp = new Image(); 
    var clientWidth = screen.width;
    var clientHeight = screen.height;
    imgTmp.src = img; 
    
     var srcFileName = imgTmp.src.substr(imgTmp.src.lastIndexOf("/")+1, imgTmp.src.length);

     win = window.open("","","width=15,height=15,scrollbars=yes,resizable=yes,left="+(clientWidth/2-15)+",top="+(clientHeight/2-15)+"");
     win.document.writeln("<html>");
     win.document.writeln("<head>");
     win.document.writeln("<title> New Image["+srcFileName+"]</title>");
     win.document.writeln("</head>");
     win.document.writeln("<body style='margin:0px;' bgcolor='#333333'>");
     win.document.writeln("<table border='0' cellpadding='0' cellspacing='0' style='cursor:hand' onclick='self.close()'>");
     win.document.writeln(" <tr>");
     win.document.writeln("  <td align='center'><img src="+img+" name='winImg' style='cursor:hand' onclick='self.close()' alt='close'></td>");
     win.document.writeln(" </tr>");
     win.document.writeln("</table>");
     win.document.writeln("</body>");
     win.document.writeln("</html>");

     imgTmp = win.document.winImg;
     
     setTimeout(function() {
    	 var winWidth = imgTmp.width+10;
         var winHeight = imgTmp.height+29;
        
         var left = (clientWidth/2)-(imgTmp.width/2);
         var top = (clientHeight/2)-(imgTmp.height/2);
        
         if(clientWidth <= imgTmp.width){
                 winWidth = clientWidth;
                 left = 0;
                 win.document.body.scroll = "auto";
         }
         if(clientHeight <= imgTmp.height){
                 winHeight = clientHeight-30;
                 top = 0;
                 win.document.body.scroll = "auto";
         }
        
         win.moveTo(left, top);
         win.resizeTo(winWidth, winHeight);
		}, 1000);
}

//영문만 사용
function isEng(str) {
    for(var i=0;i<str.length;i++){
        var achar = str.charCodeAt(i);
       
		if( achar > 255 ){ 
			/*
		  	8211	–	 	 
			8212	-	 	 
			8216	‘	 	 
			8217	’	 	 
			8218	‚	 	 
			8220	“ 
			8221	”	 
			8222	„	 	 
			8224	†	 	 
			8225	‡	 	 
			8226	•	 	 
			8230	…	 	 
			8240	‰	 	 
			8364	€	 	 
			8482    ™
		 */
			if(achar != 8217 && achar != 8211 && achar != 8212 && achar != 8216 && achar != 8218 && achar != 8220 
					&& achar != 8221 && achar != 8222 && achar != 8224 && achar != 8225 && achar != 8226 
					&& achar != 8230 && achar != 8240 && achar != 8364 && achar != 8482
				) {
				return false;
			}	
        }
    }
    
    return true;
}

function engChk(obj) { 
    if(!isEng(obj.val())){
        //obj.val("");
        return false;
    }
    return true;
}

function engChk_reset(obj) { 
    if(!isEng(obj.val())){
        obj.val("");
        return false;
    }
    return true;
}

function isEng2(str) {
	var result;
	var regexp = /[^0-9a-zA-Z.;\-]/;
	
	if( !regexp.test(str.val()) ) { 
		result = true; 
	} else {
		result = false;
	}
	return result;
}

function engChk2(obj) { 
    if(!isEng2(obj)){ 
        obj.val("");
        return false;
    }
    return true;
}

//한글만 입력(공백 포함)
function onlyHangle(str) {
	var regexp =  /[^ㄱ-ㅎ가-힣\s]/g;
	if( !regexp.test(str) ) { 
		result = true; 
	} else {
		result = false;
	}
	return result;
}

//숫자만 입력
function onlyNumber(obj){
	for(var i=0; i < obj.val().length; i++) {
		var chr = obj.val().substr(i,1);
		if(chr < '0' || chr > '9') {
			alert("숫자로만 입력하셔야 합니다."); //숫자로만 입력하셔야 합니다.
			obj.val("");
			obj.focus();
		}
	}
	
	for(i=0; i<obj.val().length; i++){
         if(( (obj.val().charCodeAt(i) > 0x3130 && obj.val().charCodeAt(i) < 0x318F) || (obj.val().charCodeAt(i) >= 0xAC00 && obj.val().charCodeAt(i) <= 0xD7A3) )) {
        	 alert("숫자로만 입력하셔야 합니다."); //숫자로만 입력하셔야 합니다.
 			 obj.val("");
 			 obj.focus();
         } 
     }
}

function onlyNumber2(obj){
	for(var i=0; i < obj.val().length; i++) {
		var chr = obj.val().substr(i,1);
		if(chr < '0' || chr > '9') {
			alert("숫자로만 입력하셔야 합니다."); //숫자로만 입력하셔야 합니다.
			obj.val("");
			obj.focus();
			 return false;
		}
	}
	
	 for(i=0; i<obj.val().length; i++){
         if(( (obj.val().charCodeAt(i) > 0x3130 && obj.val().charCodeAt(i) < 0x318F) || (obj.val().charCodeAt(i) >= 0xAC00 && obj.val().charCodeAt(i) <= 0xD7A3) )) {
        	 alert("숫자로만 입력하셔야 합니다."); //숫자로만 입력하셔야 합니다.
 			 obj.val("");
 			 obj.focus();
 			 return false;
         } 
     }
	
	 return true;
}

//숫자 콤마 넣기
function inComma(val) {
	var targetObj = val.toString().replace(/[^0-9]/g,'').replace(/,/g,'');   // 입력값이 숫자가 아니면 공백   ,값 공백처리		
	return targetObj.replace(/\B(?=(\d{3})+(?!\d))/g, ",");	// 정규식을 이용해서 3자리 마다 , 추가
}

//숫자만
function onNumber(el) {
	$(el).val($(el).val().replace(/[^0-9]/g,""));
}

// 연락처 pattern helper
function fReplaceTelNo(event) {
	if(event.keyCode == 8) return false;
	var src = $(event.target).val();
	src = src.replace(/[^0-9]/g, "");
	if(src.length >= 7) {
		src = src.substr(0, 3) + "-" + src.substr(3, 4) + "-" + src.substr(7, 4);
	} else if(src.length >= 3) {
		src = src.substr(0, 3) + "-" + src.substr(3, 4);
	}
	
	$(event.target).val(src);
}


/**
 * 다형태 문자열 전화번호 to XXX-XXXX-XXXX 컨버터
 * @param src
 * @returns telNo
 */
function fConvertTelNo(src) {
	src = src.replaceAll(" ", "");
	if(src.startsWith("+820") || src.startsWith("82)0") || src.startsWith("+82") || src.startsWith("82)")) { // 한국 국제전화 지역번호 치환
		src.replace("+82", "0").replace("82)", "0");
	}
	var telNo = src.replace(/\D/g, ""); //숫자 외의 문자 삭제
	
	if(isEmpty(telNo)) {
		//console.log("invalid number: [" + src + "]");
		return "";
	} else if(telNo.length < 8) {
		//console.log("invalid number: [" + src + "]");
		return "";
	}
	
	var arrNo = Array.from(telNo);
	var queueNo = [];
	queueNo.push(...arrNo);
	
	var no1, no2, no3;
	if(telNo.startsWith("02")) {
		if(telNo.length < 9 || telNo.length > 10) return ""; // 서울, 9~10 자리 번호
		no1 = queueNo.shift() + queueNo.shift();
	} else if(telNo.startsWith("050")) { // 평생번호
		if(telNo.length < 11 || telNo.length > 12) return "";
		no1 = queueNo.shift() + queueNo.shift() + queueNo.shift() + queueNo.shift();
	} else if(telNo.startsWith("0")) {
		if(telNo.length < 10 || telNo.length > 11) return "";
		no1 = queueNo.shift() + queueNo.shift() + queueNo.shift();
	} else {
		//console.log("invalid number: [" + src + "]");
		return "";
	}
	no3 = (queueNo.pop() + queueNo.pop() + queueNo.pop() + queueNo.pop()).split('').reverse().join('');
	no2 = queueNo.toString().replace(/\D/g, "");
	
	return [no1, no2, no3].join("-");
}

//시작일자,종료일자 체크(영문 날짜 기준,년도-월-일)
function dataKoValidChk(obj1, obj2) {  
	var result = true;
	if(obj1.val() != "" && obj2.val() != "") { 
		var str1 = obj1.val().replace(/\//gi,"");
		str1 = str1.replace(/-/gi,"");
		str1 = str1.substring(0,4) + str1.substring(4,8);

		var str2 = obj2.val().replace(/\//gi,"");
		str2 = str2.replace(/-/gi,"");
		str2 = str2.substring(0,4)+str2.substring(4,8);

		if(str1 > str2) {
			alert("기간이 맞지 않습니다.");
			obj2.focus();
			result = false;
			return false;
		}
	}
	return result;
}
//시작일자,종료일자 체크(ko 기준)
function dataValidChk(obj1, obj2) {  
	var result = true;
	if(obj1.val() != "" && obj2.val() != "") { 
		var str1 = obj1.val().replace(/\//gi,"");
		str1 = str1.replace(/-/gi,"");
		str1 = str1.substring(0,4) + str1.substring(4,8);

		var str2 = obj2.val().replace(/\//gi,"");
		str2 = str2.replace(/-/gi,"");
		str2 = str2.substring(0,4) + str2.substring(4,8);

		if(str1 > str2) {
			alert("시작일과 종료일을 다시 확인하여 주세요.");
			obj2.focus();
			result = false;
			return false;
		}
	}
	return result;
}

//json Object의 특수문자 리플레이스
function jsonObjectReplace(obj) {
	var objectdata = "";
	if(obj != null && obj != '') {
		objectdata = obj.replace(/&quot;/ig, '"')
			.replace(/\\n/g, "\\n")  
			.replace(/\\'/g, "\\'")
			.replace(/\\"/g, '\\"')
			.replace(/\\&/g, "\\&")
			.replace(/\\r/g, "\\r")
			.replace(/\\t/g, "\\t")
			.replace(/\\b/g, "\\b")
			.replace(/\\f/g, "\\f")
			.replace(/\n/gi,"\\r\\n")
			.replace(/\\/gi,"\\\\");
	}
	return objectdata;
} 

//입력값의 바이트 길이를 리턴(onkeyup)
function getByteLength(input) {
	
	var string = undefined;
	for(var j=0; j<input.val().length; j++) {
	    string += input.val();
	}
	
	var byteLength = 0;
	for (var inx = 0; inx < input.val().length; inx++) {
		var oneChar = escape(string.charAt(inx));
		if ( oneChar.length == 1 ) {
			byteLength ++;
		} else if (oneChar.indexOf("%u") != -1) {
			byteLength += 2;
		} else if (oneChar.indexOf("%") != -1) {
			byteLength += oneChar.length/3;
		}
	}
	return byteLength;
}

//입력값의 바이트 길이를 리턴 및 바이트 제한(onkeyup)
function getByteLengthLimit(input, maxLen) {
	var input_val = input.val();
	var leng = input_val.length;
	
	if(Number(getByteLength(input)) > Number(maxLen)) {
		while(getByteLength(input) > Number(maxLen)){
            leng--;
            input_val = input_val.substring(0, leng);
            break;
        }
		$(input).val(input_val);
		return getByteLength(input);
	} else {
		return getByteLength(input);
	}
}

//이메일주소 유효성 체크
function bool_checkEmail(val) {
    var exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exp.test(val) == false) return false;
	
    return true;
}

//숫자 콤마+소숫점 4자리 제한(onkeyup)
function getNumberDecimalChk4(input) {
	var input_val =  document.getElementById(input).value.replace(/,/g,'');
	var numberExp = /[^.0-9]/g;
	var targetObj = "";
	if(!numberExp.test(input_val)) {
		targetObj = input_val;
	}	
	if(!numberExp.test(targetObj)) {
		var bExists = targetObj.indexOf(".",0);
		var strArr = targetObj.split('.');
		if (bExists > -1) { //소숫점 포함
			targetObj = strArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (strArr[1] ? "." + strArr[1].substring(0,4) : ".");			
		} else {
			targetObj = targetObj.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		document.getElementById(input).value = targetObj;
	}
}

//숫자 콤마 넣기(onkeyup)
function getNumberInComma(input) {
	var input_val =  document.getElementById(input).value;
	var targetObj = input_val.replace(/[^0-9]/g,'').replace(/,/g,'');   // 입력값이 숫자가 아니면 공백   ,값 공백처리		
	document.getElementById(input).value = targetObj.replace(/\B(?=(\d{3})+(?!\d))/g, ",");	// 정규식을 이용해서 3자리 마다 , 추가
}

//숫자 콤마 넣기(onkeyup)
function getNumberInCommaV2(input) {
	var input_val =  input.val();
	var targetObj = input_val.replace(/[^0-9]/g,'').replace(/,/g,'');   // 입력값이 숫자가 아니면 공백   ,값 공백처리
	input.val(targetObj.replace(/\B(?=(\d{3})+(?!\d))/g, ","));	// 정규식을 이용해서 3자리 마다 , 추가
}

//숫자 콤마 빼기
function getScrOutComma(val) {
	comm_str = String(val);
	uncomm_str="";
	for(i=0; i<comm_str.length; i++) {
		substr=comm_str.substring(i,i+1);
		if(substr!=",") uncomm_str += substr;
	}
	return uncomm_str;
}
//숫자 콤마 넣기
function getScrInComma(val) {
	if(isNaN(val) || isEmpty(val)){
		return "0";
	}
	var temp_str = String(val).split(".");
	var uncomm_str = temp_str[0];
	var comm_str = "";

	var loop_j = uncomm_str.length - 3;

	for(j=loop_j; j>=1 ; j=j-3)
	{
		comm_str=","+uncomm_str.substring(j,j+3)+comm_str;
	}
	comm_str = uncomm_str.substring(0,j+3)+comm_str;

	pattern = /\-,/;
	comm_str = comm_str.replace(pattern, '-');
	comm_str = comm_str.replace(/[/d]*E,-[0-9]*/gi, '');
	
	if (temp_str.length > 1) {
		var ckZero = false;
		var rVal = "";
		for(x=temp_str[1].length; x > 0 ; x--){
			ch=temp_str[1].substring(x,x-1);
			if(ch != "0") {
				ckZero = true;
				rVal = temp_str[1].substring(0,x);
				break;
			}
		}
		
		if(ckZero)
			comm_str = comm_str + "." + rVal;
	}

	return comm_str;	
}

//숫자를 한글명으로 변환
function getNumberToHangul(input){
    var index=0;
    var i=0;
    var result="";
    var newResult="";
    var money = getScrOutComma(input);
    su = new Array("0","1","2","3","4","5","6","7","8","9");
    km = new Array("영","일","이","삼","사","오","육","칠","팔","구");
    danwi = new Array("","십","백","천","만","십","백","천","억","십","백","천","조");
    for(j=1;j<=money.length;j++){
        for(index=0;index<10;index++){
            money = money.replace(su[index],km[index]);
        }
    }
    
    for(index = money.length;index>0;index=index-1){
        result = money.substring(index-1,index);
        if(result=="영"){
            if(i<4 || i>8){
                result = "";
                
            }else if(i>=4 && i<8 && newResult.indexOf("만")<0){
                result = "만";
                
            }else if(i>=8 && i<12 && newResult.indexOf("억")<0){
                result = "억";
            }
        }else{
            result = result + danwi[i];
        }
        i++;
        newResult = result + newResult;
    }
    
    for(j=1;j<newResult.length;j++){
        newResult = newResult.replace("영","");
    }
    
    if((newResult.indexOf("만")-newResult.indexOf("억"))==1)
        newResult = newResult.replace("만","");
    if((newResult.indexOf("억")-newResult.indexOf("조"))==1)
        newResult = newResult.replace("억","");
        
    return newResult;
}

//빈값여부 체크
function isEmpty(pValue){
	if( (pValue == "") || (pValue == null) || (pValue == 'null') || (pValue == 'NULL') || (pValue == 'undefined') ) {
		return true;
	} else if('object' == typeof(pValue) && Object.keys(pValue).length == 0) {//'[]', '{}' 형태의 Object를 확인하고자 할 때
		return true;
	}
	return false;
}

//input 앞뒤 공백 제거
function _inputValTrim(){
	$('input, textarea').each(function(index) { 
		if($(this).attr('type') == "text" || $(this).attr('type') == "password" || $(this).attr('type') == "textarea-one") {
			var inputlength = getByteLength($(this));
			if(inputlength > 0) {
				$(this).val($(this).val().trim());
			}
		}
	});
}

//form 체크
var objAttrName = "";   
function _inputFormCheck(){ 
	var result = true;
	$('input, textarea, select').each(function(index) { 
		var obj = $(this).attr('name');
		
		var describe = $(this).attr("describe");
		var describe2 = $(this).attr("describe2");
		var minlength = $(this).attr("minlength");
		var datatype = $(this).attr("datatype");
		var isEng = $(this).attr("isEng");
		var isNumber = $(this).attr("isNumber");
		var isEng2 = $(this).attr("isEng2");
		var isHangleNumber = $(this).attr("isHangleNumber");
		
		if($(this).attr('type') == "text" || $(this).attr('type') == "password" || $(this).attr('type') == "textarea-one" || $(this).attr('type') == "select") {
			var inputlength = getByteLength($(this));
		
			if( minlength != null && inputlength < minlength){ 
				objAttrName = obj;
				alert(describe);
				$(this).focus();
				result = false;
				return false;
			}
			
			if((isEng != null || isEng != undefined) && inputlength >= minlength){
				if(!engChk($(this)))
				{
					alert("\"" + describe2 + "\",\n 이 필드는 영문으로 입력하여 주세요.");
					objAttrName = obj;
					$(this).focus();
					result = false;
					return false;
				}
			}
			
			if((isHangleNumber != null || isHangleNumber != undefined) && inputlength >= minlength){
				if(!onlyHangleNumberChk($(this)))
				{
					alert("\"" + describe2 + "\",\n 이 필드는 한글로 입력하여 주세요.");
					objAttrName = obj;
					$(this).focus();
					result = false;
					return false;
				}
			}
			
			
			/*
			if((isEng2 != null || isEng2 != undefined) && inputlength >= minlength){
				if(!engChk2($(this)))
				{
					alert("Please use english only");
					$(this).focus();
					result = false;
					return false;
				}
			}
			*/
			if((isNumber != null || isNumber != undefined) && inputlength >= minlength){
				if(!onlyNumber2($(this))){
					result = false;
					return false;
				}
			}
			
		} else if($(this).attr('type') == "radio") {
			var radio_val = $('input:radio[name='+obj+']:checked').val();
			
			if(describe != null && radio_val == undefined){
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 선택하여 주세요."); //은 필수값입니다. 선택해주세요
				objAttrName = obj;
				result = false;
				return false;
			}
		} else if($(this).attr('type') == "select-one") {
			var select_val = $(this).val();
			
			if(describe != null && (select_val == "" || select_val == null)) {
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 선택하여 주세요."); //은 필수값입니다. 선택해주세요
				objAttrName = obj;
				$(this).focus();
				result = false;
				return false;
			}
		} else if($(this).attr('type') == "checkbox") {
			var checkedLen = 0;
			$('input:checkbox[name='+obj+']').each(function() {
				if(this.checked){
					checkedLen++;
				}
			});
			if(describe != null && checkedLen == 0){
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 체크하여 주세요."); //은 필수값입니다. 선택해주세요
				result = false;
				return false;
			}
		}
		
	});
	return result;	
}

function _inputFormCheck2(form_nm){ 
	var result = true;
	var frmObj = "#" + form_nm;	
	$(frmObj + ' input, ' + frmObj + ' textarea,' + frmObj + ' select').each(function(index) { 
		var obj = $(this).attr('name');
		
		var describe = $(this).attr("describe");
		var describe2 = $(this).attr("describe2");
		var minlength = $(this).attr("minlength");
		var datatype = $(this).attr("datatype");
		var isEng = $(this).attr("isEng");
		var isNumber = $(this).attr("isNumber");
		var isEng2 = $(this).attr("isEng2");
		var isHangleNumber = $(this).attr("isHangleNumber");
		
		
		if($(this).attr('type') == "text" || $(this).attr('type') == "password" || $(this).attr('type') == "textarea-one" || $(this).attr('type') == "select") {
			var inputlength = getByteLength($(this));
		
			if( minlength != null && inputlength < minlength){
				objAttrName = obj;
				alert(describe);
				$(this).focus();
				result = false;
				return false;
			}
			
			if((isEng != null || isEng != undefined) && inputlength >= minlength){
				if(!engChk($(this)))
				{
					objAttrName = obj;
					alert("\"" + describe2 + "\",\n 이 필드는 영문으로 입력하여 주세요.");					
					$(this).focus();
					result = false;
					return false;
				}
			}
			
			if((isHangleNumber != null || isHangleNumber != undefined) && inputlength >= minlength){
				if(!onlyHangleNumberChk($(this)))
				{
					alert("\"" + describe2 + "\",\n 이 필드는 한글로 입력하여 주세요.");
					objAttrName = obj;
					$(this).focus();
					result = false;
					return false;
				}
			}
			
			
			/*
			if((isEng2 != null || isEng2 != undefined) && inputlength >= minlength){
				if(!engChk2($(this)))
				{
					alert("Please use english only");
					$(this).focus();
					result = false;
					return false;
				}
			}
			*/
			if((isNumber != null || isNumber != undefined) && inputlength >= minlength){
				if(!onlyNumber2($(this))){
					result = false;
					return false;
				}
			}
			
		} else if($(this).attr('type') == "radio") {
			var radio_val = $('input:radio[name='+obj+']:checked').val();
			
			if(describe != null && radio_val == undefined){
				objAttrName = obj;
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 선택하여 주세요."); //은 필수값입니다. 선택해주세요				
				result = false;
				return false;
			}
		} else if($(this).attr('type') == "select-one") {
			var select_val = $(this).val();
			
			if(describe != null && (select_val == "" || select_val == null)) {
				objAttrName = obj;
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 선택하여 주세요."); //은 필수값입니다. 선택해주세요
				$(this).focus();
				result = false;
				return false;
			}
		} else if($(this).attr('type') == "checkbox") {
			var checkedLen = 0;
			$('input:checkbox[name='+obj+']').each(function() {
				if(this.checked){
					checkedLen++;
				}
			});
			if(describe != null && checkedLen == 0){
				alert("\"" + describe + "\",\n 이 필드는 필수값입니다. 체크하여 주세요."); //은 필수값입니다. 선택해주세요
				result = false;
				return false;
			}
		}
		
	});
	return result;	
}

// 유튜브URL로 키 값 가져오기
function getKeyOnYoutubeUrl(url) {
	var youtubeUrlYn = false;
	var youtubeKey = '';
	
	var regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	if(regex.test(url)) {
		youtubeUrlYn = true;
		youtubeKey = url.match(regex)[1];
	}
	
	return {
		youtubeYn: youtubeUrlYn
		,youtubeKey: youtubeKey
	}
}

// 구분자를 포함한 연결 문자열 생성
// argsToStrWithSeperator(" / ", "A", "B", "", "D") => return "A / B / D"
function argsToStrWithSeperator(sep) {
	var arr = new Array();
	for(var i = 1; i < arguments.length; i++) {
		if(!!arguments[i]) arr.push(arguments[i]);
	}
	return arr.join(sep);
}

function bsnsNoFormatter(src) {
	src = src.replace(/[^0-9]/g, "");
	var formatNum = "";
	try {
		if(10 <= src.length) {
			formatNum = src.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
		} else if(5 <= src.length) {
			formatNum = src.replace(/(\d{3})(\d{2})/, '$1-$2-');
		} else if(3 <= src.length) {
			formatNum = src.replace(/(\d{3})/, '$1-');
		} else {
			formatNum = src;
		}
	} catch(e) {
		formatNum = src;
	}
	return formatNum;
}

//이메일 마스킹 처리
//ab**********@nav******
function emailMasking(val) {
	var strLength = 0;
	var emailStr = val.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
	strLength = emailStr.toString().split('@')[0].length - 3;
	return val.toString().replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*').replace(/.{6}$/, "******");
}

//이름 마스킹 처리
function nameMasking(val) {
	var strLength = 0;
	strLength = val.length;
	if(strLength <= 3){
		var regex = /.$/;
		return val.replace(regex, "*");  
	} else {
		var regex = /.{2}$/; 
		return val.replace(regex, "**"); 
	}
}

// 전화번호 정규식
function telRegexp(el) {
	return el.value = el.value.replace(/[^0-9]/g, '') 
	  	           			  .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

//server kst time
function getTimeKSTV2() {
	var xmlHttpRequest;
	xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
	xmlHttpRequest.setRequestHeader("ContentType", "text/html");
	xmlHttpRequest.send('');

	var serverDate = xmlHttpRequest.getResponseHeader("Date");		
	var curDay = new Date(serverDate);
	var vYyyy = curDay.getFullYear().toString();
	var vMonth = curDay.getMonth() + 1;
	vMonth = vMonth < 10 ? '0' + vMonth.toString() : vMonth.toString();
	var vDay = curDay.getDate();
	vDay = vDay < 10 ? '0' + vDay.toString() : vDay.toString();

	var vHour = curDay.getHours();
	vHour = vHour < 10 ? '0' + vHour.toString() : vHour.toString();
	var vMinites = curDay.getMinutes();
	vMinites = vMinites < 10 ? '0' + vMinites.toString() : vMinites.toString();
	var vSeconds = curDay.getSeconds();
	vSeconds = vSeconds < 10 ? '0' + vSeconds.toString() : vSeconds.toString();

	return vYyyy+vMonth+vDay+vHour+vMinites+vSeconds;
}