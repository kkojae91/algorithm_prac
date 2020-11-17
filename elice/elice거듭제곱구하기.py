# 입력으로 m,n이 차레대로 입력됩니다. m^n을 구하는 프로그램을 작성하시오.
# 입력값은 1,000,000,007 보다 클경우, 반환값을 1,000,000,007로 나눈 나머지 값을 반환하세요.
# 0 <= n <= 1,000,000,000,000
# 3 4
# 81
LIMIT_NUMBER = 1000000007

def getPower(m, n):
    if n == 0:
        return 1
    elif n % 2 == 0:
        temp = getPower(m, n//2)
        return (temp * temp) % LIMIT_NUMBER
    else:
        temp = getPower(m, (n-1) // 2)
        return (temp * temp * m) % LIMIT_NUMBER

def main():
    m,n = map(int, input().split())
    print(getPower(m, n))

if __name__ == "__main__":
    main()
