type CustomerType = {
  cust_id: number;
  cust_name: string;
  cust_address: string;
  cust_city: string;
  cust_state: string;
  cust_zip: string;
  cust_country: string;
  cust_contact: string;
  cust_email: string;
};

type OrderType = {
  order_num: number;
  order_date: Date;
  cust_id: number;
};

type OrderItemType = {
  order_num: number;
  order_item: number;
  prod_id: string;
  quantity: number;
  item_price: number;
};

type ProductType = {
  prod_id: string;
  vend_id: number;
  prod_name: string;
  prod_price: number;
  prod_desc: string;
};

type VendorType = {
  vend_id: number;
  vend_name: string;
  vend_address: string;
  vend_city: string;
  vend_state: string;
  vend_zip: string;
  vend_country: string;
};
