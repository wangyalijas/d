<template>
  <svg class="w-iconx" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'WIconx',
    props: {
      name: String
    }
  };
</script>
