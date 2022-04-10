import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getTableHeadUtilityClass, TextField } from "@mui/material";
import BasicTable from "./BasicTable";
// import ToExcel from "./ToExcel";
import Input from "@mui/material/TextField";
import Image from "material-ui-image";
// import UploadImage from "./UploadImage";

//import myImage from '../image/cat1.jpg'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleabc = {
  // display: 'inline',
  m: 2,
};
const saveab = {
  ml: 5,
};
const cancelab = {
  ml: 5,
};
const stylefile = {
  ml: 5,
};
function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [obj, setobj] = React.useState({
    name: "",
    email: "",
    phoneno: "",
  });
  const [detail, setdetail] = React.useState([]);
  const [toggle, settoggle] = React.useState(false);
  const [tableId, settableId] = React.useState(-1);
  // <dialog open ={true}>
  //   <Box width ='286px' p = {2}>
  //     <img src = {myImage} width ='100%'alt ='cat photo'></img>
  //   </Box>
  // </dialog>

  //open nad close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setobj((values) => ({ ...values, [name]: value }));
    console.log(obj);
  };

  const [isNameValid, setisNameValid] = React.useState(true);
  const [nameError, setnameError] = React.useState("");
  const [isEmailValid, setisEmailValid] = React.useState(true);
  const [emailError, setemailError] = React.useState("");
  const [isPhoneNumberValid, setisPhoneNumberValid] = React.useState(true);
  const [phoneNumberError, setphoneNumberError] = React.useState("");

  //name validation
  const validateFirstName = (Name) => {
    if (Name) {
      let fName = /^[a-zA-Z]+$/;
      if (Name.match(fName)) {
        setisNameValid(true);
        setnameError("");
        return true;
      } else {
        setisNameValid(false);
        setnameError("*Please enter valid name");
        return false;
      }
    } else {
      setisNameValid(false);
      setnameError("*Name cannot be empty");
      return false;
    }
  };

  //email validation
  const validateEmail = (email) => {
    if (email) {
      let mail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (email.match(mail)) {
        setisEmailValid(true);
        setemailError("");
        return true;
      } else {
        setisEmailValid(false);
        setemailError("*Please enter valid email");
        return false;
      }
    } else {
      setisEmailValid(false);
      setemailError("*Email cannot be empty");
      return false;
    }
  };

  //phone number validation
  const validatePhoneNumber = (pnumber) => {
    if (pnumber) {
      let num = /^\d{10}$/;
      if (pnumber.match(num)) {
        setisPhoneNumberValid(true);
        setphoneNumberError("");
        return true;
      } else {
        setisPhoneNumberValid(false);
        setphoneNumberError("*Please enter valid phone-number");
        return false;
      }
    } else {
      setisPhoneNumberValid(false);
      setphoneNumberError("*Phone-number cannot be empty");
      return false;
    }
  };
  const handleSave = () => {
    const isNameValid = validateFirstName(obj.name);
    const isEmailValid = validateEmail(obj.email);
    const isPhoneNumberValid = validatePhoneNumber(obj.phoneno);

    //for Edit
    if (isNameValid && isEmailValid && isPhoneNumberValid && tableId > -1) {
      var temp = detail;
      temp.splice(tableId, 1, obj);
      setdetail(temp);
      settoggle(false);
      setOpen(false);
      settableId(-1);
    } else if (isNameValid && isEmailValid && isPhoneNumberValid) {
      setdetail([...detail, obj]);
      setOpen(false);

      setobj({
        name: "",
        email: "",
        phoneno: "",
      });
    } else {
      alert("not vaild");
      setOpen(true);
    }
  };

  //deleting
  const handleDelete = (id) => {
    if (id > -1) {
      const updateddata = detail.filter((_, index) => {
        return index !== id;
      });
      setdetail(updateddata);
    }
  };

  //editting
  const handleEdit = (id) => {
    settoggle(true);
    setobj(detail[id]);
    settableId(id);
    setOpen(true);
  };
  console.log(detail);

  const handleModal = () => {
    handleOpen();
    setobj({
      name: "",
      email: "",
      phoneno: "",
    });
    setemailError("");
    setphoneNumberError("");
    setnameError("");
  };
  const handleReset = () => {
    setobj({
      name: "",
      email: "",
      phoneno: "",
    });
  };
  const file = () => {
    setobj({
      name: "",
      email: "",
      phoneno: "",
    });
  };
  // const handleImage = (e) => {
  //   const path = new FileReader();
  //   path.onload = function (e) {
  //     const content = e.target.result;
  //     console.log("filecontent", content);
  //   };
  // };

  return (
    <div>
      <Button sx={styleabc} variant="contained" onClick={handleModal}>
        Open modal
      </Button>
      {/* <ToExcel data={detail} /> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Data
          </Typography>
          <TextField
            sx={styleabc}
            helperText={isNameValid ? null : <p className="err">{nameError}</p>}
            id="demo-helper-text-aligned"
            label="Name"
            name="name"
            value={obj.name}
            onChange={handleChange}
          />
          <TextField
            sx={styleabc}
            helperText={
              isEmailValid ? null : <p className="err">{emailError}</p>
            }
            id="demo-helper-text-aligned-no-helper"
            label="Email-Id"
            name="email"
            value={obj.email}
            onChange={handleChange}
          />
          <TextField
            sx={styleabc}
            helperText={
              isPhoneNumberValid ? null : (
                <p className="err"> {phoneNumberError}</p>
              )
            }
            id="demo-helper-text-aligned"
            label="PhoneNo"
            name="phoneno"
            value={obj.phoneno}
            onChange={handleChange}
          />
          {/* <TextField
          // sx ={styleabcd}
           // helperText={isPhoneNumberValid ? null : <p className ='err'> {phoneNumberError}</p>}
            id="demo-helper-text-aligned"
            label="PhoneNo"
            name="phoneno"
            value={obj.phoneno}
            onChange={file}
          /> */}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Reset
            </Button>
            {/* <input type="file" id="file" name="file"  accept="image/png, image/jpeg" /> */}
          </Box>
          {/* <Image
  src={{myImage
  }} alt="error"
/> */}{" "}
          <br />
          <br />
          <div>
            {/* <UploadImage /> */}
          </div>
        </Box>

        {/* <img src={Image}></img> */}
      </Modal>
      <BasicTable
        data={detail}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default BasicModal;
