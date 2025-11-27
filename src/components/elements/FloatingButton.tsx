import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import Grow from "@mui/material/Grow";
import SnackbarContent from "@mui/material/SnackbarContent";
import { CheckCircleIcon } from "lucide-react";

export default function BasicSpeedDial() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleShare = async () => {
    const baseUrl = window.location.origin;
    try {
      await navigator.clipboard.writeText(baseUrl);
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Erro ao copiar link: ", err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SoraiaFelix.pdf";
    link.download = "SoraiaFelix.pdf";
    link.click();
  };

  const actions = [
    { icon: <DownloadIcon />, name: "Baixar", action: handleDownload },
    { icon: <ShareIcon />, name: "Compartilhar", action: handleShare },
  ];

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ position: "fixed", display: { xs: "block", lg: "none" } ,bottom: 16, right: 16, zIndex: 9999 }}>
      <SpeedDial
        ariaLabel="Ações rápidas"
        icon={<DownloadIcon />}
        direction="up"
        FabProps={{
          sx: {
            backgroundColor: "#801c3c",
            color: "#fff",
            "&:hover": { backgroundColor: "#6a1631" },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={1500}
        TransitionComponent={Grow}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
            message={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon color="green" />
                Link copiado com sucesso!
                </Box>
            }
            sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 2,
                px: 3,
                py: 1.5,
                fontWeight: "semibold",
            }}
        />
      </Snackbar>

    </Box>
  );
}
