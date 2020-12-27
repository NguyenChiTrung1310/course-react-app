/* eslint-disable no-useless-escape */
import { toast } from 'react-toastify';

const validateEmail = (email: any) => {
  const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePhoneNumber = (soDt: any) => {
  var re = /^\(?([0-9]{3})\)?(?:[0-9]??).{6,10}[0-9]$/;
  return re.test(soDt);
};


function HandleRegisterForm (field: any){
  
  var errors = {    
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: '',
    hoTen: '',
  };

  if (
    field['taiKhoan'] !== '' &&
    field['hoTen'] !== '' &&
    field['email'] !== '' &&
    field['matKhau'] !== '' &&
    field['soDt'] !== '' &&
    field['maNhom'] !== '' &&
    validateEmail(field['email']) === true &&
    validatePhoneNumber(field['soDt']) === true
  ) {
    return 1;
  } else {
    //Email
    if (!validateEmail(field['email'])) {
      errors['email'] = 'Invalid Email';
      toast.warn(errors['email']);
    }

    //soDt
    if (!validatePhoneNumber(field['soDt'])) {
      errors['soDt'] = 'Phone number at least 10-15 numbers';
      toast.warn(errors['soDt']);
    }
  }
};

export default HandleRegisterForm;
