# 입력값은 10진수, 출력값은 2진수 인 프로그램을 만들어주세요
def binary(n, binary_list):
    if n == 0:
        return binary_list[::-1]
    binary_list.append(n%2)
    return binary(n//2, binary_list)

n = int(input())
binary_list =[]
print(*binary(n, binary_list))