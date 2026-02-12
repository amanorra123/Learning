using {db} from '../db/schema';

service MyService {
@requires: 'authenticated-user'
@cds.redirection.target
@odata.draft.enabled: true
  entity Employees       as projection on db.Employees;
  // entity Authors         as projection on db.Authors;
  // entity Book            as projection on db.Book;
  // entity SalesOrders     as projection on db.SalesOrders;
  // entity SalesItems      as projection on db.SalesItems;
  // entity Student         as projection on db.Student;
  // //   for Action and Function
  // entity Orders          as projection on db.Orders;
  // entity OrderItems      as projection on db.OrderItems;

  // entity PublicEmployees as
  //   projection on db.Employees {
  //     ID,
  //     name,
  //     email
  //   };
  // // function and actions

  // function calculateDiscount(amount: Decimal(11, 2)) returns Decimal(11, 2);

  // function getOrderCount()                           returns Integer;


  // // Actions

  // action   approveOrder(orderID: UUID,Status:String)    returns String;

  //   action getOrdersByOrderNo(
  //   orderNo : String(20)
  // ) returns array of Orders;



  /**   learning self learning */


  // entity Products as projection on db.Products;

  entity Orders as select from db.Orders
    actions {
      Action Approved() returns String;
       function getStatus() returns String;
    };





}
