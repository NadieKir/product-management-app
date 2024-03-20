sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
    onInit: function () {
      const oView = this.getView();
      const oProducts = new JSONModel("model/products.json");
      const oProductsOverviewViewModel = new JSONModel({ selectedProducts: [] });

      oView.setModel(oProducts, "products");
      oView.setModel(oProductsOverviewViewModel, "productsOverviewView");
    },

    onColumnListItemPress: function () {},

    onTableSelectionChange: function () {
      const oViewModel = this.getView().getModel("productsOverviewView");
      const aSelectedItems = this.getView().byId("idProductsTable").getSelectedItems();

      oViewModel.setProperty("/selectedProducts", aSelectedItems);
    },
  });
});
