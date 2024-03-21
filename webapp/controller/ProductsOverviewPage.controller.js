sap.ui.define(
  [
    "nadzeya/kireyenka/app/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "nadzeya/kireyenka/app/model/formatter/formatter",
    "nadzeya/kireyenka/app/model/productModel",
    "nadzeya/kireyenka/app/model/categoryModel",
    "nadzeya/kireyenka/app/model/supplierModel",
  ],
  function (BaseController, JSONModel, formatter, productModel, categoryModel, supplierModel) {
    "use strict";

    return BaseController.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
      deleteProductsButtonTextFormatter: formatter.deleteProductsButtonTextFormatter,

      onInit: function () {
        const oView = this.getView();
        const oProductsOverviewViewModel = new JSONModel({ selectedProducts: [] });

        oView.setModel(productModel.getModel(), "products");
        oView.setModel(categoryModel.getModel(), "categories");
        oView.setModel(supplierModel.getModel(), "suppliers");
        oView.setModel(oProductsOverviewViewModel, "productsOverviewView");

        this.initializeDateRangeSelection();
      },

      initializeDateRangeSelection: function () {
        const sCurrentTimestamp = new Date();

        this.byId("idReleaseDateRangeSelection").setMaxDate(sCurrentTimestamp);
      },

      onColumnListItemPress: function () {},

      onTableSelectionChange: function () {
        const oViewModel = this.getView().getModel("productsOverviewView");
        const aSelectedItems = this.byId("idProductsTable").getSelectedItems();

        oViewModel.setProperty("/selectedProducts", aSelectedItems);
      },
    });
  }
);
