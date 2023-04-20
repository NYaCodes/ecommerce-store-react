// sk_test_51MxYMXJEtX93ZPo3IRw1QQObNGGYEQVR59Ord7VDKMHpu9JOOgJlAkC9Mpk0Bnpq12J0D1AylGX2iNSdzN95hWJZ00b20vla8m
// camera: price_1MxYZYJEtX93ZPo3oJJspxMr
// glasses: price_1MxYXmJEtX93ZPo3i01xkeGS
// coffee: price_1MxYVwJEtX93ZPo3mqZnXduj

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MxYMXJEtX93ZPo3IRw1QQObNGGYEQVR59Ord7VDKMHpu9JOOgJlAkC9Mpk0Bnpq12J0D1AylGX2iNSdzN95hWJZ00b20vla8m');


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
