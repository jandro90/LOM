import { FormControl, FormGroup, Validators } from "@angular/forms";
import { formData, inputData } from "./lom-quizz-form-data";

export class LomQuizzForm {

    private form: FormGroup = new FormGroup({});

    get formGroup(): FormGroup {
        return this.form;
    }

    constructor() { 
        this.createForm();
    }

    private createForm() {
        formData.map((input: inputData) => {
            this.form.addControl(String(input.id), new FormControl(null, input.required ? Validators.required : null))
        });
    }

    reset() {
        this.form.reset();
    }
}