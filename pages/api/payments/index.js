export default async function handler(
    req,
    res,
) {

    const request = JSON.parse(req.body);

    // // Validate that the request is coming from Snipcart
    // const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.PublicToken}`)

    // // Return a 404 if the request is not from Snipcart
    // if (!response.ok) {
    //     return res.status(404).send('')
    // }
    // let paymentMethodList = [{
    //     id: 'sleeky_pay',
    //     name: 'SleekyPay',
    //     checkoutUrl: `/index.html`,
    // }]
    console.warn(request)
    res.status(200).send(request)
}
