import { Component , HostListener} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draganddrop';

  currentEvent:String = null
  toggleDropZone:Boolean = false
  
  dropZoneList = ['DropZone1','DropZone2','DropZone3','DropZone4']
  dropzoneCount = 4 as number

  @HostListener('document:mouseup', ['$event.target'])
  onMouseUp(event) {
    console.log('this.currentEvent ::>',this.currentEvent);
    console.log('this.toggleDropZone ::>',this.toggleDropZone);
    if(this.currentEvent!==null){
      this.toggleDropZone = !this.toggleDropZone
      this.currentEvent = null
    }
    return false;
  }

  constructor(){}
  dropToDropZone(event: CdkDragDrop<string[]>,elementId:string){
    console.log('DROP ZONE',event.container);
    this.appendElementToDroppedPosition(elementId)
  }

  appendElementToDroppedPosition(elementId:string){
    console.log('document ::>',document);
    if(this.currentEvent!==null){
      const targetElement = document.getElementById(elementId) as HTMLElement
      targetElement.setAttribute('class','dropped-zone ')
      targetElement.innerHTML = this.returnMockElement()
      console.log('targetElement ::>',targetElement);
    }
  }

  triggerDropZone(event){
    console.log('event ::>',event);
    this.currentEvent = event;
    this.toggleDropZone = !this.toggleDropZone
  }

  returnMockElement(){
    switch(this.currentEvent){
      case 'FORMGROUP': return this.mockFromGroupElement()
      case 'INPUT': return this.mockInputElement()
      case 'IMG': return this.mockImageElement()
      case 'TEXTAREA': return this.mockTextareaElement()
      case 'SELECT': return this.mockSelectElement()
    }
  }

  mockFromGroupElement(){
    this.dropzoneCount++
    this.dropZoneList.push(`DropZone${this.dropzoneCount}`)
    return `
      <h3> Example Form Group </h3>
      <div cdkDropList id="DropZone${this.dropzoneCount}" #DropZone${this.dropzoneCount}="cdkDropList" class="drop-zone" [cdkDropListConnectedTo]="[toolsbar]" (cdkDropListDropped)="dropToDropZone($event,'DropZone${this.dropzoneCount}')"></div>
      <input value="DAGN">
    `
  }

  mockInputElement(){
    return ` 
    <div class="input-preview">
      <label> INPUT BOX</label><br>
      <input type="text">
    </div>
    `
  }
  mockImageElement(){
    return ` 
    <div class="input-preview">
      <img src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg">
    </div>
    `
  }
  mockTextareaElement(){
    return ` 
    <div class="input-preview">
      <label>TEXT AREA</label><br>
      <textarea>
        MUDA! MUDA! MUDA! MUDA! MUDA! MUDA! MUDA! MUDA!
      </textarea>
    </div>
    `
  }
  mockSelectElement(){
    return ` 
    <div class="input-preview">
      <label>SELECT</label>
      <select>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    `
  }
}
