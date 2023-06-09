import { Box, Button, Modal, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            py: "1rem",
            px: "2rem",
          }}
        >
          <Typography variant="h4">
            Are you sure you want to delete this student?
          </Typography>
          <Box>
            <Button
              size="large"
              variant="contained"
              color="error"
              sx={{ m: "1rem" }}
              startIcon={<DeleteIcon />}
            >
              Confirm
            </Button>
            <Button
              size="large"
              variant="contained"
              color="success"
              sx={{ m: "1rem" }}
              startIcon={<BlockIcon />}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};

export default Delete;
