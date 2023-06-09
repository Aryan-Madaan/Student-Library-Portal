import { Box, Button, Modal, Typography } from "@mui/material";

const Delete = () => {
  return (
    <Modal open={true}>
      <div>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            Are you sure you want to delete this student?
          </Typography>
          <Box className="d-flex justify-content-between w-50">
            <Button>Yes</Button>
            <Button>No</Button>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};

export default Delete;
