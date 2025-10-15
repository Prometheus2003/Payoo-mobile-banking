const validPin = 1234

//function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
//addmoneyfeature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    console.log("add money btn clicked")
    const bank = getInputValue("bank");
    const accountNumber = getInputValueNumber("account-number")
    const amount = getInputValueNumber("add-amount")
    const pin = getInputValueNumber("add-pin")
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (accountNumber.length < 11) {
        alert("please provide valid account number");
        return;
    }
    if (pin != validPin) {
        alert("Please provide valid pin number")
        return;
    }
    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})
//cashout money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount")
    const agentNumber = getInputValueNumber("Agent-number")
    const pin = getInputValueNumber("Cash-out-pin")
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (agentNumber.length < 11) {
        alert("please provide valid account number")
        return;
    }
    if (pin != validPin) {
        alert("Please provide valid pin number")
        return;
    }
    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance

})


//toggling feature
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"

})
document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})