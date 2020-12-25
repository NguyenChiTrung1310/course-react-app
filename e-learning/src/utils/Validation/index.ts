/* eslint-disable no-useless-escape */

const validateEmail = (email: any) => {
  const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePhoneNumber = (soDt: any) => {
  var re = /^\(?([0-9]{3})\)?(?:[0-9]??).{6,10}[0-9]$/;
  return re.test(soDt);
};


function HandleRegisterForm (field: any, enqueueSnackbar: any){
  
  var errors = {    
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: '',
    hoTen: '',
  };

  const status = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
  }

  const notification = (message: string, variantType: string) => enqueueSnackbar(
    message, 
    { 
        variant: variantType,
    },
    );

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
        return notification(errors['email'], status.ERROR)
    }

    //soDt
    if (!validatePhoneNumber(field['soDt'])) {
    errors['soDt'] = 'Phone number at least 10-15 numbers';
    return notification(errors['soDt'], status.ERROR)
    }
  }
};

export default HandleRegisterForm;
