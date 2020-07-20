data = ["apple", "banana", "oranges"]
for i in data:
    print(i)

n = 3
for i in range(n):
    for j in range(i+1):
        print(chr(65+j), end=" ")
    print()

