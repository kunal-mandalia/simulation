// returns # of people until 2 people share birthday

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function getRandomBirthday() {
  return getRandomInt(1, 366)
}

function simulate() {
  const birthdays = []

  for (let i = 1; i <= 365; i++) {
    const birthday = getRandomBirthday()
    if (birthdays.includes(birthday)) {
      return i
    }
    birthdays.push(birthday)
  }

  throw Error('Expected overlapping birthdays')
}

function main() {
  const simCount = 1_000_000
  const results = new Array(simCount)
    .fill(0)
    .map(simulate)
    .sort((a, b) => a - b)

  const mean = results.reduce((a, b) => a + b, 0) / results.length
  console.log(`mean: ${mean}, N=${simCount}`)
}
main()
