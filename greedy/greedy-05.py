# 큰 수의 법칙
# 동빈이의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다.
# 단, 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 이 법칙의 특징이다.
# 예를 들어 2,4,5,4,6 으로 이루어진 배열이 있을 때 M이 8이고, K가 3이라고 가정하자.
# 이 경우 특정한 인덱스의 수가 연속해서 3번 더해질 수 있으므로 큰 수의 법칙에 따른 결과는 6+6+6+5+6+6+6+5 인 46이 된다.
# 단, 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 간주한다. 예를 들어 순서대로 3,4,3,4,3 으로 이루어진 배열이 있을 때, M이 7이고, K가 2라고 가정하자,
# 이 경우 두번째 원소에 해당하는 4와 네번째 원소에 해당하는 4를 번갈아 두번씩 더하는 것이 가능하다. 결과적으로 4+4+4+4+4+4+4 28이 도출 된다.
# 배열의 크기 N 숫자가 더해지는 횟수 M 그리고 K가 주어질 때 동빈이의 큰 수의 법칙에 따른 결과를 출력하시오.
# 5 8 3
# 2 4 5 4 6

# 조금 더 편안한 방법
def max_num_rule(m,k,first,second):
    result_sum = 0
    count = 0
    for i in range(m):
        if count == k:
            count = 0
            result_sum += second
            continue

        result_sum += first
        count += 1
        
    return result_sum

def main2():
    n, m, k = map(int, input().split())
    data = list(map(int, input().split()))

    # 받은 데이터 정렬을 통해 큰 값 추출
    data.sort()
    first = data[n-1]
    second = data[n-2]
    print(max_num_rule(m,k,first,second))

main2()


# 내가 푼 방법
def max_num_rule(max_num, second_num, m, k):
    result_sum = 0
    count = 0
    for i in range(m):
        if count == k:
            count = 0
            result_sum += second_num
            continue

        result_sum += max_num
        count += 1

    return result_sum

def main():
    n, m, k = map(int, input().split())
    num_list = list(map(int, input().split()))
    max_num = max(num_list)
    num_list.remove(max_num)
    second_num = max(num_list)

    print(max_num_rule(max_num, second_num, m, k))

main()