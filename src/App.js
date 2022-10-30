import * as React from 'react';
import './App.css';

import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  MenuItem,
  Typography,
  Avatar,
  Box,
  Container, } from '@mui/material/';
    import PersonIcon from '@mui/icons-material/Person';

const currencies = [
    {
        value: 'male',
        label: '남성',
    },
    {
        value: 'female',
        label: '여성',
    },

];

function App() {

    const [currency, setCurrency] = React.useState('male');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <PersonIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            회원가입
          </Typography>

          <TextField
              margin="dense"
              label="이메일 주소"
              fullWidth
              name="email"
              autoComplete="email"
              // autoFocus
          />

          <TextField
              margin="dense"
              label="비밀번호"
              type="password"
              fullWidth
              name="password"
              helperText="8~16자 영문, 숫자, 특수문자를 사용하세요."
          />
          <TextField
              margin="dense"
              label="비밀번호 확인"
              type="password"
              fullWidth
              name="password"
          />

          <TextField
              margin="dense"
              label="이름"
              type="name"
              fullWidth
              name="name"
          />

          <TextField
              margin="dense"
              label="전화번호"
              type="number"
              fullWidth
              name="phone"
          />

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },

                }}
                noValidate
                autoComplete="off"
            >
            <div>
                <TextField
                    margin="dense"
                    label="생년월일"
                    type="tel"
                    fullWidth
                    name="phone"
                />

            <TextField
                id="sex"
                select
                label="성별"
                value={currency}
                onChange={handleChange}


            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </div>
            </Box>
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="회원가입 약관에 동의합니다."
          />

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
          >
            회원가입
          </Button>
        </Box>
      </Container>
  );
}

export default App;
