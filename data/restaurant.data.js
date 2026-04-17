const reservation = {
  valid: { Date: '04-20-2026', Time: '18:00-19:00',guest:'4',specialRequest: 'Vegan'},
  invalid: { Date: '02-30-20261',guest:'400' },
  walkinData: {customerName: "Parit Siriphuwanich",phone: "090967676970",numberOfGuests: 4,specialReqest: "Birthday Party",Time: "19:00-20:00"},
  unavailable: {Date: '01-02-2030', Time: '19:00-20:00',},
  past: { Date: '1-1-2024', Time: '03:00-04:00',guest:'-1' },
  empty: { Date: '', Time: '',guest:'' ,specialRequest:''}
};
const table = {
    T01 :{ Pax : 'T-01 — 2 pax (available)'},
    T02 :{ Pax : 'T-02 — 4 pax (available)'},
    T03 :{ Pax : 'T-03 — 6 pax (available)'},
}
const profile = {
    branch: {name : "Le quisine", opentime:"9:59",closetime:"10:00",address: "123 Phrom Pong,Bangkok"}
}
module.exports = { reservation,table ,profile};