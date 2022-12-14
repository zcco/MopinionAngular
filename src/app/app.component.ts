import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Mopinion Angular Test';

  ngAfterViewInit(): void {
    const mopinionScriptTag = document.getElementById('mopinion-script');
    if (mopinionScriptTag) {
      const mopinionId = mopinionScriptTag.getAttribute('data-siteid');
      if (mopinionId) {
        this.loadPastease(mopinionId);
      }
    }
  }

  /**
   * Initialize Mopinion Pastease object
   * @param {string} id
   */
  loadPastease(id: string) {
    try {
      // @ts-ignore
      new Pastease.load(id);
    } catch (err) {
      console.log(err);
    }
  }
}

