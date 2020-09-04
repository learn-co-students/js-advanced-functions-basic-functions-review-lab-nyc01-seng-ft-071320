function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(adj='special') {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add(a, b) {
    return a + b
  },
  subtract(a, b) {
    return a - b
  },
  multiply(a, b) {
    return a * b
  },
  divide(a, b) {
    return a / b
  }
}

function actionApplyer(int, functions) {
  if (functions.length === 0) { return int }
  let a = int
  functions.forEach(func => a = func(a))
  return a
}
