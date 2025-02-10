import React, { useState } from "react";
import { Container, Grid, TextField, MenuItem, Button, Typography, Box, Paper } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inquiryTypes = ["General Inquiry", "Volunteering", "Donations", "Partnerships", "Others"];
const contactMethods = ["Email", "Phone", "WhatsApp"];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    preferredContactMethod: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setError("");

    try {
      const response = await axios.post("https://sahakar-pratishatn-ngo-backend-1.onrender.com/api/contacts/contact-us", formData);
      setStatusMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        inquiryType: "",
        preferredContactMethod: "",
        message: "",
      });
       toast.success("Form submited successfully Our team will contact you soon .", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Something went wrong. Please try again.";
      setError(errorMsg);
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
          <Grid container spacing={4}>
            {/* Contact Details Section */}
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  We'd love to hear from you! Get in touch with us.
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Phone color="primary" />
                  <Typography variant="body1">+1 234 567 890</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Email color="primary" />
                  <Typography variant="body1">shakary@ngo.org</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOn color="primary" />
                  <Typography variant="body1">123 dhule city, Dhule, India</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form Section */}
            <Grid item xs={12} md={7}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      required
                      variant="outlined"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      required
                      variant="outlined"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Inquiry Type"
                      required
                      variant="outlined"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                    >
                      {inquiryTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Preferred Contact Method"
                      required
                      variant="outlined"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleInputChange}
                    >
                      {contactMethods.map((method) => (
                        <MenuItem key={method} value={method}>
                          {method}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#2E3B55",
                        color: "white",
                        padding: "10px",
                        "&:hover": { backgroundColor: "#1E2A3B" },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <ToastContainer />
              {/* Success and Error Messages */}
              {statusMessage && (
                <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                  {statusMessage}
                </Typography>
              )}
              {error && (
                <Typography variant="body1" color="red" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
               
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
