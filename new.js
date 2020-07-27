

function moneyinyear(){

    // var known_value_year = Number(prompt('enter value'));
    // var known_money_amount = Number(prompt('enter value'));
    // var dec_perc = Number(prompt('enter value'));
    // var need_value_year = Number(prompt('enter value'));

    var known_value_year = document.getElementById('known-value-year').value;
    var known_money_amount = document.getElementById('known-money-amount').value;
    var dec_perc = document.getElementById('dec-perc').value;
    var need_value_year = document.getElementById('need-value-year').value;
    var yearposneg = known_value_year - need_value_year
    if (yearposneg > 0){
        for (var i = 0; i < yearposneg; i++){
            known_money_amount = (parseFloat(known_money_amount)*100)/(100-parseFloat(dec_perc))
        }
    }
    else{
        for (var i = 0; i < -1*yearposneg; i++){
            known_money_amount = parseFloat(known_money_amount)*(100-parseFloat(dec_perc))/100
        }
    }
    
            
     
    var very_new_money = known_money_amount

    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode(very_new_money);
    h1.setAttribute('id', 'moneyinyear');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('moneyinyear').remove();
}






// known_value_year = 2011
// dec_pec = 10
// known_rupee = 8538
// need_value_year = 2004
// # known_value_year = int(input('Enter the year of which value rupee is known : '))
// # dec_pec = int(input('Enter the percentage of decrement per year : '))
// # known_rupee = int(input('Value of money in '+ str(known_value_year) + str(' : ')))
// # need_value_year = int(input('Year in which money value need to be known : '))
// new_rupee = known_rupee
// new_2_rupee = known_rupee
// for i in range((known_value_year-need_value_year)):
//     new_rupee = (new_rupee*100)/(100-dec_pec)
//     new_2_rupee = new_2_rupee + (dec_pec*new_2_rupee)/100
//     # print(new_rupee)
// print()
// print('The value of money in ', new_2_rupee)
// print('The value of money in ', need_value_year,' was ' ,new_rupee)
