function monthlyCost(premium, grossPay){
  var remaining = (grossPay*2)-premium
  console.log(`Your gross pay per pay period is $${grossPay}.`)
  console.log(`Your premium is $${premium}.`)
  console.log(`Remainign after premium is paid: ${remaining}`)
}

monthlyCost(250,1280)