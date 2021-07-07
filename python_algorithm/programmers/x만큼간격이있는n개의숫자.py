# 문제설명
# 함수 solution은 정수 x와 자연수 n을 입력 받아, 
# x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
# 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

# 제한조건
# 1. x는 -10000000 이상, 10000000 이하인 정수입니다.
# 2. n은 1000 이하 자연수입니다.

# 입출력예
# x = 2, n =5
# answer = [2, 4, 6, 8, 10]
# x = 4, n =3
# answer = [4, 8, 12]
# x = -4, n =2
# answer = [-4, -8]

def solution(x, n):
    if x > 0:
        answer = [i for i in range(x, n*x+1, x)]
    elif x == 0:
        answer = [0]*n
    else:
        answer = [i for i in range(x, n*x-1, x)]
    
    return answer


def init():
    x, n = map(int, input().split())
    print(solution(x, n))

init()