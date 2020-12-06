import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star',
    template: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StartComponent implements OnChanges {
    
    @Input()
    rating: number = 0;

    startWidth: number;
    
    ngOnChanges(): void {
        this.startWidth = this.rating * 94 / 5;
    }
}