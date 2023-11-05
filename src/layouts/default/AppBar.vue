<template>
  <v-app-bar flat>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
        <v-btn
          id="btn-a"
          :to="{name: 'a'}"
          min-width="164"
          variant="text"
        >
          VDatatableServer
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          id="btn-c"
          :to="{name: 'c'}"
          min-width="164"
          variant="text"
        >
          Clean
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          id="btn-b"
          :to="{name: 'b'}"
          min-width="164"
          variant="text"
        >
          VTable
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
