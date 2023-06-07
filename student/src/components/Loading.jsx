import { Box, Modal, Skeleton } from "@mui/material";

const loadingStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  boxShadow: 24,
};

const Loading = () => {
  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Modal open={true} BackdropProps={{ onClick: handleBackdropClick }}>
      <div>
        <Box
          sx={loadingStyle}
          className="d-flex flex-column align-items-center justify-content-center rounded"
        >
          <Skeleton width={200} height={30} sx={{ bgcolor: "white" }} />
          <Skeleton width={200} height={30} sx={{ bgcolor: "white" }} />
          <Skeleton width={200} height={30} sx={{ bgcolor: "white" }} />
        </Box>
      </div>
    </Modal>
  );
};

export default Loading;
