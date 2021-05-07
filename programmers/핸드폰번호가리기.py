# 문제설명
# 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
# 전화번호 문자열 phone_number로 주어졌을때,
# 전화번호 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

# 제한조건
# phone_number의 길이는 4이상, 20이하인 문자열입니다.

# 입출력예
# phone_number = "01033334444"
# return = "*******4444"
# phone_number = "027778888"
# return = "*****8888"

def solution(phone_number):
    first_number = phone_number[:len(phone_number)-4]
    last_number = phone_number[len(phone_number)-4:]
    password_number = len(first_number)*"*"
    answer = password_number + last_number
    return answer

def init():
    phone_number = str(input())

    print(solution(phone_number))

init()