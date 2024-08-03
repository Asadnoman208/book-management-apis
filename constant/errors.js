exports.UNAUTHORIZED = {
    NOT_LOGGED_IN: `You are not logged in please login to get Access`,
    INVALID_JWT: `Invalid token! Please Login Again`,
    EXPIRED_JWT: `Your token has expired! please login again`,
    NOT_VERIFIED: `Your Account is not verified, Please Verify First`,
    INVALID_EXPIRED: `Token is invalid or has been Expired`,
    UNAUTHORIZE: 'You are not authorize to perform this action',
    UNABLE: 'You are unable to perform this action',
};

exports.COMMON={
    EMAIL: 'Email already exists', 
    NOT_FOUND:'records are not found'
}

exports.PROGRAMMING = {
    SOME_ERROR: `Something went wrong`,
};

exports.RUNTIME = {
    SENDING_TOKEN: `There was error sending Token. Please try again later`,
};

exports.REQUIRED = {
    EMAIL_REQUIRED: `Email is required`,
    FIRSTNAME_REQUIRED: `FirstName is required`,
    LASTNAME_REQUIRED: `LastName is required`,
    PASSWORD_REQUIRED: `Password is required`,
    TITLE_REQUIRED: 'Title is required. Please Enter Title',  
    DESCRIPTION_REQUIRED: 'Description Required',  
    PUBLISHYEAR_REQUIRED: 'Publish year is Required',
};

exports.UNIQUE = {
    UNIQUE_TITLE: 'Title must be unique',
};

exports.INVALID = {
    INVALID_LOGIN_CREDENTIALS: 'Email or Password is Incorrect',
    NO_CREDENTIALS_EMAIL: `Please provide email and password`,
    INVALID_EMAIL: `Please Enter Valid Email`,
    INVALID_FIRSTNAME: `FirstName must only contain characters between A-Z`,
    INVALID_LASTNAME: `lastName must only contain characters between A-Z`,
    PASSWORD_LENGTH: `Enter Password with 8 or more characters`,
    PASSWORD_MISMATCH: `Password and ConfirmPassword are not equal`,
    INVALID_PASSWORD: 'Invalid Password',
    NOT_FOUND: 'Not Found',   
};
