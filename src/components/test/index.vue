<script>
    export default {
      data() {
        return {
          itemlist: [],
        }
      },
      methods: {
        addItems: function () {

          let itemsInStore = JSON.parse(localStorage.getItem("items"));

          let item = {
            name: 'test 4',
            price: 202,
            desc: 'test description',
          }

          itemsInStore.push(item);

          localStorage.setItem("items", JSON.stringify(itemsInStore));
          this.getItems()

        },

        getItems: function () {
            this.itemlist = JSON.parse(localStorage.getItem("items"));
        },

        setItemHolder: function () {

            let items = [];

            let check = localStorage.getItem("items");

            if(!check)
            {
              localStorage.setItem("items", JSON.stringify(items))
            }

        }
      },

      mounted () {
        this.setItemHolder()
        this.getItems()
      }
    }
</script>

<template>
    <div class="test">
        <p>this is my test page</p>
        <button @click="addItems" class="button">Add Items</button>

        <h4>Items</h4>
        <ol  v-for="item in itemlist">
             <li>{{ item.name }} | {{ item.price }} | {{ item.desc}}</li>
        </ol>

    </div>
</template>