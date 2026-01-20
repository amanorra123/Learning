const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (service) {
    const { Employees, Orders } = service.entities;

//     service.before('CREATE', Employees, (req) => { // this Employees is  endpoint
//         // console.log("data before inster anythig",req.data);
//         const { name, email } = req.data;
//         if (!name) {
//             req.error(400, "Employee name Must not be NULL or Empty");
//         }
//         if (!email) {
//             req.error(400, "Employee Email Must not be NULL or Empty");
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (email && !emailRegex.test(email)) {
//             req.error(400, 'Email Format is not valid');
//         }
//         req.data.isActive = true;

//     });
    
service.after('CREATE', Employees, (req) => {
        console.log("this is afrer event", req);


    });

//     //Action function

//     service.on('calculateDiscount', req => {
//         const amount = req.data.amount

//         if (amount > 1000) {
//             return amount * 0.1
//         }
//         return 0;

//     });

//     service.on('getOrderCount', async req => {
//         const result = await SELECT
//             .from(Orders)
//             .columns`count(*) as total`;
//         console.log("result", result);
//         return result[0].total;

//     })

//     service.on('approveOrder', async req => {
//         const { orderID, Status } = req.data;
//         const tx = cds.transaction(req);

//         await tx.run(
//             UPDATE(Orders)
//                 .set({ status: Status })
//                 .where({ ID: orderID })
//         );

//         return 'Order approved successfully';

//     })

//     this.on('getOrdersByOrderNo', async (req) => {

//         const { orderNo } = req.data;

//         if (!orderNo) {
//             req.error(400, 'orderNo is required');
//         }

//         const db = await cds.connect.to('db');

//         let dbQuery = `
//   CALL "GET_ORDERS_BY_ORDERNO"(
//     '${orderNo}',
//     RESULT => ?
//   )
// `;

//         let result = await db.run(dbQuery);

//         return result.RESULT;

//     });

 service.on('Approved', Orders, async req => {
  const tx = cds.tx(req);   // start transaction
    const { ID } = req.params[0];
   try {
     await tx.UPDATE(Orders)
       .set({ status: 'APPROVED' })
       .where({ ID });
       
        await tx.commit();      // ✅ success

     return `Order ${ID} approved successfully`;
   } catch (error) {
       await tx.rollback();    // ❌ failure
      req.reject(500, 'Approval failed');
   }
  });

service.on('getStatus', Orders, async req => {
    const { ID } = req.params[0];

    const order = await SELECT.one
      .from(Orders)
      .columns('status')
      .where({ ID });

    return order?.status || 'UNKNOWN';
  });
});