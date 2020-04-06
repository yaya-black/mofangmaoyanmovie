<template>
  <!-- <div class="messageBox">
      <h2>定位</h2>
      <p>北京</p>
      <div>
          <div class="sure" @click=" dialogVisible = false">取消</div>
          <div class="cancel" @click="dialogVisible = false">确定定位</div>
      </div>
  </div>-->
  <el-container class="adjust height-inherit background-white">
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible" width="200px" 
    position='absolute'
    left='50%'
    top='20%' :before-close="handleClose" :append-to-body="true">
    <!-- <div class="messageBox" > -->
      <h2>{{title}}</h2>
      <p>{{position}}</p>
    <el-button type="text" >
      <div class="all">
          <div class="sure" @click="dialogVisible = false" >{{cancel}}</div>
          <div class="cancel" @click="handleOk(position,id),dialogVisible = false">{{ok}}</div>
      </div>
    </el-button>
  <!-- </div> -->
    
    <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>是否确定？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" >取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false,handleOk(position,id)">确 定</el-button>
      </span> -->
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "MessageBox",
  data() {
    return {
      dialogVisible: true,
      title:'',
      position:'',
      cancel:'',
      ok:'',
      id:''
    };
  },
  mounted(){
    
      this.$axios.get('/api/getLocation').then(res=>{
          var msg=res.data.msg;
          if(msg==='ok'){
          var nm=res.data.data.nm;
          // console.log(nm);
          var id=res.data.data.id;
          // if(id==this.$store.state.city.id) {this.dialogVisible=false;}
          this.title='定位';
          this.position=nm;
          this.cancel='取消';
          this.ok='切换定位';
          this.id=id;
          }     
    });
    
    
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleOk(nm,id){
            console.log(nm);
            window.localStorage.setItem('nowNm',nm);
            window.localStorage.setItem('nowId',id);
            window.location.reload();
            
            // window.localStorage.setItem('nowId',id);
          },
    

  }
};
</script>

<style scoped>
/* .messageBox {
  width: 500px;
  height: 220px;
  border: 1px #cccccc solid;
  border-radius: 4px;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #cccccc; 
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -60px 0 0 -100px; 
} */

 h2 {
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
 p {
  text-align: center;
  line-height: 40px;
}
.all {
  display: flex;
  position: absolute;
  width: 100%;
  border-top: 1px #cccccc solid;
  bottom: 0px;
  margin-left: -20px;
  /* margin-top: -5px; */
}
.all .sure {
  flex: 1;
  text-align: center;
  line-height: 30px;
  border-right: 1px #cccccc solid;
}
 .all .cancel {
  flex: 1;
  text-align: center;
  line-height: 30px;
  border: none;
}
</style>
