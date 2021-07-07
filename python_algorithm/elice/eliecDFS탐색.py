#====이 문제를 풀기 위해 필요한 클래스와 함수들입니다. 따로 수정 할 필요는 없습니다.
# 트리 구현 
class Node():
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def listToCompleteBinaryTree(lst):
    def helper(index):
        if index >= len(lst):
            return None
        node = Node(lst[index])
        node.left = helper(index * 2 + 1)
        node.right = helper(index * 2 + 2)
        return node
    return helper(0)

def printTree(node):
    q = [Node(-1), node] # q = [-1, 1]

    line = []
    while q:
        node = q.pop() # node = 1 q =[-1]
        if not node:
            continue
        elif node.val == -1: 
            if len(line) > 0:
                print(" ".join(line)) # line = [1] 1을 문자열로 만들어서 출력
                line = [] # line 리스트 초기화
                q.insert(0,Node(-1)) # q = [-1,3,2]
        else:
            q.insert(0,node.left) # q = [2,-1]
            q.insert(0,node.right) # q = [3,2,-1]
            line.append(str(node.val)) # line = [1]
#=================================================================================

# 경로 합이 targetSum과 같은게 있다면 True 반환, 없다면 False 반환
def path_sum(node, targetSum):
    def dfsHelper(node, curSum):
        # 여기에 깊이 우선 탐색을 구현 해 봅시다.
        if node is None: # 만약 node가 리프노드 이면.
            if curSum == targetSum: # 첫 왼쪽 라인 탐색시 curSum 7 targetSum 8 return False
                                    # 첫 왼쪽라인의 node2 의 오른쪽 node 탐색시 curSum 8 targetSum =8 return True
                return True
            else:
                return False
        else:
            curSum += node.val # curSum = 1 3 7 8
            is_left = dfsHelper(node.left, curSum) # 첫 깊이 탐색 왼쪽 먼저. node.left = 2, curSum = 1
                                                   # 두번째 깊이 탐색 node.left = 4, curSum = 3
                                                   # 세번째 깊이 탐색 node.left = None, curSum =7   
            is_right = dfsHelper(node.right, curSum)# 네번째 깊이 탐색 node 2의 오른쪽 탐색. node.right = 5 curSum = 3
                                                    # 다섯번째 깊이 탐색 node 2의 오른쪽 탐색. node.right = None curSum = 8
            
        return is_left or is_right
    dfsHelper(node, 0) # path_sum 함수에서 여기가 먼저 실행 코드 보면 알자나.
    
    return dfsHelper(node, 0)
    
def main():
    node = listToCompleteBinaryTree([1,2,3,4,5,6,7])
    printTree(node)
    print(path_sum(node, 8)) # return True
    print(path_sum(node, 15)) # return False

if __name__ == "__main__":
    main()
    