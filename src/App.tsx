import React from 'react';
import './App.css';
import {Typography} from "@mui/material";
import Header from "./components/header/Header";
import AnimatedGradientText from "./@/components/magicui/animated-gradient-text";
import {cn} from "./@/lib/utils";
import {ChevronRight} from "lucide-react";
import Actions from "./components/header/Actions";

function App() {
  return (
      <div className="App">
          <Header/>
          <Actions />
      </div>
  );
}

export default App;
