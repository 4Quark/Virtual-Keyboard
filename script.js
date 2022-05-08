'use strict';

const keys = [ 

	{
		'key': '§',
		'character': '§',
		'keyCode': 192,
		'which': 192,
		'code': 'IntlBackslash',
		'location': 0,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	}, 

	{
		'key': '1',
		'character': '1',
		'keyCode': 49,
		'which': 49,
		'code': 'Digit1',
		'location': 0,
		'description': '1 Key',
		'unicode': '①'
	},

	{
		'key': '2',
		'character': '2',
		'keyCode': 50,
		'which': 50,
		'code': 'Digit2',
		'location': 0,
		'description': '2 Key',
		'unicode': '②'
	},

	{
		'key': '3',
		'character': '3',
		'keyCode': 51,
		'which': 51,
		'code': 'Digit3',
		'location': 0,
		'description': '3 Key',
		'unicode': '③'
	},

	{
		'key': '4',
		'character': '4',
		'keyCode': 52,
		'which': 52,
		'code': 'Digit4',
		'location': 0,
		'description': '4 Key',
		'unicode': '④'
	},

	{
		'key': '5',
		'character': '5',
		'keyCode': 53,
		'which': 53,
		'code': 'Digit5',
		'location': 0,
		'description': '5 Key',
		'unicode': '⑤'
	},

	{
		'key': '6',
		'character': '6',
		'keyCode': 54,
		'which': 54,
		'code': 'Digit6',
		'location': 0,
		'description': '6 Key',
		'unicode': '⑥'
	},

	{
		'key': '7',
		'character': '7',
		'keyCode': 55,
		'which': 55,
		'code': 'Digit7',
		'location': 0,
		'description': '7 Key',
		'unicode': '⑦'
	},

	{
		'key': '8',
		'character': '8',
		'keyCode': 56,
		'which': 56,
		'code': 'Digit8',
		'location': 0,
		'description': '8 Key',
		'unicode': '⑧'
	},

	{
		'key': '9',
		'character': '9',
		'keyCode': 57,
		'which': 57,
		'code': 'Digit9',
		'location': 0,
		'description': '9 Key',
		'unicode': '⑨'
	},

	{
		'key': '0',
		'character': '0',
		'keyCode': 48,
		'which': 48,
		'code': 'Digit0',
		'location': 0,
		'description': '0',
		'unicode': '⓪'
	}, 

	{
		'key': '-',
		'character': '-',
		'keyCode': 109,
		'which': 109,
		'code': 'NumpadSubtract',
		'location': 0,
		'description': 'subtract'
	},

	{
		'key': '=',
		'character': '=',
		'keyCode': 61,
		'which': 61,
		'code': 'Equal',
		'location': 0,
		'description': 'equals (firefox)'
	},

	{
		'key': '⌫',
		'keyCode': 8,
		'which': 8,
		'code': 'Backspace',
		'location': 0,
		'description': 'backspace / delete',
		'unicode': '⌫'
	},

	{
		'key': 'Tab',
		'keyCode': 9,
		'which': 9,
		'code': 'Tab',
		'location': 1,
		'description': 'tab',
		'unicode': '↹'
	},

	{
		'key': 'q',
		'character': 'q',
		'keyCode': 81,
		'which': 81,
		'code': 'KeyQ',
		'location': 1,
		'description': 'q'
	}, 

	{
		'key': 'w',
		'character': 'w',
		'keyCode': 87,
		'which': 87,
		'code': 'KeyW',
		'location': 1,
		'description': 'w'
	},

	{
		'key': 'e',
		'character': 'e',
		'keyCode': 69,
		'which': 69,
		'code': 'KeyE',
		'location': 1,
		'description': 'e'
	},

	{
		'key': 'r',
		'character': 'r',
		'keyCode': 82,
		'which': 82,
		'code': 'KeyR',
		'location': 1,
		'description': 'r'
	}, 

	{
		'key': 't',
		'character': 't',
		'keyCode': 84,
		'which': 84,
		'code': 'KeyT',
		'location': 1,
		'description': 't'
	},

	{
		'key': 'y',
		'character': 'y',
		'keyCode': 89,
		'which': 89,
		'code': 'KeyY',
		'location': 1,
		'description': 'y'
	},

	{
		'key': 'u',
		'character': 'u',
		'keyCode': 85,
		'which': 85,
		'code': 'KeyU',
		'location': 1,
		'description': 'u'
	}, 

	{
		'key': 'i',
		'character': 'i',
		'keyCode': 73,
		'which': 73,
		'code': 'KeyI',
		'location': 1,
		'description': 'i'
	},

	{
		'key': 'o',
		'character': 'o',
		'keyCode': 79,
		'which': 79,
		'code': 'KeyO',
		'location': 1,
		'description': 'o'
	},

	{
		'key': 'p',
		'character': 'p',
		'keyCode': 80,
		'which': 80,
		'code': 'KeyP',
		'location': 1,
		'description': 'p'
	},

	{
		'key': '[',
		'character': '[',
		'keyCode': 160,
		'which': 160,
		'code': 'BracketLeft',
		'location': 1,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'description': '^'
	},

	{
		'key': ']',
		'character': ']',
		'keyCode': 221,
		'which': 221,
		'code': 'BracketRight',
		'location': 1,
		'description': 'close bracket / å'
	},

	{
		'key': 'CapsLock',
		'keyCode': 20,
		'which': 20,
		'code': 'CapsLock',
		'location': 2,
		'description': 'caps lock',
		'unicode': '⇪'
	},

	{
		'key': 'a',
		'character': 'a',
		'keyCode': 65,
		'which': 65,
		'code': 'KeyA',
		'location': 2,
		'description': 'a'
	},

	{
		'key': 's',
		'character': 's',
		'keyCode': 83,
		'which': 83,
		'code': 'KeyS',
		'location': 2,
		'description': 's'
	},

	{
		'key': 'd',
		'character': 'd',
		'keyCode': 68,
		'which': 68,
		'code': 'KeyD',
		'location': 2,
		'description': 'd'
	},

	{
		'key': 'f',
		'character': 'f',
		'keyCode': 70,
		'which': 70,
		'code': 'KeyF',
		'location': 2,
		'description': 'f'
	},

	{
		'key': 'g',
		'character': 'g',
		'keyCode': 71,
		'which': 71,
		'code': 'KeyG',
		'location': 2,
		'description': 'g'
	},

	{
		'key': 'h',
		'character': 'h',
		'keyCode': 72,
		'which': 72,
		'code': 'KeyH',
		'location': 2,
		'description': 'h'
	}, 

	{
		'key': 'j',
		'character': 'j',
		'keyCode': 74,
		'which': 74,
		'code': 'KeyJ',
		'location': 2,
		'description': 'j'
	},

	{
		'key': 'k',
		'character': 'k',
		'keyCode': 75,
		'which': 75,
		'code': 'KeyK',
		'location': 2,
		'altKey': true,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'k'
	},

	{
		'key': 'l',
		'character': 'l',
		'keyCode': 76,
		'which': 76,
		'code': 'KeyL',
		'location': 2,
		'altKey': true,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'l'
	},

	{
		'key': ';',
		'character': ';',
		'keyCode': 59,
		'which': 59,
		'code': 'Semicolon',
		'location': 2,
		'description': 'semicolon (firefox), equals'
	},

	{
		'key': '\'',
		'character': '\'',
		'keyCode': 222,
		'which': 222,
		'code': 'Quote',
		'location': 2,
		'description': 'single quote / ø / ä'
	},

	{
		'key': '\\',
		'character': '\\',
		'keyCode': 220,
		'which': 220,
		'code': 'Backslash',
		'location': 2,
		'description': 'back slash'
	},

	{
		'key': 'Enter↵',
		'keyCode': 13,
		'which': 13,
		'code': 'Enter',
		'location': 2,
		'description': 'Enter / Return',
		'unicode': '↵'
	},

	{
		'key': 'Shift',
		'keyCode': 16,
		'which': 16,
		'code': 'ShiftLeft',
		'location': 3,
		'description': 'shift',
		'unicode': '⇧'
	},

	{
		'key': '`',
		'character': '`',
		'keyCode': 192,
		'which': 192,
		'code': 'Backquote',
		'location': 3,
		'description': 'Backtick / grave accent / ñ / æ / ö'
	},

	{
		'key': 'z',
		'character': 'z',
		'keyCode': 90,
		'which': 90,
		'code': 'KeyZ',
		'location': 3,
		'description': 'z'
	},

	{
		'key': 'x',
		'character': 'x',
		'keyCode': 88,
		'which': 88,
		'code': 'KeyX',
		'location': 3,
		'description': 'x'
	},

	{
		'key': 'c',
		'character': 'c',
		'keyCode': 67,
		'which': 67,
		'code': 'KeyC',
		'location': 3,
		'description': 'c'
	},

	{
		'key': 'v',
		'character': 'v',
		'keyCode': 86,
		'which': 86,
		'code': 'KeyV',
		'location': 3,
		'description': 'v'
	},

	{
		'key': 'b',
		'character': 'b',
		'keyCode': 66,
		'which': 66,
		'code': 'KeyB',
		'location': 3,
		'description': 'b'
	},

	{
		'key': 'n',
		'character': 'n',
		'keyCode': 78,
		'which': 78,
		'code': 'KeyN',
		'location': 3,
		'description': 'n'
	},

	{
		'key': 'm',
		'character': 'm',
		'keyCode': 77,
		'which': 77,
		'code': 'KeyM',
		'location': 3,
		'description': 'm'
	},

	{
		'key': ',',
		'character': ',',
		'keyCode': 108,
		'which': 108,
		'code': 'NumpadDecimal',
		'location': 3,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'description': 'numpad period (firefox)'
	},

	{
		'key': '.',
		'character': '.',
		'keyCode': 190,
		'which': 190,
		'code': 'Period',
		'location': 3,
		'description': 'period'
	},

	{
		'key': '/',
		'character': '/',
		'keyCode': 191,
		'which': 191,
		'code': 'Slash',
		'location': 3,
		'description': 'forward slash / ç'
	},

	{
		'key': '&#5123;',
		'keyCode': 38,
		'which': 38,
		'code': 'ArrowUp',
		'location': 3,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	},

	{
		'key': 'Shift',
		'keyCode': 16,
		'which': 16,
		'code': 'ShiftRight',
		'location': 3,
		'description': 'shift',
		'unicode': '⇧'
	},

	{
		'key': '^',
		'keyCode': 17,
		'which': 17,
		'code': 'ControlLeft',
		'location': 4,
		'altKey': true,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': true,
		'description': 'ctrl',
		'unicode': '^'
	},

	{
		'key': '⌥',
		'keyCode': 18,
		'which': 18,
		'code': 'AltLeft',
		'location': 4,
		'altKey': true,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'Alt / Option',
		'unicode': '⎇ / ⌥'
	},

	{
		'key': '⌘',
		'keyCode': 91,
		'which': 91,
		'code': 'MetaLeft',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'Windows Key / Left ⌘ / Chromebook Search key',
		'unicode': '⌘ ⊞'
	},

	{
		'key': ' ',
		'keyCode': 32,
		'which': 32,
		'code': 'Space',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	},

	{
		'key': '⌘',
		'keyCode': 91,
		'which': 91,
		'code': 'MetaRight',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'Windows Key / Left ⌘ / Chromebook Search key',
		'unicode': '⌘ ⊞'
	},

	{
		'key': '⌥',
		'keyCode': 18,
		'which': 18,
		'code': 'AltRight',
		'location': 4,
		'altKey': true,
		'ctrlKey': false,
		'metaKey': true,
		'shiftKey': false,
		'description': 'Alt / Option',
		'unicode': '⎇ / ⌥'
	},

	{
		'key': '&#5130;',
		'keyCode': 37,
		'which': 37,
		'code': 'ArrowLeft',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	},

	{
		'key': '&#5121;',
		'keyCode': 40,
		'which': 40,
		'code': 'ArrowDown',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	},

	{
		'key': '&#5125;',
		'keyCode': 39,
		'which': 39,
		'code': 'ArrowRight',
		'location': 4,
		'altKey': false,
		'ctrlKey': false,
		'metaKey': false,
		'shiftKey': false,
		'repeat': false
	}

];

