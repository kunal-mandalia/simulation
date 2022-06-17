from logging import exception
from random import randrange
import statistics

def simulate():
  birthdays = []

  for i in range(1,366):
    birthday = randrange(1, 365, 1)
    if birthday in birthdays:
      return i
    
    birthdays.append(i)

  raise exception('Expectted overlapping birthdays')

def main():
  N = 1_000
  results = list(map(lambda x: simulate(), range(1, N)))
  mean = statistics.mean(results)
  median = statistics.median(results)
  mode =  statistics.mode(results)

  print(f'mean: {mean}, median: {median}, mode: {mode}, N={N}')
main()
