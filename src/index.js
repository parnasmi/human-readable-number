module.exports = function toReadable (number) {
	
	
	const strNum = number.toString();
	const length = strNum.length;
	let readableNumber = '';
	
	switch(length) {
		case 3: {
			for(let i = 0; i < length; i++) {
				if(i === 0) {
					switch(strNum[i]) {
						case '9':
							readableNumber += 'nine hundred'
							break;
						case '8':
							readableNumber += 'eight hundred'
							break;
						case '7':
							readableNumber += 'seven hundred'
							break;
						case '6':
							readableNumber += 'six hundred'
							break;
						case '5':
							readableNumber += 'five hundred'
							break;
						case '4':
							readableNumber += 'four hundred'
							break;
						case '3':
							readableNumber += 'three hundred'
							break;
						case '2':
							readableNumber += 'two hundred'
							break;
						case '1':
							readableNumber += 'one hundred'
							break;
					}
				} else if( i === 1) {
					switch(strNum[i]) {
						case '9':
							readableNumber += ' ninety'
							break;
						case '8':
							readableNumber += ' eighty'
							break;
						case '7':
							readableNumber += ' seventy'
							break;
						case '6':
							readableNumber += ' sixty'
							break;
						case '5':
							readableNumber += ' fifty'
							break;
						case '4':
							readableNumber += ' forty'
							break;
						case '3':
							readableNumber += ' thirty'
							break;
						case '2':
							readableNumber += ' twenty'
							break;
						case '1':
							readableNumber += ''
							break
						case '0':
							readableNumber += ''
							break;
					}
				} else if( i === 2) {
					switch(strNum[i]) {
						case '9': {
							if(strNum[1] === '1') {
								readableNumber += ' nineteen'	
							} else {
								readableNumber += ' nine'
							}
							break;
						}
						case '8': {
							if(strNum[1] === '1') {
								readableNumber += ' eighteen'	
							} else {
								readableNumber += ' eight'
							}
							break;
						}
						case '7': {
							if(strNum[1] === '1') {
								readableNumber += ' seventeen'	
							} else {
								readableNumber += ' seven'
							}
							break;
						}
							
						case '6': {
							if(strNum[1] === '1') {
								readableNumber += ' sixteen'	
							} else {
								readableNumber += ' six'
							}
							break;
						}
						case '5': {
							if(strNum[1] === '1') {
								readableNumber += ' fifteen'	
							} else {
								readableNumber += ' five'
							}
							break;
						}
						case '4': {
							if(strNum[1] === '1') {
								readableNumber += ' fourteen'	
							} else {
								readableNumber += ' four'
							}
							break;
						}
						case '3': {
							if(strNum[1] === '1') {
								readableNumber += ' thirteen'	
							} else {
								readableNumber += ' three'
							}
							break;
						}
						case '2': {
							if(strNum[1] === '1') {
								readableNumber += ' twelve'	
							} else {
								readableNumber += ' two'
							}
							break;
						}
						case '1': {
							if(strNum[1] === '1') {
								readableNumber += ' eleven'	
							} else {
								readableNumber += ' one'
							}
							break;
						}
						case '0':
							if(strNum[1] === '1') {
								readableNumber += ' ten'	
							} else {
								readableNumber += ''
							}
							break;
							break;
					}
				}
			}
			break;
		}
		case 2: {
			for(let i = 0; i < length; i++) {
				if( i === 0) {
					switch(strNum[i]) {
						case '9':
							readableNumber += 'ninety'
							break;
						case '8':
							readableNumber += 'eighty'
							break;
						case '7':
							readableNumber += 'seventy'
							break;
						case '6':
							readableNumber += 'sixty'
							break;
						case '5':
							readableNumber += 'fifty'
							break;
						case '4':
							readableNumber += 'forty'
							break;
						case '3':
							readableNumber += 'thirty'
							break;
						case '2':
							readableNumber += 'twenty'
							break;
						case '1':
							readableNumber += ''
							break
						case '0':
							readableNumber += ''
							break;
					}
				} else if( i === 1) {
					switch(strNum[i]) {
						case '9': {
							if(strNum[0] === '1') {
								readableNumber += 'nineteen'	
							} else {
								readableNumber += ' nine'
							}
							break;
						}
						case '8': {
							if(strNum[0] === '1') {
								readableNumber += 'eighteen'	
							} else {
								readableNumber += ' eight'
							}
							break;
						}
						case '7': {
							if(strNum[0] === '1') {
								readableNumber += 'seventeen'	
							} else {
								readableNumber += ' seven'
							}
							break;
						}
							
						case '6': {
							if(strNum[0] === '1') {
								readableNumber += 'sixteen'	
							} else {
								readableNumber += ' six'
							}
							break;
						}
						case '5': {
							if(strNum[0] === '1') {
								readableNumber += 'fifteen'	
							} else {
								readableNumber += ' five'
							}
							break;
						}
						case '4': {
							if(strNum[0] === '1') {
								readableNumber += 'fourteen'	
							} else {
								readableNumber += ' four'
							}
							break;
						}
						case '3': {
							if(strNum[0] === '1') {
								readableNumber += 'thirteen'	
							} else {
								readableNumber += ' three'
							}
							break;
						}
						case '2': {
							if(strNum[0] === '1') {
								readableNumber += 'twelve'	
							} else {
								readableNumber += ' two'
							}
							break;
						}
						case '1': {
							if(strNum[0] === '1') {
								readableNumber += 'eleven';
							} else {
								readableNumber += ' one';
							}
							break;
						}
						case '0': {
							if(strNum[0] === '1' && strNum[i] === '0') {
								readableNumber += 'ten';
							} {
								readableNumber += '';
							}
							break;
						}
					}
				}
			}
			break;
		}
		case 1: {
					switch(strNum) {
						case '9':
							readableNumber += 'nine'
							break;
						case '8':
							readableNumber += 'eight'
							break;
						case '7':
							readableNumber += 'seven'
							break;
						case '6':
							readableNumber += 'six'
							break;
						case '5':
							readableNumber += 'five'
							break;
						case '4':
							readableNumber += 'four'
							break;
						case '3':
							readableNumber += 'three'
							break;
						case '2':
							readableNumber += 'two'
							break;
						case '1':
							readableNumber += 'one'
							break
						case '0':
							readableNumber += 'zero'
							break;
					}
				
			
			break;
		}
		default:
			return null
	}
	
	return readableNumber;
  
}
