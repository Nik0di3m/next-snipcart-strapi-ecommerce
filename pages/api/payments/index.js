export default async function handler(
    req,
    res
) {


    let paymentMethodList = [{
        id: '<payment_method_unique_id>',
        name: '<payment_method_name>',
        iconUrl: '<payment_method_icon_url_optional>',
        checkoutUrl: '<payment_method_checkout_url>',
    }]
    res.status(200).send(JSON.stringify(paymentMethodList))
}
