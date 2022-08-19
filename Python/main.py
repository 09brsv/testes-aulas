print('Questão 1:\n')
n = int(input('Digite aqui seu número: '))

for number in range(1, n + 1):
    if number % 2 == 0:
        print(number)
    


print('\nQuestão 2:\n')

n = int(input('Digite aqui seu número: '))

for number in range(1, n + 1):

    if number % 3 == 0 and number % 5 == 0:
        print('fizzbuzz')

    elif number % 3 == 0:
        print('fizz')

    elif number % 5 == 0:
        print('buzz')
    else:
        print(number)
    


print('\nQuestão 3:\n')

n = int(input('Digite aqui seu número: '))
anterior = 0
proximo = 1

for x in range(0, n):
    print(anterior)
    proximo += anterior
    anterior = proximo - anterior


print('\nQuestão 4:\n')

s = str(input('Digite aqui algum palíndromo: '))

if s == ''.join(reversed(s)):
    print('palíndromo')
else:
    print('não foi palíndromo')



