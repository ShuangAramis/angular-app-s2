import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [];
  public product: any;
  public displayThirdColumn = true;
  public team1 = 'France';
  public team2 = 'Argentina';
  public score1 = 0;
  public score2 = 0;
  public players1 = ['Loris', 'Mbappé'];
  public players2 = ['Messi', 'Di Maria'];

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }

  public fetchProducts() {
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((res: Product[]) => {
        this.products = res.slice(0, 6);
        this.product = this.products[0];
      });
  }

  public updateScore(team: string, score: number) {
    if (team === this.team1) {
      this.score1 += score;
    } else {
      this.score2 += score;
    }
  }

  public changePlayer(team: string, player: string) {
    if (team === this.team1) {
      const idx = this.players1.indexOf(player);
      this.players1.splice(idx, 1);
      this.players1.push('Griezmann');
    } else {
      const idx = this.players2.indexOf(player);
      this.players2.splice(idx, 1);
      this.players2.push('Aguero');
    }
  }
}
