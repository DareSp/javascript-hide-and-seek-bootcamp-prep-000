function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const main = document.querySelector("main")
  const nestedId = main.querySelector("#nested")
  const target = nestedId.querySelector(".target")
  return target
}

function increaseRankBy(n){
  var lis = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  
  for (var i=0; i<lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  var parent = document.querySelector("div#grand-node")
  var firstChild = parent.children[0]
  while(firstChild){
    if (firstChild.children[0]){
      firstChild = firstChild.children[0]
    } else {
      return firstChild
    }
  }
}



