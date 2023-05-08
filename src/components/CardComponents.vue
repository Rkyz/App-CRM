<template lang="">
    <div class="cardBox">
        <div class="card">
            <div>
                <div class="numbers">129012</div>
                <div class="cardName">Views</div>
            </div>
            <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="numbers">129012</div>
                <div class="cardName">Views</div>
            </div>
            <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="numbers">129012</div>
                <div class="cardName">Views</div>
            </div>
            <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
        <div class="card">
            <div>
                <div class="numbers">129012</div>
                <div class="cardName">Views</div>
            </div>
            <div class="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style scoped>
    .cardBox{
        position: relative;
        width: 100%;
        padding: 20px;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4,1fr);
    }

    .cardBox .card{
        position: relative;
        background-color: white;
        padding: 30px;
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0);
    }
</style>