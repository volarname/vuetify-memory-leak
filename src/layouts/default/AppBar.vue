<template>
  <v-app-bar flat>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
        <v-btn
          :to="{name: 'a'}"
          min-width="164"
          variant="text"
        >
          A
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          :to="{name: 'b'}"
          min-width="164"
          variant="text"
        >
          B
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          :to="{name: 'c'}"
          min-width="164"
          variant="text"
        >
          C
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
