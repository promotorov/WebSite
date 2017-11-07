section .data

section .text
global _start
_start:
	call read_word
read_char: 
push 0 
mov rdx, 1 ; РљРѕР»-РІРѕ СЃРёРјРІРѕР»РѕРІ 

xor rdi, rdi
mov rsi, rsp 
xor rax, rax 
syscall 
pop rax 
ret 

section .data 
word_buffer times 256 db 0 

section .text 

read_word: 
mov r8, 0 
.loop: ; РћС‚СЃРµРёРІР°РµРј РІ С†РёРєР»Рµ РїСЂРѕР±РµР»СЊРЅС‹Рµ СЃРёРјРІРѕР»С‹ 
call read_char 
test rax, rax 
jz .exit 
cmp rax, 0x21 
jb .loop 

mov rsi, word_buffer 
mov byte[word_buffer], al 
mov rdx, 1 
xor rdi, rdi 
.loop1: ; РЎС‡РёС‚С‹РІР°РµРј СЃР»РѕРІРѕ РґРѕ С‚РµС… РїРѕСЂ, РїРѕРєР° РЅРµ РІСЃС‚СЂРµС‚РёС‚СЃСЏ 

inc r8 ; РїСЂРѕР±РµР»СЊРЅС‹Р№ СЃРёРјРІРѕР». 
xor rax, rax 
lea rsi, [word_buffer + r8] 
syscall 
cmp byte [word_buffer + r8], 0x21 
jb .exit 
jmp .loop1 

.exit: 
mov byte[word_buffer + r8], 0 ; Р—Р°РїРёСЃС‹РІР°РµРј РІ РєРѕРЅРµС† СЃР»РѕРІР° РЅСѓР»РµРІРѕР№ СЃРёРјРІРѕР» 
mov rdx, r8 ; Р’ rdx - РґР»РёРЅР° СЃР»РѕРІР° 
mov rax, word_buffer ; Р’ rax - Р°РґСЂРµСЃ СЃР»РѕРІР°

 ret