import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FileDropDirective } from './file-drop.directive';
import { ImageUploadComponent } from './image-upload.component';
import { ImageService } from './image.service';

@NgModule({
    declarations: [ImageUploadComponent, FileDropDirective],
    imports: [CommonModule, HttpModule],
    exports: [ImageUploadComponent]
})

export class ImageUploadModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ImageUploadModule,
            providers: [ImageService]
        };
    }
}
