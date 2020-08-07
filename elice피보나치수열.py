class Fib():
    def __init__(self):
        self.memo = {}

    def fibonacci(self, num): # 0, 1, 1, 2, 3, 5, ...
        if num == 0:
            return 0
            
        if num == 1:
            return 1
        
        if num in self.memo:
            return self.memo[num]
            
        self.memo[num] = self.fibonacci(num-1) + self.fibonacci(num-2)
        
        return self.memo[num]
        
def main():
    f = Fib()
    print(f.fibonacci(10)) # should return 55

if __name__ == "__main__":
    main()

# 피보나치수열
# n = int(input())
# fibo = []
# for i in range(n):
#     if i < 2:
#         fibo.append(1)
#     else:
#         fibo.append(fibo[i-2]+fibo[i-1]) 
# # 리스트 반환
# print(fibo)
# # 제일 끝 수 반환.
# print(fibo[-1])