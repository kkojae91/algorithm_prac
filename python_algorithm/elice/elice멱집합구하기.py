# 집합 a에 대하여, a의 모든 부분집합을 원소로 가지는 집합을 a의 멱집합 이라고한다.
# 예를들어, 집합 a의 원소가 1,2,3 일 경우, a의 멱집합은 다음과 같이 8개의 원소를 갖는 집합이다.
# {},{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3} 단 공집합"{}"은 출력하지 않는다.
# n이 주어질때, a의 멱집합의 원소를 사전순서대로 모두 출력하는 프로그램을 작성하시오. 
# 단, 공집합은 제외하고 출력한다.
# import sys
def getPowerSet(n,k):
    # 기저조건
    if n == k:
        return [[k]]

    result = [[k]]
    temp = []
    
    for i in range(k+1,n+1):
        temp = temp + getPowerSet(n, i)

    for i in range(len(temp)) :
        temp[i] = [k] + temp[i]
    
    return result + temp

def powerSet(n) :
    result = []
    for i in range(1,n+1):
        result += getPowerSet(n,i)
        
    return result

def main():
    n = int(input())
    result = powerSet(n)
    # print(result)
    for line in result :
        # print(*line)
        print(' '.join(map(str, line)))
if __name__ == "__main__":
    main()