let div = document.createElement('div');
div.className = 'wrapper';
document.body.append(div);

const WRAPPER = document.querySelector('.wrapper');
WRAPPER.insertAdjacentHTML('afterbegin', '<div class="last_lane">This keyboard made in iOS. Press Ctr+Space to change language</div>');
WRAPPER.insertAdjacentHTML('afterbegin', '<div class="keyboard_container"></div>');
WRAPPER.insertAdjacentHTML('afterbegin', '<textarea disabled class="textarea_body" id="textarea" rows="5" cols="50" placeholder="Start typing..."></textarea>');
WRAPPER.insertAdjacentHTML('afterbegin', '<div class="greeting">Virtual keyboard (for RSS)</div>');

const TEXTAREA = document.getElementById('textarea');

const KEYBOARD_CONTAINER = document.querySelector('.keyboard_container');
KEYBOARD_CONTAINER.insertAdjacentHTML('afterbegin', '<div class="keyboard_row"></div>');
KEYBOARD_CONTAINER.insertAdjacentHTML('afterbegin', '<div class="keyboard_row"></div>');
KEYBOARD_CONTAINER.insertAdjacentHTML('afterbegin', '<div class="keyboard_row"></div>');
KEYBOARD_CONTAINER.insertAdjacentHTML('afterbegin', '<div class="keyboard_row"></div>');
KEYBOARD_CONTAINER.insertAdjacentHTML('afterbegin', '<div class="keyboard_row"></div>');
const KEYBOARD_ROW_1 = document.querySelector('.keyboard_row');
const KEYBOARD_ROW_2 = KEYBOARD_ROW_1.nextSibling;
const KEYBOARD_ROW_3 = KEYBOARD_ROW_2.nextSibling;
const KEYBOARD_ROW_4 = KEYBOARD_ROW_3.nextSibling;
const KEYBOARD_ROW_5 = KEYBOARD_ROW_4.nextSibling;

