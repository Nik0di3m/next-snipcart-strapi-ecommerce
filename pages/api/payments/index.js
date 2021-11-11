export default async function handler(
    req,
    res
) {

    const request = JSON.parse(req.body)

    // Validate that the request is coming from Snipcart
    const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.PublicToken}`)

    // Return a 404 if the request is not from Snipcart
    if (!response.ok) {
        res.status(404).json({})
        return
    }

    let paymentMethodList = [{
        id: '<payment_method_unique_id>',
        name: '<payment_method_name>',
        iconUrl: '<payment_method_icon_url_optional>',
        checkoutUrl: '<payment_method_checkout_url>',
    }]
    res.status(200).json(paymentMethodList)
}
