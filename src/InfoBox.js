import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './InfoBox.css';

function InfoBox({ title, cases, total }) {
  return (
    <Card className="info-box">
      <CardContent>
        <Typography className="info-box-title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="info-box-cases">{cases}</h2>
        <Typography className="info-box-total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
