# 각 자리의 숫자(0~9)로만 이루어진 문자열 S가 주어졌을 때, 
# 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 'x' 혹은 '+' 연산자를 넣어 
# 결과적으로 만들어질 수 있는 가장 큰 수를 구하는 프로그램을 작성하세요.
# 단, +보다 x를 먼저 계산하는 일반적인 방식과는 달리, 모든 연산은 왼쪽에서부터 순서대로 이루어진다고 가정.
# "02984"라는 문자열로 만들수 있는 가장 큰 수는 576 입니다.

def multiOrAdd(string_num, result):
    for num in string_num:
        if result <= 1 or int(num) <= 1:
            result = result + int(num)
        else:    
            result = result * int(num)    

    return result


string_num = str(input())
result = int(string_num[0])

print(multiOrAdd(string_num[1:], result))
