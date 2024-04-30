import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent  implements OnInit {

  playersData: Player[] = [
    {
      id: 1,
      nombreCompleto: 'Lionel Messi',
      nacionalidad: 'Argentino',
      altura: '1.70 m',
      peso: '72 kg',
      posicion: 'Delantero',
      dorsal: '10',
      fotoCabeza: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
      fotoCompleta: 'url/to/messi-full.jpg',
      fnacimiento: new Date('1987-06-24')
    },
    {
      id: 2,
      nombreCompleto: 'Cristiano Ronaldo',
      nacionalidad: 'Portugués',
      altura: '1.87 m',
      peso: '83 kg',
      posicion: 'Delantero',
      dorsal: '7',
      fotoCabeza: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
      fotoCompleta: 'url/to/ronaldo-full.jpg',
      fnacimiento: new Date('1985-02-05')
    },
    {
      id: 3,
      nombreCompleto: 'Neymar Jr',
      nacionalidad: 'Brasileño',
      altura: '1.75 m',
      peso: '68 kg',
      posicion: 'Delantero',
      dorsal: '10',
      fotoCabeza: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
      fotoCompleta: 'url/to/neymar-full.jpg',
      fnacimiento: new Date('1992-02-05')
    },
  ];

  players:Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {}


  searchByName(event:any) {
    const name = event.target.value.toLowerCase();

    // this.playersData.filter((d) => {
    //   if(d.nombreCompleto.toLowerCase().includes(name)){
    //     this.players.push(d);
    //   }
    // })

    this.playerService.getPlayersByName(name).subscribe(resultPlayers => this.players = resultPlayers);
  }
}
