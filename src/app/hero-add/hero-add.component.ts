import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { DXHeroService, HeroWithID } from './../core/service/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-add',
    templateUrl: 'hero-add.component.pug',
    styleUrls: ['hero-add.component.scss']
})

export class HeroAddComponent {
    dxHeroList: Array<HeroWithID> = [];
    uploadMessage: string;
    avatar: string;
    constructor(
        private dxHeroService: DXHeroService,
        private router: Router
    ) { }

    /**
     * image upload && preview(DataURL)
     */
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

    /**
     * Add Hero && Back Dashboard
     * @param name - hero name
     * @param desc - hero description
     */
    addHeroInfo(name, desc) {
        const heroInfo = {
            name: name.trim(),
            avatar: this.avatar,
            description: desc.trim()
        };
        // console.log(heroInfo);
        if (!heroInfo.name) {
            alert('name is null');
            return;
        }
        if (!heroInfo.avatar) {
            alert('select image');
            return;
        }
        if (!heroInfo.description) {
            alert('description is null');
            return;
        }
        this.dxHeroService
            .add(heroInfo)
            .then(id => {
                this.dxHeroList = [...this.dxHeroList, Object.assign({}, heroInfo, { id })];
            });

        this.router.navigate(['/dashboard']);
    }
}
