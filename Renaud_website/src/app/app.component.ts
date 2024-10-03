import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsiteHeaderComponent } from "./web_site_wide_component/website-header/website-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebsiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Renaud_website';
}
