import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angualar: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 25, 2020',
            },
            {
                id: 2,
                name: 'Angualar: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 299.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 31, 2020',
            }
        ]
    }

}