export const invoicesArr =  [
    {
      id: "1",
      recipient: "Mark Gold",
      account: 4567,
      total: 8000,
      date: {
        created: "2017-09-11T12:18:08.000Z",
        due: "2017-07-01T12:18:08.000Z",
      },
    },
    {
      id: "2",
      recipient: "Ellaya Gold",
      account: 3876,
      total: 6000,
      date: {
        created: "2018-10-11T12:18:08.000Z",
        due: "2019-07-01T12:18:08.000Z",
      },
    },
    {
      id: "3",
      recipient: "Daniil Frog",
      account: 6953,
      total: 3000,
      date: {
        created: "2015-09-14T12:18:08.000Z",
        due: "2017-04-01T12:18:08.000Z",
      },
    },
    {
      id: "4",
      recipient: "Katarine Valet",
      account: 4873,
      total: 3000,
      date: {
        created: "2019-09-11T12:18:08000Z",
        due: "2020-07-01T12:18:08000Z",
      },
    },
    {
      id: "5",
      recipient: "Kira Nihtly",
      account: 5656,
      total: 9000,
      date: {
        created: "2020-01-11T12:18:08.000Z",
        due: "2021-07-01T12:18:08.000Z",
      },
    },
    {
      id: "6",
      recipient: "Lida Hollywood",
      account: 7095,
      total: 4000,
      date: {
        created: "2017-09-11T12:18:08.000Z",
        due: "2020-01-01T12:18:08.000Z",
      },
    },
    {
      id: "7",
      recipient: "Daria Hold",
      account: 3232,
      total: 2000,
      date: {
        created: "2019-10-11T12:18:08.000Z",
        due: "2021-08-01T12:18:08.000Z",
      },
    },
  ]

export const invoiceFiltered = (id) => {
const invoice = invoicesArr.find(invoice => invoice.id === id);
return invoice;
}