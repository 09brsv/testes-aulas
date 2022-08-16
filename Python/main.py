print('Questão 1:\n')
n = int(input('Digite aqui seu número: '))
number = 1

while number <= n:
    if number % 2 == 0:
        print(number)
    number += 1


print('\nQuestão 2:\n')

n = int(input('Digite aqui seu número: '))
number = 1
while number <= n:

    if number % 3 == 0 and number % 5 == 0:
        print('fizzbuzz')

    elif number % 3 == 0:
        print('fizz')

    elif number % 5 == 0:
        print('buzz')
    else:
        print(number)
    number += 1


print('\nQuestão 3:\n')

n = int(input('Digite aqui seu número: '))
num = 0
for i in range(0, n):
    i += num
    print(i)
    num = i


print('\nQuestão 4:\n')

s = input('Digite aqui algum palíndromo: ')

if str(s) == ''.join(reversed(s)):
    print('palíndromo')
else:
    print('não foi palíndromo')
