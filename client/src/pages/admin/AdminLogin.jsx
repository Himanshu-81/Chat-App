import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };

  if (isAdmin) return <Navigate to={"/admin/dashboard"} />;

  return (
    <div
      style={{
        background: "#F2F1EF",
        background: "radial-gradient(at right bottom, #F2F1EF, #E9A751)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              sx={{
                height: "40px",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
