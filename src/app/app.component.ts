import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TicTacToeComponent],
  selector: 'ai-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-app';
}
