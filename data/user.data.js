
const customer = {
  valid: { username: 'JohnArbuckle', password: 'garfield40',email: 'arbuckle.j@gmail.com',phone: '0808818895' },
  invalid: { username: 'Johnson', password: 'wong',email: 'arle.j@gmail.com',phone: '0808818845' },
  register : {email: 'test01@email.com',password: 'Password123',username: 'Parit Siriphuwanich',phone: '090967676970'}
};

const staff = {
  valid: { username: 'staff1', password: 'staffsmartstuff',email: 'staff1@gmail.com',phone: '081967876008'},
  invalid: { username: 'staf1', password: 'staff' ,email: 'staff1@gmal.com',phone: '090967576008'},
};

const admin = {
  valid: {username: 'admin1',password: 'admin123',email: 'admin@gmail.com',phone: '1234567890'},
  invalid: {username: 'admin',password: 'admin',email: 'adminInwza@gmail.com',phone: '1234527880'}
}
const emailVarient = {
  invalid: {noAdd: 'invalidemail.com'}
}
const blankData =  {
  name:{ username : '',password: '',email: '',phone: ''}
}
module.exports = { customer, staff ,admin ,blankData,emailVarient};