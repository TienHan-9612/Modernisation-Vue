

<template>
  <v-table>
    <thead>
      <tr>
        <th style="width: 1px;">Completed</th>
        <th>Details</th>
        <th style="width: 14em;"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in taskItems" :key="item.id">
        <td>{{ item.completed }}</td>
        <td>{{ item.details }}</td>
        <td>
          <v-btn class="table-action-button" variant="outlined">
            Edit
          </v-btn>  
          <v-btn class="table-action-button" variant="outlined" @click="openConfirmDialog(item.id)">
            Delete
          </v-btn>                     
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-btn class="add-button" variant="outlined">
    Add
  </v-btn>

  <v-dialog v-model="openConfirmDeleteDialog" width="auto">           
           <v-card>
             <v-card-text>
               Are you sure that you want to delete this task?
             </v-card-text>
             <v-card-actions>
               <v-btn color="primary"  @click="deleteTask()">Ok</v-btn>
               <v-btn color="primary" block @click="closeConfirmDialog()">Close Dialog</v-btn>
             </v-card-actions>
           </v-card>
         </v-dialog>
</template>

<style scoped src="./task-report.component.css"></style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllTasks, deleteTaskById } from '../state/task.service';
import { TaskModel } from "../state/task.model";

const taskItems = ref<TaskModel[]>([]);
var openConfirmDeleteDialog = ref<boolean>(false);
var confirmDeleteTaskId = '';

function getTasks() {
  getAllTasks().then(response => {
    taskItems.value = response;
  });
}

function deleteTask() {
  debugger;
  openConfirmDeleteDialog.value =false;
  deleteTaskById(confirmDeleteTaskId).then(response => {
    if(response){
      taskItems.value = taskItems.value.filter(x=> x.id != confirmDeleteTaskId);      
    }
  });
}

function openConfirmDialog(id: string){
  openConfirmDeleteDialog.value =true;
  confirmDeleteTaskId=id;
}

function closeConfirmDialog(){
  openConfirmDeleteDialog.value =false;
}

onMounted(() => {
  getTasks();
});

</script>