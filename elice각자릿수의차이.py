# 두 자연수가 주어질 때, 각 자릿수의 숫자를 비교하여 다른 개수를 세는 프로그램을 작성하시오.
# 예를들어, 두 자연수가 각각 212,233 이라면 10의 자리와 1의 자리가 다르므로, 총 2개의 자리가 다르다.
# 212
# 233
# 2
# 123
# 123456
# 6

def difference_digit(num1, num2):
    count = 0
    for i in range(len(num1)):
        if num1[i] != num2[i]:
            count += 1
    return count

def main():
    num1, num2 = map(str, input().split())
    # 자릿수 맞춰주기.
    # zfill(5) 5이면 5의 자리숫자로 앞에 0을 채워준다. string 일 경우에만 적용된다.
    if len(num1) > len(num2):
        num2 = num2.zfill(len(num1))
    elif len(num1) < len(num2):
        num1 = num1.zfill(len(num2))

    print(difference_digit(num1, num2))

main()