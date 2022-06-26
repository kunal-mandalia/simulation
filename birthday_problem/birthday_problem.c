#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include <math.h>

int random_range(int min, int max) {
  return ( rand() % ( max - min ) ) + min;
}

int get_random_birthday() {
  return random_range(1, 366);
}

int has_element(int a[], int sz, int x) {
  for (int i = 0; i < sz; i++) {
    if (a[i] == x) {
      return 1;
    }
  }
  return 0;
}

int simulate() {
  int birthdays[365] = {0};

  for (int i = 1; i <= 365; i++) {
    int birthday = get_random_birthday();
    if (has_element(birthdays, 365, birthday)) {
      return i;
    }
    birthdays[i-1] = birthday;
  }
  printf("Error: expected overlapping birthdays");
  return -1;
}

int main() {
  srand(time(NULL));
  
  int sim_count = 1000000;
  int results[sim_count];

  int sum = 0;
  float mean = 0.0;

  for (int i = 0; i < sim_count; i++) {
    results[i] = simulate();
    sum = sum + results[i];
  }


  mean = sum / sim_count;

  printf("mean: %f, N=%d\n", mean, sim_count);
  return 0;
}