function buttonCreator(buttonCharacter, buttonID, buttonRow) {
	const BUTTON_NAME = document.createElement('div');
	BUTTON_NAME.className = 'keyboard_key';
	BUTTON_NAME.id = buttonID;
	BUTTON_NAME.innerHTML = `${buttonCharacter}`;
	if (buttonRow == 0) {
		KEYBOARD_ROW_1.append(BUTTON_NAME);
	} else if (buttonRow == 1) {
		KEYBOARD_ROW_2.append(BUTTON_NAME);
	} else if (buttonRow == 2) {
		KEYBOARD_ROW_3.append(BUTTON_NAME);
	} else if (buttonRow == 3) {
		KEYBOARD_ROW_4.append(BUTTON_NAME);
	} else KEYBOARD_ROW_5.append(BUTTON_NAME);
}

for (let i = 0; i < keys.length; i++) {
	let buttonID;
	if (Object.prototype.hasOwnProperty.call(keys[i], 'character')) {
		buttonID = keys[i].character;
	} else buttonID = keys[i].code;
	buttonCreator(keys[i].key, buttonID, keys[i].location);
}

document.getElementById('Backspace').className = 'strong_key backspace_btn';
document.getElementById('Tab').className = 'strong_key tab_btn';
const CAPS_BUTTON = document.getElementById('CapsLock');
CAPS_BUTTON.className = 'strong_key caps_lock_btn';
document.getElementById('Enter').className = 'strong_key enter_btn';
document.getElementById('ShiftLeft').className = 'strong_key shift_btn';
document.getElementById('ShiftRight').className = 'strong_key shift_btn';

