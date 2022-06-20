sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.crud.controller.App", {
      onInit: function () {
        const oJSONData = {
          busy: false,
        };
        var oModel = new JSONModel(oJSONData);
        this.getView().setModel(oModel, "appView");
      },

      saveData: function () {
        var oList = this.byId("peopleList"),
          oBinding = oList.getBinding("items");
        var oView = this.getView();
        var userName = oView.byId("userName").getValue();
        var firstName = oView.byId("firstName").getValue();
        var lastName = oView.byId("lastName").getValue();
        var age = oView.byId("age").getValue();

        var oContext = oBinding.create({
          UserName: userName,
          FirstName: firstName,
          LastName: lastName,
          Age: age,
        });

        console.log("oList", oList);

        console.log("oBinding", oBinding);
        this.getView().getModel("appView").setProperty("/Peoples", true);
        // oList.setProperty(oBinding.oList)
        // console.log('peopleList', oBinding.oList)
        // oList.addAggregation("items", oBinding.oList)
        // oBinding.filter(oContet)
      },
    });
  }
);
