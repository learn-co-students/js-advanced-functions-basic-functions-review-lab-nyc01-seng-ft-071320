function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(string = "*"){
  return function(adj = "special"){
    return `You are ${string}${adj}${string}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
  add: function(){return 1 + 3}, 
  subtract: function(){return 1 - 3}, 
  multiply: function(){return 1 * 3}, 
  divide: function(){return 10 / 5}
}

function actionApplyer(int, array){
  let a = int
    for (const f of array){
      a = f(a)
    }
  return a

}