document.getElementById('ControlLeft').className = 'strong_key control_btn';
document.getElementById('AltLeft').className = 'strong_key option_btn';
document.getElementById('AltRight').className = 'strong_key option_btn';
document.getElementById('MetaLeft').className = 'strong_key command_btn';
document.getElementById('MetaRight').className = 'strong_key command_btn';

const SPACE_BAR = document.getElementById('Space');
SPACE_BAR.className = 'strong_key space_btn';

document.getElementById('ArrowLeft').className = 'strong_key arrow_btn';
document.getElementById('ArrowDown').className = 'strong_key arrow_btn';
document.getElementById('ArrowRight').className = 'strong_key arrow_btn';
document.getElementById('ArrowUp').className = 'strong_key arrow_up_btn';


function keydownListener(event) {
	event.preventDefault();
	if (event.code == 'Space') {              
		TEXTAREA.value += ' ';
		SPACE_BAR.classList.add('key_pressed');
	} else if (event.code == 'ShiftLeft') {              
		document.getElementById('ShiftLeft').classList.add('key_pressed');
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.add('capsStyle');});
	} else if (event.code == 'ControlLeft') {              
		document.getElementById('ControlLeft').classList.add('key_pressed');
	} else if (event.code == 'AltLeft') {              
		document.getElementById('AltLeft').classList.add('key_pressed');
	} else if (event.code == 'MetaLeft') {              
		document.getElementById('MetaLeft').classList.add('key_pressed');
	} else if (event.code == 'ShiftRight') {              
		document.getElementById('ShiftRight').classList.add('key_pressed');
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.add('capsStyle');});
	} else if (event.code == 'ControlRight') {              
		document.getElementById('ControlRight').classList.add('key_pressed');
	} else if (event.code == 'AltRight') {              
		document.getElementById('AltRight').classList.add('key_pressed');
	} else if (event.code == 'MetaRight') {              
		document.getElementById('MetaRight').classList.add('key_pressed');
	} else if (event.code == 'Tab') {
		TEXTAREA.value += '\t';
		document.getElementById('Tab').classList.add('key_pressed');
	} else if (event.code == 'Enter') {
		TEXTAREA.value += '\n';
		document.getElementById('Enter').classList.add('key_pressed');
	} else if (event.code == 'ArrowLeft') {
		TEXTAREA.value += '←';
		document.getElementById('ArrowLeft').classList.add('key_pressed');
	} else if (event.code == 'ArrowDown') {
		TEXTAREA.value += '↓';
		document.getElementById('ArrowDown').classList.add('key_pressed');
	} else if (event.code == 'ArrowRight') {
		TEXTAREA.value += '→';
		document.getElementById('ArrowRight').classList.add('key_pressed');
	} else if (event.code == 'ArrowUp') {
		TEXTAREA.value += '↑';
		document.getElementById('ArrowUp').classList.add('key_pressed');
	} else if (event.code == 'Backspace') {
		let currentText = TEXTAREA.value;
		currentText = currentText.slice(0,-1);
		TEXTAREA.value = currentText;
		document.getElementById('Backspace').classList.add('key_pressed');
	} else if (event.code == 'CapsLock') {             
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.add('capsStyle');});
		CAPS_BUTTON.classList.add('key_pressed');
	} else if (event.key == '{') {    
		TEXTAREA.value += '[';      
		document.getElementById('[').classList.add('key_pressed');
	} else if (event.key == '}') {    
		TEXTAREA.value += ']';      
		document.getElementById(']').classList.add('key_pressed');
	} else if (event.key == ':') {  
		TEXTAREA.value += ';';   
		document.getElementById(';').classList.add('key_pressed');
	} else if (event.key == '"') {   
		TEXTAREA.value += '\'';    
		document.getElementById('\'').classList.add('key_pressed');
	} else if (event.key == '|') {   
		TEXTAREA.value += '\\';    
		document.getElementById('\\').classList.add('key_pressed');
	} else if (event.key == '<') {    
		TEXTAREA.value += ',';      
		document.getElementById(',').classList.add('key_pressed');
	} else if (event.key == '>') {    
		TEXTAREA.value += '.';      
		document.getElementById('.').classList.add('key_pressed');
	} else if (event.key == '?') {    
		TEXTAREA.value += '/';      
		document.getElementById('/').classList.add('key_pressed');
	} else if (event.key == '~') {    
		TEXTAREA.value += '`';      
		document.getElementById('`').classList.add('key_pressed');
	} else if (event.key == '±') {    
		TEXTAREA.value += '§';      
		document.getElementById('§').classList.add('key_pressed');
	} else if (event.key == '!') {    
		TEXTAREA.value += '1';      
		document.getElementById('1').classList.add('key_pressed');
	} else if (event.key == '@') {    
		TEXTAREA.value += '2';      
		document.getElementById('2').classList.add('key_pressed');
	} else if (event.key == '#') {    
		TEXTAREA.value += '3';      
		document.getElementById('3').classList.add('key_pressed');
	} else if (event.key == '$') {    
		TEXTAREA.value += '4';      
		document.getElementById('4').classList.add('key_pressed');
	} else if (event.key == '%') {    
		TEXTAREA.value += '5';      
		document.getElementById('5').classList.add('key_pressed');
	} else if (event.key == '^') {    
		TEXTAREA.value += '6';      
		document.getElementById('6').classList.add('key_pressed');
	} else if (event.key == '&') {    
		TEXTAREA.value += '7';      
		document.getElementById('7').classList.add('key_pressed');
	} else if (event.key == '*') {    
		TEXTAREA.value += '8';      
		document.getElementById('8').classList.add('key_pressed');
	} else if (event.key == '(') {    
		TEXTAREA.value += '9';      
		document.getElementById('9').classList.add('key_pressed');
	} else if (event.key == ')') {    
		TEXTAREA.value += '0';      
		document.getElementById('0').classList.add('key_pressed');
	} else if (event.key == '+') {    
		TEXTAREA.value += '=';      
		document.getElementById('=').classList.add('key_pressed');
	} else if (event.key == '_') {    
		TEXTAREA.value += '-';      
		document.getElementById('-').classList.add('key_pressed');
	} else if (document.getElementById(`${event.key.toLowerCase()}`).classList.contains('keyboard_key')) {
		let inputSymbol = `${document.getElementById(`${event.key.toLowerCase()}`).id}`;
		if (document.getElementById(`${event.key.toLowerCase()}`).classList.contains('capsStyle')) {
			TEXTAREA.value += inputSymbol.toUpperCase();
			document.getElementById(`${event.key.toLowerCase()}`).classList.add('key_pressed');
		} else {
			TEXTAREA.value += inputSymbol;
			document.getElementById(`${event.key.toLowerCase()}`).classList.add('key_pressed');
		}
	} 
        
	TEXTAREA.scrollTop = TEXTAREA.scrollHeight;
}

