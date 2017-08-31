import { Component, Output } from '@angular/core';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'upload-img',
   templateUrl: './upload-file.component.pug',
   styleUrls: ['./upload-file.component.scss']
})

export class UploadImgComponent {
    private uploadMessage: string;
    private avatar: string;
    public fileChangeEvent(fileInput: any) {
        // console.log(fileInput);
        const file = fileInput.target.files[0];
        // console.log(file);
        if (!file.type.match('image/*')) {
            this.uploadMessage = 'Please select image';
            return false;
        }
        this.uploadMessage = '';
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            this.avatar = e.target.result;
        };
    }
}

