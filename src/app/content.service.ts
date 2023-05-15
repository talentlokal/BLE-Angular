import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public contentData$: Observable<any> = this.contentDataSubject.asObservable();

  constructor(private http: HttpClient) {
    //this.loadContentData();
  }

  public loadContentDataByName(name: string): void {
    this.http.get(`assets/content/` + name).subscribe(data => {
      this.contentDataSubject.next({ ...this.contentDataSubject.getValue(), ...data });
    });
  }

  private loadContentData(): void {
    const contentFiles = [
      'assets/content/core/menu.json',
      'assets/content/core/footer.json',
      // ...
    ];

    forkJoin(contentFiles.map(filePath => this.http.get(filePath))).subscribe(dataArray => {
      // Kombiniere alle geladenen JSON-Objekte in einem einzigen Objekt
      this.contentDataSubject.next(dataArray.reduce((acc, data) => ({ ...acc, ...data }), {}));
    });
  }

  public getContentById(id: string): Observable<any> {
    return this.contentData$.pipe(
      filter(contentData => contentData !== null),
      map(contentData => contentData[id])
    );
  }
}
