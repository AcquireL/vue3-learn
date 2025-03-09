<template>
  <div class="wheel-container">
    <div ref="wheel" class="wheel" :style="{ transform: `rotate(${rotation}deg)` }">
      <!-- 这里添加分割扇区的代码 -->
    </div>
    <div class="pointer">↑</div>
    <button @click="startSpin">开始</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    let rotation = ref(0);
    const wheel = ref(null);

    const startSpin = () => {
      const targetRotation = rotation.value + (Math.random() * 3600 + 3600); // 随机旋转角度
      gsap.to(wheel.value, {
        duration: 4,
        rotation: targetRotation,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => {
          rotation.value = targetRotation % 360;
        }
      });
    };

    onMounted(() => {
      // 初始化代码
    });

    return { rotation, wheel, startSpin };
  }
}
</script>

<style scoped>
.wheel-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #333;
  background-color: #f3f3f3;
  transition: transform 4s cubic-bezier(.7, -.1, .9, .8);
}

.pointer {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid red;
}
</style>