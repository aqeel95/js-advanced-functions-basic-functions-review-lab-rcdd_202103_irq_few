// Your code here
function saturdayFun(activity="roller-skate!"){
  return `This Saturday, I want to ${activity}`
}
saturdayFun("bathe my dog!");

function mondayWork(activity2="go to the office."){
  return `This Monday, I will ${activity2}`
}
mondayWork("work from home.");


function wrapAdjective(outer="*"){
  
  return function(inner="special"){
    return`You are ${outer} ${inner}`}
}

wrapAdjective("ww")("vbd");

//const encouragingPromptFunction = wrapAdjective("!!!")
 


//"bathe my dog" "work from home"