import Stripe from "stripe";
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

  try {
    const cartItems = req.body?.cartItems;
    const line_items = cartItems.map((item) => {
      const img = item.image[0].asset._ref;
      let newImage = img.replace("image-", "https://cdn.sanity.io/images/vzaba3l2/production/");
      const imageSplited = newImage.split("-");
      const imageExtension = imageSplited[imageSplited.length - 1];
      const imageWithoutExtension = imageSplited.splice(0, imageSplited.length - 1).join("-");
      newImage = `${imageWithoutExtension}.${imageExtension}`;
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [newImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    });
    
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1LyzcECSYepECQMuchKuhN76" },
        { shipping_rate: "shr_1LyzcZCSYepECQMuavTPiGRZ" },
      ],
      line_items,
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    res.status(200).json(session);
    //res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
