from collections import deque

def josephus(num, target):
    DList = deque([i for i in range(1,num+1)])
    return_list = []
    # print(DList)
    # print(return_list)
    #3번째 원소를 뽑아서 return_list에 어팬드 한다.
    
    for _ in range(num):
        DList.rotate(-(target-1))
        pop_num = DList.popleft()
        return_list.append(pop_num)
    # print(DList)
    return return_list


def main():
    print(josephus(7, 3)) #[3, 6, 2, 7, 5, 1, 4]이 반환되어야 합니다

if __name__ == "__main__":
    main()