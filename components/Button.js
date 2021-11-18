import React from "react";
import {Button} from "primereact/button";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';

const CButton = ({ link, text }) => {
  return (
    <a href={link} target="_blank" className = "mx-2 mt-4">
      <Button className="p-button-raised p-button-rounded p-button-info" >{text}</Button>
    </a>
  );
};

export default CButton;