document.addEventListener('keydown', keydownListener);

document.addEventListener('keyup', event => {
	event.preventDefault();
	if (event.code == 'Space') {     
		SPACE_BAR.classList.remove('key_pressed');
	} else if (event.code == 'ShiftLeft') {              
		document.getElementById('ShiftLeft').classList.remove('key_pressed');
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.remove('capsStyle');});
	} else if (event.code == 'ControlLeft') {              
		document.getElementById('ControlLeft').classList.remove('key_pressed');
	} else if (event.code == 'AltLeft') {              
		document.getElementById('AltLeft').classList.remove('key_pressed');
	} else if (event.code == 'MetaLeft') {              
		document.getElementById('MetaLeft').classList.remove('key_pressed');
	} else if (event.code == 'ShiftRight') {              
		document.getElementById('ShiftRight').classList.remove('key_pressed');
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.remove('capsStyle');});
	} else if (event.code == 'ControlRight') {              
		document.getElementById('ControlRight').classList.remove('key_pressed');
	} else if (event.code == 'AltRight') {              
		document.getElementById('AltRight').classList.remove('key_pressed');
	} else if (event.code == 'MetaRight') {              
		document.getElementById('MetaRight').classList.remove('key_pressed');
	} else if (event.code == 'Tab') {
		document.getElementById('Tab').classList.remove('key_pressed');
	} else if (event.code == 'Enter') {
		document.getElementById('Enter').classList.remove('key_pressed');
	} else if (event.code == 'ArrowLeft') {
		document.getElementById('ArrowLeft').classList.remove('key_pressed');
	} else if (event.code == 'ArrowDown') {
		document.getElementById('ArrowDown').classList.remove('key_pressed');
	} else if (event.code == 'ArrowRight') {
		document.getElementById('ArrowRight').classList.remove('key_pressed');
	} else if (event.code == 'ArrowUp') {
		document.getElementById('ArrowUp').classList.remove('key_pressed');
	} else if (event.code == 'Backspace') {
		document.getElementById('Backspace').classList.remove('key_pressed');
	} else if (event.code == 'CapsLock') {             
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.remove('capsStyle');});
		CAPS_BUTTON.classList.remove('key_pressed');
	} else if (event.key == '{') {  
		document.getElementById('[').classList.remove('key_pressed');
	} else if (event.key == '}') {    
		document.getElementById(']').classList.remove('key_pressed');
	} else if (event.key == ':') {  
		document.getElementById(';').classList.remove('key_pressed');
	} else if (event.key == '"') {    
		document.getElementById('\'').classList.remove('key_pressed');
	} else if (event.key == '|') {  
		document.getElementById('\\').classList.remove('key_pressed');
	} else if (event.key == '<') {  
		document.getElementById(',').classList.remove('key_pressed');
	} else if (event.key == '>') {   
		document.getElementById('.').classList.remove('key_pressed');
	} else if (event.key == '?') {   
		document.getElementById('/').classList.remove('key_pressed');
	} else if (event.key == '~') {    
		document.getElementById('`').classList.remove('key_pressed');
	} else if (event.key == '±') {      
		document.getElementById('§').classList.remove('key_pressed');
	} else if (event.key == '!') {  
		document.getElementById('1').classList.remove('key_pressed');
	} else if (event.key == '@') {    
		document.getElementById('2').classList.remove('key_pressed');
	} else if (event.key == '#') {    
		document.getElementById('3').classList.remove('key_pressed');
	} else if (event.key == '$') {    
		document.getElementById('4').classList.remove('key_pressed');
	} else if (event.key == '%') {     
		document.getElementById('5').classList.remove('key_pressed');
	} else if (event.key == '^') {    
		document.getElementById('6').classList.remove('key_pressed');
	} else if (event.key == '&') {    
		document.getElementById('7').classList.remove('key_pressed');
	} else if (event.key == '*') {   
		document.getElementById('8').classList.remove('key_pressed');
	} else if (event.key == '(') {   
		document.getElementById('9').classList.remove('key_pressed');
	} else if (event.key == ')') {      
		document.getElementById('0').classList.remove('key_pressed');
	} else if (event.key == '+') {     
		document.getElementById('=').classList.remove('key_pressed');
	} else if (event.key == '_') {     
		document.getElementById('-').classList.remove('key_pressed');
	} else { 
		document.getElementById(`${event.key.toLowerCase()}`).classList.remove('key_pressed'); 
	}
});

