export const validateItem = (item, inventory) => {
    let errors = {};
  

    if (!item.id) {
      errors.id = 'ID is required';
    } else if (inventory.some((invItem) => invItem.id === item.id)) {
      errors.id = 'ID must be unique. Change input.';
    }
  
    if (!item.name) {
      errors.name = 'Name of item is required.';
    }
  
    if (!item.quantity || item.quantity <= 0) {
      errors.quantity = 'Quantity must be greater than 0';
    }
  
    if (!item.price || item.price <= 0) {
      errors.price = 'Price must be greater than 0';
    }
  
    if (!item.category) {
      errors.category = 'Category is required';
    }
  
    return errors;
  };
  