namespace db;

using {managed} from '@sap/cds/common';


entity Employees : managed {
  key ID       : UUID;
      empCode  : String(10);
      name     : String(80);
      email    : String(100);
      salary   : Decimal(11, 2);
      isActive : Boolean default true;
}

// aspect Activity {
//   isActive : Boolean default true;
//   Delmark  : Integer default 0;
// }

// entity teacher : Activity {
//   key ID           : UUID;
//       Classteacher : String(10);
//       name         : String(80);
//       email        : String(100);
//       Salry        : Decimal(11, 2);
// }

// entity Student : Activity {
//   key ID        : UUID;
//       Class     : String(10);

//       @mandatory
//       name      : String(80);
//       email     : String(100);
//       Marks     : Decimal(11, 2);
//       createdAt : Timestamp @cds.on.insert: $now;

// }

// entity Authors {
//   key authorID : UUID;
//       name     : String;
// }

// entity Book {
//   key BookID   : UUID;
//       Bookname : String;
//       author   : Association to Authors;
// }


// entity SalesOrders {
//   key SOID   : UUID;
//       SOname : String;
//       items  : Composition of many SalesItems
//                  on items.parent = $self
// }

// entity SalesItems {
//   key SID     : UUID;
//       parent  : Association to SalesOrders;
//       product : String;
//       qty     : Integer;
// }
// // **************************************************************************

// entity Orders {
//   key ID          : UUID;
//       orderNo     : String(20);
//       orderDatme  : Date;
//       status      : String(20);
//       totalAmount : Decimal(13, 2);
// }

// entity OrderItems {
//   key ID       : UUID;
//       orderID  : UUID;
//       product  : String(100);
//       quantity : Integer;
//       price    : Decimal(11, 2);
// }

// // *****************************learning self learning******************

entity MUser {
  key UserId    : UUID;
      Username  : String(100);
      FirstName : String(100);
      LastName  : String(100);
      Email     : String(100);
      Password  : String(20);
}

/** this i sexample of unmanaged entity */
// entity Products {
//   key ID        : Integer;
//       name      : String;
//       createdAt : Timestamp @cds.on.insert: $now;
// }

/**unmanaged Association */
// entity Author {
//   key AuthorID : UUID;
//       name     : String;

// }

// entity Book {
//   key BookID   : UUID;
//       name     : String;
//       Stock    : Integer;
//       authorID : String; // ye author id ko represent kregi
//       author   : Association to Author
//                    on author.AuthorID = authorID;

// }

//  to-mny association
// entity Customers {
//   key ID      : Integer;
//   // orders      : Association to many Orders
//   //                 on orders.customer = $self;
//   order: Association to many Orders on order.customer=$self;  
// }

// entity Orders {
//   key ID      : Integer;
//   // customer    : Association to Customers;
//   customer:Association to Customers
// }

// entity Orders1 {
//   key ID      : Integer;
//   // items       : Composition of many OrderItems
//                   // on items.order = $self;
//       items: Composition of many OrderItems on items.order=$self
// }

// entity OrderItems {
//   key ID      : Integer;
//   product     : String;
//   quantity    : Integer;
//   // order       : Association to Orders1;
//   order:  Association to Orders1
// }

/** Bound Action */

entity Orders {
  key ID          : UUID;
      orderNo     : String(20);
      orderDatme  : Date;
      status      : String(20);
      totalAmount : Decimal(13, 2);
}