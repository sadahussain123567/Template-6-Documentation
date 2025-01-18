export const product = {
  name: "product",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Product Name" },
    { name: "price", type: "number", title: "Price" },
    { name: "stock", type: "number", title: "Stock Level" },
    { name: "imageUrl", type: "url", title: "Image URL" },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      title: "Category",
    },
    { name: "description", type: "text", title: "Description" },
  ],
};

export const customer = {
  name: "customer",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Customer Name" },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email(),
    },
    {
      name: "phone",
      type: "string",
      title: "Phone Number",
      validation: (Rule) => Rule.regex(/^\+?\d{10,15}$/, { name: "phone" }),
    },
    { name: "address", type: "string", title: "Address" },
  ],
};

export const order = {
  name: "order",
  type: "document",
  fields: [
    {
      name: "customerId",
      type: "reference",
      to: [{ type: "customer" }],
      title: "Customer",
    },
    {
      name: "items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      title: "Order Items",
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      },
    },
    { name: "totalAmount", type: "number", title: "Total Amount" },
  ],
};

export const shipment = {
  name: "shipment",
  type: "document",
  fields: [
    {
      name: "orderId",
      type: "reference",
      to: [{ type: "order" }],
      title: "Order",
    },
    {
      name: "status",
      type: "string",
      title: "Shipment Status",
      options: { list: ["Pending", "In Transit", "Delivered", "Failed"] },
    },
    { name: "currentLocation", type: "string", title: "Current Location" },
    { name: "eta", type: "string", title: "Estimated Time of Arrival" },
  ],
};

export const category = {
  name: "category",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Category Name" },
    { name: "description", type: "text", title: "Description" },
  ],
};
