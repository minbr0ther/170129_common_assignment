var addressBook = [];
var length = 0;

function init() { //배열 초기화
	addressBook = [[null,null]];
}

function store(name, address) { //배열에 이름 항목 추가 
	addressBook.push([null,null]);
	addressBook[length][0] = name;
	addressBook[length][1] = address;
	length+=1;
}

function search(name) { //이름을 키값으로 주 출력
	for(var i=0; i<addressBook.length; i++) {
		if(addressBook[i][0] === name) 
			console.log(addressBook[i][1])
	}
}

function genName() { //이름 생성기 (2016 출생신고 이름 순위 참고)
	var firstName = ["김","이","박","최","정","강","조","윤","장","임"];
	var middleName = ["민","서","하","도","주","예","시","지","준","유"];
	var lastName = ["준","윤","원","우","호","연","유","현","린","아"];

	var i = Math.floor(Math.random()*9); //랜덤 값 0~9
	var j = Math.floor(Math.random()*9);
	var k = Math.floor(Math.random()*9);

	var result = firstName[i]+middleName[j]+lastName[k];

	console.log(result)
}

init()

store('honux', 'Seoul')
store('minbrother','Gyeonggi')
store('honux', 'Gyeonggi')

search('honux')

genName() 





