//----------------------------------------------------------------------------------------------------
// ncom 클래스 정의
//----------------------------------------------------------------------------------------------------
var ncom;
if (ncom==null || ncom==undefined) ncom = function(){};
ncom.consts = function(){};

//----------------------------------------------------------------------------------------------------
// 달력정의 변수
//----------------------------------------------------------------------------------------------------
// (1) 공휴일
ncom.consts.holidays = {
	 "0101":{title:"신정"}
	,"0301":{title:"삼일절"}
	,"0505":{title:"어린이날"}
	,"0606":{title:"현충일"}
	,"0815":{title:"광복절"}
	,"1003":{title:"개천절"}
	,"1009":{title:"한글날"}
	,"1225":{title:"성탄절"}

	,"20130209":{title:"설날"}
	,"20130210":{title:"설날"}
	,"20130211":{title:"설날"}
	,"20130918":{title:"추석"}
	,"20130919":{title:"추석"}
	,"20130920":{title:"추석"}
	,"20130517":{title:"석가탄신일"}
	
	,"20140130":{title:"설날"}
	,"20140131":{title:"설날"}
	,"20140201":{title:"설날"}
	,"20140506":{title:"석가탄신일"}
	,"20140907":{title:"추석"}
	,"20140908":{title:"추석"}
	,"20140909":{title:"추석"}
};
// (2) 날자표시형태
ncom.consts.dateFormat = "yy-mm-dd"; // 2014-01-01
// (3) datepicker 설정
ncom.consts.datepickerSetting={
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
	'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	dayNames: ['일','월','화','수','목','금','토'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: '주차',
	dateFormat: ncom.consts.dateFormat, 
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	changeMonth: true,      
	changeYear: true,
	showWeek: false,
	yearRange: 'c-5:c+1',
	yearSuffix: '',
	beforeShowDay: function(day) {
		var result = null;
		// 포맷에 대해선 다음 참조(http://docs.jquery.com/UI/Datepicker/formatDate)
		// ncom.consts.holidays : fn.ncom.consts.js에서 정의 
		/* css include
		  .date-sunday .ui-state-default { color:red; font-weight:bold; }
		  .date-saturday .ui-state-default { color:blue; font-weight:bold; }
		  .date-holiday .ui-state-default { color:red; font-weight:bold; }
		*/
		var holiday = ncom.consts.holidays[$.datepicker.formatDate("yymmdd",day)]; // yymmdd=20140101
		if(holiday){
			result =  [true, "date-holiday", holiday.title];
		}else{
			holiday = ncom.consts.holidays[$.datepicker.formatDate("mmdd",day)];	
			if(holiday){
				result =  [true, "date-holiday", holiday.title];
			}
		}
		if(!result){
			switch (day.getDay()) {
				case 0: // is sunday?
					result = [true, "date-sunday"];
					break;
				case 6: // is saturday?
					result = [true, "date-saturday"];
					break;
				default:
					result = [true, ""];
					break;
			}
		}
		return result;
	}						
};

ncom.consts.datepickerSetting2={
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
	'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	dayNames: ['일','월','화','수','목','금','토'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: '주차',
	dateFormat: ncom.consts.dateFormat, 
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	changeMonth: true,      
	changeYear: true,
	showWeek: false,
	yearRange: 'c-5:c+1',
	yearSuffix: '',
	beforeShowDay: function(day) {
		var result = null;
		// 포맷에 대해선 다음 참조(http://docs.jquery.com/UI/Datepicker/formatDate)
		// ncom.consts.holidays : fn.ncom.consts.js에서 정의 
		/* css include
		  .date-sunday .ui-state-default { color:red; font-weight:bold; }
		  .date-saturday .ui-state-default { color:blue; font-weight:bold; }
		  .date-holiday .ui-state-default { color:red; font-weight:bold; }
		*/
		var holiday = ncom.consts.holidays[$.datepicker.formatDate("yymmdd",day)]; // yymmdd=20140101
		if(holiday){
			result =  [true, "date-holiday", holiday.title];
		}else{
			holiday = ncom.consts.holidays[$.datepicker.formatDate("mmdd",day)];	
			if(holiday){
				result =  [true, "date-holiday", holiday.title];
			}
		}
		if(!result){
			switch (day.getDay()) {
				case 0: // is sunday?
					result = [true, "date-sunday"];
					break;
				case 6: // is saturday?
					result = [true, "date-saturday"];
					break;
				default:
					result = [true, ""];
					break;
			}
		}
		return result;
	}						
};


