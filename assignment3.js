//Problem 1 = kilometerToMeter

function kilometerToMeter(kilometer) {
    if (typeof(kilometer) == 'number') {
        const meter = 1000;
        let result = kilometer * meter;
        return result;
    } else {
        return "Your Intput Error";
    }
}

const resultKilometerToMeter = kilometerToMeter(39);
console.log(resultKilometerToMeter);


//Problem 2 = budgetCalculator 

function budgetCalculator(watch, mobile, laptop) {
    let watchPrice = 50;
    let mobilePrice = 100;
    let laptopPrice = 500;
    watchPrice = watch * watchPrice;
    mobilePrice = mobile * mobilePrice;
    laptopPrice = laptop * laptopPrice;
    const totalProductPrice = watchPrice + mobilePrice + laptopPrice;
    return totalProductPrice;
}

const resultBudgetCalculator = budgetCalculator(4, 6, 2);
console.log(resultBudgetCalculator);


//Problem 3 = hotelCost

function hotelCost(day) {
    let hotelPrice = 0;
    if (day <= 10) {
        hotelPrice = day * 100;
    } else if (day <= 20) {
        const firstPackage = 10 * 100;
        const remaining = day - 10;
        const secondPackage = remaining * 80;
        hotelPrice = firstPackage + secondPackage;
    } else {
        const firstPackage = 10 * 100;
        const secondPackage = 10 * 80;
        const remaining = day - 20;
        const thiredPackage = remaining * 50;
        hotelPrice = firstPackage + secondPackage + thiredPackage;
    }
    return hotelPrice;
}
var resultHotelCost = hotelCost(30);

console.log(resultHotelCost);

//Problem 4 = megaFriend

function megaFriend(friendName) {
    if (friendName != '') {
        let maxName = friendName[0];
        for (let i = 0; i < friendName.length; i++) {
            const element = friendName[i];
            if (element.length > maxName.length) {
                maxName = element;
            }
        }
        return maxName;
    } else {
        return "Error";
    }
}

var friendName = ["sadik", "sabbir", "samsuddin", "sabir", "ebrahim"];
var resultMegaFriend = megaFriend(friendName);
console.log(resultMegaFriend);