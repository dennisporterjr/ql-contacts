import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { PhonePipe } from './../../pipes/phone.pipe';
import { TruncatePipe } from './../../pipes/truncate.pipe';

import { MockComponent } from 'ng2-mock-component';

import { IContact } from 'src/app/interfaces/shared.interfaces';
import { ITOKENS } from 'src/app/shared/injection.tokens';
import { FakeViewportService } from 'src/app/testing/viewport.service.fake';
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let viewport: FakeViewportService;
  let fixture: ComponentFixture<ContactsComponent>;
  const oneElement = { test: 'value' };
  const observers = [];
  const observableData: Observable<any[]> = new Observable((observer) => {
    observers.push(observer);
    return { unsubscribe() { } };
  });

  beforeEach(() => {
    viewport = new FakeViewportService();
    const vpfactory = () => viewport;

    TestBed.configureTestingModule({
      declarations: [
        ContactsComponent,
        // we're testing top-level functionality of the contacts component...
        // the components below will be tested in their own specs. (or they are
        // small third party components whose code doesn't need to be "double tested"
        // by us. So we mock them.)
        MockComponent({ selector: 'app-contact-details', inputs: [ 'contact' ] }),
        MockComponent({ selector: 'mat-icon' }),
        MockComponent({ selector: 'mat-spinner' }),
        MockComponent({ selector: 'mat-paginator', inputs: [ 'length', 'pageSize', 'pageIndex' ] }),
        PhonePipe,
        TruncatePipe,
      ],
      imports: [
        MatTableModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: ITOKENS.IViewportService,
          // Using 'useFactory' (as opposed to 'useValue') is the only way to
          // make sure the viewport our component uses is the EXACT same viewport
          // that's accessible to us outside of the component, and in our tests.
          // Consequently this is the only way to get the majority of our viewport
          // tests to pass because of the 'cloning issue'.
          // https://github.com/angular/angular/issues/10788
          useFactory: vpfactory.bind(this),
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    component.data = observableData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to the viewport and the contact list', () => {
    expect(component.subscriptions.length).toBe(2);
  });

  it('should react to changes in breakpoint',
    fakeAsync(() => {
      viewport.setFullscreen();
      tick();
      expect(component.displayedColumns.length).toBe(4);

      viewport.setMobile();
      tick();
      expect(component.displayedColumns.length).toBe(1);
    })
  );

  it('retrieve data, and populate the data source',
    fakeAsync(() => {
      expect(component.dataLength).toBeUndefined();
      expect(component.dataSource).toBeUndefined();

      observers.forEach(o => o.next([ oneElement ]));
      tick();

      expect(component.dataLength).toBe(1);
      expect(component.dataSource).toBeTruthy();
    })
  );
});
