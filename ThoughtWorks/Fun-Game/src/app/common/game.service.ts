import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Input } from './data.interface.';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  hostURL = 'https://http-hunt.thoughtworks-labs.net';
  userId = 'WVhJ5anxZT';
  httpOptionsGET = {
    headers: new HttpHeaders({ 'userId': this.userId })
  }
  httpOptionsPOST = {
    headers: new HttpHeaders({
      'userId': this.userId,
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  // Stage 0/4
  getInstructions(): Observable<any> {
    return this.http.get(this.hostURL + '/challenge/', this.httpOptionsGET)
  }

  // Stage 1/4
  getAndPostTask_1(): any {
    return this.http.get<Input>(this.hostURL + '/challenge/input/', this.httpOptionsGET)
      .pipe(
        map(input => {
          this.http.post<any>(this.hostURL + '/challenge/output/', { "count": input.text.length }, this.httpOptionsPOST).subscribe
            ((output) => {
              return output;
            })
        }))
  }

  // Stage 2/4
  getAndPostTask_2(): any {
    return this.http.get<Input>(this.hostURL + '/challenge/input/', this.httpOptionsGET)
      .pipe(
        map(input => {
          this.http.post<any>(this.hostURL + '/challenge/output/', { "wordCount": input.text.split(' ').length }, this.httpOptionsPOST).subscribe
            ((output) => {
              return output;
            })
        }))
  }

  // Stage 3/4
  getAndPostTask_3(): any {
    return this.http.get<Input>(this.hostURL + '/challenge/input/', this.httpOptionsGET)
      .pipe(
        map(input => {
          this.http.post<any>(this.hostURL + '/challenge/output/', { "sentenceCount": input.text.replace(/([.?!])\s*(?=[A-Z])/g, "~0#").split("#").length }, this.httpOptionsPOST).subscribe
            ((output) => {
              return output;
            })
        }))
  }

  // Stage 4/4
  getAndPostTask_4(): any {
    const vowels = { "a": 0, "e": 0, "i": 0, "o": 0, "u": 0 }
    return this.http.get<Input>(this.hostURL + '/challenge/input/', this.httpOptionsGET)
      .pipe(
        map(input => {
          // input.text = "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set."
          const text = input.text.toLowerCase();
          for (var i = 0; i < text.length; i++) {
            switch (text[i]) {
              case 'a':
                ++vowels['a'];
                break;
              case 'e':
                ++vowels['e'];
                break;
              case 'i':
                ++vowels['i'];
                break;
              case 'o':
                ++vowels['o'];
                break;
              case 'u':
                ++vowels['u'];
                break;
              default:
                break;
            }
          }
          this.http.post<any>(this.hostURL + '/challenge/output/', {"a":vowels['a'], "e":vowels['e'], "i":vowels['i'], "o":vowels['o'], "u":vowels['u'], }, this.httpOptionsPOST).subscribe
            ((output) => {
              return output;
            })
        }))
  }
}
