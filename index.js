let button = document.getElementById('button')
button.addEventListener('click',addItem)

let grandTotal = 0
let budgetItems= []
function addItem(e) {
    let name = document.getElementById('name')
    let amount = document.getElementById('amount')
    let list = document.getElementById('list')
    li = document.createElement('li')
    li.innerHTML = `<p>${name.value} </p> <p>\$${amount.value} </p> <p><img src='assets/trash_can.svg'></p>`
    list.appendChild(li)
    li.addEventListener('click', removeItem)
    budgetItems.push(Number(amount.value))
    console.log(budgetItems)
    getTotal(budgetItems)
    return null
}

function removeItem(e) {
    value = e.target.parentNode.childNodes[2].innerText
    value = Number(value.replace('$',''))
    removeIndex = budgetItems.indexOf(value)
    console.log(removeIndex)
    budgetItems.splice(removeIndex,1)
    console.log(budgetItems)
    e.target.parentNode.remove()
    getTotal(budgetItems)
}

function getTotal(arr) {
    let budgTot = document.getElementById('budgTot')
    if (arr.length > 0) {
        grandTotal = arr.reduce(function(total,num){
            return total + num
        })
    } else {
        grandTotal = 0
    }
    budgTot.innerText = `Budget Total: ${grandTotal}`
}



