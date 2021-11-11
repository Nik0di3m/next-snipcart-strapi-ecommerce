export default async function handler(
    req,
    res,
) {

    const request = req.body;

    // // Validate that the request is coming from Snipcart
    // const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.publicToken}`)

    // // Return a 404 if the request is not from Snipcart
    // if (!response.ok) {
    //     return res.status(404).send('')
    // }
    let paymentMethodList = [{
            "id": "snipcart_custom_gatway_1",
            "name": "Custom gateway 1",
            "checkoutUrl": "https://snipcart.com/checkout_gateway_1",
    }]
    console.warn(JSON.stringify(paymentMethodList))
     res.status(200).json(JSON.stringify(paymentMethodList))
}
