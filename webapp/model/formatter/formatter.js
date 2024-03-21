sap.ui.define([], () => {
  "use strict";

  return {
    deleteProductsButtonTextFormatter: function (aSelectedProducts) {
      return aSelectedProducts.length > 0 ? "(" + aSelectedProducts.length + ")" : "";
    },
  };
});
