import { Component } from '@angular/core';
import { UploadFileInterFace } from './upload-file.interface';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'upload-file',
    templateUrl: './upload-file.component.pug',
    styleUrls: ['./upload-file.scss']
})

export class UploadFileComponent {
    constructor(private opt: UploadFileInterFace) {}
    public fileChangeEvent(fileInput: any) {
        const file = fileInput.target.files[0];
        // console.log(file, file.type);
        if (!file.type.match('image/*')) {
            // return false;
            // this.msg = 'Please select image';
            this.opt.massage = '';
            return false;
        }
        // this.msg = '';
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            this.opt.url = e.target.result;
        };
    }
}
