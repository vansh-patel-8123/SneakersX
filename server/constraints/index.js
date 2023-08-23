const ROLES = {
    Admin: 'ROLE ADMIN',
    Member: 'ROLE MEMBER',
    Merchant: 'ROLE MERCHANT'  
}

const MERCHANT_STATUS = {
    Rejected: 'Rejected',
    Approved: 'Approved',
    Waiting_Approval: 'Waiting Approval'
};
  
const CART_ITEM_STATUS = {
    Processing: 'Processing',
    Shipped: 'Shipped',
    Delivered: 'Delivered',
    Cancelled: 'Cancelled',
    Not_processed: 'Not processed'
};
  
const REVIEW_STATUS = {
    Rejected: 'Rejected',
    Approved: 'Approved',
    Waiting_Approval: 'Waiting Approval'
};
  
const EMAIL_PROVIDER = {
    Email: 'Email',
    Google: 'Google',
    Facebook: 'Facebook'
};


module.exports = {
    EMAIL_PROVIDER,
    REVIEW_STATUS,
    CART_ITEM_STATUS,
    MERCHANT_STATUS,
    ROLES
}