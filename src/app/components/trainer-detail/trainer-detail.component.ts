import { Component, input } from "@angular/core";
import { Trainer } from "../services/trainer.service";

@Component({
    selector: 'app-trainer-detail',
    standalone: true,
    template: `
        <div class="app-trainer-detail">
            <div class="info">
                <h3>{{ trainer().name }}</h3>
                <p><strong>Email:</strong> {{ trainer().email }}</p>
                <small class="id-label">ID: {{ trainer().id }}</small>
            </div>
        </div>
    `,
    styleUrls: ['./trainer-detail.component.scss']
})
export class TrainerDetailComponent {
    trainer = input.required<Trainer>();
}
