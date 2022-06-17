// returns # of people until 2 people share birthday
function simulate() {
  const birthdays = []

  for (let i = 1; i <= 365; i++) {
    const birthday = Math.floor(Math.random() * 365 + 1)
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
  console.log({ results, mean })
}
main()
