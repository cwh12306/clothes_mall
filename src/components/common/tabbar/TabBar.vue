<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<style>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f5f5f5;
  box-shadow: 0 0 3px black;
}
</style>
