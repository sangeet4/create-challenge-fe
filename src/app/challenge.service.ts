import { QuestDetail } from './quest-detail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  public baseUrl = 'http://localhost:8080/challangeAPI/v1/challange';

  constructor(private http: HttpClient) { }

  createChallenge(quest: QuestDetail): Observable<any> {
    return this.http.post(this.baseUrl, quest);
  }

}
