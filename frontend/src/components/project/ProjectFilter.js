import React, { useState, useEffect, useContext } from "react";
import "./ProjectFilter.scss";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProjectFilter() {
  const arr1 = ["Software Development", "Product Management"];
  const arr2 = ["Data Analytics", "Machine Learning"];

  const menuItems = (arr) => {
    const res = arr.map((item, index) => {
      return <MenuItem value={index}> {item}</MenuItem>;
    });

    return res;
  };

  const selector = (title, arr) => {
    return (
      <div className="d-flex flex-column" style={{}}>
        <Box sx={{ minWidth: 120, marginBottom: 5 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
              sx={{ fontSize: 12 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Age"
            >
              {menuItems(arr)}
            </Select>
          </FormControl>
        </Box>
      </div>
    );
  };

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body>
        <Card.Title style={{ fontSize: 15, marginBottom: 20 }}>
          Filter by
        </Card.Title>
        {selector("Business Sector", arr1)}
        {selector("Specialization", arr2)}
      </Card.Body>
    </Card>
  );
}
