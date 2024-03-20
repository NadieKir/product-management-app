sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
    onInit: function () {
      const oView = this.getView();
      const oProducts = new JSONModel("model/products.json");
      const oCategories = new JSONModel("model/categories.json");
      const oSuppliers = new JSONModel("model/suppliers.json");
      const oProductsOverviewViewModel = new JSONModel({ selectedProducts: [] });

      const sCurrentTimestamp = new Date();

      oView.setModel(oProducts, "products");
      oView.setModel(oCategories, "categories");
      oView.setModel(oSuppliers, "suppliers");
      oView.setModel(oProductsOverviewViewModel, "productsOverviewView");

      this.byId("idReleaseDateDateRangeSelection").setMaxDate(sCurrentTimestamp);
    },

    onColumnListItemPress: function () {},

    onTableSelectionChange: function () {
      const oViewModel = this.getView().getModel("productsOverviewView");
      const aSelectedItems = this.byId("idProductsTable").getSelectedItems();

      oViewModel.setProperty("/selectedProducts", aSelectedItems);
    },
  });
});
