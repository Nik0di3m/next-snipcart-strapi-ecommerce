export default async function handler(event, context, callback) {   
    // Get request's body
    const request = JSON.parse(event.body)

    // Validate that the request is coming from Snipcart
    const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.PublicToken}`)

    // Return a 404 if the request is not from Snipcart
    if (!response.ok) return {
        statusCode: 404,
        body: "nie ma"
    }

    // Create a payment method list
    let paymentMethodList = [{
        id: '1',
        name: 'Przelewy 24',
        checkoutUrl: '/',
    }]

    // Return successful status code and available payment methods
    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethodList)
    };
}