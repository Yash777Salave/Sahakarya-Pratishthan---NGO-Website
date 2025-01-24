
// import Navbar from "../Navbar";
// import shivjayanti from "../../Assets/shivjayanti.jpg";
// import shivjayanti21 from "../../Assets/shivjayanti21.jpg";
// import shivjayanti24 from "../../Assets/shivjayanti24.jpg";
// import Work from "../Work";
// import Educationhistory from "./Educationhistory";
// import educationfirst from "../../Assets/Education/SliderImage/eudcationfirst.jpg"
// import { useState,useEffect } from "react";
// const Education = ()=>
// {

//     const images = [
//       educationfirst
//       ];

//       const [currentIndex, setCurrentIndex] = useState(0);

//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // loop back to the first image
//         }, 4000); // change image every 1 second
    
//         return () => clearInterval(interval); // clean up the interval on component unmount
//       }, [images.length]);


//     return (
       
//         <div>
//         <Navbar/>

//  <      div className="home-container">
//  <      div>
//           {/* Display the current image */}
//           <img src={images[currentIndex]} alt="Slider" />
//         </div>

//         <Educationhistory/>
//         </div>
//         </div>
    
//     )
// }

// export default Education;


import React, { useState } from 'react';
// import { TextField, Button, Grid, Typography, Container, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import Navbar from '../Navbar';
import { TextField, Button, Grid, Typography, Container, MenuItem, Checkbox, FormControlLabel, Card, CardContent } from '@mui/material';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Donation() {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});

  const countries = ["India", "USA", "Canada", "UK", "Australia"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required.";
    tempErrors.dob = formData.dob ? "" : "Date of Birth is required.";
    tempErrors.phone =
      formData.phone && /^[0-9]{10}$/.test(formData.phone)
        ? ""
        : "Valid 10-digit Phone Number is required.";
    tempErrors.email =
      formData.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
        ? ""
        : "Valid Email is required.";
    tempErrors.panNo = formData.panNo ? "" : "PAN Number is required.";
    tempErrors.address = formData.address ? "" : "Address is required.";
    tempErrors.pinCode = formData.pinCode ? "" : "PIN Code is required.";
    tempErrors.city = formData.city ? "" : "City is required.";
    tempErrors.country = formData.country ? "" : "Country is required.";
    tempErrors.agreeToTerms = formData.agreeToTerms ? "" : "You must agree to the terms and conditions.";

    setErrors(tempErrors);

    return Object.values(tempErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted: ", formData);
      // Redirect to the payment page (or show payment step)
      window.location.href = "/payment"; // Replace with your routing logic
    }
  };

  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div style={{ backgroundColor: '#f4f4f4', padding: '2rem 0', textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Every Child in School - Let Us Make This Happen!
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '1rem' }}>
            "Your small contribution can make a big difference in a child's life. Help us bring smiles and education to every child."
          </Typography>
          <img
            src="https://via.placeholder.com/800x300" // Replace with your desired image URL
            alt="Banner"
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
          />
        </Container>
      </div>

      {/* Main Content Section */}
      <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Grid container spacing={4}>
          {/* Left Section (Content) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Your Donation Will Help for the Education of 1 Child for 6 Months
            </Typography>
            <Typography variant="body1" gutterBottom>
              "Education is the key to breaking the cycle of poverty and giving every child the opportunity to thrive. With your help, we can ensure that children have access to quality education and a brighter future."
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>
              Smile Foundation is a registered non-profit organization eligible for tax benefits under section 80G.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              PAN: AACTS7973G | 80G Number: AACTS7973GF20210
            </Typography>
          </Grid>

          {/* Right Section (Form) */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full Name"
                    name="fullName"
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
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
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
                    error={!!errors.address}
                    helperText={errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="PAN Number"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.panNo}
                    helperText={errors.panNo}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="PIN Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    fullWidth
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
                    label="You agree that Smile Foundation can reach out to you through Whatsapp/email/SMS/Phone to provide information of your donation, campaigns, 80G receipt etc."
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
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Last Year's Impact with Smile
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enrollment
                </Typography>
                <Typography variant="body2">
                  47486 Children directly provided education through 240 centres in 23 states
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Teacher Training
                </Typography>
                <Typography variant="body2">
                  100% Teachers received training in academic methodologies and blended learning mode
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Academic Performance
                </Typography>
                <Typography variant="body2">
                  5999 Students benefitted from nutrition support interventions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Disbursement of Funds Section */}
      <Container maxWidth="lg" style={{ marginBottom: '4rem' }}>
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

      <Footer />
    </>
  );
}
