sap.ui.define(
  [
    "nadzeya/kireyenka/app/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "nadzeya/kireyenka/app/model/formatter/formatter",
    "nadzeya/kireyenka/app/model/productModel",
    "nadzeya/kireyenka/app/model/categoryModel",
    "nadzeya/kireyenka/app/model/supplierModel",
  ],
  function (
    BaseController,
    JSONModel,
    MessageBox,
    MessageToast,
    formatter,
    productModel,
    categoryModel,
    supplierModel
  ) {
    "use strict";

    return BaseController.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
      formatter: formatter,

      onInit: function () {
        const oView = this.getView();
        const oProductsOverviewViewModel = new JSONModel({ selectedProducts: [] });

        oView.setModel(productModel.getModel(), "products");
        oView.setModel(categoryModel.getModel(), "categories");
        oView.setModel(supplierModel.getModel(), "suppliers");
        oView.setModel(oProductsOverviewViewModel, "productsOverviewView");

        this.oViewModel = oView.getModel("productsOverviewView");
      },

      onBeforeRendering: function () {
        this.initializeDateRangeSelection();
      },

      initializeDateRangeSelection: function () {
        const sCurrentTimestamp = new Date();

        this.byId("idReleaseDateRangeSelection").setMaxDate(sCurrentTimestamp);
      },

      onTableSelectionChange: function () {
        const oProductsModel = this.getView().getModel("products");
        const aSelectedItems = this.byId("idProductsTable").getSelectedItems();

        const aSelectedItemsData = aSelectedItems.map((oItem) => {
          const sPath = oItem.getBindingContext("products").getPath();

          return oProductsModel.getProperty(sPath);
        });

        this.oViewModel.setProperty("/selectedProducts", aSelectedItemsData);
      },

      onDeleteProductButtonPress: function () {
        const aProductsToDelete = this.oViewModel.getProperty("/selectedProducts");
        const sProductsToDeleteInfo =
          aProductsToDelete.length === 1
            ? aProductsToDelete[0].Name
            : this.getLocalizedString("Products.WithAmount", aProductsToDelete.length);

        MessageBox.confirm(this.getLocalizedString("DeleteConfirmationText", sProductsToDeleteInfo), {
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          emphasizedAction: MessageBox.Action.OK,
          onClose: (sAction) =>
            this.onDeleteConfirmationClose(sAction, aProductsToDelete, sProductsToDeleteInfo),
        });
      },

      onDeleteConfirmationClose: function (sAction, aProductsToDelete, sProductsToDeleteInfo) {
        if (sAction === MessageBox.Action.OK) {
          const sMessageBoxText = this.getLocalizedString(
            aProductsToDelete.length === 1 ? "DeleteConfirmedText.Singular" : "DeleteConfirmedText.Plural",
            sProductsToDeleteInfo
          );

          this.deleteProducts(aProductsToDelete);

          MessageToast.show(sMessageBoxText);
        }
      },

      deleteProducts: function (aProductsToDelete) {
        const aProductsToDeleteIds = aProductsToDelete.map((oProduct) => oProduct.Id);

        productModel.deleteByIds(aProductsToDeleteIds);

        this.getView().setModel(productModel.getModel(), "products");
        this.oViewModel.setProperty("/selectedProducts", []);
        this.byId("idProductsTable").removeSelections();
      },
    });
  }
);
