<template>
  <div id="yingcheng">
    <ul>
      <li class="name">万达影城</li>
      <li class="number">24</li>
    </ul>
    <ul>
      <li class="name">保利万和影城</li>
      <li class="number">24</li>
    </ul>
    <ul>
      <li class="name">大地影院</li>
      <li class="number">16</li>
    </ul>
    <ul>
      <li class="name">UME国际影城</li>
      <li class="number">16</li>
    </ul>
    <ul>
      <li class="name">金逸影城</li>
      <li class="number">9</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Brand"
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
