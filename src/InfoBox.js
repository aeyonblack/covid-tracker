import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './InfoBox.css';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      className={`info-box ${active && 'info-box--selected'} ${
        isRed && 'info-box--red'
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="info-box-title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`info-box-cases ${!isRed && 'info-box-cases--green'}`}>
          {cases}
        </h2>
        <Typography className="info-box-total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
