import { Component, input } from "@angular/core";
import { Trainer } from "../services/trainer.service";

@Component({
    selector: 'app-trainer-detail',
    standalone: true,
    template: `
        <div>
            <h3>{{ trainer().name }}</h3>
            <p><strong>Email:</strong> {{ trainer().email }}</p>
            <small>ID: {{ trainer().id }}</small>
        </div>
    `,
    styles: [`
        div { padding: 12px; border-left: 4px solid #1976d2; margin: 8px 0; background: #f5f5f5; }    
    `]
})
export class TrainerDetailComponent {
    trainer = input.required<Trainer>();
}
