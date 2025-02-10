import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { TextField, Button, Grid, Typography, Container, MenuItem, Checkbox, FormControlLabel, Card, CardContent } from '@mui/material';
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../Config.js/Config';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScannerPopup from "../Popups/ScannerPopup";

export default function Donation() {
  const [formData, setFormData] = useState({
    amount: "",
    fullName: '',
    dob: '',
    phone: '',
    address: '',
    panNo: '',
    pinCode: '',
    city: '',
    country: '',
    email: '',
    agreeToTerms: false,
  });

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const [totalDonations, setTotalDonation] = useState('');
  const [totalDoner, setTotalDoner] = useState('');

  const [errors, setErrors] = useState({});
  const countries = ["India", "USA", "Canada", "UK", "Australia"];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "Amount" && (value === "" || !isNaN(value))) {

      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }
  }
  const validate = () => {
    let tempErrors = {};
    tempErrors.amount = formData.amount ? "" : "Amount is required";
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.dob = formData ? "" : "Date of Birth is required";
    tempErrors.phone =
      formData.phone && /^[0-9]{10}$/.test(formData.phone)
        ? ""
        : "Valid 10-digit Phone Number is required.";
    tempErrors.email = formData.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Valid Email is required.";
    tempErrors.panNo = formData.panNo ? "" : "PAN Number is required";
    tempErrors.address = formData.address ? "" : "Address is required.";
    tempErrors.pinCode = formData.pinCode ? "" : "PIN Code is required.";
    tempErrors.city = formData.city ? "" : "City is required.";
    tempErrors.country = formData.country ? "" : "Country is required.";
    tempErrors.agreeToTerms = formData.agreeToTerms ? "" : "You must agree to the terms and conditions.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((errors) => errors === "");

  }
  const handleSubmit = async (e) => {
    // console.log("yes on progerss",formData);

    e.preventDefault();
    if (validate()) {
      try {
        //   console.log("Form submitted: ", formData);  /api/donations/create-order
        //   // Redirect to the payment page (or show payment step)
        //   window.location.href = "/payment"; // Replace with your routing logic
        console.log("Form data ", formData);
        const { data } = await api.post('/api/donations/create-order', formData);
        console.log("create api reasoncse", data);

        if (data.success) {
          console.log("i am in scnaner");

          setShowPaymentPopup(true);

          setFormData({
            amount: "",
            fullName: '',
            dob: '',
            phone: '',
            address: '',
            panNo: '',
            pinCode: '',
            city: '',
            country: '',
            email: '',
            agreeToTerms: false,
          });

          return

        } else {
          alert("Failed to create payment . please try again");
        }

        if (data.success) {
          console.log("we get success data IN CREATE API");


          const options = {
            // key:process.env.REACT_APP_RAZORPAY_KEY_ID,
            key: "rzp_test_xzqzn5DCntUGWd",
            amount: data.amount,
            currency: data.currency,
            name: "NGO Donation",
            description: "Support our causel",
            order_id: data.orderId,
            handler: async (response) => {
              try {
                console.log("in verify section");
                console.log('++++++++++++++++++++++++++');
                console.log(response);
                console.log("====================");
                console.log(data.orderId)
                console.log("payment id", response.razorpay_payment_id)
                console.log("signature", response.razorpay_signature)
                console.log("====================");

                console.log('++++++++++++++++++++++++++');
                const paymentVerification = {
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,


                };
                const verifyResponse = await api.post('/api/donations/verify-payment', paymentVerification);
                if (verifyResponse.data.success) {
                  toast.success("Payment successful! Thank you for your support.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  setFormData({
                    amount: "",
                    fullName: '',
                    dob: '',
                    phone: '',
                    address: '',
                    panNo: '',
                    pinCode: '',
                    city: '',
                    country: '',
                    email: '',
                    agreeToTerms: false,
                  })
                  getTotalDonation();

                }
                else {
                  // alert("Payment verification failed. Please contact support.");
                  toast.error("Payment verification failed. Please contact support.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
              } catch (error) {
                console.error("Error verifying payment:", error);
                toast.error("Error verifying payment:", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            },
            prefill: {
              name: formData.fullName,
              email: formData.email,
              contact: formData.phone,
            },
            notes: {
              address: formData.address,
            },
            theme: {
              color: "#3399cc"
            }

          };
          console.log("just after create option")
          const razorpay = new window.Razorpay(options);
          razorpay.open();

          razorpay.on("Payment.failed", function (response) {
            alert("Payment failed. Please try again.")
          });

        } else {
          alert("Failed to create payment . please try again");

        }


      } catch (error) {
        console.error("Error processing donation:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  }
  const getTotalDonation = async () => {
    try {
      const { data } = await api.get('/api/donations/total-donation-totalDoner')
      if (data.status) {

        setTotalDonation(data.data[0].totalDonations || 0)
        setTotalDoner(data.data[0].totalDoner || 0);
      } else {
        console.error("Failed to fetch data:", data.message);
      }

    } catch (error) {
      console.error("Error while fetching total donation and donor count:", error);
    }
  }
  const handleClosePaymentPopup = () => setShowPaymentPopup(false);
  useEffect(() => {
    getTotalDonation();
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200,    // Trigger animation when 200px from the viewport
      easing: 'ease-in-out', // Smooth animation
      once: true, // Animation happens only once
    });
  }, []);

  const formRef = useRef(null);
  return (
    <>
      <Navbar />
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '30vh',
        position: 'relative',
      }} data-aos="fade-down"
      >
        {/* Button Positioned Absolutely */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }} data-aos="fade-down"
        >
          <Button
            variant="outlined"
            onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(90deg, #FFD700, #FFA500)', // Gold to Orange gradient
              border: '2px solid #FFA500', // Orange border
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '8px',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              fontSize: '16px',
            }}
          >
            Donate Us
          </Button>
          <ToastContainer />
        </div>

        {/* Grid Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card style={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Total Donations</Typography>
              <Typography variant="h4" color="primary" data-aos="fade-up"><CountUp end={totalDonations} duration={5} />+</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>Total Donors</Typography>
              <Typography variant="h4" color="primary" data-aos="fade-up"><CountUp end={totalDoner} duration={5} />+</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>


      {/* Banner Section */}

      <div style={{ backgroundColor: '#f4f4f4', padding: '2rem 0', textAlign: 'center' }} data-aos="fade-up" >
        <Container>
          <Grid container style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>

            <Typography variant="h4" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              Every act of kindness brings a smile to someone's face. Together, we can make a difference!
            </Typography>

          </Grid>
          <Typography variant="body1" style={{ marginBottom: '1rem' }}>
            Your donation can help brighten lives and create lasting change. Let’s make this happen, one smile at a time!
          </Typography>
          <img
            src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D" // Replace with your desired image URL
            alt="Banner"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
        </Container>
      </div>

      {/* Main Content Section */}
      <Container maxWidth="lg" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <Grid container spacing={4} data-aos="fade-up" >
          {/* Left Section (Content) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Your Generosity Can Change a Life
            </Typography>
            <Typography variant="body1" gutterBottom>
              At सहकार्य प्रतिष्ठान, we believe that even the smallest act of kindness can create a ripple effect of change. Your donation is more than just a monetary gift—it’s a lifeline for those who need it most.

              With your support, we can:<br />
              ✅ Provide food and shelter to the underprivileged<br />
              ✅ Support education for children in need<br />
              ✅ Offer medical assistance to those who cannot afford it<br />
              ✅ Empower women and marginalized communities<br />
              ✅ Create sustainable opportunities for a better future<br />
            </Typography>
            <br />
            <Typography variant="h5" gutterBottom>
              Why Donate?
            </Typography>
            <Typography>
              Every rupee you contribute helps bring hope, dignity, and opportunity to someone’s life. Whether it’s feeding a hungry child, helping a student get an education, or providing urgent medical aid, your donation has a direct and lasting impact.
            </Typography><br/>

            <Typography variant="h5" gutterBottom>
              How You Can Help?
            </Typography>
            <Typography>
              💖 One-Time Donation: A small contribution can make a big difference.<br />
              📅 Monthly Giving: Become a recurring donor and support long-term change.<br />
              🎁 In-Kind Donations: Donate food, clothes, books, or medical supplies.<br />
              🙌 Volunteer With Us: Your time and skills are just as valuable as your donation.  <br />          </Typography><br/>

            <Typography variant="h5" gutterBottom>
              Your Contribution Matters
            </Typography>
            <Typography>
              No amount is too small—every donation brings hope to someone in need. Join us in making a difference today!<br />

              🔹 Donate Now and be the reason someone smiles.<br />
              🔹 Together, we can create a better tomorrow!<br />

              💙 Thank you for your generosity! 💙<br /></Typography>

            <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>
              सहकार्य प्रतिष्ठान is a registered non-profit organization eligible for tax benefits under section 80G.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              PAN: ACCT7t973G | 80G Number: ACCT77873GF2025
            </Typography>
          </Grid>

          {/* Right Section (Form) */}

          <Grid item xs={12} md={6} ref={formRef} data-aos="fade-left" >
            <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f4f4f4' }} >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Amount"
                      name="amount"
                      value={formData.amount}
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      onChange={handleChange}
                      fullWidth
                      inputProps={{ maxLength: 10 }}
                      error={!!errors.amount}
                      helperText={errors.amount}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      name="fullName"
                      onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '')}
                      value={formData.fullName}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Date of Birth"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dob}
                      helperText={errors.dob}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      inputProps={{ maxLength: 10 }}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      fullWidth
                      inputProps={{ maxLength: 100 }}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="PAN Number"
                      name="panNo"
                      value={formData.panNo}
                      onChange={(e) => handleChange({
                        target: {
                          name: e.target.name,
                          value: e.target.value.toUpperCase(),
                        },
                      })}
                      fullWidth
                      inputProps={{ maxLength: 10 }}
                      error={!!errors.panNo}
                      helperText={errors.panNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="PIN Code"
                      name="pinCode"
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      value={formData.pinCode}
                      onChange={handleChange}
                      fullWidth
                      inputProps={{ maxLength: 6 }}
                      error={!!errors.pinCode}
                      helperText={errors.pinCode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      fullWidth
                      inputProps={{ maxLength: 20 }}
                      error={!!errors.city}
                      helperText={errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.country}
                      helperText={errors.country}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="You agree that Sahakarya Pratishthan can reach out to you through Whatsapp/email/SMS/Phone to provide information of your donation, campaigns, 80G receipt etc."
                    />
                    {errors.agreeToTerms && (
                      <Typography variant="caption" color="error">
                        {errors.agreeToTerms}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Proceed to Payment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>

        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ marginTop: '4rem', marginBottom: '4rem' }} data-aos="fade-zoom-in" >
        <Typography variant="h4" align="center" gutterBottom>
          Last Year's Impact with <b>सहकार्य प्रतिष्ठान</b>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-left">
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enrollment
                </Typography>
                <Typography variant="body2">
                  5000+ need directly provided help through 20+ centres our state
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-left">
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Girl Education
                </Typography>
                <Typography variant="body2">
                  55% of total beneficiaries enrolled were girl children, to ensure a fair start for all
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-right">
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Teacher Guide
                </Typography>
                <Typography variant="body2">
                  100% Teachers received training in academic methodologies and blended learning mode
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-right">
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Academic Performance
                </Typography>
                <Typography variant="body2">
                  500+ Students benefitted from nutrition support interventions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Disbursement of Funds Section */}
      <Container maxWidth="lg" style={{ marginBottom: '4rem' }} data-aos="flip-left" >
        <Typography variant="h4" align="center" gutterBottom>
          Disbursement of Funds (2020-2021)
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  85% Project Expenses
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  11% Administrative Cost (Net)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  3.66% Accumulation for Next Year
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  0.34% Depreciation
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {showPaymentPopup && ( // Correct conditional rendering
        <ScannerPopup
          open={showPaymentPopup}
          onClose={handleClosePaymentPopup}
        />
      )}

      <Footer />
    </>
  );
}