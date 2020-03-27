<template>
  <div id="yingcheng">
    <ul v-for="item in cinemas" :key="item.id">
      <li class="name">{{item.nm}}</li>
      <li class="number">{{item.distance}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Brand",
  data() {
    return{
      cinemas:[]
    }
  },
  mounted() {
  this.$axios.get("/api/cinemaList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg == "ok") {
        this.cinemas = res.data.data.cinemas;
      }
    });
}
};

</script>

<style scoped>
#content #yingcheng{ flex:1; overflow:auto;}
#yingcheng ul{ 
    margin:0 12px; 
    overflow: hidden;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 10px;
    align-items:center; 
  }
#yingcheng ul .name{ 
     margin-top:12px;
     float:left;
    }
#yingcheng ul .number{ 
    
    /* position:absolute; */
    float:right;
    margin-top:12px;
    margin-right:10px;

     }
</style>
