# 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어진다.
# 이때 모든 알파벳을 오름차순으로 정렬하여 이어 출력한뒤, 그 뒤에 모든 숫자를 더한 값을 이어 출력한다.
# eg. K1KA5CB7 이라는 값이 들어오면 ABCKK13 을 출력한다.

def main():    
    array = input()
    value = 0
    str_list = []
    for i in array:
        if i.isdigit():
            value += int(i)
        else:
            str_list.append(i)

    str_list.sort()
    print("".join(str_list)+str(value))

main()
