// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function (service) {
//     const { Employees, Orders } = service.entities;

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
//     service.after('CREATE', Employees, (req) => {
//         console.log("this is afrer event", req);


//     });

//     //Action function

//     service.on('calculateDiscount', req => {
//         const amount = req.data.amount
//         /**
//          *  get exrernal api
//          * calculation
//          *  return as reponse
//          * 
//          * 
//          */
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
//         const { orderID ,Status} = req.data;
//         const tx = cds.transaction(req);

//         await tx.run(
//             UPDATE(Orders)
//                 .set({ status:Status })
//                 .where({ ID: orderID })
//         );

//         return 'Order approved successfully';

//     })


// });




