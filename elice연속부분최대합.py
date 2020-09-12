# n개의 숫자가 주어질 때, 연속 부분을 선택하여 그 합을 최대화 하는 프로그램을 작성하시오.

# 1 2 -4 5 3 -2 9 -10
# 15

# import sys
import math

def getSubsum(data) :
    result = -math.inf
    temp = 0
    
    for start in range(0, len(data)):
        for end in range(start, len(data)):
            temp = 0
            for i in range(start, end+1):
                temp += data[i]
            result = max(result, temp)
            
    return result

def main():
    data = [int(x) for x in input().split()]
    print(getSubsum(data))

if __name__ == "__main__":
    main()
