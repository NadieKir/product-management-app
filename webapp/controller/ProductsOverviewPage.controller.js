// sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
//   "use strict";

//   return Controller.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
//     onNavToProductDetailsPage: function () {
//       this.getOwnerComponent().getRouter().navTo("ProductDetailsPage", { productId: "1" });
//     },
//   });
// });

sap.ui.define(
  [
    "sap/ui/thirdparty/jquery",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat",
    "sap/base/Log",
    "sap/ui/core/Fragment",
    "sap/ui/core/date/UI5Date",
  ],
  function (jQuery, Controller, JSONModel, MessageToast, DateFormat, Log, Fragment, UI5Date) {
    "use strict";

    return Controller.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
      onInit: function () {
        const oView = this.getView();
        const oProducts = new JSONModel("model/products.json");
        const oProductsOverviewViewModel = new JSONModel();

        oView.setModel(oProducts, "products");
        oView.setModel(oProductsOverviewViewModel, "productsOverviewView");
      },

      onProductsTableItemPress: function () {},
    });
  }
);
