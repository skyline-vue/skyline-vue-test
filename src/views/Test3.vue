<template>
    <div class="test3">
        <div id="root" class="root">
            <div class="scrollBox">
                <div ref="child" v-for="i in 100" :key="i" class="child">
                    {{i}}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

</script>

<style lang="css" scoped>
.test3{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#root{
    height:500px;
    width:300px;
    border:1px solid;
    margin-top:30px;
    overflow-y:scroll;
}
.scrollBox{
    padding:10px;
    padding-top:0;
    border:1px solid red;
}
.child{
    height:100px;
    width:100%;
    box-sizing:border-box;
    border:1px dashed blueviolet;
    line-height:100px;
    text-align:center;
    color:gray;
}
</style>