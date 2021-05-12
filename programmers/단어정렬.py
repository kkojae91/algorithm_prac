# 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
# 1. 길이가 짧은 것 부터
# 2. 길이가 같으면 사전 순으로

# 첫째 줄에 단어의 개수 N이 주어진다. (1 <= N <= 20,000) 
# 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 
# 주어지는 문자열의 길이는 50을 넘지 않는다.

# 조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우는 한 번씩만 출력한다.

# 문자열 정렬
def word_sort(word_list):
    word_list.sort()
    word_list.sort(key=lambda x: len(x))
    
    for word in word_list:
        print(word)

def init():
    N = int(input())
    word_list=[]

    for i in range(N):
        word = input()
        if word in word_list:
            pass
        else:
            word_list.append(word)

    
    word_sort(word_list)

init()