import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'PhotoAlbumUI';
  albumList = ['Reise hinter den Mond', 'Herbst 2020', 'Wichtel und Wachtel'];

  albumCtrl: UntypedFormControl;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.albumCtrl = new UntypedFormControl('');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  gotoUpload(): void {
    this.router.navigateByUrl('/upload');
  }
}
