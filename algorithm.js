//can use the relationships of the models to figure out which subsribers still need to pay that month's invoice
//looking at the invoice table, the due date can be compared with the automatic timestamp then the status can be changed from 0 to 1 showing it's been paid
//a for loop can be used to iterate over the invoices
for (let i = 0; i < invoices.length; i++)
//looking at the status to see if it is 0 (not paid) or 1 (paid)
invoices[i].status
//the subscribers are linked to the invoices since subscribers can have many invoices
//using invoices foreign key, the subscriber can be found by filtering when the status is 0
invoices[i].subscriber_id
//an empty array can be used to put the subscriber info
//cancellation emails can be sent out to the corresponding subscribers
