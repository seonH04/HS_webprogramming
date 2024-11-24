const cart= [
    {item: "노트북", price: 1200000, quantity: 1},
    {item: "마우스", price: 35000, quantity: 2},
    {item: "키보드", price: 89000, quantity: 1}
];

let totalPrice =0;
for( let i=0; i<cart.length; i++){
    totalPrice+=cart.quantity[i];
};
print("Total Price:", totalPrice);


const itemTotals = card.map(
    console.log('제품별 금액:{$itemtotal$}')
);