import React from 'react'; // No need for useState here
import ScannerImg  from "../../Assets/Scanner/Scanner_sahakryPratishtn.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { Button, Modal, Typography, Box, Grid, IconButton } from '@mui/material';

// function ScannerPopup({ open, onClose }) { // Receive open and onClose as props
//   return (
//     <Modal
//       open={open} // Use the prop here
//       onClose={onClose} // Use the prop here
//       aria-labelledby="payment-modal-title"
//       aria-describedby="payment-modal-description"
//     >
//       <Box sx={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 400,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         p: 4,
//         textAlign: 'center'
//       }}>
//         <Typography id="payment-modal-title" variant="h6" component="h2" gutterBottom>
//           Payment Information
//         </Typography>
//         <img
//            src={ScannerImg}
//           alt="Scanner"
//           style={{ maxWidth: '100%', height: 'auto', marginBottom: '16px' }}
//         />
//         <Typography id="payment-modal-description" variant="body1">
//           Our payment integration is currently under process. Please use the scanner above to complete your payment and help us finalize the integration.
//         </Typography>
//         <Button onClick={onClose} sx={{ mt: 2 }}>Close</Button>
//       </Box>
//     </Modal>
//   );
// }




const ScannerPopup = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="scanner-popup-title"
      aria-describedby="scanner-popup-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={8} md={6} lg={5}> {/* Responsive width */}
          <Box
            sx={{
              position: "relative",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 3,
              textAlign: "center",
              overflowY: "auto",
              maxHeight: "90vh",
              borderRadius: "12px",
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 8, right: 8, color: "red" }}
            >
              <CloseIcon />
            </IconButton>

            {/* Title */}
            <Typography
              id="scanner-popup-title"
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#ef7b0e" }}
            >
              Payment Information 💳
            </Typography>

            {/* Scanner Image */}
            <img
              src={ScannerImg}
              alt="Scanner"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "350px",
                marginBottom: "16px",
              }}
            />

            {/* Description */}
            <Typography
              id="scanner-popup-description"
              variant="body1"
              // sx={{ color: "#555", lineHeight: "1.6" }}
              sx={{ color: "green", lineHeight: "1.6" }}
            >
              Our payment integration is currently under process. 🙏 Please use the scanner above to
              complete your payment and help us finalize the integration. Your support is greatly
              appreciated! 😊
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
};

// Default props to avoid errors
ScannerPopup.defaultProps = {
  open: false,
  onClose: () => {},
};

export default ScannerPopup;













// import React, {useState} from "react";
// import { Button, Modal, Box, Typography } from "@mui/material";

// function ScannerPopup () {
//     const [open, setOpen ] = useState(false);

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen}>Show Payment Info</Button>
//             <Modal 
//             open={open}
//             onClose={handleClose}
//             aria-labelledby ="payment-model-title"
//             aria-descibedby="payment-modal-description"
//             >
//                 <Box
//                 sx={
//                     {
//                         position:'absolute',
//                         top:'50%',
//                         left:'50%',
//                         transform:'translate(-50%,-50%)',
//                         width: 400,
//                         bgcolor: 'background.paper',
//                         border:'2px solid #000',
//                         boxShadow: 24,
//                         p:4,
//                         textAlign:'center' 
//                     }
//                 }>
//                     <Typography id="payment-modal-title" variant="h6" component="h2" gutterBottom>
//                         Payment information
//                     </Typography>
//                <img 
//                src="/scanner"
//                alt="Scanner"
//                style={{maxWidth: '100%', height:'auto', marginBottom:'16px'}}
//                />
//                <Typography id="payment-modal-description" variant="body1">
//                 Our payment integration is currently under process. Please use the scanner above to complete your payment and help us finalize the integration.
//                 </Typography>
//                 <Button onClick={handleClose} sx={{mt:2}}>Close</Button>
//                 </Box>

//             </Modal>
//         </div>
//     )
// }

// export default ScannerPopup;