ncom.consts.dateFormat3 = "yy.mm.dd"; // 2014.01.01
ncom.consts.datepickerSetting3={
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
	'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	dayNames: ['일','월','화','수','목','금','토'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: '주차',
	dateFormat: ncom.consts.dateFormat3, 
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	changeMonth: true,      
	changeYear: true,
	showWeek: false,
	yearRange: 'c-5:c+1',
	yearSuffix: '',
	beforeShowDay: function(day) {
		var result = null;
		var holiday = ncom.consts.holidays[$.datepicker.formatDate("yymmdd",day)]; // yymmdd=20140101
		if(holiday){
			result =  [true, "date-holiday", holiday.title];
		}else{
			holiday = ncom.consts.holidays[$.datepicker.formatDate("mmdd",day)];	
			if(holiday){
				result =  [true, "date-holiday", holiday.title];
			}
		}
		if(!result){
			switch (day.getDay()) {
				case 0: // is sunday?
					result = [true, "date-sunday"];
					break;
				case 6: // is saturday?
					result = [true, "date-saturday"];
					break;
				default:
					result = [true, ""];
					break;
			}
		}
		return result;
	}						
};


var datatimepicker_today = new Date();
var datatimepicker_curYear = datatimepicker_today.getFullYear();
ncom.consts.datatimepicker_minYear = datatimepicker_curYear;
ncom.consts.datatimepicker_minYearV2 = datatimepicker_curYear - 75;
ncom.consts.datatimepicker_maxYear = datatimepicker_curYear + 2; 

ncom.consts.datetimepickerSet1={
	format:'Y-m-d',
	timepicker:false,
	/*mask:true,*/
	yearStart:ncom.consts.datatimepicker_minYearV2,
	yearEnd:ncom.consts.datatimepicker_maxYear
	//yearRange: ncom.consts.datatimepicker_minYear + ':' + ncom.consts.datatimepicker_maxYear
};
//지난날짜X
ncom.consts.datetimepickerSet2={
	format:'Y-m-d',
	timepicker:false,
	minDate: 0,
	/*mask:true,*/
	yearStart:ncom.consts.datatimepicker_minYear,
	yearEnd:ncom.consts.datatimepicker_maxYear
};

//금요일만 선택,지난날짜X
var notSelClass = "datetimepicker_notDateSelect";
ncom.consts.datetimepickerSet3={
	format:'Y-m-d',
	minDate: 0,
	timepicker:false,
	yearStart:ncom.consts.datatimepicker_minYear,
	yearEnd:ncom.consts.datatimepicker_maxYear,
	beforeShowDay: function(date) {
	      var day = date.getDay();
	      if (day === 0 || day === 1 || day === 2 || day === 3 || day === 4 || day === 6 ) { //금요일만 선택 가능
	          return [false, notSelClass]; // 선택 불가, 추가 클래스 없음
	      }
	}
};
//날짜+시간(30분간격)
ncom.consts.datetimepickerSet4={
	format:'Y-m-d H:i',
	step:30,
	mask:true,
	yearStart:ncom.consts.datatimepicker_minYear,
	yearEnd:ncom.consts.datatimepicker_maxYear
};
//날짜+시간(10분간격)
ncom.consts.datetimepickerSet5={
	format:'Y-m-d H:i',
	step:10,
	mask:true,
	yearStart:ncom.consts.datatimepicker_minYear,
	yearEnd:ncom.consts.datatimepicker_maxYear
};
//날짜+시간(범위지정)
ncom.consts.datetimepickerSet6={
	format:'Y-m-d H:i',
	mask:true,
	yearStart:ncom.consts.datatimepicker_minYear,
	yearEnd:ncom.consts.datatimepicker_maxYear,
	allowTimes:[
	            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
	           ]
};


