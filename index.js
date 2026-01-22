let cost_price;
let selling_price;
let beans_profit;
let maize_profit;
let millet_profit;
let total_profit;
let quantity_sold;
let total_cost_price;
let total_selling_price;

//create some empty lists here
let beans_list = [];
let maize_list = [];
let millet_list = [];

//create a function to compute the total profit
function total_profit_calc(){
    total_profit=millet_profit+beans_profit+maize_profit
    document.getElementById("input_one").value = total_profit
}

//create a function to compute the the profit from this
document.getElementById("calcbtn").onclick = function(){
    cost_price = document.getElementById("beanscost").value
    selling_price = document.getElementById("beansselling").value
    quantity_sold = document.getElementById("beans_quantity_sold").value

    if (isNaN(cost_price) || isNaN(selling_price) || isNaN(quantity_sold)) {
                alert("Please enter valid numbers");
                document.getElementById("beanscost").value=""
                document.getElementById("beansselling").value=""
                document.getElementById("beans_quantity_sold").value=""
                return;
            }

    total_cost_price=cost_price*quantity_sold
    //show the result
    document.getElementById("beans_total_cost_price").value = total_cost_price

    total_selling_price=selling_price*quantity_sold
    //show the result
    document.getElementById("beans_total_selling_price").value = total_selling_price

    beans_profit = total_selling_price-total_cost_price
    document.getElementById("beansresults").value = beans_profit + " USD as the profit"
    total_profit_calc()

    //compile the results to a csv
    const record = { cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, beans_profit };
    beans_list.push(record);
    console.log("Record added:", record);

    // Optional: Save to CSV using Blob
    let csvContent = "cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, beans_profit\n";
    beans_list.forEach(r => {
        csvContent += `${r.cost_price},${r.selling_price},${r.quantity_sold},${r.total_cost_price},${r.total_selling_price},${r.beans_profit}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "beans_stock_data.csv";
    link.click();
    
}


//create a function to compute the profit
document.getElementById("calcbtn_maize").onclick = function(){
    cost_price = document.getElementById("maizecost").value
    selling_price = document.getElementById("maizeselling").value
    quantity_sold = document.getElementById("maize_quantity_sold").value

    //some error handling
    if (isNaN(cost_price) || isNaN(selling_price) || isNaN(quantity_sold)) {
                alert("Please enter valid numbers");
                document.getElementById("maizecost").value=""
                document.getElementById("maizeselling").value=""
                document.getElementById("maize_quantity_sold").value=""
                return;
            }

    total_cost_price=cost_price*quantity_sold
    //show the result
    document.getElementById("maize_total_cost_price").value = total_cost_price

    total_selling_price=selling_price*quantity_sold
    //show the result
    document.getElementById("maize_total_selling_price").value = total_selling_price

    maize_profit = total_selling_price-total_cost_price

    document.getElementById("results_maize").value = maize_profit + " USD as the profit"
    total_profit_calc()

    //compile the results to a csv
    const record = { cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, maize_profit };
    maize_list.push(record);
    console.log("Record added:", record);

    // Optional: Save to CSV using Blob
    let csvContent = "cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, maize_profit\n";
    maize_list.forEach(r => {
        csvContent += `${r.cost_price},${r.selling_price},${r.quantity_sold},${r.total_cost_price},${r.total_selling_price},${r.maize_profit}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "maize_stock_data.csv";
    link.click();
}

//computer the profit from maize
//create a function to compute the profit
document.getElementById("calcbtn_millet").onclick = function(){
    cost_price = document.getElementById("milletcost").value
    selling_price = document.getElementById("milletselling").value
    quantity_sold = document.getElementById("millet_quantity_sold").value

    if (isNaN(cost_price) || isNaN(selling_price) || isNaN(quantity_sold)) {
                alert("Please enter valid numbers");
                document.getElementById("milletcost").value=""
                document.getElementById("milletselling").value=""
                document.getElementById("millet_quantity_sold").value=""
                return;
            }

    total_cost_price=cost_price*quantity_sold
    //show the result
    document.getElementById("total_cost_price").value = total_cost_price

    total_selling_price=selling_price*quantity_sold
    //show the result
    document.getElementById("total_selling_price").value = total_selling_price

    millet_profit = total_selling_price-total_cost_price

    document.getElementById("results_millet").value = millet_profit + " USD as the profit"
    total_profit_calc()

    //compile the results to a csv
    const record = { cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, millet_profit };
    millet_list.push(record);
    console.log("Record added:", record);

    // Optional: Save to CSV using Blob
    let csvContent = "cost_price, selling_price, quantity_sold, total_cost_price, total_selling_price, millet_profit\n";
    millet_list.forEach(r => {
        csvContent += `${r.cost_price},${r.selling_price},${r.quantity_sold},${r.total_cost_price},${r.total_selling_price},${r.millet_profit}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "millet_stock_data.csv";
    link.click();
}


