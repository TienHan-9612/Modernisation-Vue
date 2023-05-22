export class TaskModel {
    public(){

    }
    id: string
    dateCreated: string
    dateModified: string
    dateDeleted: string
    completed: string
    details: string
    confirmDelete: boolean = false
}

export class TaskCreateModel {
    id: string
    completed: string
    details: string
}


