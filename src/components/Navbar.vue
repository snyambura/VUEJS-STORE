<template>
    <div>

        <div class="top-bar" id="responsive-menu">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text">Store Management</li>
                    <li>
                        <router-link :to="{ name: 'add' }">Add Items</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'display' }">In Store</router-link>
                    </li>
                    <li><a href="#0">Place Order</a></li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input type="search" placeholder="Search"></li>
                    <li>
                        <button type="button" class="button">Search</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>