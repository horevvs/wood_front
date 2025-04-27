import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    result: 4,
    show: true,
    show_modal: true,
    getdatastory: null,
    getdata: true,
    name: null,
    phone: null,
    text: null,
    box: null,
    write: false,
    data_getlist: null,
    admin_login: null,
    admin_password: null,
    text_consult: null,
    consult_name: null,
    consult_phone: null,
    quantity: null,
    errors_msg: null,
    name_to_db: null,
    size: null,
    description: null,
    price_for_one_beam: null,
    price_per_cubic_meter: null,
    image_address: null,
    name_id: null,
    phone_id: null,
    errors_write: false,
  }),

  actions: {
    sendmessage() {
      const regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      if (regexPhone.test(this.name) !== null && this.phone !== null && this.text !== null && this.box !== null) {
        let obj_send = {
          name: this.name,
          phone: this.phone,
          text: this.text,
        };

        fetch("http://localhost:3002/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(obj_send),
        }).then((response) => {
          if (response.status == 201) {
            this.name = null;
            this.phone = null;
            this.text = null;
            this.box = null;
            this.show = false;
            this.errors_msg = false;
          }
        });
      } else {
        this.show = false;
        this.errors_msg = true;
      }
    },

    sendmessage_consult() {
    
      if (this.сonsult_name!== null && this.consult_phone !== null) {
        let obj_send = {
          name: this.consult_name,
          phone: this.consult_phone,
        };

        fetch("http://localhost:3002/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(obj_send),
        }).then((response) => {
          if (response.status == 201) {
            this.consult_name = null;
            this.consult_phone = null;
            this.write = true;
          }
        });
      } else {
        this.errors_write = true;
      }










      // fetch("http://localhost:3002/consult", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json;charset=utf-8", },
      //   body: JSON.stringify(obj_send),
      // }).then((response) => {
      //   if (response.status == 201) {
      //     this.consult_name = null;
      //     this.consult_name = null;
      //   }
      // });
    },

    async admin_auth() {
      let obj_auth = {
        username: this.admin_login,
        password: this.admin_password,
      };

      await fetch("http://localhost:3002/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(obj_auth),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.access) {
            this.getdata = false;
            const response = await fetch("http://localhost:3002/data");
            const result = await response.json();
            this.data_getlist = result;
          } else {
            alert("не правильно");
          }
        });
    },



    async getid(id) {
      const response = await fetch(`http://localhost:3002/data/${id}`);
      const result = await response.json();
      this.getdatastory = result[0];
    },

    async getlist() {
      const response = await fetch("http://localhost:3002/data");
      const result = await response.json();
      this.data_getlist = result;
    },

    product_item(id) {
      let obj = {
        name: id,
        size: this.phone_id,
        quantity: this.quantity,
      };

      fetch("http://localhost:3002/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(obj),
      }).then((response) => {
        if (response.status == 201) {
          this.show = false;
          this.phone_id = null;
          this.quantity = null;
        }
      });
    },

    async uploads() {
      let upload_obj = {
        name: this.name_to_db,
        size: this.size,
        description: this.description,
        price_for_one_beam: this.price_for_one_beam,
        price_per_cubic_meter: this.price_per_cubic_meter,
      };
      await fetch("http://localhost:3002/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(upload_obj),
      }).then((response) => console.log(response));
    },

    async admin_delete(id) {
      await fetch(`http://localhost:3002/data/${id}`, {
        method: "DELETE",
      });
      const response = await fetch("http://localhost:3002/data");
      const result = await response.json();
      this.data_getlist = result;
    },
  },
});
