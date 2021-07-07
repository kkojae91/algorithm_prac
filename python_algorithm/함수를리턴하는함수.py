# 주어진 값이 정수가 아니거나 최솟값 minimum보다 작으면 False를 리턴하는 함수를 리턴
def min_validator(minimum):
    def helper(n):
        if type(n) is not int:
            return False
        if minimum <= n:
            return True
        else:
            return False
        # return minimum <= n
    return helper

# 주어진 값이 정수가 아니거나 최댓값 maximum보다 크면 False를 리턴하는 함수를 리턴
def max_validator(maximum):
    def helper(n):
        if type(n) is not int:
            return False
        if maximum >= n:
            return True
        else:
            return False
        # return maximum >= n
    return helper

# validators 중 하나라도 통과하지 못하면 False를 리턴한다.
def validate(n, validators):
    for validator in validators:
        if not validator(n):
            return False
    return True

# 작성한 함수를 테스트 합니다.
# 나이 데이터를 검증하는 validator를 선언합니다.
# 0세 이상이여야 하고, 120세 이하여야 한다.
age_validators = [min_validator(0), max_validator(120)]
# 거짓 나이 데이터 생성
ages = [9, -3, 7, 33, 18, 1999, 287, 0, 13]
# 주어진 나이 데이터들에 대한 검증 결과를 출력한다.
print('검증결과')
for age in ages:
    if validate(age, age_validators):
        print(f'{age}세 : 유요함') 
    else:
        print(f'{age}세 : 유요하지 않음')   

    # result = "유요함" if validate(age, age_validators) else "유요하지 않음"
    # print(f"{age}세 : {result}")
