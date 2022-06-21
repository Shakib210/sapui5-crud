sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.crud.controller.App", {
      onInit: function () {
        var data = [
          {
            id: 1,
            UserName: "Shakib210",
            Age: 24,
            FirstName: "Nazmus",
            LastName: "Shakib",
            Status: true,
          },
        ];

        const oJSONData = {
          busy: false,
          updateMode: false,
          data: data,
          updateID: 0,
        };
        var oModel = new JSONModel(oJSONData);
        this.getView().setModel(oModel, "appView");
      },

      fieldsClear: function () {
        var oView = this.getView();
        oView.byId("userName").setValue("");
        oView.byId("firstName").setValue("");
        oView.byId("lastName").setValue("");
        oView.byId("age").setValue("");

        var oModel = this.getView().getModel("appView");
        oModel.setProperty("/updateMode", false);
        oModel.setProperty("/updateID", 0);

      },

      saveData: function () {
        var oList = this.byId("peopleList"),
          oBinding = oList.getBinding("items");
        var oView = this.getView();
        var userName = oView.byId("userName").getValue();
        var firstName = oView.byId("firstName").getValue();
        var lastName = oView.byId("lastName").getValue();
        var age = oView.byId("age").getValue();

        let list = oBinding.oList;
        var data = {
          UserName: userName,
          FirstName: firstName,
          LastName: lastName,
          Age: age,
          id: list.length + 1,
        };

        list.unshift(data);
        this.modelHandler(list);
        this.fieldsClear();
      },

      updateData: function (id) {
        const oList = this.byId("peopleList");
        const oBinding = oList.getBinding("items");
        let list = oBinding.oList;
        const index = list.findIndex((data) => data.id === id);
        var oView = this.getView();
        var userName = oView.byId("userName").getValue();
        var firstName = oView.byId("firstName").getValue();
        var lastName = oView.byId("lastName").getValue();
        var age = oView.byId("age").getValue();
        list[index]={
          UserName: userName,
          FirstName: firstName,
          LastName: lastName,
          Age: age,
          id: id,
        }

        this.modelHandler(list)
        this.fieldsClear()
      },

      onDelete: function (id) {
        const oList = this.byId("peopleList");
        const oBinding = oList.getBinding("items");

        let list = oBinding.oList;

        const index = list.findIndex((data) => data.id === id);
        list.splice(index, 1);
        console.log("list0", list);
        this.modelHandler(list);
      },

      onUpdate: function (item) {
        console.log("item", item);
        var oView = this.getView();
        oView.byId("userName").setValue(item.UserName);
        oView.byId("firstName").setValue(item.FirstName);
        oView.byId("lastName").setValue(item.LastName);
        oView.byId("age").setValue(item.Age);

        var oModel = this.getView().getModel("appView");
        oModel.setProperty("/updateMode", true);
        oModel.setProperty("/updateID", item.id);
      },

      modelHandler: function (list) {
        var modelData = this.getView().getModel("appView");
        const oJSONData = modelData?.oData;
        const jsonData = {
          ...oJSONData,
          data: list,
        };

        const oModel = new JSONModel(jsonData);

        this.getView().setModel(oModel, "appView");
      },
    });
  }
);
