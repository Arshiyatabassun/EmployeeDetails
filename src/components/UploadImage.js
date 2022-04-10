import React, { useState } from "react";

const UploadImage = () => {
  const [picture, setPicture] = useState("");

  const onChangePicture = (e) => {
    console.log("picture: ", picture);
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    
            <div className="formInstructionsDiv formElement">
              <div variant="contained" color="primary">
                <input id="profilePic" type="file" onChange={onChangePicture} />
              </div>
              <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={picture}></img>
              </div>
            </div>
    
  );
};

export default UploadImage;
