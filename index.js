var katzDeli = []
var index = 0

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  index = index + 1
  return `Welcome, ${name}. You are number ${index} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  let i
  if (katzDeliLine[0]) {
    var str = `The line is currently:`
    for(i = 0; i < katzDeliLine.length; i++) {
      //str = str + ' ' + (i+1) + ". " + katzDeliLine[i]
      str = `${str} ${i+1}. ${katzDeliline[i]}`
      if (i !== katzDeliLine.length-1) {
        str = str + `,`
      }
    }
    return str
  } else {
    return `The line is currently empty.`
  }
}