document.querySelectorAll('.keyboard_key').forEach(item => {
	item.addEventListener('click', () => {
		let inputSymbol = `${item.id}`;
		if (item.classList.contains('capsStyle')) {
			TEXTAREA.value += inputSymbol.toUpperCase();
		} else TEXTAREA.value += inputSymbol;
	});
});

document.getElementById('Backspace').addEventListener('click', () => {
	let currentText = TEXTAREA.value;
	currentText = currentText.slice(0,-1);
	TEXTAREA.value = currentText;
});

document.getElementById('Tab').addEventListener('click', () => {
	TEXTAREA.value += '\t';
});

document.getElementById('Enter').addEventListener('click', () => {
	TEXTAREA.value += '\n';
	TEXTAREA.scrollTop = TEXTAREA.scrollHeight;
});

document.getElementById('ArrowLeft').addEventListener('click', () => {
	TEXTAREA.value += '←';
});

document.getElementById('ArrowDown').addEventListener('click', () => {
	TEXTAREA.value += '↓';
});

document.getElementById('ArrowRight').addEventListener('click', () => {
	TEXTAREA.value += '→';
});

document.getElementById('ArrowUp').addEventListener('click', () => {
	TEXTAREA.value += '↑';
});

SPACE_BAR.addEventListener('click', () => {
	TEXTAREA.value += ' ';
});

function capsListener() {
	CAPS_BUTTON.classList.add('key_pressed');
	document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.add('capsStyle');});
	CAPS_BUTTON.addEventListener('click', () => {
		CAPS_BUTTON.classList.remove('key_pressed');
		document.querySelectorAll('.keyboard_key').forEach(item => {item.classList.remove('capsStyle');});
	});
}

CAPS_BUTTON.addEventListener('click', capsListener);

