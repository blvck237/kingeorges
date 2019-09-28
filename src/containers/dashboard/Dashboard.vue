<template>
    <div class="row">   
    <div class="col-md-2 sidenav">
        <SideNav></SideNav>
    </div>
    <div class="col-md-10 header">
        <div class="header">
        </div>
    </div>
</div>

</template>

<script>
import SideNav from "../../components/Dashboard/SideNav/SideNav"

export default {
    name: "Dashboard",
    components: {
        SideNav
}

}
</script>

<style>
.sidenav{
    padding: 0;
}
.header{
    height: 5em;
    padding: 0;
    background-color: #545c64
}

</style>
