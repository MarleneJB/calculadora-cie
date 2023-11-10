import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });
  it('Should render division in result div', () => {
    //Arrange
    component.operator1 = 3;
    component.operator2 = 3;
  
    //Act
    component.division();
    fixture.detectChanges();
  
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
  
    //Assert
    expect(el.innerText).toContain('1');
   });
   it('Should divide operator1 by operator2 when I click the division button', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));
  
    // Act
    divisionButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(2.5);
  });
  it('Should call division method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 2;
  
    // Act
    component.division();
    result = component.result;
  
    // Assert
    expect(result).toBe(1.5);
  });
  
  it('Should call power method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 0;
  
    // Act
    component.power();
    result = component.result;
  
    // Assert
    expect(result).toBe(1);
  });

  it('Should power operator1 to operator2 when I click the power button', () => {
    // Arrange
    component.operator1 = 2;
    component.operator2 = 2;
    let powerButton = fixture.debugElement.query(By.css('.power-button'));
  
    // Act
    powerButton.triggerEventHandler('click', null);
  
    // Assert
    expect(component.result).toBe(4);
  });

  it('Should render power in result div', () => {
    // Arrange
    component.operator1 = 2;
    component.operator2 = 3;
  
    // Act
    component.power();
    fixture.detectChanges();
  
    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;
  
    // Assert
    expect(el.innerText).toContain('8');
  });

  it('Should render sqrt in result div', () => {
    //Arrange
    component.operator1 = 16;
  
  
    //Act
    component.sqrt();
    fixture.detectChanges();
  
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;
  
    //Assert
    expect(el.innerText).toContain('4');
    });
   
    it('Should calculate sqrt root when I click the sqrt root button', () => {
      // Arrange
      component.operator1 = 25;
      const sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));
    
      // Act
      sqrtButton.triggerEventHandler('click', null);
    
      // Assert
      expect(component.result).toBe(5);
    });
  
    it('Should calculate sqrt root when I click the sqrt root button', () => {
      // Arrange
      component.operator1 = 4;
      const sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));
    
      // Act
      sqrtButton.triggerEventHandler('click', null);
    
      // Assert
      expect(component.result).toBe(2);
    });

    it('Should render substraction in result div', () => {
      //Arrange
      component.operator1 = 5;
      component.operator2 = 2.5;
  
      //Act
      component.substraction();
      fixture.detectChanges();
  
      let de = fixture.debugElement.query(By.css('.result'));
      let el : HTMLElement = de.nativeElement;
  
      //Assert
      expect(el.innerText).toContain('2.5');
    });
    it('Should substract operator1 and operator2 when i click the substraction button ', () => {
      // Arrange 
      component.operator1 = 5.0;
      component.operator2 = 2.5;
      let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));
  
      // Act
      substractionButton.triggerEventHandler('click', null);
  
      // Assert
      expect(component.result).toBe(2.5);
  
     });
     it('Should call substraction method', () => {
      // Arrange
      let result = 0;
      component.operator1 = 9;
      component.operator2 = 3;
  
      // Act
      component.substraction();
      result = component.result;
  
      // Assert
      expect(result).toBe(6);
   });
  
  });