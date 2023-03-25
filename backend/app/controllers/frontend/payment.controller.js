const { institutionsDB } = require("../../models");
const payment = institutionsDB.payment;
const paymentConfig  =  require("../../config/payment.config");
const Op = institutionsDB.Sequelize.Op;
const Sequelize = require("sequelize");

const Razorpay = require('razorpay');
const crypto = require('crypto');
  
// Retrieve all Cities from the database.
exports.orders = async (req, res) => {
  try {
    const instance = new Razorpay({
        key_id: paymentConfig[0].RAZORPAY.RAZORPAY_KEY_ID, 
        key_secret: paymentConfig[0].RAZORPAY.RAZORPAY_SECRET,
    });

    const options = {
        amount: 100, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
} catch (error) {
    console.log(error);
    res.status(500).send(error);

}
};

exports.success = async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    const shasum = crypto.createHmac('sha256', paymentConfig[0].RAZORPAY.RAZORPAY_SECRET);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    // const newPayment = PaymentDetails({ . //const PaymentDetails = mongoose.model('PatmentDetail', PaymentDetailsSchema);
    //   razorpayDetails: {
    //     orderId: razorpayOrderId,
    //     paymentId: razorpayPaymentId,
    //     signature: razorpaySignature,
    //   },
    //   success: true,
    // });

    // await newPayment.save();

    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

