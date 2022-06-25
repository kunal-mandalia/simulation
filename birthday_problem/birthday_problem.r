get_random_birthday <- function() {
  temp_b <- floor(runif(1, min=1, max=366))
  return (temp_b)
}

getmode <- function(v) {
   uniqv <- unique(v)
   uniqv[which.max(tabulate(match(v, uniqv)))]
}

simulate <- function() {
  birthdays <- numeric()

  for (person_count in 1:365) {
    birthday <- get_random_birthday()
    if (is.element(birthday, birthdays)) {
      return (person_count)
    }
    birthdays <- c(birthday, birthdays)
  }

  stop('Expected overlapping birthdays')
}

main <- function() {
  sim_count <- 10000
  results <- numeric(sim_count)

  for (sim in 1:sim_count) {
    sim_result <- simulate()
    results[sim] <- sim_result
  }

  stats <- c(mean(results), median(results), getmode(results), sim_count)
  names(stats) <- c('mean', 'median', 'mode', 'trials')
  return (stats)
}

main()
