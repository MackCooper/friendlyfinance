const rawData = [
    {
        date: new Date(),
        person: 'Oliver',
        description: 'Burger from Caps',
        cost: 12,
        currency: 'CAD' 
    }, {
        date: new Date(),
        person: 'Matt',
        description: 'T-Shirt bought in States',
        cost: 30,
        currency: 'USD'
    }, {
        date: new Date(),
        person: 'Victor',
        description: 'Icecream Sandwich',
        cost: 3,
        currency: 'CAD'
    }
]


function getData() {
    return rawData;
}

function showData() {
    const data = getData();
    let table = document.getElementById('table');
    for (let i=0; i < data.length; i++ ) {
        console.log(data[i]);
        table.insertAdjacentHTML('beforeend',`<div class="row">
        <div class="col-4">
            <h4 id="month"> March </h4>
            <h2 id="day"> 10 </h2>
        </div>
        <div class="col-4">
            <h2 id="other_user"> ${data[i].person} </h2>
            <h5 id="transaction_details"> Burger from Caps </h5>
        </div>
        <div class="col-4">
            <h1 id="cost"> +$12 CAD </h1>
        </div>
        </div>`);
    }
}

showData()