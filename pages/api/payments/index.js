export default function handler(
    req,
    res,
) {

    const request = req.body;

    // Validate that the request is coming from Snipcart
    // const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.publicToken}`)

    // Return a 404 if the request is not from Snipcart
    // if (!response.ok) {
    //     return res.status(404).send('')
    // }
    let paymentMethodList = [{
        id: 'sleeky_pay',
        name: 'SleekyPay',
        iconUrl: 'https://www.przelewy24.pl/themes/base/assets/img/logo-przelewy-24.svg',
        checkoutUrl: `/#`,
    }]
    console.warn(paymentMethodList)
    return res.status(200).send(paymentMethodList)
}
