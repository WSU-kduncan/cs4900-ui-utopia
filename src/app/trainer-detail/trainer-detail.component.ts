import { Component, input } from "@angular/core";
import { Trainer } from "../services/trainer.service";

@Component({
    selector: 'app-trainer-detail',
    standalone: true,
    template: `
    <h3>{{ trainer().name }}</h3>
    <small>ID: {{ trainer().id }}</small>
    `,
    styles: [`
        :host { display: block; }
    `]
})
export class TrainerDetailComponent {
    trainer = input.required<Trainer>();
}
